import * as React from "react";
import * as S from "./style";
import {
  handleCategoriesLocalStorage,
  handleOperationsLocalStorage,
  handleBaseCurrency,
  fetchRates,
} from "../../utils/util";
import { defultCategories } from "../../utils/constants";
import CategoryModal from "../CategoryModal";
import Lottie from "lottie-react";
import * as animationData from "../../lottie/finance.json";
import FinanceModal from "../FinanceModal";
import CurrencyList from "currency-list";
import { TbWorldDollar } from "react-icons/tb";

const Home = () => {
  React.useEffect(() => {
    handleCategoriesLocalStorage();
    handleOperationsLocalStorage();
    handleBaseCurrency();
    fetchRates();
  }, []);

  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  const currenyList = CurrencyList.getAll("en_US");
  const [allCategories, setAllCategories] = React.useState([]);
  const [allOperations, setAllOperations] = React.useState([]);

  const [isActive, setIsActive] = React.useState(false);
  const [financeModalIsActive, setFinanceModalIsActive] = React.useState(false);
  const [financeSelectActive, setFinanceSelectActive] = React.useState(false);
  const [isEditFinanceModal, setIsEditFinanceModal] = React.useState(false);
  const [editFinance, setEditFinance] = React.useState(null);
  const [filterType, setFilterType] = React.useState("all");
  const [currency, setCurrency] = React.useState("");
  const [totalBalance, setTotalBalance] = React.useState({
    totalIncomes: 0,
    totalExpenses: 0,
    totalBalance: 0,
  });

  const [searchTerm, setSearchTerm] = React.useState("");

  const [type, setType] = React.useState(null);

  let timerRef = React.useRef(null);

  React.useEffect(() => {
    mergeCategories();
    getAllOperations();
  }, []);

  React.useEffect(() => {
    handleCurrency();
  }, [currency]);

  React.useEffect(() => {
    balance();
  }, [allOperations, currency]);

  const handleCurrency = () => {
    const currency = localStorage.getItem("currency");
    setCurrency(currency);
  };

  const balance = () => {
    let rates = localStorage.getItem("rates");

    if (rates) {
      rates = JSON.parse(rates);

      const incomesTotal = allOperations
        .filter((operation) => operation.type === "income")
        .reduce((current, op) => {
          const amount =
            (parseFloat(op.amount) / rates[op.currency]) * rates[currency];

          return current + amount;
        }, 0);

      const expenseTotal = allOperations
        .filter((operation) => operation.type === "expense")
        .reduce((current, op) => {
          const amount =
            (parseFloat(op.amount) / rates[op.currency]) * rates[currency];

          return current + amount;
        }, 0);

      setTotalBalance({
        totalBalance: incomesTotal - expenseTotal,
        totalExpenses: expenseTotal,
        totalIncomes: incomesTotal,
      });
    }
  };

  const mergeCategories = () => {
    let categories = localStorage.getItem("categories");
    categories = JSON.parse(categories);
    setAllCategories([...defultCategories, ...categories]);
  };

  const getAllOperations = async () => {
    let operations = localStorage.getItem("operations");
    operations = JSON.parse(operations);
    setAllOperations(operations);
  };

  const addCategoryClick = (category) => {
    let categories = localStorage.getItem("categories");
    categories = JSON.parse(categories);

    categories = [...categories, category];

    localStorage.setItem("categories", JSON.stringify(categories));
    mergeCategories();
  };

  const typeSelect = (type) => {
    setType(type);
    setFinanceModalIsActive(true);
    setFinanceSelectActive(false);
    setIsActiveMenu(false);
  };

  const getCategory = (_categoryId) => {
    const category = allCategories.find(
      (category) => category.id === _categoryId
    );
    if (category) return category;
    else return null;
  };

  const amountDecoder = (operation) => {
    const currency = CurrencyList.get(operation.currency);

    if (currency) {
      const formatter = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency.code,
      });

      return formatter.format(operation.amount);
    } else {
      return "";
    }
  };

  const _totalBalance = currency
    ? new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
        maximumSignificantDigits: 10,
      }).format(totalBalance.totalBalance)
    : "";

  const _totalIncomes = currency
    ? new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
        maximumSignificantDigits: 10,
      }).format(totalBalance.totalIncomes)
    : "";

  const _totalExpenses = currency
    ? new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
        maximumSignificantDigits: 10,
      }).format(totalBalance.totalExpenses)
    : "";

  const deleteOperation = (operation) => {
    const filterOperations = allOperations.filter(
      (op) => op.id !== operation.id
    );

    localStorage.setItem("operations", JSON.stringify(filterOperations));

    getAllOperations();
  };

  const calc = (category) => {
    let rates = localStorage.getItem("rates");

    if (rates) {
      rates = JSON.parse(rates);

      const incomesTotal = allOperations
        .filter(
          (operation) =>
            operation.type === "income" && operation.categoryId === category.id
        )
        .reduce((current, op) => {
          const amount =
            (parseFloat(op.amount) / rates[op.currency]) * rates[currency];

          return current + amount;
        }, 0);

      const expenseTotal = allOperations
        .filter(
          (operation) =>
            operation.type === "expense" && operation.categoryId === category.id
        )
        .reduce((current, op) => {
          const amount =
            (parseFloat(op.amount) / rates[op.currency]) * rates[currency];

          return current + amount;
        }, 0);

      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
        maximumSignificantDigits: 10,
      }).format(incomesTotal - expenseTotal);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.LogoMain>
            <S.Logo></S.Logo>
            <S.LogoName>Finance Tracker</S.LogoName>
          </S.LogoMain>
          <S.SearchBarMain>
            <S.SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
            />
            <S.IconSearch />
          </S.SearchBarMain>
        </S.Header>
        <S.BarMain>
          <S.TotalBalanceMain>
            <S.Date>
              {new Date().toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </S.Date>
            <S.TotalBalance>
              <S.TotalBalanceText weight={"normal"}>
                Balance:
              </S.TotalBalanceText>
              <S.TotalBalanceText>{_totalBalance}</S.TotalBalanceText>
            </S.TotalBalance>
          </S.TotalBalanceMain>
          <S.CurrencyBar>
            <S.SelectLabel>Base Currency</S.SelectLabel>
            <S.SelectListMain>
              <S.SelectList
                onChange={(e) => {
                  setCurrency(e.target.value);
                  localStorage.setItem("currency", e.target.value);
                }}
              >
                {Object.keys(currenyList).map((_currency) => (
                  <option
                    key={_currency}
                    selected={currency === _currency}
                    value={_currency}
                  >
                    {_currency}
                  </option>
                ))}
              </S.SelectList>
              <S.Icon>
                <TbWorldDollar />
              </S.Icon>
            </S.SelectListMain>
          </S.CurrencyBar>
        </S.BarMain>
        <S.FilterMain>
          <S.Filter
            onClick={() => setFilterType("all")}
            selected={filterType === "all"}
          >
            All
          </S.Filter>
          <S.Filter
            onClick={() => setFilterType("income")}
            selected={filterType === "income"}
          >
            Income
          </S.Filter>
          <S.Filter
            onClick={() => setFilterType("expense")}
            selected={filterType === "expense"}
          >
            Expense
          </S.Filter>
        </S.FilterMain>
        <S.OperationsMain>
          {!!allOperations.length ? (
            allOperations
              .filter((operation) =>
                operation.description
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              )
              .filter((operation) =>
                filterType === "all"
                  ? true
                  : filterType === "income"
                  ? operation.type === "income"
                  : operation.type === "expense"
              )
              .map((operation) => (
                <S.OperationItem key={operation.id}>
                  <S.OperationLeftContainer>
                    <S.OperationIcon
                      bgColor={
                        getCategory(operation.categoryId) &&
                        getCategory(operation.categoryId).color
                      }
                    ></S.OperationIcon>
                    <S.OperationMain>
                      <S.OperationCategory>
                        {getCategory(operation.categoryId) &&
                          getCategory(operation.categoryId).name}{" "}
                        - ({operation.type})
                      </S.OperationCategory>
                      <S.OperationName>{operation.description}</S.OperationName>
                      <S.OperationDate>{operation.date}</S.OperationDate>
                    </S.OperationMain>
                  </S.OperationLeftContainer>
                  <S.OperationRightContainer>
                    <S.OperationAmount>
                      {amountDecoder(operation)}
                    </S.OperationAmount>
                    <S.OperationEditIcon
                      onClick={() => {
                        setIsEditFinanceModal(true);
                        setEditFinance(operation);
                        setFinanceModalIsActive(true);
                      }}
                    ></S.OperationEditIcon>
                    <S.OperationDeleteIcon
                      onClick={() => deleteOperation(operation)}
                    ></S.OperationDeleteIcon>
                  </S.OperationRightContainer>
                </S.OperationItem>
              ))
          ) : (
            <S.EmpytOperitons>
              <Lottie animationData={animationData} style={{ height: 500 }} />
              <S.EmpytOperitonMessage>
                No data has been entered yet
              </S.EmpytOperitonMessage>
            </S.EmpytOperitons>
          )}
        </S.OperationsMain>
      </S.Content>
      <S.RightContainer isActiveMenu={isActiveMenu}>
        <S.CategoriesHeader>
          <S.CategoriesTitle>Categories</S.CategoriesTitle>
          <S.AddIcon
            onClick={() => {
              setIsActive(true);
              setIsActiveMenu(false);
            }}
          ></S.AddIcon>
        </S.CategoriesHeader>
        {allCategories.map((category) => (
          <S.CategoryListItem key={category.id}>
            <S.CategoryIcon bgColor={category.color}> </S.CategoryIcon>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <S.CategoryName> {category.name} </S.CategoryName>
              <S.CategoryTotalAmount> {calc(category)} </S.CategoryTotalAmount>
            </div>
          </S.CategoryListItem>
        ))}

        <S.Summary>
          <S.CategoriesHeader mb={"40px"}>
            <S.CategoriesTitle>Income - Expense</S.CategoriesTitle>
            <S.AddIcon
              onMouseOver={() => {
                setFinanceSelectActive(true);
                clearTimeout(timerRef.current);
              }}
              onMouseLeave={() => {
                timerRef.current = setTimeout(() => {
                  setFinanceSelectActive(false);
                }, 1000);
              }}
            ></S.AddIcon>
            <S.FinanceSelectContainer
              onMouseOver={() => {
                // @ts-ignore
                clearTimeout(timerRef.current);
              }}
              onMouseLeave={() => {
                timerRef.current = setTimeout(() => {
                  setFinanceSelectActive(false);
                }, 1000);
              }}
              isActive={financeSelectActive}
            >
              <S.FinanceText onClick={() => typeSelect("income")}>
                Income
              </S.FinanceText>
              <S.FinanceText onClick={() => typeSelect("expense")}>
                Expense
              </S.FinanceText>
            </S.FinanceSelectContainer>
          </S.CategoriesHeader>
          <S.SummaryTexts>
            <S.SummaryText>Total Incomes: {_totalIncomes} </S.SummaryText>
            <S.SummaryText>Total Expenses: {_totalExpenses} </S.SummaryText>
          </S.SummaryTexts>
        </S.Summary>
      </S.RightContainer>
      <CategoryModal
        isActive={isActive}
        onCategoryModalClose={() => setIsActive(false)}
        onAddCategoryClick={(category) => addCategoryClick(category)}
      />
      <FinanceModal
        isActive={financeModalIsActive}
        onFinanceModalClose={() => {
          setFinanceModalIsActive(false);
          setIsEditFinanceModal(false);
          setEditFinance(null);
        }}
        type={type}
        onAddFinanceClick={() => getAllOperations()}
        categories={allCategories}
        currency={currency}
        isEdit={isEditFinanceModal}
        editFinance={editFinance}
      />

      <S.HamburgerMenu
        isActiveMenu={isActiveMenu}
        onClick={() => setIsActiveMenu(!isActiveMenu)}
      ></S.HamburgerMenu>
    </S.Container>
  );
};

export default Home;
