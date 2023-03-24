export const textHandler = (text: string) => {
  if (!text) return ''
  const newText = `${text.slice(0, 60)}...`

  return text.length < 60 ? text : newText
}
