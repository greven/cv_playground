<template>
  <div class="item">
    
    <div class="image" v-on:click="$refs.upload.click()">
      <div class="overlay">
        <font-awesome-icon :icon="['fal', 'image']" />
      </div>
      <canvas ref="canvas"></canvas>
    </div>

    <div class="options">
      <input type="file" name="file" id="file" ref="upload" accept=".jpg, .jpeg, .png" v-on:change="uploadImage">
      <div class="selects">
        <select name="filter" id="filter" v-model="filter">
          <option v-for="item in filters" :key="item">
            {{ item }}
          </option>
        </select>
        
        <!-- <select name="method" id="method" v-model="method">
          <option v-for="item in methods" :key="item">
            {{ item }}
            </option>
        </select> -->
      </div>
      <button class="settings"><font-awesome-icon :icon="['fas', 'cog']" /></button>
    </div>

  </div>
</template>

<script>
import { eventHub } from '../eventHub'
import { Filter } from '../lib/cv'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

const filtersMap = new Map([
  ['Black & White', new Filter().grayscale],
  ['Sobel', new Filter().sobel]
])

export default {
  name: 'Item',

  components: {
    FontAwesomeIcon
  },

  data() {
    return {
      filter: 'Grayscale',
      method: 'Main Thread',
      image: {
        src: 'image.jpg',
        width: null,
        height: null
      },
      filters: ['Grayscale', 'Sobel']
    }
  },

  created() {
    eventHub.$on('running', this.execute)
  },

  mounted() {
    this.drawImage(this.image.src)
  },

  methods: {
    drawImage(file) {
      const image = new Image()
      image.src = file
      
      image.onload = () => {     
        this.image.width = image.width
        this.image.height = image.height
        const ctx = this.setCanvas(image)
        ctx.drawImage(image, 0, 0, image.width, image.height)
      }
    },

    uploadImage(event) {
      const files = event.target.files
      if(files && files[0]) {
        const reader = new FileReader()
        reader.onload = (event) => {
          this.image.src = event.target.result    
          this.drawImage(this.image.src)  
        }
        reader.readAsDataURL(files[0])
      }
    },

    setCanvas(image) {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      canvas.width = image.width
      canvas.height = image.height
      return ctx
    },

    getPixels(canvas) {
      const ctx = canvas.getContext('2d')
      return ctx.getImageData(0, 0, this.image.width, this.image.height)
    },

    execute(isRunning) {
      if(isRunning) {
        this.filterImage(this.filter)        
      }
    },

    filterImage(filter) {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      const pixels = this.getPixels(canvas)

      // get the filter
      let filtered
      switch (filter) {
        case 'Grayscale':
          filtered = new Filter().grayscale(pixels, 'luma')  
          break;
        case 'Sobel':
          filtered = new Filter().sobel(pixels)  
          break;
        default:
          filtered = pixels
          break;
      }

      pixels.data.set(filtered, 0)
      ctx.putImageData(pixels, 0, 0)
      
      eventHub.$emit('running', false)
    }
  },
}
</script>

<style>
.item {
  background: rgb(12, 12, 12);
  border: 3px solid rgb(12, 12, 12);
  border-radius: 4px;
  box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
}

.options {
  display: flex;
  padding: 0.25rem;
}

button.settings {
  width: 50px;
  margin-left: 0.25rem;
}

.selects {
  /* width: 100%;  */
  display: flex;
  flex: 1;
}

.selects select {
  width: 100%;
}

.selects select:not(:first-child) { 
  margin-left: 0.5rem;
}

.image {
  position: relative;
}

.image:hover canvas {
  opacity: 0.3;
  transition: .5s ease;
  cursor: pointer;
}

.image > .overlay {
  opacity: 0;
  color: white;
  transition: .4s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.image:hover > .overlay {
  opacity: 1;
}

.image > .overlay svg {
  font-size: 5rem;
}

.image canvas, .image img {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

#file {
  display: none;
}
</style>
