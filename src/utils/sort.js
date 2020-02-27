// Yes, I know this is a terrible O(n^2), but that's the point, so shut up.

// JavaScript is a single-threaded environment, meaning multiple scripts cannot run at the same time. 
// For example, a site that needs to handle UI events, process large amounts of API data, and manipulate the DOM. 
// All of that can't be simultaneous due to limitations in browsers' JavaScript runtime. 
// Script execution happens within a single thread.

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
