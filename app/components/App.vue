<template>
  <p>{{ greeting }}</p>
</template>

<script>
export default {
  data () {
    return {
      greeting: 'Hello, world!'
    }
  }
}
</script>

<style scoped>
p {
  color: blue
}
</style>
