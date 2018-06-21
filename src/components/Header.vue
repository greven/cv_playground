<template>
  <div class="header">
    <h1>Computer Vision Playground <span>JS</span></h1>
    <div class="run" title="Execute" v-on:click="run">
      <font-awesome-icon v-if="isRunning" :icon="['fas', 'pause']" />
      <font-awesome-icon v-else :icon="['fas', 'play']" />  
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { eventHub } from '../eventHub.js'

export default {
  name: 'Header',

  components: {
    FontAwesomeIcon
  },

  data() {
    return {
      isRunning: false
    }
  },

  methods: {
    run() {
      this.isRunning = !this.isRunning
      eventHub.$emit('running', this.isRunning)
    }
  },
}
</script>

<style scoped>
  h1 {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 1.5rem;
    font-weight: normal;
  }

  h1 span {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: rgb(226, 126, 146);
  }

  .header {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    color: rgb(241, 241, 241);
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.75);
    background: rgb(240,27,70);
    background: linear-gradient(90deg, rgba(240,27,70,1) 0%, rgba(251,183,63,1) 100%);
  }

  .header > * {
    margin: 0 0.25rem;
  }

  .header > *:first-child {
    margin-left: 1rem;
  }

  .run {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: 1rem;
    cursor: pointer;
  }
</style>