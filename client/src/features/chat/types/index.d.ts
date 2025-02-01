export type TMessageDTO = {
	id: number;
	sender: number;
	receiver: number;
	message: string;
	created_At: string;
};

export type TSendMessageDTO = Pick<TMessageDTO, "receiver" | "message">;
