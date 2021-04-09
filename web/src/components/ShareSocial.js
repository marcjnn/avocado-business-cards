// Style & resources
import "../style/layout/_share.scss";

// NPM Packages:
// share to social media
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

function ShareSocial(props) {
  console.log(props.apiResponse.cardURL);
  return (
    <div className="social-icons">
      <p className="social-icons--title">Comparte tu nueva tarjeta:</p>
      <EmailShareButton
        url={props.apiResponse.cardURL}
        children={
          <EmailIcon className="social-icons--icon" size={32} round={true} />
        }
        subject="Mi nueva tarjeta de visita"
        body="Te mando mi nueva tarjeta hecha por las Awesome Reacters. (Si quieres una igual, entra en https://beta.adalab.es/project-promo-l-module-3-team-7/#/)"
        separator=" => "
      />
      <FacebookShareButton
        url={props.apiResponse.cardURL}
        children={
          <FacebookIcon className="social-icons--icon" size={32} round={true} />
        }
        quote="Mi nueva tarjeta de visita"
      />
      <TwitterShareButton
        url={props.apiResponse.cardURL}
        children={
          <TwitterIcon className="social-icons--icon" size={32} round={true} />
        }
        title="Mi nueva tarjeta de visita"
      />
      <WhatsappShareButton
        url={props.apiResponse.cardURL}
        children={
          <WhatsappIcon className="social-icons--icon" size={32} round={true} />
        }
        title="Mi nueva tarjeta de visita"
      />
      <TelegramShareButton
        url={props.apiResponse.cardURL}
        children={
          <TelegramIcon className="social-icons--icon" size={32} round={true} />
        }
        title="Mi nueva tarjeta de visita"
      />
    </div>
  );
}

export default ShareSocial;
