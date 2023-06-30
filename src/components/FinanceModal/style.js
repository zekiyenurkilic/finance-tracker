import styled, { css } from "styled-components";

export const FinanceModalMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(50, 53, 93, 0.4);
  z-index: 9999999991;
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
    `}
`;

export const FinanceModalContent = styled.div`
  width: 360px;
  border-radius: 10px;
  padding: 40px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const FinanceModalClose = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlue};
  width: 36px;
  height: 36px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -30px;
  right: -30px;
  position: absolute;
  cursor: pointer;

  @media (max-width: 768px) {
    top: -40px;
    right: 0px;
  }
`;

export const AddInput = styled.input`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 18px;
  height: 36px;
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.colors.primaryBorder};
  outline: none;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
`;

export const PickerMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PickerLabel = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: 18px;
  color: ${(props) => props.theme.colors.primaryBlue};
  margin-bottom: 8px;
  margin-top: 20px;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  color: #fff;
  font-weight: 500;
  transition: all 0.3s;
  margin-top: 40px;
  width: 100%;
  border-radius: 24px;
  height: 44px;
  padding: 12px 24px;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: 20px;
  cursor: pointer;
`;

export const SelectList = styled.select`
  box-sizing: border-box;
  -webkit-appearance: none !important;
  appearance: none !important;
  -moz-appearance: none !important;
  background-image: url("assets/images/arrow-right.png") !important;
  background-repeat: no-repeat !important;
  background-size: 14px 14px !important;
  background-position: calc(100% - 16px) !important;
  width: 100%;
  padding: 12px 24px;
  height: 44px;
  background: ${(props) => props.theme.colors.inputBgColor};
  border: 1px solid ${(props) => props.theme.colors.primaryBorderColor};
  border-radius: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  outline: none;
  color: ${(props) => props.theme.colors.primaryBlue};
  transition: 300ms all;
  padding-left: 50px !important;
  width: 100%;
  &::placeholder,
  &::-webkit-input-placeholder {
    color: #b3b3b3;
  }
  &:-ms-input-placeholder {
    color: #b3b3b3;
  }
`;

export const SelectLabel = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: 18px;
  color: ${(props) => props.theme.colors.primaryBlue};
  margin-bottom: 8px;
  display: flex;
`;

export const SelectListMain = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
  & svg {
    stroke: ${(props) => props.theme.colors.primaryBlue};
  }
`;

export const TypeLabel = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  text-transform: capitalize;
  margin-bottom: 40px;
  text-align: center;
`;
