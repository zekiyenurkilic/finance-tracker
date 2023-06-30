import * as React from "react";
import * as S from "./style";
import { BsX } from "react-icons/bs";
import Input from "../Input";
import { SketchPicker } from "react-color";
import { categoryGenerator } from "../../utils/util";

const CategoryModal = ({
  isActive,
  onCategoryModalClose,
  onAddCategoryClick,
}) => {
  const addCategoryModalRef = React.useRef(null);

  const [color, setColor] = React.useState("#ec1a33");
  const [categoryName, setCategoryName] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    if (!isActive) resetModal();
  }, [isActive]);

  const _onAddCategoryClick = () => {
    console.log("ca", categoryName);
    if (!categoryName) {
      setIsError(true);
      return;
    }

    const category = categoryGenerator(categoryName, color);
    onAddCategoryClick(category);
    onCategoryModalClose();
    resetModal();
  };

  const resetModal = () => {
    setCategoryName("");
    setIsError(false);
  };

  return (
    <S.CategoryModalMain
      ref={addCategoryModalRef}
      onClick={() => onCategoryModalClose()}
      show={isActive}
    >
      <S.CategoryModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Input
          isError={isError}
          value={categoryName}
          label={"Category Name"}
          isCategory
          reqiured
          errorMessage="Please fill this field"
          onChange={(text) => {
            setIsError(false);
            setCategoryName(text);
          }}
        />

        <S.PickerMain>
          <S.PickerLabel>Color</S.PickerLabel>
          <SketchPicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </S.PickerMain>

        <S.AddButton onClick={_onAddCategoryClick}>Add</S.AddButton>

        <S.CategoryModalClose onClick={() => onCategoryModalClose()}>
          <BsX size={30} color={"#fff"} />
        </S.CategoryModalClose>
      </S.CategoryModalContent>
    </S.CategoryModalMain>
  );
};

export default CategoryModal;
