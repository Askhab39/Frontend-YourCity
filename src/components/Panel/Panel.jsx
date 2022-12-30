import s from "./Panel.module.scss"
import { Link } from "react-router-dom";
import tube from "../../files/soc-icons.svg"
import vk from "../../files/soc-icons (1).svg"
import tg from "../../files/soc-icons (2).svg"

function Panel() {
    return (
        <div className={s.Panel}>
            <div className={s.links}>
                <Link to="/" relative="path">
                    <button className={s.btnLink}>Главная</button>
                </Link>

                <Link to="/news">
                    <button className={s.btnLink}>Новости</button>
                </Link>

                <Link to="/chat">
                    <button className={s.btnLink}>Чат</button>
                </Link>

                <Link to="/events">
                    <button className={s.btnLink}>События</button>
                </Link>

                <Link to="/contacts">
                    <button className={s.btnLink}>Контакты</button>
                </Link>
            </div>

            <div className={s.linka}>
                <a href="https://www.youtube.com/@user-lv6cp2fo7c"><img src={tube} alt="YouTube" /></a>

                <a href="https://vk.com/technoparkru"><img src={vk} alt="VK" /></a>

                <a href="https://t.me/tkgro"><img src={tg} alt="TG" /></a>
            </div>
        </div>
    );
}

export default Panel;