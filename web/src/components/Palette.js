import "../style/layout/_design.scss";

function Palette(props) {
  const { value, selectedPalette, customColors, handleChangePalette } = props;
  return (
    <label className="display-block design__square-label">
      <input
        type="radio"
        name="palette"
        className="design__square-radio js_palette-select"
        value={value}
        onChange={handleChangePalette}
        checked={selectedPalette === value}
      />
      <ul className={`palette-${value}-election`}>
        <li
          className="design__square-color color-1"
          style={{ backgroundColor: customColors?.color1 }}
        >
          Color A
        </li>
        <li
          className="design__square-color color-2"
          style={{ backgroundColor: customColors?.color2 }}
        >
          Color B
        </li>
        <li
          className="design__square-color color-3"
          style={{ backgroundColor: customColors?.color3 }}
        >
          Color C
        </li>
      </ul>
    </label>
  );
}

export default Palette;
