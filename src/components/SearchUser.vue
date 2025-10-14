<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import { searchUsers, type User } from '../api/mock'
import { createDebounced } from '../utils/debounce'

const q = ref('')
const results = ref<User[]>([])
const loading = ref(false)

// TODO 08: (lodash debounce) 입력이 빠르게 바뀌어도 API 호출이 과도하게 발생하지 않도록 debounce 하세요.
// 요구사항:
//  - utils/createDebounced 를 사용해서 입력 변경시 300ms 이후에 searchUsers 호출
//  - 빈 문자열일 땐 검색하지 않고 결과를 비웁니다.
//  - cleanup 시 cancel 호출

const d = createDebounced(300)
// 타입 경고 방지용 참조 (시험자가 구현 시 제거 가능)
void searchUsers

watch(
  q,
  async (v) => {
    // 구현은 시험자가 작성: d.call(async () => { ... }) 형태로
    // 예시 흐름:
    // if (!v.trim()) { results.value = []; return }
    // loading.value = true; const users = await searchUsers(v); results.value = users; loading.value = false
  },
  { immediate: false }
)

onBeforeUnmount(() => {
  d.cancel()
})
</script>

<template>
  <div>
    <h2>User Search</h2>
    <input v-model="q" placeholder="Search user" />
    <span v-if="loading"> Loading...</span>
    <ul>
      <li v-for="u in results" :key="u.id">
        {{ u.name }} <small>({{ u.email }})</small>
      </li>
    </ul>
  </div>
</template>
