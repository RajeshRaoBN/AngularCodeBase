import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {  
  http = inject(HttpClient);
  getTodosfromApi() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.get<Array<Todo>>(url);
  }
}
