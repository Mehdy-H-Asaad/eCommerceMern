export type TRefreshToekenResponseDTO = {
	accessToken: string;
};

export type TResponse<T> = {
	status: string;
	data: T;
};
