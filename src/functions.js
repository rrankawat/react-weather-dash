export const formatTime = str => {
  return new Date(str.replace(' ', 'T')).toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}
