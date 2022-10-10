export type OnUpdateSubscriber = ({
  timeStamp,
  startTimeStamp,
  previousTimeStamp,
}: {
  timeStamp: DOMHighResTimeStamp
  startTimeStamp: DOMHighResTimeStamp
  previousTimeStamp: DOMHighResTimeStamp
}) => void

export type OnInitSubscriber = () => void

export enum EmojiManagerEvent {
  Update = 'update',
  Init = 'init',
}

interface EventSubscribersMap {
  [EmojiManagerEvent.Update]: OnUpdateSubscriber
  [EmojiManagerEvent.Init]: OnInitSubscriber
}

document.addEventListener

export class EmojiManager {
  private static instance: EmojiManager

  private subscribers = {} as {
    [K in EmojiManagerEvent]: EventSubscribersMap[K][]
  }

  private updateStartTimeStamp!: DOMHighResTimeStamp
  private updatePreviousTimeStamp: DOMHighResTimeStamp | undefined

  private constructor() {
    Object.values(EmojiManagerEvent).forEach((event) => {
      this.subscribers[event] = []
    })

    // Initialize when the DOM is ready
    if (
      document.readyState === 'complete' ||
      document.readyState === 'interactive'
    ) {
      setTimeout(this.init, 1)
    } else {
      document.addEventListener('DOMContentLoaded', this.init)
    }
  }

  private init = () => {
    this.subscribers[EmojiManagerEvent.Init].forEach((fn) => fn())

    window.requestAnimationFrame(this.update)
  }

  static getInstance(): EmojiManager {
    if (!EmojiManager.instance) {
      EmojiManager.instance = new EmojiManager()
    }

    return EmojiManager.instance
  }

  on<K extends keyof EventSubscribersMap>(
    event: K,
    fn: EventSubscribersMap[K]
  ) {
    this.subscribers[event].push(fn)
  }

  private update = (timestamp: DOMHighResTimeStamp) => {
    if (this.updateStartTimeStamp === undefined) {
      this.updateStartTimeStamp = timestamp
    }

    this.subscribers[EmojiManagerEvent.Update].forEach((fn) =>
      fn({
        timeStamp: timestamp,
        startTimeStamp: this.updateStartTimeStamp,
        previousTimeStamp: this.updatePreviousTimeStamp || 0,
      })
    )

    this.updatePreviousTimeStamp = timestamp
    window.requestAnimationFrame(this.update)
  }
}
