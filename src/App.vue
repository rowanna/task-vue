<script setup lang="ts">
import { ref } from 'vue'
import ProjectList from './components/ProjectList.vue'
import TaskBoard from './components/TaskBoard.vue'
import SearchUser from './components/SearchUser.vue'
import ProgressiveImage from './components/ProgressiveImage.vue'

const selectedProjectId = ref<string | undefined>(undefined)

const handleSelectProject = (projectId: string | undefined) => {
  selectedProjectId.value = projectId
}
</script>

<template>
  <div :style="{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '24px', padding: '24px' }">
    <aside>
      <ProjectList
          :selectedId="selectedProjectId"
          @select="handleSelectProject"
      />
      <div :style="{ marginTop: '24px' }">
        <SearchUser />
      </div>
    </aside>
    <main>
      <TaskBoard :projectId="selectedProjectId" />
      <div :style="{ marginTop: '24px' }">
        <h2>Preview Image (Progressive)</h2>
        <ProgressiveImage
            small="/vite.svg"
            large="/src/assets/vue.svg"
            alt="logo"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 필요한 경우 추가 스타일 */
</style>