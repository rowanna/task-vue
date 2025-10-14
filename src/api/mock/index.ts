// src/api/mock/index.ts
// 로컬 메모리 기반 Mock API

export type Priority = 'high' | 'medium' | 'low'
export type Task = {
  id: string
  projectId: string
  title: string
  done: boolean
  priority?: Priority
}
export type Project = { id: string; name: string }
export type ProjectSummary = { id: string; name: string; total: number; done: number }
export type User = { id: string; name: string; email: string }

const projects: Project[] = [
  { id: 'p1', name: 'Alpha' },
  { id: 'p2', name: 'Bravo' },
  { id: 'p3', name: 'Charlie' },
]

let tasks: Task[] = [
  { id: 't1', projectId: 'p1', title: 'Design wireframe', done: true, priority: 'high' },
  { id: 't2', projectId: 'p1', title: 'Setup CI', done: false, priority: 'medium' },
  { id: 't3', projectId: 'p2', title: 'Implement login', done: false, priority: 'high' },
  { id: 't4', projectId: 'p2', title: 'Write docs', done: false, priority: 'low' },
]

const users: User[] = [
  { id: 'u1', name: 'Alice', email: 'alice@example.com' },
  { id: 'u2', name: 'Bob', email: 'bob@example.com' },
  { id: 'u3', name: 'Carol', email: 'carol@example.com' },
  { id: 'u4', name: 'Dave', email: 'dave@example.com' },
]

function getEnvDelay() {
  const ms = Number(import.meta.env.VITE_MOCK_DELAY_MS || '')
  const min = Number(import.meta.env.VITE_MOCK_DELAY_MIN_MS || '')
  const max = Number(import.meta.env.VITE_MOCK_DELAY_MAX_MS || '')
  if (!Number.isNaN(ms) && ms > 0) return ms
  if (!Number.isNaN(min) && !Number.isNaN(max) && max >= min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  return 120
}

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}

export async function getProjects(): Promise<Project[]> {
  await sleep(getEnvDelay())
  return [...projects]
}

export async function getTasksByProject(projectId: string): Promise<Task[]> {
  await sleep(getEnvDelay())
  return tasks.filter((t) => t.projectId === projectId)
}

export async function createTask(projectId: string, title: string, priority?: Priority) {
  await sleep(getEnvDelay())
  const id = `t${Math.random().toString(36).slice(2, 8)}`
  const newTask: Task = { id, projectId, title, done: false, priority }
  tasks = [newTask, ...tasks]
  return newTask
}

export async function toggleTaskDone(taskId: string) {
  await sleep(getEnvDelay())
  tasks = tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t))
}

export async function searchUsers(q: string): Promise<User[]> {
  await sleep(getEnvDelay())
  const needle = q.trim().toLowerCase()
  if (!needle) return []
  return users.filter((u) => u.name.toLowerCase().includes(needle) || u.email.toLowerCase().includes(needle))
}

export async function getDashboard(): Promise<ProjectSummary[]> {
  const ps = await getProjects()
  // TODO 07: (중급) Promise.all 을 활용해서 각 프로젝트의 task 개수(total, done)를 계산하세요.
  // 힌트: getTasksByProject(p.id)를 병렬로 호출하고, map 으로 합치세요.
  const summaries: ProjectSummary[] = [] // <- 수정 필요
  return summaries
}
