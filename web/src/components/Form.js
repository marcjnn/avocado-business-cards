// Style & resources
import "../style/layout/_card-page.scss";
import "../style/layout/_design.scss";
import "../style/layout/_form.scss";
import "../style/layout/_share.scss";

// Services
import api from "../services/ApiServer.js";

// Components

import Collapsable from "./Collapsable.js";
import Palette from "./Palette.js";
import Input from "./Input.js";
import AvatarBtn from "./AvatarBtn";

// React
import React, { useState } from "react";

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

// select custom colors
import { BlockPicker } from "react-color";

function Form(props) {
  // const [message, setMessage] = useState("");
  // const [cardURL, setcardURL] = useState("");
  // const [hiddenClass, setHiddenClass] = useState("share-hidden");
  // const [visibilitySocialIcons, setvisibilitySocialIcons] = useState(
  //   "share-hidden"
  // );

  //

  const [apiResponse, setApiResponse] = useState({
    success: false,
    message: "",
    cardURL: "",
    // hiddenClass: ""
  });

  //

  const bgrColor = props.colors;

  const handleCreateBtn = (ev) => {
    ev.preventDefault();

    function dataSuccess(data) {
      // setMessage("La tarjeta ha sido creada:");
      // setcardURL(data.cardURL);
      // setvisibilitySocialIcons("");
      setApiResponse({
        ...apiResponse,
        success: true,
        message: "La tarjeta ha sido creada:",
        cardURL: data.cardURL,
      });
    }
    function dataError(data) {
      // setMessage(data.error);
      // setcardURL("");
      setApiResponse({
        ...apiResponse,
        success: false,
        message: data.error,
        cardURL: "",
      });
    }

    const fetchData = async () => {
      const data = await api
        .fetchCard(props.userData)
        .catch((e) => console.log("Error: ", e.message));
      data.success ? dataSuccess(data) : dataError(data);
      // setHiddenClass("");
    };

    fetchData();
  };

  // color picker

  const handleColorChange = (ev) => {
    const parent = ev.target.closest(".color-container");
    const attr = parent.getAttribute("data-color");
    return attr;
  };

  const onSwatchHover = (color, ev) => {
    handleColorChange(ev);
    const attr = handleColorChange(ev);
    if (attr === "1") {
      props.handleUpdateColors({ key: "color1", color: color.hex });
    }
    if (attr === "2") {
      props.handleUpdateColors({ key: "color2", color: color.hex });
    }
    if (attr === "3") {
      props.handleUpdateColors({ key: "color3", color: color.hex });
    }
  };

  const renderShare = () => {
    return !apiResponse.success ? (
      <p className="confirm__share--title">{apiResponse.message}</p>
    ) : (
      <>
        <p className="confirm__share--title">{apiResponse.message}</p>
        <a
          className="confirm__share--link"
          href={apiResponse.cardURL}
          target="_blank"
          rel="noreferrer"
        >
          haz click aquí para ver tu nueva tarjeta
        </a>
        <div className="social-icons">
          <p className="social-icons--title">Comparte tu nueva tarjeta:</p>
          <EmailShareButton
            url={apiResponse.cardURL}
            children={
              <EmailIcon
                className="social-icons--icon"
                size={32}
                round={true}
              />
            }
            subject="Mi nueva tarjeta de visita"
            body="Te mando mi nueva tarjeta hecha por las Awesome Reacters. (Si quieres una igual, entra en https://beta.adalab.es/project-promo-l-module-3-team-7/#/)"
            separator=" => "
          />
          <FacebookShareButton
            url={apiResponse.cardURL}
            children={
              <FacebookIcon
                className="social-icons--icon"
                size={32}
                round={true}
              />
            }
            quote="Mi nueva tarjeta de visita"
          />
          <TwitterShareButton
            url={apiResponse.cardURL}
            children={
              <TwitterIcon
                className="social-icons--icon"
                size={32}
                round={true}
              />
            }
            title="Mi nueva tarjeta de visita"
          />
          <WhatsappShareButton
            url={apiResponse.cardURL}
            children={
              <WhatsappIcon
                className="social-icons--icon"
                size={32}
                round={true}
              />
            }
            title="Mi nueva tarjeta de visita"
          />
          <TelegramShareButton
            url={apiResponse.cardURL}
            children={
              <TelegramIcon
                className="social-icons--icon"
                size={32}
                round={true}
              />
            }
            title="Mi nueva tarjeta de visita"
          />
        </div>
      </>
    );
  };

  return (
    <form method="" action="" className="collapsable-container">
      <Collapsable
        title="Diseña"
        icon="fa-object-ungroup"
        fieldset="design"
        isClose={false}
      >
        <h3 className="design__title">colores</h3>
        <Palette
          value="1"
          selectedPalette={props.selectedPalette}
          changePalette={props.changePalette}
        />

        <Palette
          value="2"
          selectedPalette={props.selectedPalette}
          changePalette={props.changePalette}
        />

        <Palette
          value="3"
          selectedPalette={props.selectedPalette}
          changePalette={props.changePalette}
        />
        <Palette
          value="4"
          selectedPalette={props.selectedPalette}
          changePalette={props.changePalette}
          color1={`${bgrColor.color1}`}
          color2={`${bgrColor.color2}`}
          color3={`${bgrColor.color3}`}
        />
        {props.selectedPalette === "4" ? (
          <div className="color-pickers">
            <div className="color-container" data-color="1">
              <BlockPicker
                color={bgrColor.color1}
                onSwatchHover={onSwatchHover}
                onChangeComplete={onSwatchHover}
                width="100%"
                colors={[]}
              />
            </div>
            <div className="color-container" data-color="2">
              <BlockPicker
                color={bgrColor.color2}
                onSwatchHover={onSwatchHover}
                onChangeComplete={onSwatchHover}
                width="100%"
                colors={[]}
              />
            </div>
            <div className="color-container" data-color="3">
              <BlockPicker
                color={bgrColor.color3}
                onSwatchHover={onSwatchHover}
                onChangeComplete={onSwatchHover}
                width="100%"
                colors={[]}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </Collapsable>
      <Collapsable
        title="Rellena"
        icon="fa-keyboard-o"
        fieldset="form"
        isClose={true}
      >
        <div className="form">
          <Input
            name="name"
            label="Nombre completo"
            placeholder="Nombre completo"
            value={props.name}
            handleInput={props.handleInput}
          />
          <Input
            name="job"
            label="Puesto"
            placeholder="Profesión"
            value={props.job}
            handleInput={props.handleInput}
          />

          <AvatarBtn
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
            isAvatarDefault={props.isAvatarDefault}
          />

          <Input
            name="email"
            label="email"
            placeholder="nombre.apellido@example.com"
            type="email"
            value={props.email}
            handleInput={props.handleInput}
          />
          <Input
            name="phone"
            label="Telefono"
            placeholder="+34 666666666"
            type="tel"
            value={props.phone}
            handleInput={props.handleInput}
          />

          <Input
            name="linkedin"
            label="Linkedin"
            placeholder="Nombre de usuario de LinkedIn"
            value={props.linkedin}
            handleInput={props.handleInput}
          />
          <Input
            name="github"
            label="Github"
            placeholder="Nombre de usuario de GitHub"
            value={props.github}
            handleInput={props.handleInput}
          />
        </div>
      </Collapsable>
      <Collapsable
        title="Comparte"
        icon="fa-share-alt"
        fieldset="share"
        isClose={true}
      >
        <button
          className="button__create link_animation"
          onClick={handleCreateBtn}
        >
          <i className="fa fa-address-card-o" aria-hidden="true"></i>Crear
          tarjeta
        </button>
        <div className="confirm__share">{renderShare()}</div>
        {/* <div className={`confirm__share ${hiddenClass}`}>
          <p className="confirm__share--title">{message}</p>
          <a
            className="confirm__share--link"
            href={cardURL}
            target="_blank"
            rel="noreferrer"
          >
            {cardURL}
          </a>
          <div className={`social-icons ${visibilitySocialIcons}`}>
            <p className="social-icons--title">Comparte tu nueva tarjeta:</p>
            <EmailShareButton
              url={cardURL}
              children={
                <EmailIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              subject="Mi nueva tarjeta de visita"
              body="Te mando mi nueva tarjeta hecha por las Awesome Reacters. (Si quieres una igual, entra en https://beta.adalab.es/project-promo-l-module-3-team-7/#/)"
              separator=" => "
            />
            <FacebookShareButton
              url={cardURL}
              children={
                <FacebookIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              quote="Mi nueva tarjeta de visita"
            />
            <TwitterShareButton
              url={cardURL}
              children={
                <TwitterIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              title="Mi nueva tarjeta de visita"
            />
            <WhatsappShareButton
              url={cardURL}
              children={
                <WhatsappIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              title="Mi nueva tarjeta de visita"
            />
            <TelegramShareButton
              url={cardURL}
              children={
                <TelegramIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              title="Mi nueva tarjeta de visita"
            />
          </div>
        </div> */}
      </Collapsable>
    </form>
  );
}

export default Form;
