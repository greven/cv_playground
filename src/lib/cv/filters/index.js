import grayscale from './grayscale'
import threshold from './threshold'
import sobel from './sobel'

function Filter(canvas) {
  this.canvas = canvas
  this.context = canvas.getContext('2d')
  this.width = canvas.width
  this.height = canvas.height
} 

Filter.prototype.getImageData = function getImageData() {
  return this.context
    .getImageData(0, 0, this.canvas.width, this.canvas.height)
    .data
}

Filter.prototype.grayscale = grayscale
Filter.prototype.threshold = threshold
Filter.prototype.sobel = sobel

export { Filter }