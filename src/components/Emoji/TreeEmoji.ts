import { Emoji } from './Emoji'
import {
  type OnInitSubscriber,
  type OnUpdateSubscriber,
  EmojiManager,
  EmojiManagerEvent,
} from './EmojiManager'
import {
  getRandomValueBetween,
  getRandomChoice,
  getWindowWidth,
  getResponsiveValue,
} from './util'

class TreeEmoji extends Emoji {
  static TREE_EMOJIS = [new Date().getMonth() === 11 ? '🎄' : '🌲', '🌳']

  static MIN_SPACE_BETWEEN_TREES = 1.2 // * font size
  static MAX_SPACE_BETWEEN_TREES = 3.5 // * font size

  static MIN_SIZE = getResponsiveValue({
    // font-size
    base: 6,
    sm: 12,
  })
  static MAX_SIZE = getResponsiveValue({
    // font-size
    base: 24,
    sm: 40,
  })

  static init: OnInitSubscriber = () => {
    const windowWidth = getWindowWidth()
    let x = 0
    while (x < windowWidth) {
      const spaceBetween = getRandomValueBetween(
        TreeEmoji.MIN_SPACE_BETWEEN_TREES,
        TreeEmoji.MAX_SPACE_BETWEEN_TREES
      )
      const size = getRandomValueBetween(TreeEmoji.MIN_SIZE, TreeEmoji.MAX_SIZE)
      x += x !== 0 ? spaceBetween * size : (spaceBetween * size) / 2
      new TreeEmoji(x, size)
    }
  }

  static update: OnUpdateSubscriber = () => {}

  constructor(x: number, size: number) {
    super()

    this.el.innerHTML = getRandomChoice(TreeEmoji.TREE_EMOJIS)
    this.el.style.position = 'fixed'
    this.el.style.bottom = '0'
    this.el.style.left = x + 'px'
    this.el.style.fontSize = size + 'px'
    this.el.style.zIndex = '0'
  }
}

const emojiManager = EmojiManager.getInstance()

emojiManager.subscribe(EmojiManagerEvent.Init, TreeEmoji.init)
emojiManager.subscribe(EmojiManagerEvent.Update, TreeEmoji.update)
