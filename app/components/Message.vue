<template>
  <p @click="onClick">{{ message }}</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    message: String,
    link: String,
  },
})
export default class Message extends Vue {
  private link!: string

  private onClick() {
    this.$router.push(this.link)
  }
}
</script>

<style scoped lang="scss">
p {
  color: lightyellow;
  font-size: 4em;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
