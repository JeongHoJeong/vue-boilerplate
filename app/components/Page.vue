<template>
  <div
    class="page"
    :class="{centered: centered}"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Page extends Vue {
  @Prop() private centered: boolean
}
</script>

<style lang="scss" scoped>
.page {
  position: fixed;

  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  &.centered {
    display: flex;

    justify-content: center;
    align-items: center;
  }
}
</style>
