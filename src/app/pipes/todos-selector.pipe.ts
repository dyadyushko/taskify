import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "../services/todos.service";

@Pipe({
  name: 'todosSelector',
  pure: false
})

export class TodosSelectorPipe implements PipeTransform {

  transform(todos: Todo[], type: string, sortBy: string): Todo[] {
    const unsorted = todos.filter(todo => todo.type === type);

    return unsorted.sort((todo1: Todo, todo2: Todo): number => {
      switch (sortBy) {
        case 'completed': {
          return todo1.completed < todo2.completed ? 1 : -1;
        }
        case 'name': {
          return todo1.title > todo2.title ? 1 : -1;
        }
        default:
          return 1
      }
    })
  }

}
