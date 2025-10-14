// hooks/useProgressiveImage.ts
import { ref, onBeforeUnmount } from 'vue'
import type { ProgressiveResult } from '../utils/image.ts'
import { image } from '../utils/image.ts'
// 타입 경고 방지용 참조 (시험자가 구현 시 제거 가능)
void image

// TODO 09: (중급) useProgressiveImage 훅을 완성하세요.
// 요구사항:
//  - smallUrl, largeUrl 을 받아 image 를 호출하고 최종 url 과 quality 를 반환합니다.
//  - 로딩 중 상태(loading)도 반환하세요.
//  - small 과 large 둘 중 먼저 로드되는 이미지가 반영되도록 해야 합니다.
//  - 컴포넌트가 unmount 되면 메모리 누수를 방지하세요 (최신 호출만 반영).
export function useProgressiveImage(smallUrl: string, largeUrl: string) {
  const state = ref<ProgressiveResult | null>(null)
  const loading = ref(false)

  // 구현하세요.
  // 힌트:
  //  - image(smallUrl, largeUrl) 호출 시 { small: Promise, large: Promise } 형태를 사용할 수 있습니다.
  //  - 최신 호출만 반영되도록 토큰(id)을 만들어 비교하세요.
  //  - 완료 후 loading 상태를 false 로 전환하세요.
  // 예시 아이디어(직접 구현 필요):
  // loading.value = true
  // const token = Math.random().toString(36).slice(2)
  // const { small, large } = image(smallUrl, largeUrl)
  // small.then((res) => { if (token === current) state.value = res })
  // large.then((res) => { if (token === current) state.value = res }).finally(() => { if (token === current) loading.value = false })

  onBeforeUnmount(() => {
    // 최신 호출만 반영: 토큰 무효화 등 정리 로직 수행
  })

  return { url: state.value?.url ?? '', quality: state.value?.quality ?? 'small', loading }
}
