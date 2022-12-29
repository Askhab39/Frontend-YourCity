import s from "../components/Footer.module.scss"
import tube from "../files/soc-icons.svg"
import vk from "../files/soc-icons (1).svg"
import tg from "../files/soc-icons (2).svg"

function Footer() {
    return (
        <div className={s.Footer}>
            <div className={s.IT}>IT CUBE</div>
            <div className={s.links}>
                <a href="https://www.youtube.com/@user-lv6cp2fo7c"><img src={tube} alt="YouTube" /></a>

                <a href="https://vk.com/technoparkru"><img src={vk} alt="VK" /></a>

                <a href="https://t.me/tkgro"><img src={tg} alt="TG" /></a>
            </div>
            <div className={s.khak}>KHACKATHON 2022</div>
        </div>
    );
}

export default Footer;