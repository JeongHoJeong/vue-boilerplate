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

<style scoped lang="sass">
p {
  color: lightyellow;
  font-size: 4em;
  &:hover {
    text-decoration: underline;
  }
}
</style>