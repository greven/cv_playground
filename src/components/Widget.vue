<template>
  <div class="widget">
    <div class="items">
      <Item v-for="n in items" 
        :key="n" />
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
      items: this.initialItems
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

@media screen and (max-device-width: 800px) {
  .items { 
    grid-template: auto / repeat(2, 1fr);
  }
}

@media only screen and (max-device-width: 600px) {
  .items { 
    grid-template: auto / 1fr;
  }
}

.insert {
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(224, 224, 224);
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
}

.insert > svg {
  width: 35%;
  height: 35%;
  filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.1));  
}

</style>