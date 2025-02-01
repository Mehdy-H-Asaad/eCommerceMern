import MainTitle from "@/components/MainTitle";
import { FaLinkedin } from "react-icons/fa6";
import { ourTeamData } from "../data";

export const OurTeam = () => {
	return (
		<div className="pb-primary">
			<MainTitle title="Our Team" addClasses="text-center mb-10" />
			<div className="container">
				<div className="flex flex-col items-center md:flex-row justify-center gap-20">
					{ourTeamData.map(team => (
						<div
							key={team.id}
							className="flex flex-col gap-1 group cursor-pointer"
						>
							<img
								src={team.profileImg}
								className="size-96 rounded-xl object-cover"
								alt=""
							/>
							<div className="mt-1">
								<div className="flex items-center justify-between">
									<div className="font-[600] text-lg">{team.name}</div>
									<a
										className="duration-200 group-hover:t"
										target="_blank"
										href={team.linkedInLink}
									>
										<FaLinkedin
											size={26}
											className="cursor-pointer duration-300 hover:text-[#0048b5] text-[#0077B5]"
										/>
									</a>
								</div>
								<div className="font-[500] text-sm">{team.jobTitle}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
