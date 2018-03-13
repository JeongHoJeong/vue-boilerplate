<template>
  <page :centered="true">
    <counter></counter>
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Counter from './Counter.vue'
import Page from './Page.vue'

@Component({
  components: {
    Counter,
    Page,
  },
})
export default class CounterPage extends Vue {
}
</script>
