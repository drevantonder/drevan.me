import { animate, linear } from 'popmotion'
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
} from './util'

class StarEmoji extends Emoji {
  static EMOJI = '⭐️'

  static MIN_Y = 0.5 // % from top
  static MAX_Y = 70 // % from top
  static MIN_X = 0.5 // % from top
  static MAX_X = 95 // % from top

  static MIN_NUMBER_OF_STARS = 40
  static MAX_NUMBER_OF_STARS = 60

  static MIN_ANIMATION_DELAY = 200
  static MAX_ANIMATION_DELAY = 5000

  static MIN_REPEAT_DELAY = 1000
  static MAX_REPEAT_DELAY = 6000

  static MIN_DURATION = 300
  static MAX_DURATION = 500

  static MIN_SIZE = 4 // font-size
  static MAX_SIZE = 14 // font-size

  static init: OnInitSubscriber = () => {
    const numberOfStars = getRandomValueBetween(
      StarEmoji.MIN_NUMBER_OF_STARS,
      StarEmoji.MAX_NUMBER_OF_STARS
    )

    for (let i = 0; i < numberOfStars; i++) {
      new StarEmoji()
    }
  }

  static update: OnUpdateSubscriber = () => {}

  constructor() {
    super()

    let top, left
    const getCoords = () => {
      top = getRandomValueBetween(StarEmoji.MIN_Y, StarEmoji.MAX_Y)
      left = getRandomValueBetween(StarEmoji.MIN_X, StarEmoji.MAX_X)

      return {
        x: (left / 100) * getWindowWidth(),
        y: (top / 100) * getWindowHeight(),
      }
    }
    recalculateCoordsUntilSafe(getCoords, 8)

    this.el.innerHTML = StarEmoji.EMOJI
    this.el.style.top = top + '%'
    this.el.style.left = left + '%'
    this.el.style.fontSize =
      getRandomValueBetween(StarEmoji.MIN_SIZE, StarEmoji.MAX_SIZE) + 'px'
    this.rootEl.appendChild(this.el)

    animate({
      to: ['70 1 0', '100 1.4 45', '70 1 0'],
      repeat: Infinity,
      repeatType: 'reverse',
      duration: getRandomValueBetween(
        StarEmoji.MIN_DURATION,
        StarEmoji.MAX_DURATION
      ),
      repeatDelay: getRandomValueBetween(
        StarEmoji.MIN_REPEAT_DELAY,
        StarEmoji.MAX_REPEAT_DELAY
      ),
      elapsed: -getRandomValueBetween(
        StarEmoji.MIN_ANIMATION_DELAY,
        StarEmoji.MAX_ANIMATION_DELAY
      ),
      ease: linear,
      onUpdate: (value) => {
        const [opacity, scale, rotation] = value.split(' ')

        this.el.style.opacity = opacity + '%'
        this.el.style.transform = `scale(${scale}) rotate(${rotation}deg)`
      },
    })
  }
}

const emojiManager = EmojiManager.getInstance()

emojiManager.on(EmojiManagerEvent.Init, StarEmoji.init)
emojiManager.on(EmojiManagerEvent.Update, StarEmoji.update)
