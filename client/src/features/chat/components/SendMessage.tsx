import { useEffect, useState, useCallback } from "react";
import { useWebSocketActions } from "../hooks/useWebSocketActions";
import { useAuthUser } from "@/features/auth";

export const SendMessage = () => {
	const { connect, sendMessage, messages, isConnected, disconnect } =
		useWebSocketActions();
	const [inputMessage, setInputMessage] = useState("");

	const { authUser } = useAuthUser();

	// Memoize the connect and disconnect functions
	const stableConnect = useCallback(connect, []);
	const stableDisconnect = useCallback(disconnect, []);

	useEffect(() => {
		if (authUser && authUser._id) {
			stableConnect(
				`ws://26.246.132.2:8000/messages/send-message/${authUser._id}`
			);
		}
		return () => stableDisconnect();
	}, [authUser, stableConnect, stableDisconnect]);

	const handleSend = () => {
		if (inputMessage.trim()) {
			sendMessage({ message: inputMessage, to_user: 38 }); // Adjust `to_user` as required
			setInputMessage("");
		}
	};

	return (
		<div>
			<h2>WebSocket Example</h2>
			<div>
				{messages.map((msg, index) => (
					<p key={index}>{msg.message}</p>
				))}
			</div>
			<input
				type="text"
				value={inputMessage}
				onChange={e => setInputMessage(e.target.value)}
				placeholder="Type your message"
			/>
			<button onClick={handleSend} disabled={!isConnected}>
				Send
			</button>
			{!isConnected && <p>Connecting...</p>}
		</div>
	);
};
