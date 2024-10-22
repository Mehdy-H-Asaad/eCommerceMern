import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

type TPageWithLinkToHome = {
	basePath?: string;
	basePathUrl?: string;
	specificPath: string;
};

const PageWithLinkToHome = ({
	basePath,
	specificPath,
	basePathUrl,
}: TPageWithLinkToHome) => {
	return (
		<div className="mt-5 flex items-center justify-center gap-4 font-[500] uppercase">
			<Link className="link link-black flex items-center" to={`/`}>
				Home
			</Link>

			{basePath ? (
				<>
					<MdKeyboardArrowRight />
					<Link
						className="link link-black flex items-center"
						to={`/${basePathUrl}`}
					>
						{basePath}
					</Link>
				</>
			) : (
				""
			)}
			<MdKeyboardArrowRight />
			<h3> {specificPath}</h3>
		</div>
	);
};

export default PageWithLinkToHome;
