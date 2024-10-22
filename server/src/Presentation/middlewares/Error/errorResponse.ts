export default class ErrorResponse extends Error {
	status: string;
	statusCode: number;
	constructor(status: string, message: string, statusCode: number) {
		super(message);
		this.status = status;
		this.statusCode = statusCode;
	}
}
