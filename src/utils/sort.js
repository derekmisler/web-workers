export const sortListDescending = (users) => {
  const copy = [...users]
  for (var i = 0; i < copy.length - 1; i++) {
    for (var j = i + 1; j < copy.length; j++) {
      if (copy[i].commentCount < copy[j].commentCount) {
        var t = copy[i]
        copy[i] = copy[j]
        copy[j] = t
      }
    }
  }
  return copy
}
