export default function (pixels, method = 'mean') {
  let data = pixels.data

  for(let i = 0; i < data.length; i+=4) {
    const r = data[i]
    const g = data[i+1]
    const b = data[i+2]
    
    let v = 0
    switch (method) {
      case 'mean':
        v = mean(r, g, b)
        break;
      case 'luminance':
        v = luminance(r, g, b)
        break;
      case 'luma':
        v = luma(r, g, b)
        break;
    }
    data[i] = data[i+1] = data[i+2] = v 
  }
  return pixels
}

// Methods

const mean = (r,g,b) => (1/3) * (r + g + b)

const luminance = (r,g,b) => 0.3*r + 0.59*g + 0.11*b

const luma = (r,g,b) => 0.2126*r + 0.7152*g + 0.0722*b
