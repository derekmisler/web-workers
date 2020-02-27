// We could've tried to mimic 'concurrency' by using techniques 
// like setTimeout(), setInterval(), XMLHttpRequest, and event handlers. 
// All of these features run asynchronously, but non-blocking 
// doesn't necessarily mean concurrency. Asynchronous events are 
// processed after the current executing script has yielded.

export const sortingWorker = () => {
  self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
    if (!e) return
    let { data } = e

    for (let i = 0; i < data.length - 1; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i].price > data[j].price) {
          const t = data[i]
          data[i] = data[j]
          data[j] = t
        }
      }
    }
    postMessage(data)
  })
}

// Due to their multi-threaded behavior, web workers 
// only have access to a subset of JavaScript's features:
//   * The navigator object
//   * The location object (read-only)
//   * XMLHttpRequest
//   * setTimeout()/clearTimeout() and setInterval()/clearInterval()
//   * The Application Cache
//   * Importing external scripts using the importScripts() method
//   * Spawning other web workers

// Workers do NOT have access to:
//   * The DOM (it's not thread-safe)
//   * The window object
//   * The document object
//   * The parent object
