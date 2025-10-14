<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProjects, type Project } from '../api/mock'

// ProjectList
// - 프로젝트 목록을 렌더링하고 선택 이벤트를 발생시키는 단순 리스트 컴포넌트입니다.
// - README의 TODO 05와 연결됩니다.

export type ProjectListProps = {
  selectedId?: string
  // TODO 05: (TS) onSelect 의 시그니처를 더 안전하게 개선해보세요. string 보다 구체적인 타입 사용 고려
  onSelect?: (id: string) => void
}

const props = defineProps<ProjectListProps>()

const items = ref<Project[]>([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  items.value = await getProjects()
  loading.value = false
})

function select(id: string) {
  props.onSelect?.(id)
}
</script>

<template>
  <div class="project-list">
    <h2>Projects</h2>
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li
        v-for="p in items"
        :key="p.id"
        :aria-selected="p.id === props.selectedId"
        :class="{ selected: p.id === props.selectedId }"
      >
        <button type="button" @click="select(p.id)">{{ p.name }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.project-list ul {
  list-style: none;
  padding: 0;
}
.project-list li.selected > button {
  font-weight: bold;
}
</style>
