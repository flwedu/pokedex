import { ErrorScreen } from "./";

describe("Error Screen tests", () => {
  it.each([400, 404, 500, 501])("should render the error screen", (code) => {
    const response = { status: code };
    const screen = new ErrorScreen();
    const html = screen.getHtml(response);

    expect(html).toMatchSnapshot();
  });
});
