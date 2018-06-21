<template>
  <div id="app">
    <Header />
    <Widget :initialItems="1" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Widget from './components/Widget.vue'
import fontawesome from '@fortawesome/fontawesome'
import faPlusCircle from '@fortawesome/fontawesome-pro-light/faPlusCircle'
import faImage from '@fortawesome/fontawesome-pro-light/faImage'
import faPlay from '@fortawesome/fontawesome-pro-solid/faPlay'
import faPause from '@fortawesome/fontawesome-pro-solid/faPause'

fontawesome.library.add(faPlusCircle, faImage, faPlay, faPause)

export default {
  name: 'app',

  components: {
    Header,
    Widget
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400');

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
background-color: #222222;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232f2f2f' fill-opacity='0.68'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

#app {
  font-family: 'Nunito', sans-serif;
}
</style>
