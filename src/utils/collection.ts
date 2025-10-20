// utils/collection.ts
// 공용 타입
export type Priority = "high" | "medium" | "low";
export type SimpleTask = {
  id: string;
  title: string;
  done?: boolean;
  priority?: Priority;
};

// TODO 01: (기초) 모든 task 의 title 만 배열로 반환하세요. lodash 나 Array.prototype.map 중 아무거나 사용 가능.
export function pluckTitles(tasks: SimpleTask[]): string[] {
  // 예: [{title: 'a'}, {title: 'b'}] -> ['a','b']
  // 구현하세요.

  return tasks.map((task) => task.title) as string[]; // <- 수정 필요
}

// TODO 02: (기초) priority 가 'high' > 'medium' > 'low' 순으로 정렬되도록 구현하세요.
// priority 가 없으면 가장 낮은 우선순위로 간주합니다.
export function highPriorityFirst(tasks: SimpleTask[]): SimpleTask[] {
  const order = { high: 0, medium: 1, low: 2 } as const;
  // lodash.sortBy 또는 Array.prototype.sort 를 사용할 수 있습니다.
  // 구현하세요.
  return tasks;
}

// TODO 03: (기초) done 상태로 groupBy 하여 { true: SimpleTask[]; false: SimpleTask[] } 형태를 만드세요.
export function groupByDone(
  tasks: SimpleTask[]
): Record<"true" | "false", SimpleTask[]> {
  // 힌트: lodash.groupBy 사용 가능
  // 구현하세요.
  return { true: [], false: [] };
}
