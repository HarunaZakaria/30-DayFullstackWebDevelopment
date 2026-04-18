export default function Button(props) {
  return (
    <div>
      <form action="#">
        <button type="submit">{props.text}</button>
      </form>
    </div>
  );
}
