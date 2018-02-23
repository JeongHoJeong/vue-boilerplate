<template>
  <Message :message="count.toString()" :link="'/'" />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState } from 'vuex'

import Message from './Message.vue'

@Component({
  components: {
    Message,
  },
  computed: {
    ...mapState([
      'count',
    ]),
  },
})
export default class Counter extends Vue {
  private mounted() {
    this.$store.commit('increment')
  }
}
</script>

<style scoped>
</style>
