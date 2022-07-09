const getById = (id: string) => document.getElementById(id);

const DomElements = {
  inputSearch: getById("input__search") as HTMLInputElement,
  divData: getById("display__data") as HTMLDivElement,
  divAutoComplete: getById("display__autocomplete") as HTMLDivElement,
};

export default DomElements;
