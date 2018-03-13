<template>
  <div class="navigator">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.link"
    >
      {{ link.text }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Navigator extends Vue {
  @Prop() private links: Array<{
    text: string,
    link: string,
  }>
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.navigator {
  position: fixed;
  left: 2vw;
  top: 2vw;

  a {
    display: inline-block;

    width: 4em;

    color: $theme_main;
    font-size: 1.5em;
    text-align: center;
    text-decoration: none;

    &.router-link-exact-active {
      font-weight: bolder;
    }
  }
}
</style>
