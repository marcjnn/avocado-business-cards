import "../style/layout/_form.scss";

import React from "react";

function AvatarBtn(props) {
  const { avatar, updateAvatar, isAvatarDefault } = props;
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleSelectedFile = (event) => {
    let reader = new FileReader();
    reader.addEventListener("load", (e) => {
      updateAvatar(e.target.result);
    });
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="form__display--image">
      <div>
        <label className="form__label" htmlFor="photo">
          Imagen de perfil
        </label>
        <button
          className="btn__submit--image js__profile-trigger"
          // type="submit"
          value="Anadir imagen"
          name="photo"
          id="photo"
          required
          onClick={handleClick}
        >
          Añadir imagen
        </button>
        <input
          type="file"
          name=""
          className="btn__submit--image action__hiddenField js__profile-upload-btn"
          ref={hiddenFileInput}
          onChange={handleSelectedFile}
        />
      </div>
      <div
        className="form__preview--image js__profile-preview"
        style={{
          backgroundImage: `url(${isAvatarDefault ? "" : avatar}`,
        }}
      ></div>
    </div>
  );
}

export default AvatarBtn;
