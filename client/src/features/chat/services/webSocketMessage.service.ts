import { TSendMessageDTO } from "../types";

let websocket: WebSocket | null = null;

export const connectWebSocket = (
	url: string,
	onMessage: (message: TSendMessageDTO) => void
) => {
	if (!websocket || websocket.readyState !== WebSocket.OPEN) {
		websocket = new WebSocket(url);

		websocket.onopen = () => console.log("WebSocket connected");

		websocket.onmessage = event => {
			console.log("MESSAGE SENT");

			const data = JSON.parse(event.data);
			onMessage(data);
		};

		websocket.onclose = () => {
			console.log("WebSocket disconnected");
			websocket = null;
		};

		websocket.onerror = error => {
			console.error("WebSocket error:", error);
		};
	}
};

export const sendWebSocketMessage = (message: TSendMessageDTO) => {
	if (websocket?.readyState === WebSocket.OPEN) {
		console.log("SENT DONE.");

		websocket.send(JSON.stringify(message));
	} else {
		console.error("WebSocket is not connected");
	}
};

export const disconnectWebSocket = () => {
	if (websocket) {
		websocket.close();
		websocket = null;
	}
};
