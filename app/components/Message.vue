<template>
  <p @click="onClick">{{ message }}</p>
</template>

<script>
export default {
  props: {
    message: String,
    link: String
  },
  methods: {
    onClick: function () {
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped lang="sass">
p {
  color: lightyellow;
  font-size: 4em;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>