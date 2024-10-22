import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Signup from "./pages/Signup";
import { Login } from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { ProductPage } from "./pages/ProductPage";
import Shop from "./pages/Shop";
import { DashboardNavbar } from "./features/dashboard/shared/layout/DashboardNavbar";
import { DashboardHomePage } from "./pages/dashboard/DashboardHomePage";
import { DashboardSidebar } from "./features/dashboard/shared/layout/DashboardSidebar";
import { DashboardProductsPage } from "./pages/dashboard/products/DashboardProductsPage";
import { DashboardCreateProductPage } from "./pages/dashboard/products/DashboardCreateProductPage";
import { useAuthUser } from "./features/auth/hooks/useAuthUser";
import { DashboardProductInfoPage } from "./pages/dashboard/products/DashboardProductInfo";
import { UserProductsPage } from "./pages/UserProductsPage";

function App() {
	const location = useLocation();
	const isDashboardPage = location.pathname.startsWith("/dashboard");

	const { authUser } = useAuthUser();

	return (
		<>
			{!isDashboardPage && (
				<>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<Route path="/products/:id" element={<ProductPage />} />
						<Route path="/shop" element={<Shop />} />
						<Route path="/user/:id" element={<UserProductsPage />} />
					</Routes>
					<Footer />
				</>
			)}

			{isDashboardPage && authUser && (
				<>
					<DashboardNavbar />
					<div className="flex container">
						<DashboardSidebar />
						<Routes>
							<Route path="/dashboard" element={<DashboardHomePage />} />
							<Route
								path="/dashboard/products/list-products"
								element={<DashboardProductsPage />}
							/>
							<Route
								path="/dashboard/products/create-product"
								element={<DashboardCreateProductPage />}
							/>
							<Route
								path="/dashboard/products/:id"
								element={<DashboardProductInfoPage />}
							/>
						</Routes>
					</div>
				</>
			)}
			<Toaster />
		</>
	);
}

export default App;
