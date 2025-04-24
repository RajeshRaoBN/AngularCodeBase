import { TestBed } from '@angular/core/testing';

import { HighlightCompletedTodoService } from './highlight.completed-todo.service';

describe('HighlightCompletedTodoService', () => {
  let service: HighlightCompletedTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightCompletedTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
