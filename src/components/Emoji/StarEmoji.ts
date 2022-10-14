import { animate, linear } from 'popmotion'
import { Emoji } from './Emoji'
import {
  type OnInitSubscriber,
  type OnUpdateSubscriber,
  EmojiManager,
  EmojiManagerEvent,
} from './EmojiManager'
import { randomValueBetween } from './util'

class StarEmoji extends Emoji {
  static EMOJI = '⭐️'

  static MIN_Y = 2 // % from top
  static MAX_Y = 70 // % from top
  static MIN_X = 2 // % from top
  static MAX_X = 95 // % from top

  static MIN_NUMBER_OF_STARS = 40
  static MAX_NUMBER_OF_STARS = 70

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

    this.el.innerHTML = StarEmoji.EMOJI
    this.el.style.top =
      randomValueBetween(StarEmoji.MIN_Y, StarEmoji.MAX_Y) + '%'
    this.el.style.left =
      randomValueBetween(StarEmoji.MIN_X, StarEmoji.MAX_X) + '%'
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
