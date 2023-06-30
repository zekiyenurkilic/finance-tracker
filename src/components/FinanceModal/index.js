import * as React from "react";
import * as S from "./style";
import { BsX } from "react-icons/bs";
import { TbWorldDollar } from "react-icons/tb";
import Input from "../Input";
import CurrencyList from "currency-list";
import { v4 as uuidv4 } from "uuid";

const FinanceModal = ({
  isActive,
  onFinanceModalClose,
  type,
  onAddFinanceClick,
  categories,
  currency,
  isEdit,
  editFinance,
}) => {
  const addFinanceModalRef = React.useRef(null);
  const currenyList = CurrencyList.getAll("en_US");
  const [errorInputTitle, setErrorInputTitle] = React.useState([]);

  const [financeModel, setFinanceModel] = React.useState({
    type: type,
    amount: "",
    currency,
    description: "",
    categoryId: categories && categories.length && categories[0].id,
  });

  React.useEffect(() => {
    setFinanceModel({
      ...financeModel,
      type: type,
      currency,
      categoryId: categories && categories.length && categories[0].id,
    });
    if (isEdit) setFinanceModel(editFinance);
  }, [isActive]);

  React.useEffect(() => {
    if (!isActive) resetModal();
  }, [isActive]);

  const isDisabled =
    !financeModel.amount || !financeModel.currency || !financeModel.description;

  const _onAddFinanceClick = async () => {
    await checkError();
    if (isDisabled) return;

    let operations = localStorage.getItem("operations");
    operations = JSON.parse(operations);

    if (isEdit) {
      const findIndex = operations.findIndex(
        (operation) => operation.id === editFinance.id
      );
      operations[findIndex] = financeModel;
    } else {
      operations = [
        ...operations,
        {
          ...financeModel,
          id: uuidv4(),
          date: new Date().toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }),
        },
      ];
    }

    localStorage.setItem("operations", JSON.stringify(operations));
    resetModal();
    onAddFinanceClick();
    onFinanceModalClose();
  };

  const checkError = async () => {
    const newErrors = [];
    if (!financeModel.amount) newErrors.push("amount");
    if (!financeModel.currency) newErrors.push("currency");
    if (!financeModel.description) newErrors.push("description");

    setErrorInputTitle(newErrors);
  };

  const resetModal = () => {
    setFinanceModel({
      type: "",
      currency: "",
      description: "",
      amount: "",
    });
    setErrorInputTitle([]);
  };

  return (
    <S.FinanceModalMain
      ref={addFinanceModalRef}
      onClick={() => onFinanceModalClose()}
      show={isActive}
    >
      <S.FinanceModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <S.TypeLabel>{type}</S.TypeLabel>

        <Input
          isError={errorInputTitle.some((error) => error === "amount")}
          value={financeModel.amount}
          isAmount
          label={"Amount"}
          isFinance
          reqiured
          isNumberInput
          mb={"20px"}
          errorMessage="Please fill this field"
          onChange={(text) => {
            setErrorInputTitle(
              errorInputTitle.filter((error) => error !== "amount")
            );
            setFinanceModel({ ...financeModel, amount: text });
          }}
        />

        <S.SelectLabel>Currency</S.SelectLabel>
        <S.SelectListMain>
          <S.SelectList
            onChange={(e) =>
              setFinanceModel({ ...financeModel, currency: e.target.value })
            }
          >
            {Object.keys(currenyList).map((currency) => (
              <option
                key={currency}
                selected={currency === financeModel.currency}
                value={currency}
              >
                {currency}
              </option>
            ))}
          </S.SelectList>
          <S.Icon>
            <TbWorldDollar />
          </S.Icon>
        </S.SelectListMain>

        <S.SelectLabel>Category</S.SelectLabel>
        <S.SelectListMain>
          <S.SelectList
            onChange={(e) =>
              setFinanceModel({ ...financeModel, categoryId: e.target.value })
            }
          >
            {categories.map((category) => (
              <option
                key={category.id}
                selected={category.id === financeModel.categoryId}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </S.SelectList>
          <S.Icon>
            <TbWorldDollar />
          </S.Icon>
        </S.SelectListMain>

        <Input
          isError={errorInputTitle.some((error) => error === "description")}
          value={financeModel.description}
          label={"Description"}
          isFinance
          reqiured
          errorMessage="Please fill this field"
          isDescription
          onChange={(text) => {
            setErrorInputTitle(
              errorInputTitle.filter((error) => error !== "description")
            );
            setFinanceModel({ ...financeModel, description: text });
          }}
        />

        <S.AddButton onClick={_onAddFinanceClick}>Add</S.AddButton>

        <S.FinanceModalClose onClick={() => onFinanceModalClose()}>
          <BsX size={30} color={"#fff"} />
        </S.FinanceModalClose>
      </S.FinanceModalContent>
    </S.FinanceModalMain>
  );
};

export default FinanceModal;
