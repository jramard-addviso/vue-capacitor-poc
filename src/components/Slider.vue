<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { merge } from 'lodash'
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'

let swiperRef = ref(null)
let swiperInstance = ref(null)

const defaultOptions = {
  modules: [Navigation],
  centerInsufficientSlides: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1536: {
      slidesPerView: 4
    }
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
}

onMounted(() => {
  const options = merge(defaultOptions, props.options)
  swiperInstance.value = new Swiper(swiperRef.value, options)
})

onBeforeUnmount(() => {
  if (swiperInstance.value && !swiperInstance.value.destroyed) {
    swiperInstance.value.destroy(true, false)
  }
})

const props = defineProps({
  options: {
    type: Object,
    // Object or array defaults must be returned from
    // a factory function. The function receives the raw
    // props received by the component as the argument.
    default() {
      return {}
    }
  }
})
</script>

<template>
  <div class="swiper" ref="swiperRef">
    <div class="swiper-wrapper"><slot></slot></div>
    <div class="swiper-navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<style scoped>
.swiper-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.swiper-button-prev,
.swiper-button-next {
  margin-top: 3rem;
  width: 6rem;
  height: 6rem;
  background-image: url(@/assets/images/arrow.png);
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}

.swiper-button-prev {
  transform: rotate(-90deg);
}

.swiper-button-next {
  transform: rotate(90deg);
}

.swiper-button-disabled {
  opacity: 0.5;
  cursor: default;
}

.swiper-button-lock {
  display: none;
}
</style>
