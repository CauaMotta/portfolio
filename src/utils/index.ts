import variables from '../styles/variables'

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const mobileBreakpoint = () =>
  window.innerWidth <= parseInt(variables.breakpoints.mobile.replace('px', ''))

export const tabletBreakpoint = () =>
  window.innerWidth <= parseInt(variables.breakpoints.tablet.replace('px', ''))

export const getBreakpoint = (width: number) => {
  if (width <= parseInt(variables.breakpoints.mobile.replace('px', '')))
    return 'mobile'
  if (width <= parseInt(variables.breakpoints.tablet.replace('px', '')))
    return 'tablet'
  if (width <= parseInt(variables.breakpoints.desktop_sm.replace('px', '')))
    return 'desktop-sm'
  return 'desktop'
}

export enum ProjectType {
  BACKEND = 'B',
  FRONTEND = 'F'
}
