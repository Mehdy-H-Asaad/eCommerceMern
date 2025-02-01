import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import accordionImg from "../assets/imgs/accordion.jpg";
import MainTitle from "@/components/MainTitle";
import { ACCORDION_DATA } from "../index";

export const FAQs = () => {
	return (
		<div className="my-primary">
			<div className="container">
				<div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
					<Accordion type="single" collapsible className="flex-1 w-full">
						<MainTitle title="FAQs" addClasses="mb-8" />
						{ACCORDION_DATA.map(ele => {
							return (
								<AccordionItem key={ele.id} value={`item-${ele.id}`}>
									<AccordionTrigger className="w-full text-left">
										Q: {ele.question}
									</AccordionTrigger>
									<AccordionContent className="w-full text-base">
										A: {ele.answer}
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>

					<img
						src={accordionImg}
						className="size-[400px] flex-1 object-contain"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
