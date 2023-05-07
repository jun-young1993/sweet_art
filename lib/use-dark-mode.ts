import useDarkModeImpl from '@fisch0920/use-dark-mode'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, { classNameDark: 'dark-mode' })
  return {
    isDarkMode: false,
    toggleDarkMode: darkMode.toggle
  }
  // return {
  //   isDarkMode: darkMode.value,
  //   toggleDarkMode: darkMode.toggle
  // }
}
