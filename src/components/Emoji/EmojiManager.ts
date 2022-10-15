import { debounce, getWindowWidth } from './util'

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
export type OnDestroySubscriber = () => void

export enum EmojiManagerEvent {
  Update = 'update',
  Init = 'init',
  Destroy = 'destroy',
}

interface EventSubscribersMap {
  [EmojiManagerEvent.Update]: OnUpdateSubscriber
  [EmojiManagerEvent.Init]: OnInitSubscriber
  [EmojiManagerEvent.Destroy]: OnDestroySubscriber
}

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

    let oldWindowWidth = getWindowWidth()
    window.addEventListener(
      'resize',
      debounce(() => {
        const newWindowWidth = getWindowWidth()
        if (oldWindowWidth === newWindowWidth) return

        oldWindowWidth = newWindowWidth

        this.reset()
      }, 100)
    )
  }

  private init = () => {
    this.subscribers[EmojiManagerEvent.Init].slice().forEach((fn) => fn())

    window.requestAnimationFrame(this.update)
  }

  static getInstance(): EmojiManager {
    if (!EmojiManager.instance) {
      EmojiManager.instance = new EmojiManager()
    }

    return EmojiManager.instance
  }

  subscribe<K extends keyof EventSubscribersMap>(
    event: K,
    fn: EventSubscribersMap[K]
  ) {
    this.subscribers[event].push(fn)
  }

  unsubscribe<K extends keyof EventSubscribersMap>(
    event: K,
    fn: EventSubscribersMap[K]
  ) {
    const index = this.subscribers[event].indexOf(fn)

    if (index > -1) {
      this.subscribers[event].splice(index, 1)
    } else {
      throw new Error('Cannot unsubscribe from event that is not subscribed to')
    }
  }

  private update = (timestamp: DOMHighResTimeStamp) => {
    if (this.updateStartTimeStamp === undefined) {
      this.updateStartTimeStamp = timestamp
    }

    this.subscribers[EmojiManagerEvent.Update].slice().forEach((fn) =>
      fn({
        timeStamp: timestamp,
        startTimeStamp: this.updateStartTimeStamp,
        previousTimeStamp: this.updatePreviousTimeStamp || 0,
      })
    )

    this.updatePreviousTimeStamp = timestamp
    window.requestAnimationFrame(this.update)
  }

  private reset() {
    this.subscribers[EmojiManagerEvent.Destroy].slice().forEach((fn) => fn())

    this.subscribers[EmojiManagerEvent.Init].slice().forEach((fn) => fn())
  }
}
