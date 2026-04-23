import {} from "react";

export default function ToDoItem(props) {
  function handleClick() {}
  return (
    <div onClick={()=>{
        props.onChecked(props.id)
    }} >
      <li>{props.text}</li>
    </div>
  );
}
