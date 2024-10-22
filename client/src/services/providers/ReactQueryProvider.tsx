import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type TQueryProvider = {
	children: React.ReactNode;
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const ReactQueryProvider = ({ children }: TQueryProvider) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default ReactQueryProvider;
