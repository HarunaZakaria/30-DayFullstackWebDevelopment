export default function Input(props) {
  return (
    <div>
      <form className="form">
        <input type={props.type} placeholder={props.placeholder} />
      </form>
    </div>
  );
}
