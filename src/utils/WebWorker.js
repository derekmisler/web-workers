// Web Workers makes it possible to run a script operation in a background thread
// separate from the main execution thread of a web application. The advantage of
// this is that laborious processing can be performed in a separate thread,
// allowing the main (usually the UI) thread to run without being blocked/slowed down.

export default class WebWorker {
  constructor(worker) {
    const code = worker.toString()
    const blob = new Blob(['(' + code + ')()'])
    return new Worker(URL.createObjectURL(blob))
  }
}

// The point here is just to simply `toString` our worker code so it becomes something like a url
// Ex: `blob:http://localhost/c745ef73-ece9-46da-8f66-ebes574789b1`

// Blob URLs are unique and last for the lifetime of your application 
// (e.g. until the document is unloaded). If you're creating many Blob URLs, 
// it's a good idea to release references that are no longer needed. 
// You can explicitly release a Blob URL like this:
// `window.URL.revokeObjectURL(blobURL)`
