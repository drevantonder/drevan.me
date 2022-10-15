export const getWindowWidth = () => window.innerWidth

export const getWindowHeight = () => window.innerHeight

export const getRandomValueBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export const getRandomChoice = (array: Array<any>) =>
  array[Math.floor(Math.random() * array.length)]

export const getAreasToAvoid = () =>
  [...document.querySelectorAll('[data-no-emoji]')].map((el) =>
    el.getBoundingClientRect()
  )

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export type ResponsiveValue = {
  base: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export const getResponsiveValue = (value: ResponsiveValue) => {
  const windowWidth = getWindowWidth()

  if (windowWidth <= 640) return value.base
  if (windowWidth <= 768) return value.sm || value.base
  if (windowWidth <= 1024) return value.md || value.sm || value.base
  if (windowWidth <= 1280) return value.lg || value.md || value.sm || value.base
  return value.xl || value.lg || value.md || value.sm || value.base
}

/**
 * Recalculates emoji's position until they are outside marked areas or reaches max attempts.
 * @param {Function} getCoords - Function that returns emoji's coordinates.
 * @param {number} padding - Padding around marked areas.
 * @param {number} maxAttempts - Max attempts to recalculate coordinates.
 */
export const recalculateCoordsUntilSafe = (
  getCoords: () => { x: number; y: number },
  padding: number = 0,
  maxAttempts: number = 10
): boolean => {
  const areasToAvoid = getAreasToAvoid()

  let x = 0,
    y = 0,
    attempts = 0,
    isInAreaToAvoid = false
  do {
    ;({ x, y } = getCoords())

    isInAreaToAvoid = areasToAvoid.some((area) => {
      return (
        x > area.left - padding &&
        x < area.right + padding &&
        y > area.top - padding &&
        y < area.bottom + padding
      )
    })
    // In theory could be a forever loop, so we limit to maxAttempts
  } while (isInAreaToAvoid && attempts++ < maxAttempts)

  return !isInAreaToAvoid
}
