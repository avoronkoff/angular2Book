export interface Task {
  id: number;
  name: string;
  deadline?: Date;
  queued: boolean;
  pomodorosRequired: number;
}
