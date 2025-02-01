import { useWebSocketStore } from "../store/web-socket.store";

export const useWebSocketActions = () => {
	const connect = useWebSocketStore(state => state.connect);
	const sendMessage = useWebSocketStore(state => state.sendMessage);
	const messages = useWebSocketStore(state => state.messages);
	const isConnected = useWebSocketStore(state => state.isConnected);
	const disconnect = useWebSocketStore(state => state.disconnect);

	return { connect, sendMessage, messages, isConnected, disconnect };
};
