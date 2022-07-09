const errorImageSrc = "../../../assets/error.svg";

const errorMessages: { [index: number | string]: string } = {
  default: "Error",
  404: "No Pokémon found",
  500: "Server Error",
};

export function errorWithResponseCode(response: Response): string {
  const responseCode = response.status;

  const html = `<div>
  <h2>Error ${responseCode}</h2>
  <p>${errorMessages[responseCode] ?? errorMessages.default}</p>
  <img src="${errorImageSrc}" alt="X">
  </div>`;

  return html;
}
