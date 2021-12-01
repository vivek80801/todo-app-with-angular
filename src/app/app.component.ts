import { Component } from '@angular/core';

interface ITodo {
  id: number;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app-angular';
  total = 0;
  todos: ITodo[] = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 0,
    },
  ];

  increment(id: number) {
    this.todos = this.todos.map((todo) =>
      id === todo.id
        ? { id: todo.id, value: todo.value + 1 }
        : { id: todo.id, value: todo.value }
    );
  }

  decrement(id: number) {
    this.todos = this.todos.map((todo) =>
      id === todo.id
        ? { id: todo.id, value: todo.value - 1 }
        : { id: todo.id, value: todo.value }
    );
  }

  delete(id: number) {
    this.todos = this.todos.filter((todo) => id !== todo.id);
  }

  add() {
    this.todos.push({
      id: this.todos.length <= 0 ? 1 : this.todos[this.todos.length - 1].id + 1,
      value: 0,
    });
  }

  getTotal() {
    this.total = 0;
    this.todos.map((todo) => {
      this.total += todo.value;
    });
    return this.total;
  }
}
