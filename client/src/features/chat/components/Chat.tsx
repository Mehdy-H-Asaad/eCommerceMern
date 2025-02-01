import MainTitle from "@/components/MainTitle";
import { ScrollArea } from "@/components/ui/scroll-area";
import defaultUserImg from "../../product/assets/imgs/default-user.png";
import PageWithLinkToHome from "@/components/PageWithLinkToHome";
import { Input } from "@/components/ui/input";
import { useAuthUser } from "@/features/auth";
import { useCallback, useEffect } from "react";
import { useWebSocketActions } from "../hooks/useWebSocketActions";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
export const Chat = () => {
	const { connect, sendMessage, messages, isConnected, disconnect } =
		useWebSocketActions();

	const { authUser } = useAuthUser();

	console.log(messages);

	// Memoize the connect and disconnect functions
	const stableConnect = useCallback(connect, []);
	const stableDisconnect = useCallback(disconnect, []);

	useEffect(() => {
		if (authUser && authUser._id) {
			stableConnect(`ws://26.246.132.2:8000/messages/send-message/${38}`);
		}
		return () => stableDisconnect();
	}, [authUser, stableConnect, stableDisconnect]);

	const messageSchema = z.object({
		message: z.string().min(1, "Message is required"),
	});

	const messageForm = useForm<z.infer<typeof messageSchema>>({
		resolver: zodResolver(messageSchema),
		defaultValues: {
			message: "",
		},
	});

	const onSubmit = (data: z.infer<typeof messageSchema>) => {
		sendMessage({ ...data, receiver: 35 });
	};

	return (
		<section className="p-10 flex-[3]">
			<div className="mb-10">
				<MainTitle title="Your messages" addClasses="!text-2xl" />
				<p className="mb-2 text-sm text-muted-foreground">
					Chat with your customers and make connections
				</p>
			</div>

			<div className="border  border-gray-500 rounded-md">
				<div className="border-b border-gray-500 ">
					<MainTitle addClasses="text-lg p-4" title="Chats" />
				</div>
				<div className="flex  ">
					<ScrollArea className="h-[750px]">
						<div className="flex-1 border-r border-r-gray-500">
							<div className="flex flex-col gap-7 p-4">
								{/* MESSAGE CARD */}
								{Array.from({ length: 14 }).map((_, index) => (
									<div key={index} className="flex items-center gap-4">
										<img
											src={defaultUserImg}
											className="size-14 rounded-[50%] border "
											alt=""
										/>
										<div>
											<div className="font-[600]">Mehdy Asaad</div>
											<p className="overflow-hidden whitespace-normal text-ellipsis max-w-36 text-sm line-clamp-2">
												Hi Mohsin Thank you for your message but sorry I’m not a
												recruiter I don’t know any job opportunities for you rn
												Good luck!
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</ScrollArea>

					{/* MESSAGES SECOND FLEX*/}
					<div className="flex-[4]">
						<div className="flex gap-x-2 p-4 border-b border-b-gray-500 ">
							<img
								src={defaultUserImg}
								className="size-10 rounded-[50%] border "
								alt=""
							/>
							<div>
								<div className="font-[600]">Mehdy Asaad</div>
								<p className="text-sm text-gray-500">
									Joined on October 12, 2024
								</p>
							</div>
						</div>
						<ScrollArea className="h-[600px]">
							<div className="flex flex-col my-4">
								{messages.map((msg, index) => (
									<>
										<div className="bg-[#f2f2f2] p-4 text-sm font-[500] rounded-md w-fit mr-auto ml-4">
											{msg.message}
										</div>
										<div className="bg-green-400 p-4 text-sm font-[500] rounded-md w-fit ml-auto mr-4">
											I am good what about you
										</div>
									</>
								))}
							</div>
						</ScrollArea>
						<div className="p-4">
							<Form {...messageForm}>
								<form onSubmit={messageForm.handleSubmit(onSubmit)}>
									<FormField
										control={messageForm.control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														{...field}
														placeholder="Type a message..."
														className="bg-[#f2f2f2] "
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</form>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
