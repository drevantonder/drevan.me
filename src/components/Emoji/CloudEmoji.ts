import { animate, linear } from 'popmotion'
import { Emoji } from './Emoji'
import {
  EmojiManager,
  EmojiManagerEvent,
  OnInitSubscriber,
  OnUpdateSubscriber,
} from './EmojiManager'
import {
  getRandomValueBetween,
  getResponsiveValue,
  getWindowHeight,
  getWindowWidth,
} from './util'

class CloudEmoji extends Emoji {
  static EMOJI = '☁️'

  static CHANCE_OF_CLOUD_PER_SECOND = 0.1

  static MIN_Y = 72 // % from top
  static MAX_Y = 78 // % from top

  static MIN_SIZE = 24 //font-size
  static MAX_SIZE = 80 //font-size

  static MIN_DURATION = 40 // * Screen width
  static MAX_DURATION = 60 // * Screen width
  static MIN_START_CLOUDS = 3
  static MAX_START_CLOUDS = 6

  static init: OnInitSubscriber = () => {
    // Hide on small screens
    if (
      !getResponsiveValue({
        base: 0,
        md: 1,
      })
    )
      return

    for (
      let i = 0;
      i <
      getRandomValueBetween(
        CloudEmoji.MIN_START_CLOUDS,
        CloudEmoji.MAX_START_CLOUDS
      );
      i++
    ) {
      new CloudEmoji(getRandomValueBetween(0, 1))
    }
  }

  static update: OnUpdateSubscriber = ({ timeStamp, previousTimeStamp }) => {
    // Hide on small screens
    if (
      !getResponsiveValue({
        base: 0,
        md: 1,
      })
    )
      return

    const createNewCloud =
      Math.random() <=
      (CloudEmoji.CHANCE_OF_CLOUD_PER_SECOND / 1000) *
        (timeStamp - previousTimeStamp)

    if (createNewCloud) new CloudEmoji()
  }

  constructor(elapsed: number = 0) {
    super()

    this.el.innerHTML = CloudEmoji.EMOJI
    this.el.style.top =
      getRandomValueBetween(CloudEmoji.MIN_Y, CloudEmoji.MAX_Y) + '%'
    this.el.style.left = '-10%'
    this.el.style.fontSize =
      getRandomValueBetween(CloudEmoji.MIN_SIZE, CloudEmoji.MAX_SIZE) *
        (getWindowHeight() / 1000) +
      'px'
    this.el.style.zIndex = '10'
    this.rootEl.appendChild(this.el)

    const duration =
      getWindowWidth() *
      getRandomValueBetween(CloudEmoji.MIN_DURATION, CloudEmoji.MAX_DURATION)

    animate({
      from: -10,
      to: 110,
      duration: duration,
      ease: linear,
      elapsed: duration * elapsed,
      onUpdate: (value) => {
        this.el.style.left = value + '%'
      },
      onComplete: () => {
        this.destroy()
      },
    })
  }
}

const emojiManager = EmojiManager.getInstance()

emojiManager.on(EmojiManagerEvent.Init, CloudEmoji.init)
emojiManager.on(EmojiManagerEvent.Update, CloudEmoji.update)
