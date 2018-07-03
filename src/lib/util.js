// Create a web worker from a function
// Source: https://gist.github.com/SunboX/5849664
export function createWorker(callback) {
  let code = callback.toString()
  code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"))

  const blob = new Blob([code], {type: "application/javascript"})
  return new Worker(URL.createObjectURL(blob))
}