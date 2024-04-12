"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";
import { SOCIAL_MEDIA } from "../constants";

export function ConnectMedia() {
	return (
		<LazyMotion features={domAnimation}>
			<m.nav className="left-0 lg:fixed inset-y-0" role="menu" initial={initial} animate={animate} exit={exit} transition={transition}>
				<ul className="flex items-center lg:flex-col lg:justify-center lg:h-screen lg:px-5 gap-5 flex">
					{SOCIAL_MEDIA.map((item) => (
						<li key={item.id}>
							<a
								href={item.url}
								target="_blank"
								aria-label={item.title}
								title={item.title}
								className="text-2xl"
							>
								{item.icon}
							</a>
						</li>
					))}
				</ul>
			</m.nav>
		</LazyMotion>
	);
}
