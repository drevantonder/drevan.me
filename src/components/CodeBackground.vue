<template>
  <div class="background">
    <div
      v-for="codeBlock in code"
      :key="codeBlock.id"
      class="background-code-block"
      :style="`${codeBlock.reverse ? 'right' : 'left' }: ${codeBlock.x}px; top: ${codeBlock.y}px; width: ${codeBlock.width}px; height: ${codeBlock.height}px`"
      :class="codeBlock.class"
    />
  </div>
</template>

<script>
const INDENT_AMOUNT = 12

const CODE_BLOCK_HEIGHT = 12
const CODE_BLOCK_PADDING_X = 8
const CODE_BLOCK_PADDING_Y = 6
const CODE_BLOCK_SIZE_Y = CODE_BLOCK_HEIGHT + CODE_BLOCK_PADDING_Y

const CLASSES = ['purple', 'blue', 'green', 'red', 'gray']

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomChoice(choices) {
  const index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

function generateCodeLine(lineNumber, indent = false, reverse) {
  const line = []
  const numberOfCodeBlocks = getRandomInt(1, 4)

  const y = lineNumber * CODE_BLOCK_SIZE_Y

  let currentX = 0

  for (let codeBlockIndex = 0; codeBlockIndex < numberOfCodeBlocks; codeBlockIndex++) {
    const x = (indent * INDENT_AMOUNT) + currentX
    const width = getRandomInt(30, 50)

    const codeBlock = {
      id: lineNumber + '-' + codeBlockIndex,
      x,
      y,
      width,
      height: CODE_BLOCK_HEIGHT,
      class: getRandomChoice(CLASSES),
      reverse
    }

    line.push(codeBlock)

    currentX += width + CODE_BLOCK_PADDING_X
  }
  return line
}

function generateCode(y, reverse = false) {
  const code = []
  let indent = 0
  let lineNumber = 0
  while (lineNumber * CODE_BLOCK_SIZE_Y < y - CODE_BLOCK_SIZE_Y) {
    if (lineNumber !== 0) {
      indent += getRandomChoice([-1, 0, 0, 1])

      if (indent < 0) {
        indent = 1
      }
    }

    code.push(...generateCodeLine(lineNumber, indent, reverse))

    lineNumber++
  }

  return code
}

export default {
  data() {
    return {
      code: []
    }
  },

  mounted() {
    this.generateCode()

    window.addEventListener('resize', function () {
      this.generateCode()
    }.bind(this))

    setInterval(function () {
      this.generateCode()
    }.bind(this), 20000)
  },

  methods: {
    generateCode() {
      this.code = generateCode(Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
    }
  }
}
</script>

<style>
body {
  background: #242E4F;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(3px);
  z-index: -10;
}

.background-code-block {
  position: absolute;

  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}

.green {
  background: #bee289;
}

.red {
  background: #f85671;
}

.purple {
  background: #7b55bd;
}

.gray {
  background: #bfc7d5;
}

.blue {
  background: #bfc7d5;
}
</style>
