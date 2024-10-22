import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard({
	width,
	height,
}: {
	width?: string;
	height: string;
}) {
	return (
		// <div className="flex flex-col space-y-3 mx-auto w-fit">
		<div className="flex flex-col gap-3">
			<Skeleton className={`${height} ${width} rounded-xl`} />
			<div className="space-y-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-1/2" />
			</div>
		</div>
		// </div>
	);
}
