export class LoadingScreen {
	getHtml(): string {
		return `
			<div class="loading">
				<div class="loading__spinner"></div>
				<p>Loading...</p>
			</div>
		`;
	}
}
