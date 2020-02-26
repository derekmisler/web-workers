// Web Workers makes it possible to run a script operation in a background thread 
// separate from the main execution thread of a web application. The advantage of 
// this is that laborious processing can be performed in a separate thread, 
// allowing the main (usually the UI) thread to run without being blocked/slowed down.

export const sortingWorker = () => {
  self.addEventListener('message', e => {// eslint-disable-line no-restricted-globals
    if (!e) return
    let users = e.data

    for (let i = 0; i < users.length - 1; i++) {
      for (let j = i + 1; j < users.length; j++) {
        if (users[i].commentCount > users[j].commentCount) {
          const t = users[i]
          users[i] = users[j]
          users[j] = t
        }
      }
    }

    postMessage(users)
  })
}

