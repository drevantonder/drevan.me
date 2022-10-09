import { animate, linear } from "popmotion"

const emoji = '☁️'

const CHANCE_OF_CLOUD_PER_SECOND = 0.4
const MIN_Y = 10 // % from top
const MAX_Y = 19 // % from top
const MIN_SIZE = 24 // font-size
const MAX_SIZE = 160 // font-size
const MIN_DURATION = 12 // * Screen width
const MAX_DURATION = 20 // * Screen width

const MIN_START_CLOUDS = 3
const MAX_START_CLOUDS = 6

const emojiLayerEl = document.querySelector('#emoji-layer')
const getWindowWidth = () => window.innerWidth
const getWindowHeight = () => window.innerHeight

function randomValueBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function createInitialClouds() {
  for (let i = 0; i < randomValueBetween(MIN_START_CLOUDS, MAX_START_CLOUDS); i++) {
    new Cloud(randomValueBetween(0, 1))
  }
}

class Cloud {
  private emojiEl: HTMLElement

  constructor(elapsed: number = 0) {
    this.emojiEl = document.createElement('div')
    this.emojiEl.innerHTML = emoji
    this.emojiEl.style.position = 'absolute'
    this.emojiEl.style.transform = 'translate(-50%, -50%)'
    this.emojiEl.style.top = randomValueBetween(MIN_Y, MAX_Y) + '%'
    this.emojiEl.style.left = '-10%'
    this.emojiEl.style.fontSize = randomValueBetween(MIN_SIZE, MAX_SIZE) * (getWindowHeight() / 1000)  + 'px'
    emojiLayerEl?.appendChild(this.emojiEl)

    const duration = getWindowWidth() * randomValueBetween(MIN_DURATION, MAX_DURATION)

    animate({
      from: -10,
      to: 110,
      duration: duration,
      ease: linear,
      elapsed: duration * elapsed,
      onUpdate: (value) => {
        this.emojiEl.style.left = value + '%'
      },
      onComplete: () => {
        this.destroy()
      }
    })
  }

  destroy() {
    this.emojiEl.remove()
  }
}

let start: DOMHighResTimeStamp
let previousTimeStamp: DOMHighResTimeStamp

function update(timestamp: DOMHighResTimeStamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const createNewCloud = Math.random() <= (CHANCE_OF_CLOUD_PER_SECOND / 1000) * (timestamp - previousTimeStamp)

  if (createNewCloud) new Cloud()

  previousTimeStamp = timestamp;
  window.requestAnimationFrame(update);
}

function main () {
  createInitialClouds()

  window.requestAnimationFrame(update);
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(main, 1);
} else {
  document.addEventListener("DOMContentLoaded", main);
}