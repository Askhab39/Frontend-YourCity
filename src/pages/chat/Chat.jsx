import s from "../chat/Chat.module.scss";
// import fon from '../../files/best-cashback.jpg'

function Chat() {
  return (
    <div className={s.chat}>
      <div className={s.block}>
        <div className={s.t}>
            <div className={s.tyt}>Очень скоро чат будет готов :)</div>
        </div>
        {/* <img className={s.img} src={fon} alt="fon" /> */}
        <div className={s.divMessage}></div>
        <div className={s.blockInp}>
          <input className={s.mess} type="text" placeholder="Сообщение" />

          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <label className={s.inpScrepka} for="file">
            <i class="fa fa-paperclip"></i>
          </label>
          <input id="file" name="file" type="file" multiple hidden />
        </div>
      </div>
    </div>
  );
}

export default Chat;
