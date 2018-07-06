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
        <select name="filter" id="filter" v-model="selectedFilter">
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
      <button class="reset" v-on:click="resetImage">Reset</button>
      <button class="settings"><font-awesome-icon :icon="['fas', 'cog']" /></button>
    </div>

  </div>
</template>

<script>
import { eventHub } from '../eventHub'
import { Filter } from '../lib/cv'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Item',

  components: {
    FontAwesomeIcon
  },

  data() {
    return {
      selectedFilter: 'Grayscale',
      method: 'Main Thread',
      image: {
        src: 'image.jpg',
        width: null,
        height: null
      },
      filters: ['Grayscale', 'Threshold', 'Sobel']
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

    resetImage() {
      this.drawImage(this.image.src)
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

    execute(isRunning) {
      if(isRunning) {
        this.filterImage(this.selectedFilter)        
      }
    },

    filterImage(selectedFilter) {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      const imgData = ctx.getImageData(0, 0, this.image.width, this.image.height)

      // get the filter
      let output
      let filter = new Filter(canvas)
      switch (selectedFilter) {
        case 'Grayscale':
          output = filter.grayscale('luma')  
          break
        case 'Threshold':
          output = filter.threshold(200)
          break
        case 'Sobel':
          output = filter.sobel(125)  
          break
        default:
          output = imgData
          break
      }

      imgData.data.set(output, 0)
      ctx.putImageData(imgData, 0, 0)

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

button {
  margin-left: 0.25rem;
}

button.settings {
  width: 50px;
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
