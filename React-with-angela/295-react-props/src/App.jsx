import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        email="b@beyonce.com"
        phone="+233502346978"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        email="jack@nowhere.com"
        phone="+23357654321"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        email="gmail@chucknorris.com"
        phone="+23353725741"
      />
    </div>
  );
}
