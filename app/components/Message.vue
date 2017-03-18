<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  props: {
    message: String
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