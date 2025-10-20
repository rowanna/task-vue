import { type Task } from "./../api/mock/index";

export function calcProgress(tasks: Task[]) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  return {
    total,
    done,
    percent: total === 0 ? 0 : Math.round((done / total) * 100),
  };
}
