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
  getResponsiveValue,
} from './util'

class StarEmoji extends Emoji {
  static EMOJI = '⭐️'

  static MIN_Y = 0.5 // % from top
  static MAX_Y = getResponsiveValue({
    // % from top
    sm: 30,
    xl: 80,
  })
  static MIN_X = getResponsiveValue({
    // % from left
    sm: 5,
    xl: 0.5,
  })
  static MAX_X = getResponsiveValue({
    // % from left
    sm: 95,
    xl: 99.5,
  })

  static MIN_NUMBER = getResponsiveValue({
    sm: 5,
    xl: 40,
  })
  static MAX_NUMBER = getResponsiveValue({
    sm: 10,
    xl: 60,
  })

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
      StarEmoji.MIN_NUMBER,
      StarEmoji.MAX_NUMBER
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
    this.el.style.zIndex = '0'
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
