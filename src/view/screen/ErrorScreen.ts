export class ErrorScreen {
	getHtml(error: Error): string {
		const { name: title, message } = error;

		return `
			<div class="error-screen">
				<img class="error-screen__img" src="/assets/error.svg" alt="Error">
				<span class="error-screen__title">${title}</span>
				<p class="error-screen__msg">${message}</p>
			</div>
		`;
	}
}
