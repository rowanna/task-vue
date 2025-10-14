<script setup lang="ts">
import { computed } from 'vue'
import { useProgressiveImage } from '../hooks/useProgressiveImage'

export type ProgressiveImageProps = {
  small: string
  large: string
  alt?: string
}

const props = defineProps<ProgressiveImageProps>()

const state = useProgressiveImage(props.small, props.large)

// TODO 14: (CSS/UX) small -> large 전환 시 부드러운 페이드 효과를 추가하세요.
//  - className 을 상태에 따라 다르게 주고, CSS transition 을 적용해보세요.
const cls = computed(() => ({
  'img--loading': state.loading.value,
  'img--large': state.quality === 'large',
}))
</script>

<template>
  <div class="progressive-image">
    <img :src="state.url" :alt="props.alt" width="240" height="160" :class="cls" />
    <div class="meta">
      quality: {{ state.quality }} <span v-if="state.loading.value">(loading...)</span>
    </div>
  </div>
</template>

<style scoped>
/* 시험자가 전환 효과를 구현할 수 있도록 기본 스타일만 제공 */
.progressive-image img {
  display: block;
}
.meta {
  font-size: 12px;
  opacity: 0.7;
}
</style>
