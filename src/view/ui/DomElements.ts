const getById = (id: string) => document.getElementById(id);

const DomElements = {
  inputSearch: getById("input__search") as HTMLInputElement,
  divResults: getById("display__data") as HTMLDivElement,
  divAutoComplete: getById("display__autocomplete") as HTMLDivElement,
  divNavigationButtons: getById("navigation__buttons") as HTMLDivElement,
};

export default DomElements;
