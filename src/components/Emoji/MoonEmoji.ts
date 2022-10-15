import { Emoji } from './Emoji'
import {
  type OnInitSubscriber,
  type OnUpdateSubscriber,
  EmojiManager,
  EmojiManagerEvent,
} from './EmojiManager'
import {
  getWindowHeight,
  getWindowWidth,
  recalculateCoordsUntilSafe,
  getRandomValueBetween,
  getResponsiveValue,
} from './util'

class MoonEmoji extends Emoji {
  static EMOJI = '🌜'

  static MIN_Y = 10 // % from top
  static MAX_Y = 20 // % from top
  static MIN_X = 10 // % from top
  static MAX_X = 20 // % from top

  static init: OnInitSubscriber = () => {
    // Hide on small screens
    if (
      !getResponsiveValue({
        sm: 0,
        md: 1,
      })
    )
      return

    new MoonEmoji()
  }

  static update: OnUpdateSubscriber = () => {}

  constructor() {
    super()

    let top, left
    const getCoords = () => {
      top = getRandomValueBetween(MoonEmoji.MIN_Y, MoonEmoji.MAX_Y)
      left = getRandomValueBetween(MoonEmoji.MIN_X, MoonEmoji.MAX_X)

      return {
        x: (left / 100) * getWindowWidth(),
        y: (top / 100) * getWindowHeight(),
      }
    }

    const canPlace = recalculateCoordsUntilSafe(getCoords, 8)

    if (!canPlace) return // No safe space

    this.el.innerHTML = MoonEmoji.EMOJI
    this.el.style.top = top + '%'
    this.el.style.left = left + '%'
    this.el.style.fontSize = '40px'
    this.rootEl.appendChild(this.el)
  }
}

const emojiManager = EmojiManager.getInstance()

emojiManager.on(EmojiManagerEvent.Init, MoonEmoji.init)
emojiManager.on(EmojiManagerEvent.Update, MoonEmoji.update)
