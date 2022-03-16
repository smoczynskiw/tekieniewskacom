export const breakpoint = `1024px`

export const calc = (unit, value) => `calc(var(--${unit}, 1${unit}) * ${value});`

export const setViewportUnits = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  const vw = window.innerWidth * 0.01
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}