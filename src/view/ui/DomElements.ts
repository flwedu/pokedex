const getById = (id: string) => document.getElementById(id);

const DomElements = {
  inputSearch: getById("input__search") as HTMLInputElement,
  divResults: getById("display") as HTMLDivElement,
  divNavigationButtons: getById("navigation") as HTMLDivElement,
  divNavigationDots: getById("navigation__dots") as HTMLDivElement,
  listNameSuggestion: getById("data_list") as HTMLDataListElement,
};

export default DomElements;
