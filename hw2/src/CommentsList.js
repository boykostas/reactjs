import React, { useState } from 'react';
import './CommentsList.css'; // подключим стили

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  // Функция для удаления комментария по id
  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="comments-list">
      <h2>Список комментариев</h2>
      {comments.length > 0 ? (
        comments.map(comment => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <button onClick={() => handleDelete(comment.id)}>Удалить</button>
          </div>
        ))
      ) : (
        <p>Нет комментариев</p>
      )}
    </div>
  );
}

export default CommentsList;
