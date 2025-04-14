import variables from '../styles/variables'

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const mobileBreakpoint = () =>
  window.innerWidth <= parseInt(variables.breakpoints.mobile.replace('px', ''))

export const getBreakpoint = (width: number) => {
  if (width <= parseInt(variables.breakpoints.mobile.replace('px', '')))
    return 'mobile'
  return 'desktop'
}
