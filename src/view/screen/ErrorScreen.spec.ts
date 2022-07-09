import { errorScreen } from "./ErrorScreen";

describe("Error Screen tests", () => {
  it.each([400, 404, 500, 501])("should render the error screen", (code) => {
    const response = { status: code };
    const html = errorScreen(response);

    expect(html).toMatchSnapshot();
  });
});
