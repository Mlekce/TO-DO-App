

export default class Topic {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
    this.taskList = [];
  }

  showAllTasks() {
    if (this.taskList) {
      for (let task of this.taskList) {
        console.log(task);
      }
    }
  }

  addTask(taskName) {
    this.taskList.push(taskName);
    return true;
  }

  removeTask(taskName) {
    let index = this.taskList.indexOf(taskName);
    if (index) {
      return this.taskList.splice(index, 1);
    }
    return false;
  }
}
