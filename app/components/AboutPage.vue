<template>
  <page :centered="true">
    <p>
      <b>vue-boilerplate</b> provides basic setup of:
    </p>
    <ul>
      <li
        v-for="link in links"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Page from './Page.vue'

const links = [
  {
    text: 'Vuex',
    link: 'https://github.com/vuejs/vuex/',
  },
  {
    text: 'vue-router',
    link: 'https://github.com/vuejs/vue-router',
  },
  {
    text: 'Jest',
    link: 'https://facebook.github.io/jest/',
  },
  {
    text: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    text: 'Electron',
    link: 'https://electronjs.org/',
  },
  {
    text: 'Sass',
    link: 'https://sass-lang.com/',
  },
]

@Component({
  components: {
    Page,
  },
})
export default class AboutPage extends Vue {
  get links() {
    return links
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

p {
  color: $theme_main;
  font-size: 1.4em;
}

ul {
  list-style: none;

  li {
    & + li {
      margin-top: 0.4em;
    }
  }
}

a {
  $base: #1034a6;
  $height: 1.2em;

  position: relative;

  display: inline-block;
  height: $height;

  color: $base;
  font-size: 1.1em;
  text-decoration: none;

  transition: color 0.1s;

  &:hover {
    color: lighten($base, 40%);

    &:before {
      transform: translateX(0);
    }
  }

  &:active {
    color: darken($base, 30%);

    &:before {
      transform: translateX(0.1em);
    }
  }

  &:hover,
  &:active,
  {
    &:before {
      opacity: 1;
    }
  }

  &:before {
    content: '→';

    position: absolute;

    left: -1em;
    top: 0;
    height: 100%;
    line-height: $height;

    opacity: 0;
    transform: translateX(-0.25em);

    transition: opacity 0.1s, transform 0.1s ease-in-out;
  }
}
</style>
