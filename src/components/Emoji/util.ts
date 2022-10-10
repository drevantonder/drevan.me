export const getWindowWidth = () => window.innerWidth

export const getWindowHeight = () => window.innerHeight

export const randomValueBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}
