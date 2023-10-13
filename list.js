export default class List {
  constructor(title, desctiption, dueDate, priority) {
    this.title = title;
    this.desctiption = desctiption;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
  }

  getDays() {
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
    return (due_miliseconds - now_miliseconds) / miliseconds_per_day;
  }

  checkTaskStatus() {
    let checker = this.getDays();
    if (checker >= 0) {
      return true;
    }
    return false;
  }

  displayDays() {
    let checker = this.getDays();
    if (checker == 0) {
      return "Today";
    } else if (checker > 0) {
      return "Upcoming";
    }
    return "Failed";
  }
}
