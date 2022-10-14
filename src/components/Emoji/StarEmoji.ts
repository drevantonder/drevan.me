import { animate, linear } from 'popmotion'
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
    const numberOfStars = randomValueBetween(
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

    const areasToAvoid = getAreasToAvoid()

    let top,
      left,
      x = 0,
      y = 0,
      attempts = 0,
      isInAreaToAvoid = false
    const padding = 8
    do {
      top = randomValueBetween(StarEmoji.MIN_Y, StarEmoji.MAX_Y)
      left = randomValueBetween(StarEmoji.MIN_X, StarEmoji.MAX_X)

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

    this.el.innerHTML = StarEmoji.EMOJI
    this.el.style.top = top + '%'
    this.el.style.left = left + '%'
    this.el.style.fontSize =
      randomValueBetween(StarEmoji.MIN_SIZE, StarEmoji.MAX_SIZE) + 'px'
    this.rootEl.appendChild(this.el)

    animate({
      to: ['70 1 0', '100 1.4 45', '70 1 0'],
      repeat: Infinity,
      repeatType: 'reverse',
      duration: randomValueBetween(
        StarEmoji.MIN_DURATION,
        StarEmoji.MAX_DURATION
      ),
      repeatDelay: randomValueBetween(
        StarEmoji.MIN_REPEAT_DELAY,
        StarEmoji.MAX_REPEAT_DELAY
      ),
      elapsed: -randomValueBetween(
        StarEmoji.MIN_ANIMATION_DELAY,
        StarEmoji.MAX_ANIMATION_DELAY
      ),
      ease: linear,
      onUpdate: (value) => {
        const [opacity, scale, rotation] = value.split(' ')

        this.el.style.opacity = opacity + '%'
        this.el.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`
      },
    })
  }
}

const emojiManager = EmojiManager.getInstance()

emojiManager.on(EmojiManagerEvent.Init, StarEmoji.init)
emojiManager.on(EmojiManagerEvent.Update, StarEmoji.update)
