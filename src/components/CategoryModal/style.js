import styled, { css } from "styled-components";

export const CategoryModalMain = styled.div`
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

export const CategoryModalContent = styled.div`
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

export const CategoryModalClose = styled.div`
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
