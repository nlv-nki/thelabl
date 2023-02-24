import { useEffect, useState } from "react";
const UEffect = () => {
  const [todo, setTodo] = useState(null);
  const [userId, setUserId] = useState(1);
  const ChangeIdHandler = () => {
    setUserId(userId + 1);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
      });
  }, [userId]);

  return (
    <>
      <div className="UEffect">{todo && <h2>{todo.title}</h2>}</div>
      <button onClick={ChangeIdHandler}>change id</button>
    </>
  );
};

export default UEffect;
