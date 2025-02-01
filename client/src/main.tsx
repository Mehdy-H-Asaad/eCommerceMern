import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactQueryProvider from "./services/providers/ReactQueryProvider.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import { Navbar } from "./components/layout/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ReactQueryProvider>
				<ScrollToTop />
				<Navbar />
				<App />
				<Footer />
			</ReactQueryProvider>
		</BrowserRouter>
	</React.StrictMode>
);
