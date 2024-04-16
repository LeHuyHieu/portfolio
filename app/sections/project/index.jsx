import { domAnimation, LazyMotion } from "framer-motion";
import { HeadingDivider } from "components";
import { useState } from 'react';
import Image from 'next/image';
import { PROJECTS } from "../../../constants";

// import fullscreen from '../../../public/screenshot.png';

export function ProjectsSection() {

	const [modalStates, setModalStates] = useState(Array(PROJECTS.length).fill(false));

	const openModal = (index) => {
		const newModalStates = [...modalStates];
		newModalStates[index] = true;
		setModalStates(newModalStates);
	};

	const closeModal = (index) => {
		const newModalStates = [...modalStates];
		newModalStates[index] = false;
		setModalStates(newModalStates);
	};

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{PROJECTS.map((project, index) => (
						<div key={index} className="card shadow-lg rounded p-3 border border-neutral-200 hover:shadow-sm transition duration-300">
						<div className="card-body mb-4 min-h-72">
							<div className="card-image mb-2">
								<Image src={project.image} className="rounded" alt="" />
							</div>
							<div className="card-content">
								<h3 className="text-2xl font-medium">{project.name}</h3>
								<p>{project.desc}</p>
							</div>
						</div>
						<div className="card-footer">
							<button onClick={() => openModal(index)} className="btn px-8">View detail</button>
						</div>
						{modalStates[index] && (
							<div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 overflow-y-scroll hide-scroll-bar">
								<div className="flex items-center justify-center min-h-screen">
									<div className="relative p-4 w-full max-w-5xl max-h-full">
										<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
											<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
												<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
													{project.name}
												</h3>
												<button onClick={() => closeModal(index)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
													<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
														<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
													</svg>
													<span className="sr-only">Close modal</span>
												</button>
											</div>
											<div className="p-4 md:p-5 space-y-4">
												<div className="card-image pic mb-2">
													<Image src={project.image_scroll} className="rounded" alt="" />
												</div>
												<ul className="list-disc pl-6">
													{project.main_features.map((main_feature, featureIndex) => (
														<li key={featureIndex}>
															{main_feature}
														</li>
													))}
												</ul>
											</div>
											<div className="flex items-center justify-end p-4">
												<button onClick={() => closeModal(index)} className="btn bg-rose-600 hover:bg-rose-700">Close</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
						</div>
					))}
				</div>
			</section>
		</LazyMotion>
	);
}

