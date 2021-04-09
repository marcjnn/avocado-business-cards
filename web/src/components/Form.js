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
import CustomColors from "./CustomColors";
import Input from "./Input.js";
import AvatarBtn from "./AvatarBtn";
import ShareSocial from "./ShareSocial";

// React
import React, { useState } from "react";

function Form(props) {
  const [apiResponse, setApiResponse] = useState({
    success: false,
    message: "",
    cardURL: "",
  });

  const handleCreateBtn = (ev) => {
    ev.preventDefault();

    function dataSuccess(data) {
      setApiResponse({
        ...apiResponse,
        success: true,
        message: "La tarjeta ha sido creada:",
        cardURL: data.cardURL,
      });
    }
    function dataError(data) {
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
    };

    fetchData();
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
        <ShareSocial apiResponse={apiResponse} />
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
          color1={props.colors.color1}
          color2={props.colors.color2}
          color3={props.colors.color3}
        />
        <CustomColors
          selectedPalette={props.selectedPalette}
          colors={props.colors}
          handleUpdateColors={props.handleUpdateColors}
        />
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
      </Collapsable>
    </form>
  );
}

export default Form;
