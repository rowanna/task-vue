import { describe, expect, test } from 'vitest'
import { pluckTitles, type SimpleTask } from '../utils/collection'

// <test>

describe('utils/collection', () => {
  test('TODO 01: pluckTitles 구현', () => {
    const sts: SimpleTask[] = [
      {id: "1", title: "t1"},
      {id: "2", title: "t2"}
    ]
    expect(pluckTitles(sts)).toEqual(["t1", "t2"]);
  });

  test.todo('TODO 02: highPriorityFirst 구현')
  test.todo('TODO 03: groupByDone 구현')
})

// <구현 가이드>
// 관련 파일: src/utils/collection.ts

// ---

describe('utils/debounce', () => {
  test.todo('TODO 04: createDebounced 가 { call, cancel, flush } 형태로 동작해야 합니다')
})

// 관련 파일: src/utils/debounce.ts
