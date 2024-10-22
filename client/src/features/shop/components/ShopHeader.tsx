import MainTitle from "@/components/MainTitle";
import PageWithLinkToHome from "@/components/PageWithLinkToHome";

export const ShopHeader = () => {
	return (
		<div className="my-20">
			<MainTitle title="Discover our products" addClasses="text-center" />
			<PageWithLinkToHome specificPath="Shop" />;
		</div>
	);
};
