<template>
  <Message :message="'HELLO, VUE!'" :link="'about'" />
</template>

<script>
import Message from 'Message'

export default {
  components: {
    Message
  }
}
</script>

<style scoped>
</style>
