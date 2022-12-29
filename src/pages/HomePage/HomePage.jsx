import s from "../HomePage/HomePage.module.scss";
import imgBcg from "../../files/1.png";

function HomePage() {
  return (
    <div className={s.home}>
      <img className={s.imgBcg} src={imgBcg} alt="img logo" />
    </div>
  );
}

export default HomePage;
