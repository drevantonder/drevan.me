import { animate, linear } from 'popmotion'
import { Emoji } from './Emoji'
import {
  EmojiManager,
  EmojiManagerEvent,
  OnInitSubscriber,
  OnUpdateSubscriber,
} from './EmojiManager'
import { randomValueBetween, getWindowHeight, getWindowWidth } from './util'

class CloudEmoji extends Emoji {
  static EMOJI = '☁️'

  static CHANCE_OF_CLOUD_PER_SECOND = 0.1
  static MIN_Y = 75 // % from top
  static MAX_Y = 80 // % from top
  static MIN_SIZE = 24 // font-size
  static MAX_SIZE = 80 // font-size
  static MIN_DURATION = 40 // * Screen width
  static MAX_DURATION = 60 // * Screen width
  static MIN_START_CLOUDS = 3
  static MAX_START_CLOUDS = 6

  static init: OnInitSubscriber = () => {
    for (
      let i = 0;
      i <
      randomValueBetween(
        CloudEmoji.MIN_START_CLOUDS,
        CloudEmoji.MAX_START_CLOUDS
      );
      i++
    ) {
      new CloudEmoji(randomValueBetween(0, 1))
    }
  }

  static update: OnUpdateSubscriber = ({ timeStamp, previousTimeStamp }) => {
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
      randomValueBetween(CloudEmoji.MIN_Y, CloudEmoji.MAX_Y) + '%'
    this.el.style.left = '-10%'
    this.el.style.fontSize =
      randomValueBetween(CloudEmoji.MIN_SIZE, CloudEmoji.MAX_SIZE) *
        (getWindowHeight() / 1000) +
      'px'
    this.el.classList.add('hidden')
    this.el.classList.add('sm:block')
    this.rootEl.appendChild(this.el)

    const duration =
      getWindowWidth() *
      randomValueBetween(CloudEmoji.MIN_DURATION, CloudEmoji.MAX_DURATION)

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
