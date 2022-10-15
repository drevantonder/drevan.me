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

/**
 * Recalculates emoji's position until they are outside marked areas or reaches max attempts.
 * @param {Function} getCoords - Function that returns emoji's coordinates.
 * @param {number} padding - Padding around marked areas.
 * @param {number} maxAttempts - Max attempts to recalculate coordinates.
 */
export const recalculateCoordsUntilSafe = (
  getCoords: () => { x: number; y: number },
  padding: number = 0,
  maxAttempts: number = 5
): void => {
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
    // In theory could be a forever loop, so we limit to 5 attempts
  } while (isInAreaToAvoid && attempts++ < maxAttempts)
}
