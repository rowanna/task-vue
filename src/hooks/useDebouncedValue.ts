// hooks/useDebouncedValue.ts
import { ref, watch, onBeforeUnmount } from 'vue'
import { createDebounced } from '../utils/debounce'

// TODO 06: (중급) useDebouncedValue 훅을 완성하세요.
// 요구사항:
//  - 입력값 value 를 받아서, 지정된 wait 시간 이후에만 변경되는 debounced 값을 반환합니다.
//  - 내부적으로 utils/createDebounced 를 사용하세요.
//  - cleanup 시에는 debounce cancel 이 호출되어야 합니다.
//  - 타입은 제네릭<T> 으로 유지하세요.
export function useDebouncedValue<T>(value: T, wait = 300) {
  const debounced = ref<T>(value)

  // 구현하세요.
  // 힌트: createDebounced 로 디바운서 생성 후, watch 로 value 변화를 구독하세요.
  const d = createDebounced(wait)
  const stop = watch(
    () => value,
    (v) => {
      void v
      // 구현: d.call(() => { debounced.value = v })
    },
    { immediate: true }
  )

  onBeforeUnmount(() => {
    // cleanup: cancel 및 watch 해제
    d.cancel()
    stop()
  })

  return debounced
}
