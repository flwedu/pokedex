class NotFoundError extends Error {
	constructor(message: string = "Pokémon not found") {
		super(message);
		this.name = "NotFoundError";
	}
}

class BadRequestError extends Error {
	constructor(message: string = "Bad request") {
		super(message);
		this.name = "BadRequestError";
	}
}

class InternalServerError extends Error {
	constructor(message: string = "Internal server error") {
		super(message);
		this.name = "InternalServerError";
	}
}

const statusErrors: Record<number, Error> = {
	400: new BadRequestError(),
	404: new NotFoundError(),
	500: new InternalServerError(),
};

export { NotFoundError, BadRequestError, InternalServerError, statusErrors };
