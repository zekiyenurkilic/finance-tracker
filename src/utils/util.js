import * as React from "react";
import { v4 as uuidv4 } from "uuid";

export const handleCategoriesLocalStorage = () => {
  const categories = localStorage.getItem("categories");
  if (!categories) {
    localStorage.setItem("categories", JSON.stringify([]));
  }
};

export const handleBaseCurrency = () => {
  const currency = localStorage.getItem("currency");
  if (!currency) {
    localStorage.setItem("currency", "EUR");
  }
};

export const handleOperationsLocalStorage = () => {
  const operations = localStorage.getItem("operations");
  if (!operations) {
    localStorage.setItem("operations", JSON.stringify([]));
  }
};

export const fetchRates = async () => {
  const response = await fetch("https://redterrex.onrender.com/users/finance");
  let rates = await response.json();
  if (rates.success) {
    const _rates = localStorage.getItem("rates");
    if (!_rates) {
      localStorage.setItem("rates", JSON.stringify(rates.finance));
    }
  }
};

export const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const categoryGenerator = (name, color) => {
  return {
    id: uuidv4(),
    name,
    color,
  };
};
