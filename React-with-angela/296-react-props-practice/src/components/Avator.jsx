export default function Avator(props) {
  return (
    <div>
      <img src={props.img} alt={props.name} className="circle-img" />
    </div>
  );
}
