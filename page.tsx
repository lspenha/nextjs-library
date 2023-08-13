"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { fullStack } from '@/util/stack';


export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 lg:mt-20 sm:grid-cols-3 lg:gap-16">
					{fullStack.map((stack, i) => (
						<Card key={i}>
							<div
								className="p-6 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{stack.label}
									</span>
									{stack.technologies.map((technology, i) => (
									<span key={i} className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{technology}
									</span>
									))}
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
