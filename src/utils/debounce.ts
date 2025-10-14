// utils/debounce.ts
// TODO 04: createDebounced 가 { call, cancel, flush } 형태로 동작해야 합니다
// 요구사항:
//  - call(fn, ...args): 마지막 호출만 지정된 wait 이후 실행
//  - cancel(): 예약된 실행 취소
//  - flush(): 대기 중인 실행이 있으면 즉시 실행
// 구현은 비워두고 시그니처와 주석만 제공합니다.

export type Debounced = {
  // 지연 호출 실행. 반환값은 원본 함수의 반환을 Promise 로 감쌉니다.
  call: <T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>) => Promise<ReturnType<T>>
  cancel: () => void
  flush: () => void
}

export function createDebounced(wait = 300): Debounced {
  // 구현하세요.
  let timer: ReturnType<typeof setTimeout> | null = null
  // 힌트: 마지막 인자/함수 저장 후 타이머 만료 시 실행
  // 아래의 구현은 비워두되, 타입/미사용 경고를 피하기 위해 참조만 남깁니다.
  void timer
  void wait
  return {
    call: async (_fn: any, ..._args: any[]) => {
      // 구현하세요.
      void _fn
      void _args
      return undefined as any
    },
    cancel() {
      // 구현하세요.
    },
    flush() {
      // 구현하세요.
    },
  }
}
