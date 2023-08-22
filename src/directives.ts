import type { Directive } from 'vue'

export const Capitalize: Directive = {
  mounted(el) {
    const text = el.innerText || el.textContent
    if (text) {
      el.innerText = text
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }
  }
}
