<template>
  <div class="background">
    <div
      v-for="codeBlock in code"
      :key="codeBlock.id"
      class="background-code-block"
      :style="{ left: codeBlock.x + 'px', top: codeBlock.y + 'px', width: codeBlock.width + 'px', height: codeBlock.height + 'px', background: codeBlock.color }"
    />
  </div>
</template>

<script>
const INDENT_AMOUNT = 24

const CODE_BLOCK_HEIGHT = 24
const CODE_BLOCK_PADDING_X = 16
const CODE_BLOCK_PADDING_Y = 12
const CODE_BLOCK_SIZE_Y = CODE_BLOCK_HEIGHT + CODE_BLOCK_PADDING_Y

const COLORS = ['#7B55BD', '#85D7F8', '#BEE289', '#F85671', '#bfc7d5']

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomChoice(choices) {
  const index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

function generateCodeLine(lineNumber, indent = false) {
  const line = []
  const numberOfCodeBlocks = getRandomInt(1, 3)

  const y = lineNumber * CODE_BLOCK_SIZE_Y

  let currentX = 0

  for (let codeBlockIndex = 0; codeBlockIndex < numberOfCodeBlocks; codeBlockIndex++) {
    const x = (indent * INDENT_AMOUNT) + currentX
    const width = getRandomInt(70, 100)

    const codeBlock = {
      id: lineNumber + '-' + codeBlockIndex,
      x,
      y,
      width,
      height: CODE_BLOCK_HEIGHT,
      color: getRandomChoice(COLORS)
    }

    line.push(codeBlock)

    currentX += width + CODE_BLOCK_PADDING_X
  }
  return line
}

function generateCode(y) {
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

    code.push(...generateCodeLine(lineNumber, indent))

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
  },

  methods: {
    generateCode() {
      this.code = generateCode(document.documentElement.scrollHeight)
    }
  }
}
</script>

<style lang="scss">
.background {
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(4px);
}

.background-code-block {
  position: absolute;

  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}
</style>
