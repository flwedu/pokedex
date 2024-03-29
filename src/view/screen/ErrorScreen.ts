const errorImageSrc = "../../../assets/error.svg";

function errorScreen(error: Error): string {
  const { name: title, message } = error;

	return `<div class="container">
  <h2>${title}</h2>
  <p>${message}</p>
  <img src="${errorImageSrc}" alt="X">
  </div>`;
}

export class ErrorScreen {
  getHtml(error: Error): string {
    return errorScreen(error);
  }
}
