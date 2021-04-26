// NPM Packages:
// select custom colors
import { BlockPicker } from "react-color";

function PaletteCustom(props) {
  const bgrColor = props.colors;

  // when refactoring the code add 'console.log(ev.target.id);' at the beginning to make sure which input is being selected - sometimes the id change during the refactorization but at the end they always come back to 2-4-6
  const onSwatchHover = (color, ev) => {
    const targetColorId = ev.target.id;
    if (targetColorId === "rc-editable-input-2") {
      props.handleUpdateColors({ key: "color1", color: color.hex });
    }
    if (targetColorId === "rc-editable-input-4") {
      props.handleUpdateColors({ key: "color2", color: color.hex });
    }
    if (targetColorId === "rc-editable-input-6") {
      props.handleUpdateColors({ key: "color3", color: color.hex });
    }
  };

  return props.selectedPalette === "4" ? (
    <div className="color-pickers">
      <BlockPicker
        color={bgrColor.color1}
        onSwatchHover={onSwatchHover}
        onChangeComplete={onSwatchHover}
        width="100%"
        colors={[]}
      />
      <BlockPicker
        color={bgrColor.color2}
        onSwatchHover={onSwatchHover}
        onChangeComplete={onSwatchHover}
        width="100%"
        colors={[]}
      />
      <BlockPicker
        color={bgrColor.color3}
        onSwatchHover={onSwatchHover}
        onChangeComplete={onSwatchHover}
        width="100%"
        colors={[]}
      />
    </div>
  ) : (
    <></>
  );
}

export default PaletteCustom;
