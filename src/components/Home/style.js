import styled, { css } from "styled-components";
import { BsCurrencyExchange } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  width: calc(100% - 350px);
  background-color: ${(props) => props.theme.colors.primaryMainBg};
  padding: 30px;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 1024px) {
    width: calc(100% - 300px);
    padding: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  width: 350px;
  position: fixed;
  right: 0;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  height: 100%;
  transition: 300ms all;
  overflow-y: auto;
  @media (max-width: 1024px) {
    width: 300px;
    padding: 20px;
  }
  @media (max-width: 768px) {
    visibility: hidden;
    right: -200px;
    width: 320px;
    opacity: 0;
    ${(props) =>
    props.isActiveMenu &&
    css`
        visibility: visible !important;
        z-index: 99;
        right: 0;
        opacity: 1;
      `}
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 24px 0;
    height: 80px;
  }
`;

export const LogoMain = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const Logo = styled(BsCurrencyExchange)`
  display: flex;
  font-size: 40px;
  color: ${(props) => props.theme.colors.primaryBlue};
`;

export const IconSearch = styled(BsSearch)`
  font-size: 16px;
  position: absolute;
  right: 12px;
  transform: translateY(-50%);
  top: 50%;
  color: ${(props) => props.theme.colors.primaryBlue};
`;

export const LogoName = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const SearchBarMain = styled.div`
  width: 300px;
  position: relative;
`;

export const SearchBar = styled.input`
  width: 100%;
  background-color: white;
  border-radius: 18px;
  height: 36px;
  padding: 10px 20px;
  border: 0.5px solid ${(props) => props.theme.colors.primaryBlue};
  outline: none;
  font-weight: ${(props) => props.theme.fontWeights.light};
`;

export const CategoriesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
  margin-top: ${(props) => props.mb || 0};
`;

export const CategoriesTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.primaryWhite};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

export const AddIcon = styled(BsPlus)`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.primaryWhite};
  cursor: pointer;
  border: 1px dashed ${(props) => props.theme.colors.primaryWhite};
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: 300ms all;
  &:hover {
    scale: 1.1;
  }
`;

export const CategoryListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const CategoryName = styled.span`
  display: flex;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-left: 12px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const CategoryTotalAmount = styled.span`
  display: flex;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-left: 12px;
  margin-top: 4px;
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-size: ${(props) => props.theme.fontSizes.xs};
`;

export const CategoryIcon = styled(BiCategory)`
  display: flex;
  font-size: 12px;
  background-color: ${(props) => props.bgColor};
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const AddCategoryMain = styled.div`
  display: flex;
  position: absolute;
  bottom: -440px;
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.primaryMainBg};
  visibility: hidden;
  transition: 300ms all;
  opacity: 0;
  border-radius: 4px;
  ${(props) =>
    props.isActive &&
    css`
      visibility: visible;
      opacity: 1;
      bottom: -70px;
    `};
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.colors.primaryMainBg};
    top: -5px;
    transform: rotate(45deg);
    right: 10px;
  }
`;

export const AddButton = styled.button`
  padding: 0 20px;
  height: 36px;
  margin-left: 12px;
  color: ${(props) => props.theme.colors.primaryWhite};
  background-color: ${(props) => props.theme.colors.primaryPurple};
  border-radius: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 300ms all;
`;

export const OperationsMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const OperationItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primaryWhite};
  padding: 30px;
  border-radius: 16px;
  box-shadow: 4px 4px 0px -1px #e1e1e1;
  align-items: center;
  &:not(last-child) {
    margin-bottom: 24px;
  }
  @media (max-width: 1024px) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;

    align-items: flex-start;
  }
`;

export const OperationLeftContainer = styled.div`
  display: flex;
  gap: 0 12px;
  align-items: center;
  flex: 1;
`;

export const OperationMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const OperationIcon = styled(BiCategory)`
  display: flex;
  font-size: 12px;
  background-color: ${(props) => props.bgColor};
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px;
  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const OperationRightContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: flex-end;
    width: 100%;
    margin-top: 20px;
  }
`;

export const OperationName = styled.span`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  width: 65%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OperationCategory = styled.span`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: 12px;
`;

export const OperationDate = styled.span`
  color: ${(props) => props.theme.colors.primaryBorder};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.light};
  margin-top: 8px;
`;

export const OperationAmount = styled.span`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
`;

export const OperationEditIcon = styled(FiEdit2)`
  display: flex;
  font-size: 12px;
  background-color: #ddecff;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px;
  color: #3495fe;
  margin-left: 48px;
  cursor: pointer;
`;

export const OperationDeleteIcon = styled(BsX)`
  display: flex;
  font-size: 20px;
  background-color: #f4f7fc;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 6px;
  color: #a4aaba;
  margin-left: 12px;
  cursor: pointer;
`;

export const EmpytOperitons = styled.div`
  height: calc(100vh - 265px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const EmpytOperitonMessage = styled.div`
  display: flex;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.primaryBlue};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const FinanceSelectContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primaryWhite};
  width: 50%;
  bottom: -60px;
  padding: 10px;
  transition: 300ms all;
  visibility: hidden;
  right: 0;
  opacity: 0;
  ${(props) =>
    props.isActive &&
    css`
      visibility: visible;
      opacity: 1;
      bottom: -100px;
    `}
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.colors.primaryWhite};
    right: 10px;
    top: -5px;
    transform: rotate(45deg);
  }
`;

export const FinanceText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const BarMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 24px 0;
  }
`;

export const Date = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
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
  width: 200px;
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
  display: flex;
`;

export const SelectListMain = styled.div`
  display: flex;
  position: relative;
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

export const CurrencyBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const TotalBalanceMain = styled.div`
  display: flex;
  align-items: center;
  gap: 0 36px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px 0;
  }
`;

export const TotalBalance = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

export const TotalBalanceText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.primaryBlue};
  font-weight: ${(props) =>
    props.weight === "normal"
      ? props.theme.fontWeights.light
      : props.theme.fontWeights.medium};
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SummaryTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

export const SummaryText = styled.span`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const HamburgerMenu = styled(FcMenu)`
  display: none;
  @media (max-width: 768px) {
    display: flex !important;
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 30px;
    & g {
      fill: ${(props) => props.theme.colors.primaryBlue};
    }

    ${(props) =>
    props.isActiveMenu &&
    css`
        right: 340px;
      `}
  }
`;

export const FilterMain = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 0 12px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Filter = styled.span`
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.primaryBlue
      : props.theme.colors.primaryWhite};
  border: 1px solid ${(props) => props.theme.colors.primaryBlue};
  color: ${(props) =>
    props.selected
      ? props.theme.colors.primaryWhite
      : props.theme.colors.primaryBlue};
  padding: 5px 15px;
  border-radius: 18px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: 300ms all;
`;
