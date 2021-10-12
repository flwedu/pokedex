import AutoCompleteService from "../../js/service/AutoCompleteService";

const rawData = {
  1: {
    id: 1,
    name: "Bulbasaur",
  },
  2: {
    id: 2,
    name: "Ivysaur",
  },
  3: {
    id: 3,
    name: "Venusaur",
  },
};

const expectedData = ["bulbasaur", "ivysaur", "venusaur"];
const service = new AutoCompleteService();

describe("Creates the AutoCompleteService", () => {
  test("the created object is a AutoCompleteService instance", () => {
    expect(service).toBeInstanceOf(AutoCompleteService);
  });
});

describe("Methods are working", () => {
  test("extractPropertiesToArray", () => {
    const serviceReturnedArray = [...service.extractPropertiesToArray(rawData)];

    expect(serviceReturnedArray.length).toBe(expectedData.length);
    expect(serviceReturnedArray.toString()).toBe(expectedData.toString());
  });
});
