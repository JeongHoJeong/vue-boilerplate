<template>
  <p>{{ greeting }}</p>
</template>

<script>
export default {
  data () {
    return {
      greeting: 'HELLO, VUE!'
    }
  }
}
</script>

<style scoped>
p {
  color: lightyellow;
  font-size: 4em;
}
</style>
