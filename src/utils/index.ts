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
  if (window.location.pathname !== '/') {
    window.location.href = `/#${target}`
    return
  }

  if (anchorElement) {
    anchorElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    })
  }
}

// utils/safeOpen.ts
export function safeOpenExternal(rawUrl: string, target: '_blank' | '_self' = '_blank') {
  try {
    const url = new URL(rawUrl, window.location.href)

    if (!['http:', 'https:'].includes(url.protocol)) {
      console.warn('Blocked non-http(s) URL:', rawUrl)
      return
    }

    const win = window.open(url.toString(), target, 'noopener,noreferrer')
    if (win) {
      // 双保险，防止某些旧浏览器忽略 noopener
      win.opener = null
    }
  } catch (e) {
    console.warn('Invalid URL, cannot open:', rawUrl, e)
  }
}
