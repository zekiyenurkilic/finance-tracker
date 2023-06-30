import styled, { css } from "styled-components";

export const InputMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.mb || 0};
  &.is-error {
    & span {
      color: ${(props) => props.theme.colors.errorColor};
    }
    & input {
      border-color: ${(props) => props.theme.colors.errorColor};
      &::placeholder,
      &::-webkit-input-placeholder {
        color: ${(props) => props.theme.colors.errorColor};
      }
      &:-ms-input-placeholder {
        color: ${(props) => props.theme.colors.errorColor};
      }
    }
    & svg path {
      stroke: ${(props) => props.theme.colors.errorColor};
    }
  }
`;

export const IconInputMain = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const Label = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: 18px;
  color: ${(props) => props.theme.colors.primaryBlue};
  margin-bottom: 8px;
`;

export const Input = styled.input`
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

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
  & svg path {
    stroke: ${(props) => props.theme.colors.primaryBlue};
  }
`;

export const InputErrorMessage = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: 15px;
  display: flex;
  color: ${(props) => props.theme.colors.errorColor};
  margin-top: 4px;
`;
