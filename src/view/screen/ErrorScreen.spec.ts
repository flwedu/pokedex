import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from "../../util/custom-errors";
import { ErrorScreen } from "./";

describe("Error Screen tests", () => {
  it.each([
    new BadRequestError(""),
    new NotFoundError(""),
    new InternalServerError(""),
    new Error(),
  ])("should render the error screen", (error) => {
    const screen = new ErrorScreen();
    const html = screen.getHtml(error);

    expect(html).toMatchSnapshot();
  });
});
