export function truncateMiddle(
  str = '',
  takeLength = 6,
  tailLength = takeLength,
  pad = '...'
): string {
  if (takeLength + tailLength >= str.length) return str
  return `${str.slice(0, takeLength)}${pad}${str.slice(-tailLength)}`
}

export function jumpAnchor(target: string) {
  const anchorElement = document.getElementById(`${target}`)

  if (anchorElement) {
    anchorElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    })
  }
}
