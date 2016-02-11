export const $qsa = (browser, selector) => {
  return Array.from(browser.document.querySelectorAll(selector))
}

export const nthElement = (browser, nth, className) => {
  return $qsa(browser, `.${className}`)[nth - 1]
}

export const firstTextInput = (browser) => {
  return $qsa(browser, 'input').filter(i => i.type === 'text')[0]
}

export const elementsWithContent = (browser, selector, text) => {
  return $qsa(browser, selector).filter(el => el.textContent === text)
}