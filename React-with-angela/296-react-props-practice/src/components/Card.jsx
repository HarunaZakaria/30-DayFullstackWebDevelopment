import Avator from "./Avator";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avator img={props.img}/>
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}
