<template>
  <Message :message="'HELLO, VUE!'" :link="'counter'" />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Message from './Message.vue'

@Component({
  components: {
    Message,
  },
})
export default class Main extends Vue {
}
</script>

<style scoped>
</style>
