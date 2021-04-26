import "../style/layout/Preview.scss";
import PropTypes from "prop-types";
import Social from "./Social";

function Preview(props) {
  const {
    photo,
    palette,
    name,
    job,
    email,
    phone,
    linkedin,
    github,
    customColors: colors,
  } = props.userData;
  const handleResetClick = () => {
    props.resetUserData();
  };

  return (
    <section className="section__card">
      <div className="section__container">
        <button className="reset js-reset" onClick={handleResetClick}>
          <i className="fa fa-trash"></i>Reset
        </button>
        <div className={`card palette3card js_preview-card palette-${palette}`}>
          <div
            className="card__titles"
            style={
              palette === "4"
                ? { borderLeft: `5px solid ${colors.color2}` }
                : {}
            }
          >
            <h3
              className="card__titles--name js-preview-name"
              style={palette === "4" ? { color: colors.color1 } : {}}
            >
              {name || "Nombre apellidos"}
            </h3>
            <h4 className="card__titles--job js-preview-job">
              {job || "Programadora front end"}
            </h4>
          </div>
          <div
            className="card__image js__profile-image"
            style={{ backgroundImage: `url(${photo})` }}
          ></div>
          <div className="card__links--container">
            <ul className="logo__list">
              <Social
                aClass="tel"
                iClass="mobile"
                href={`tel:${phone}`}
                palette={palette}
                color1={colors.color1}
                color3={colors.color3}
              />
              <Social
                aClass="email"
                iClass="envelope-o"
                href={`mailto:${email}`}
                palette={palette}
                color1={colors.color1}
                color3={colors.color3}
              />
              <Social
                aClass="linkedin"
                iClass="linkedin"
                href={`https://www.linkedin.com/in/${linkedin}`}
                palette={palette}
                color1={colors.color1}
                color3={colors.color3}
              />
              <Social
                aClass="github"
                iClass="github-alt"
                href={`https://github.com/${github}`}
                palette={palette}
                color1={colors.color1}
                color3={colors.color3}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Preview.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Preview;
