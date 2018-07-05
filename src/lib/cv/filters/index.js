import grayscale from './grayscale'
import sobel from './sobel'

function Filter() { } 

Filter.prototype.grayscale = grayscale
Filter.prototype.sobel = sobel

export { Filter }