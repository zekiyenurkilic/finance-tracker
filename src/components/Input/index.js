import * as React from "react";
import * as S from "./style";
import { BiCategory } from "react-icons/bi";
import { GrCurrency } from "react-icons/gr";
import { RiFileTextLine } from "react-icons/ri";

const Input = ({
  label,
  isCategory,
  onChange,
  isError,
  reqiured,
  errorMessage,
  value,
  isNumberInput,
  isAmount,
  isDescription,
  mb,
}) => {
  return (
    <S.InputMain mb={mb} className={!!isError ? "is-error" : ""}>
      {label && (
        <S.Label>
          {label} {reqiured ? "*" : ""}
        </S.Label>
      )}
      <S.IconInputMain>
        {isCategory && (
          <S.Icon>
            <BiCategory size={16} />
          </S.Icon>
        )}
        {isAmount && (
          <S.Icon>
            <GrCurrency size={16} />
          </S.Icon>
        )}
        {isDescription && (
          <S.Icon>
            <RiFileTextLine size={16} />
          </S.Icon>
        )}
        <S.Input
          value={value}
          onKeyPress={(event) => {
            if (!!isNumberInput && !/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={(e) => {
            if (!!isNumberInput) {
              onChange(e.target.value);
            } else {
              onChange(e.target.value);
            }
          }}
          placeholder={label}
        />
      </S.IconInputMain>
      {!!errorMessage && !!isError && (
        <S.InputErrorMessage>{errorMessage}</S.InputErrorMessage>
      )}
    </S.InputMain>
  );
};

export default Input;
