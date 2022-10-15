import { Emoji } from './Emoji'
import {
  type OnInitSubscriber,
  type OnUpdateSubscriber,
  EmojiManager,
  EmojiManagerEvent,
} from './EmojiManager'
import {
  getAreasToAvoid,
  getWindowHeight,
  getWindowWidth,
  randomValueBetween,
} from './util'

class MoonEmoji extends Emoji {
  static EMOJI = '🌜'

  static MIN_Y = 10 // % from top
  static MAX_Y = 20 // % from top
  static MIN_X = 10 // % from top
  static MAX_X = 20 // % from top

  static init: OnInitSubscriber = () => {
    new MoonEmoji()
  }

  static update: OnUpdateSubscriber = () => {}

  constructor() {
    super()

    const areasToAvoid = getAreasToAvoid()

    let top,
      left,
      x = 0,
      y = 0,
      attempts = 0,
      isInAreaToAvoid = false
    const padding = 8
    do {
      top = randomValueBetween(MoonEmoji.MIN_Y, MoonEmoji.MAX_Y)
      left = randomValueBetween(MoonEmoji.MIN_X, MoonEmoji.MAX_X)

      x = (left / 100) * getWindowWidth()
      y = (top / 100) * getWindowHeight()

      isInAreaToAvoid = areasToAvoid.some((area) => {
        return (
          x > area.left - padding &&
          x < area.right + padding &&
          y > area.top - padding &&
          y < area.bottom + padding
        )
      })
      // In theory could be a forever loop, so we limit to 5 attempts
    } while (isInAreaToAvoid && attempts++ < 5)

    this.el.innerHTML = MoonEmoji.EMOJI
    this.el.style.top = top + '%'
    this.el.style.left = left + '%'
    this.el.style.fontSize = '24px'
    this.rootEl.appendChild(this.el)
  }
}

const emojiManager = EmojiManager.getInstance()

emojiManager.on(EmojiManagerEvent.Init, MoonEmoji.init)
emojiManager.on(EmojiManagerEvent.Update, MoonEmoji.update)
