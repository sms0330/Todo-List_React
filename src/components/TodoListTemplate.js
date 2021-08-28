import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({ palette, form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="palette-wrapper">{palette}</div>
      <div className="title">오늘 할 일</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
