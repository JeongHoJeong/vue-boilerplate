<template>
  <div>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <Navigator :links="links"></Navigator>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Message from './Message.vue'
import Navigator from './Navigator.vue'

import { Route } from 'vue-router/types/router'

import { Provide, Watch } from 'vue-property-decorator'

const links = [
  {
    text: 'Counter',
    link: '/',
  },
  {
    text: 'About',
    link: '/about',
  },
]

function getIndexOfRoute(route: Route) {
  return links.findIndex((link) => route.path === link.link)
}

@Component({
  components: {
    Message,
    Navigator,
  },
})
export default class Main extends Vue {
  @Provide() private transitionName: string = 'fade'

  get links() {
    return links
  }

  @Watch('$route')
  private onRouteChanged(to: Route, from: Route) {
    const toIdx = getIndexOfRoute(to)
    const fromIdx = getIndexOfRoute(from)

    if (fromIdx < toIdx) {
      this.transitionName = 'slide-left'
    } else {
      this.transitionName = 'slide-right'
    }
  }
}
</script>

<style scoped lang="scss">
$slide_amount: 50%;
$transition_duration: .5s;
$transition_curve: ease;

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
{
  transition:
    transform $transition_duration $transition_curve,
    opacity $transition_duration $transition_curve;
}

.slide-left-enter,
.slide-right-leave-to,
{
  transform: translateX($slide_amount);
}

.slide-left-enter-to,
.slide-left-leave,
.slide-right-enter-to,
.slide-right-leave,
{
  transform: translateX(0);
}

.slide-left-enter-to,
.slide-right-enter-to,
{
  opacity: 1;
}

.slide-left-enter,
.slide-left-leave-to,
.slide-right-enter,
.slide-right-leave-to,
{
  opacity: 0,
}

.slide-left-leave-to,
.slide-right-enter,
{
  transform: translateX(-$slide_amount);
}
</style>
