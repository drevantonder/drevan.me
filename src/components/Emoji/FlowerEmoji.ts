import { Emoji } from './Emoji'
import {
  type OnInitSubscriber,
  type OnUpdateSubscriber,
  EmojiManager,
  EmojiManagerEvent,
} from './EmojiManager'
import { getRandomValueBetween, getRandomChoice, getWindowWidth } from './util'

class FlowerEmoji extends Emoji {
  static EMOJIS = ['🌼', '🌷', '🌹', '🌻']

  static MIN_SPACE_BETWEEN = 8 // * font size
  static MAX_SPACE_BETWEEN = 20 // * font size

  static MIN_SIZE = 6 // font-size
  static MAX_SIZE = 12 // font-size

  static init: OnInitSubscriber = () => {
    const windowWidth = getWindowWidth()
    let x = 0
    while (x < windowWidth) {
      const spaceBetween = getRandomValueBetween(
        FlowerEmoji.MIN_SPACE_BETWEEN,
        FlowerEmoji.MAX_SPACE_BETWEEN
      )
      const size = getRandomValueBetween(
        FlowerEmoji.MIN_SIZE,
        FlowerEmoji.MAX_SIZE
      )
      x += spaceBetween * size
      new FlowerEmoji(x, size)
    }
  }

  static update: OnUpdateSubscriber = () => {}

  constructor(x: number, size: number) {
    super()

    this.el.innerHTML = getRandomChoice(FlowerEmoji.EMOJIS)
    this.el.style.bottom = '0'
    this.el.style.left = x + 'px'
    this.el.style.fontSize = size + 'px'
    this.el.style.zIndex = '10'
    this.rootEl.appendChild(this.el)
  }
}

const emojiManager = EmojiManager.getInstance()

emojiManager.on(EmojiManagerEvent.Init, FlowerEmoji.init)
emojiManager.on(EmojiManagerEvent.Update, FlowerEmoji.update)
