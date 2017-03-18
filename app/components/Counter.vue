<template>
  <Message :message="count.toString()" :link="'/'" />
</template>

<script>
import { mapState } from 'vuex'
import Message from 'Message'

export default {
  mounted: function () {
    this.$store.commit('increment')
  },
  components: {
    Message,
  },
  computed: mapState([
    'count',
  ]),
}
</script>

<style scoped>
</style>