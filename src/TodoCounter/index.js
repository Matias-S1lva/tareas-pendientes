import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({ completed, total }) => {
  return (
    <h2 className="titulo">
      Has completado {completed} de {total} Todos
    </h2>
  );
};

export { TodoCounter };
