import { create } from "zustand";
import {
	connectWebSocket,
	sendWebSocketMessage,
	disconnectWebSocket,
} from "../services/webSocketMessage.service";
import { TMessageDTO, TSendMessageDTO } from "../types";

interface WebSocketState {
	isConnected: boolean;
	messages: TMessageDTO[];
	connect: (url: string) => void;
	sendMessage: (message: TSendMessageDTO) => void;
	addMessage: (message: any) => void;
	disconnect: () => void;
}

export const useWebSocketStore = create<WebSocketState>((set, get) => ({
	isConnected: false,
	messages: [],
	connect: url => {
		connectWebSocket(url, message => {
			get().addMessage(message);
		});
		set({ isConnected: true });
	},
	sendMessage: message => {
		sendWebSocketMessage(message);
	},
	addMessage: message => {
		set(state => ({ messages: [...state.messages, message] }));
	},
	disconnect: () => {
		disconnectWebSocket();
		set({ isConnected: false });
		// console.log("Closed");
	},
}));
