<template>
  <p class="message">{{ message }}</p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Message extends Vue {
  @Prop() private message: string
}
</script>

<style scoped lang="scss">
@import '../variables.scss';

p {
  margin: 0;

  color: $theme_main;
  font-size: 4em;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
