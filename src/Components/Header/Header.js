import videoCam from "../../assets/cam.svg";
import phoneCall from "../../assets/call.svg";
import moreOptions from "../../assets/more-options.svg";
import { HeaderContainer, Select, Status } from "./styled.js";
import army from "../../assets/bts.jpg";
import namjoon from "../../assets/namjoon.jpg";
import jungkook from "../../assets/jungkook.jpg";
import taehyung from "../../assets/taehyung.jpg";
import jhope from "../../assets/jhope.jpg";
import yoongi from "../../assets/yoongi.jpg";
import jin from "../../assets/jin.jpg";
import jimin from "../../assets/jimin.jpg";

function Header(props) {
  const { senders, currSender, onChangeSender, typing } = props;

  const membersContacts = () => {
    if (currSender === "Kim NamJoon") {
      return `${namjoon}`;
    } else if (currSender === "Kim TaeHyung") {
      return `${taehyung}`;
    } else if (currSender === "Jeon JungKook") {
      return `${jungkook}`;
    } else if (currSender === "Kim SeokJin") {
      return `${jin}`;
    } else if (currSender === "Jung HoSeok") {
      return `${jhope}`;
    } else if (currSender === "Min YoonGi") {
      return `${yoongi}`;
    } else if (currSender === "Park JiMin") {
      return `${jimin}`;
    } else {
      return `${army}`;
    }
  };

  return (
    <HeaderContainer>
      <div className="sender-profile">
        <img src={membersContacts()} alt=""/>
        <div>
          <Select value={currSender} onChange={onChangeSender}>
            {senders.map((sender) => (
              <option key={sender} value={sender}>
                {sender}
              </option>
            ))}
          </Select>
          <Status>{typing}</Status>
        </div>
      </div>

      <div className="action-menu">
        <button>
          <img src={videoCam} alt="Video cam icon" />
        </button>
        <button>
          <img src={phoneCall} alt="Phone call icon" />
        </button>
        <button>
          <img src={moreOptions} alt="More options icon" />
        </button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
