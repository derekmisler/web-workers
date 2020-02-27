// Yes, I know this is a terrible O(n^2), but that's the point, so shut up.

export const sortListDescending = data => {
  const copy = [...data]
  for (var i = 0; i < copy.length - 1; i++) {
    for (var j = i + 1; j < copy.length; j++) {
      if (copy[i].price < copy[j].price) {
        var t = copy[i]
        copy[i] = copy[j]
        copy[j] = t
      }
    }
  }
  return copy
}
