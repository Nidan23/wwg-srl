export class TodoModel {
  constructor(
    public name?: string,
    public createdAt?: string,
    public completedAt?: string,
    public isFinished?: boolean,
    public id?: number
  ) {}
}
