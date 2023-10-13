export default class List {
  constructor(title, desctiption, dueDate, priority) {
    this.title = title;
    this.desctiption = desctiption;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
  }

  getTaskStatus() {
    let now = new Date();
    let miliseconds_per_day = 1000 * 60 * 60 * 24;
    let now_miliseconds = Date.UTC(
      `${now.getFullYear()}`,
      `${now.getMonth()}`,
      `${now.getDate()}`
    );
    let due_miliseconds = Date.UTC(
      this.dueDate.getFullYear(),
      this.dueDate.getMonth(),
      this.dueDate.getDate()
    );
    let difference = (due_miliseconds - now_miliseconds) / miliseconds_per_day;
    if (difference > 0) {
      return `Comming in ${difference} days.`;
    } else if (difference == 0) {
      return "Today tasks.";
    }
    return `You are late ${difference} days.`;
  }
}
