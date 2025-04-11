import variables from '../styles/variables'

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const mobileBreakpoint =
  window.innerWidth <= parseInt(variables.breakpoints.mobile.replace('px', ''))
