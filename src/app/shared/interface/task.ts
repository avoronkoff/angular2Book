export interface Task {
  id: string;
  name: string;
  deadline: Date;
  queued: boolean;
  pomodorosRequired: number;
}
