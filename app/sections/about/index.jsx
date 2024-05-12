"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>Hello, I m Jack Lee, a web developer experienced in <b>PHP</b>, <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. I graduated from Ho Chi Minh City College of Information Technology with a major in Information Technology.</p>
						<p className="my-3.5">Throughout my time at college, I cultivated a deep passion for web development and always sought opportunities to learn and grow in this field.</p>
						<p>I officially began my programming journey in 2023 as a PHP developer. Passion and a willingness to learn have always been my main driving forces, and I constantly strive to improve my skills and knowledge in web programming.</p>
						<p className="my-3.5">With experience in building and maintaining web applications, I am confident in my ability to tackle technical challenges and work effectively in a team environment.</p>
						<p>My goal is not only to enhance my personal skills but also to contribute to the development of projects or organizations I am involved in. I am always seeking opportunities to apply new knowledge and continue to grow in this field.</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
