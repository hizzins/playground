import React from 'react';
import { List, Map } from 'immutable';

const TodoItem = ({ id, text, checked, onToggle, onRemove }) => (
  <li
    style={{
      textDecoration: checked ? 'line-through' : 'none'
    }}
    onClick={() => onToggle(id)}
    onDoubleClick={() => onRemove(id)}>
    {text}
  </li>
)

TodoItem.defaultProps = {
  todos: List([
    Map({
      id: 0,
      text: '걷기',
      checked: false
    }),
    Map({
      id: 1,
      text: '코딩하기',
      checked: true
    })
  ]),
  input: ''
};

export default TodoItem;
