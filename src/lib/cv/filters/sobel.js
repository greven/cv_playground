import { Filter } from '../../cv'

export default function (threshold) {
  let data = new Filter(this.canvas).grayscale()

  // Sobel filters
  const filterX = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]
  const filterY = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]]

  for(let y = 1; y < this.height-1; y++) {
    for(let x = 1; x < this.width-1; x++) {
      const gradX = convolute(data, filterX, this.width, x, y)
      const gradY = convolute(data, filterY, this.width, x, y)

      const shift = offset(x, y, this.width)
      var edgeVal = Math.sqrt(gradX * gradX + gradY * gradY)

      if(edgeVal >= threshold) {
        data[shift] = data[shift+1] = data[shift+2] = 255 
      } else {
        data[shift] = data[shift+1] = data[shift+2] = 0
      }
    }
  }
  return data
}

// Calculate array position shift since imgData is a 1 dimension pixel array
const offset = (x, y, width) => 4 * ((y * width) + x)

function pixelValue(data, width, x, y) {
  return data[offset(x, y, width)]
}

function convolute(data, filter, width, x, y) {
  const sum = pixelValue(data, width, x-1, y-1) * filter[0][0] + 
              pixelValue(data, width, x, y-1) * filter[0][1] +
              pixelValue(data, width, x+1, y-1) * filter[0][2] +

              pixelValue(data, width, x-1, y) * filter[1][0] +
              pixelValue(data, width, x, y) * filter[1][1] +
              pixelValue(data, width, x+1, y) * filter[1][2] +

              pixelValue(data, width, x-1, y+1) * filter[2][0] +
              pixelValue(data, width, x, y+1) * filter[2][1] +
              pixelValue(data, width, x+1, y+1) * filter[2][2]
  return sum
}
