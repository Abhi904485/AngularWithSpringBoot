export class TodoModel {
  constructor(
    public id: number,
    public user: string,
    public description: string,
    public  todoDone: boolean,
    public  targetDate: Date
  ) {
  }
}
