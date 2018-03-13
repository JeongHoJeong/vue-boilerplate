<template>
  <div class="counter">
    <div class="number_wrapper">
      <div
        class="number_slide"
        :style="getStyleOfNumberSlide()"
      >
        <div
          v-for="oneOfCount in countList"
          :key="oneOfCount"
          class="number"
          :style="getStyleOfNumber(oneOfCount)"
        >
          <Message :message="oneOfCount.toString()" />
        </div>
      </div>
    </div>
    <div class="buttons">
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Component from 'vue-class-component'
import { Provide, Watch } from 'vue-property-decorator'
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
  @Provide() private prevCount: number
  @Provide() private countList: number[] = []
  private count: number

  private beforeMount() {
    this.onCountChanged(this.count)
  }

  private increase() {
    this.$store.commit('increment')
  }

  private decrease() {
    this.$store.commit('decrement')
  }

  @Watch('count')
  private onCountChanged(newCount: number) {
    if (this.prevCount !== newCount) {
      this.prevCount = newCount

      if (this.countList.indexOf(newCount) === -1) {
        this.countList.push(newCount)
        this.countList.sort((a, b) => a - b)
      }
    }
  }

  private getStyleOfNumberSlide() {
    return {
      transform: `translateY(${this.count * (-100)}%)`,
    }
  }

  private getStyleOfNumber(location: number) {
    return {
      transform: `translateY(${(location - 0.5) * 100}%)`,
    }
  }
}
</script>

<style scoped lang="scss">
.counter {
  display: flex;
}

.number_wrapper {
  position: relative;

  width: 12em;
  height: 6em;

  text-align: right;

  overflow: hidden;

  .number_slide {
    position: relative;

    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    transform: translateY(0%);

    transition: transform ease 0.2s;

    .number {
      display: flex;
      flex-direction: row-reverse;

      position: absolute;
      left: 0;
      top: 50%;

      width: 100%;
      height: 100%;

      transform: translateY(-50%);

      .message {
        align-self: center;
      }
    }
  }
}

.buttons {
  display: flex;
  flex-direction: column;

  margin-left: 0.5em;

  button {
    flex-grow: 1;

    color: lightgrey;
    font-size: 1.3em;

    background: none;
    border: none;
    outline: none;

    cursor: pointer;

    transition: color ease 0.2s;

    &:hover {
      color: grey;
    }

    &:active {
      color: black;
    }
  }
}
</style>
