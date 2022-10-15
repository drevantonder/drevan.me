import { EmojiManager, EmojiManagerEvent } from './EmojiManager'

export class Emoji {
  protected el: HTMLElement
  protected rootEl: HTMLElement

  private destroyListener: () => void

  constructor() {
    this.el = document.createElement('div')
    this.el.style.position = 'absolute'
    this.el.style.lineHeight = '1em'
    this.el.ariaHidden = 'true'

    const rootEl = document.querySelector<HTMLElement>('#emoji-layer')

    if (!rootEl) {
      this.destroy()
      throw new Error('Could not find #emoji-layer element')
    }

    this.rootEl = rootEl
    this.rootEl.appendChild(this.el)

    this.destroyListener = () => this.destroy()

    EmojiManager.getInstance().subscribe(
      EmojiManagerEvent.Destroy,
      this.destroyListener
    )
  }

  protected destroy() {
    EmojiManager.getInstance().unsubscribe(
      EmojiManagerEvent.Destroy,
      this.destroyListener
    )

    this.el.remove()
  }
}
