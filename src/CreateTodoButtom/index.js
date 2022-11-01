import React from "react";
import "./CreateTodoButtom.css";

const CreateTodoButtom = () => {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button className="CreateTodoButton" onClick={() => onClickButton("hola")}>
      +
    </button>
  );
};

export { CreateTodoButtom };
