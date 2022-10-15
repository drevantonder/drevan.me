import { Emoji } from './Emoji'
import {
  type OnInitSubscriber,
  type OnUpdateSubscriber,
  EmojiManager,
  EmojiManagerEvent,
} from './EmojiManager'
import { getRandomValueBetween, getRandomChoice, getWindowWidth } from './util'

class TreeEmoji extends Emoji {
  static TREE_EMOJIS = [new Date().getMonth() === 11 ? '🎄' : '🌲', '🌳']

  static MIN_SPACE_BETWEEN_TREES = 1.2 // * font size
  static MAX_SPACE_BETWEEN_TREES = 4.5 // * font size

  static MIN_SIZE = 20 // font-size
  static MAX_SIZE = 40 // font-size

  static init: OnInitSubscriber = () => {
    const windowWidth = getWindowWidth()
    let x = 0
    while (x < windowWidth) {
      const spaceBetween = getRandomValueBetween(
        TreeEmoji.MIN_SPACE_BETWEEN_TREES,
        TreeEmoji.MAX_SPACE_BETWEEN_TREES
      )
      const size = getRandomValueBetween(TreeEmoji.MIN_SIZE, TreeEmoji.MAX_SIZE)
      x += spaceBetween * size
      new TreeEmoji(x, size)
    }
  }

  static update: OnUpdateSubscriber = () => {}

  constructor(x: number, size: number) {
    super()

    this.el.innerHTML = getRandomChoice(TreeEmoji.TREE_EMOJIS)
    this.el.style.bottom = '0'
    this.el.style.left = x + 'px'
    this.el.style.fontSize = size + 'px'
    this.rootEl.appendChild(this.el)
  }
}

const emojiManager = EmojiManager.getInstance()

emojiManager.on(EmojiManagerEvent.Init, TreeEmoji.init)
emojiManager.on(EmojiManagerEvent.Update, TreeEmoji.update)
