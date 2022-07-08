const errorImageSrc = "../../../assets/error.svg";

const errorMessages = new Map();
errorMessages.set("default", "Error");
errorMessages.set("404", "No Pokémon found");
errorMessages.set("500", "Server Error");

export function errorWithResponseCode(response: Response): string {
  const parentElement = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");

  h2.textContent = `Error ${response.status}`;
  p.textContent = `${
    errorMessages.get(response.status.toString()) ||
    errorMessages.get("default")
  }`;
  img.src = errorImageSrc;

  parentElement.append(h2, p, img);

  return parentElement.innerHTML;
}
