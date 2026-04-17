import Avator from "./Avator";
import Detail from "./Details";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avator img={props.img} />
        </div>
        <div className="bottom">
          <Detail title={props.phone} />
          <Detail title={props.email} />
        </div>
      </div>
    </div>
  );
}
