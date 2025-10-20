<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import {
  getTasksByProject,
  toggleTaskDone,
  createTask,
  type Task,
} from "../api/mock";

const props = defineProps<{ projectId?: string }>();

const tasks = ref<Task[]>([]);
const title = ref("");

async function refresh() {
  if (!props.projectId) return;
  tasks.value = await getTasksByProject(props.projectId);
}

onMounted(refresh);

async function handleToggle(t: Task) {
  await toggleTaskDone(t.id);
  await refresh();
}

async function handleCreate() {
  const inputValue = title.value.trim();
  const isTextOverlap = tasks.value.filter(
    (task) => task.title === inputValue
  ).length;
  if (!props.projectId) return;
  // TODO 11: (로직개선) title 을 trim 하고, 빈 문자열이면 생성하지 않도록 하세요.
  // 추가 요구: 같은 제목의 task 가 이미 있는 경우 생성하지 않도록 방지하세요. (lodash 사용 가능)
  if (!inputValue) {
    return;
  }

  if (isTextOverlap) return;

  await createTask(props.projectId, title.value);
  title.value = "";
  await refresh();
}

// TODO 10: (리팩토링) 아래 progress 계산 로직을 컴포넌트 외부의 순수 함수로 추출하세요.
// 파일 예: src/utils/progress.ts -> export function calcProgress(tasks: Task[]) { ... }
// 그런 다음 이 컴포넌트에서는 그 함수를 import 해서 사용하세요.
const progress = computed(() => {
  const total = tasks.value.length;
  const done = tasks.value.filter((t) => t.done).length;
  return {
    total,
    done,
    percent: total === 0 ? 0 : Math.round((done / total) * 100),
  };
});
</script>

<template>
  <div class="taskboard">
    <h2>Task Board</h2>
    <div class="taskboard__create">
      <!-- TODO 13: (접근성) 입력 필드에 적절한 aria-* 속성을 추가하세요. -->
      <input
        aria-label="태스크를 입력해 주세요"
        v-model="title"
        placeholder="New task title"
      />
      <button aria-label="태스크 추가하기" type="button" @click="handleCreate">
        Add
      </button>
    </div>

    <div class="taskboard__progress">
      <strong>Progress:</strong>
      {{ progress.percent }}% ({{ progress.done }} / {{ progress.total }})
    </div>

    <ul class="taskboard__list">
      <li v-for="t in tasks" :key="t.id" :class="{ 'task-done': t.done }">
        <label>
          <input type="checkbox" :checked="t.done" @change="handleToggle(t)" />
          {{ t.title }}
        </label>
      </li>
    </ul>
  </div>
</template>
