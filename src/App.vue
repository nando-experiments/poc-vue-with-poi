<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Hello from './components/Hello.vue'

  export default {
    name: 'app',
    components: {
      Hello
    },
    mounted () {
      this.changeLoading(false)
    },
    methods: {
      ...mapActions(['changeLoading'])
    }
  }
</script>

<style lang="sass">
html
  font-size: 14px

body
  background-color: #f9f9f9
  font-size: 1rem
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  margin: 0
  padding: 0
</style>
