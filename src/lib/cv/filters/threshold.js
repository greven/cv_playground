export default function (threshold) {
  let data = this.getImageData()

  for(let i = 0; i < data.length; i+=4) {
    const r = data[i]
    const g = data[i+1]
    const b = data[i+2]
    
    let v = (0.2126*r + 0.7152*g + 0.0722*b) >= threshold ? 255: 0
    data[i] = data[i+1] = data[i+2] = v 
  }
  return data
}
