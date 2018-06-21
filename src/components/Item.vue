<template>
  <div class="item">
    
    <div class="image" v-on:click="$refs.upload.click()">
      <div class="overlay">
        <font-awesome-icon :icon="['fal', 'image']" />
      </div>
      <canvas ref="canvas"></canvas>
    </div>

    <div class="options">
      <input type="file" name="file" id="file" ref="upload" accept=".jpg, .jpeg, .png" v-on:change="updateImage">
      <div class="selects">
        <select name="filter" id="filter" v-model="filter">
          <option v-for="item in filters" :key="item">
            {{ item }}
          </option>
        </select>

        <select name="method" id="method" v-model="method">
          <option v-for="item in methods" :key="item">
            {{ item }}
            </option>
        </select>
      </div>

      <input type="range" name="threshold" id="threshold" min="0" max="255" v-model="threshold">
    </div>

  </div>
</template>

<script>
import { eventHub } from '../eventHub.js'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Item',

  components: {
    FontAwesomeIcon
  },

  props: {
    filters: {
      type: Array
    },

    methods: {
      type: Array
    }
  },

  data() {
    return {
      filter: 'Black & White',
      method: 'Main Thread',
      threshold: 127
    }
  },

  created() {
    eventHub.$on('running', this.execute)
  },

  mounted() {
    this.drawImage('../image.jpg')
  },

  methods: {
    updateImage(event) {
      const files = event.target.files
      if(files && files[0]) {
        const reader = new FileReader()
        reader.onload = (event) => {     
          this.drawImage(event.target.result)  
        }
        reader.readAsDataURL(files[0])
      }
    },

    drawImage(source) {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.src = source

      // Image onload Event
      img.onload = () => {     
        const width = img.width
        const height = img.height
        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)
      }
    },

    execute(isRunning) {
      if(isRunning) {
        // TODO: Call Processing Code here
      }
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
  flex-direction: column;
  align-items: center;
  padding: 0.25rem;
}

.options input {
  width: 98%;
  margin: 0.25rem 0 0 0;
}

.selects {
  width: 100%; 
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
  visibility: collapse;
}
</style>
