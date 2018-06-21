<template>
  <div class="widget">
    <div class="items">
      <Item v-for="n in items" 
        :key="n" 
        :filters="filters" 
        :methods="methods" />
      <div class="item insert" v-on:click="items += 1">
        <font-awesome-icon :icon="['fal', 'plus-circle']" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Widget',

  components: {
    Item,
    FontAwesomeIcon
  },

  props: {
    initialItems: Number
  },

  data() {
    return {
      items: this.initialItems,
      filters: ['Black & White', 'Sobel'],
      methods: ['Main Thread', 'Web Worker', 'WebGL']
    }
  }
}
</script>

<style scoped>
.items {
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem 1rem 1rem 1rem;
}

.insert {
  /* height: 100%; */
  /* height: calc(100vh); */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  color: rgb(224, 224, 224);
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
}

.insert > svg {
  width: 50%;
  height: 50%;
  filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.8));  
}

</style>