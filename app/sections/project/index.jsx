// import { domAnimation, LazyMotion } from "framer-motion";
// import { HeadingDivider } from "components";
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { PROJECTS } from "../../../constants";
// import Loading from "app/loading";
// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// export function ProjectsSection() {

// 	const [modalStates, setModalStates] = useState(Array(PROJECTS.length).fill(false));
// 	const [loadedStates, setLoadedStates] = useState(Array(PROJECTS.length).fill(false));

// 	const openModal = (index) => {
// 		const newModalStates = [...modalStates];
// 		newModalStates[index] = true;
// 		setModalStates(newModalStates);
// 	};

// 	const closeModal = (index) => {
// 		const newModalStates = [...modalStates];
// 		newModalStates[index] = false;
// 		setModalStates(newModalStates);
// 	};

// 	const handleImageLoad = (index) => {
//         const newLoadedStates = [...loadedStates];
//         newLoadedStates[index] = true;
//         setLoadedStates(newLoadedStates);
//     };

// 	useEffect(() => {
//         const options = {
//             Carousel: {
//                 infinite: false,
//             },
//             Toolbar: {
//                 display: {
//                     left: ["infobar"],
//                     middle: [
//                         "zoomIn",
//                         "zoomOut",
//                         "toggle1to1",
//                         "toggleZoom",
//                         "panLeft",
//                         "panRight",
//                         "panUp",
//                         "panDown",
//                         "rotateCCW",
//                         "rotateCW",
//                         "flipX",
//                         "flipY",
//                         "fitX",
//                         "fitY",
//                         "reset",
//                         "toggleFS"
//                     ],
//                     right: ["slideshow", "download", "thumbs", "close"],
//                 },
//             },
//         };

//         Fancybox.bind("[data-fancybox]", options);

//         return () => {
//             Fancybox.destroy();
//         };
//     }, []);

// 	return (
// 		<LazyMotion features={domAnimation}>
// 			<section id="projects" className="section">
// 				<HeadingDivider title="Latest projects" />
// 				<div className="h-10 md:h-14" />
// 				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{PROJECTS.map((project, index) => (
// 						<div key={index} className="card shadow-lg rounded p-3 border border-neutral-200 hover:shadow-sm transition duration-300">
// 						<div className="card-body mb-4 min-h-72">
// 							<div className="card-image mb-2">
// 								<a href={'http://localhost:3000/assets/projects/screencapture-new-php-full.png'} data-fancybox data-caption={project.name ?? ""}>
// 									<Image src={project.image} className="rounded" alt="" />
// 								</a>
// 								<a href={'http://localhost:3000/assets/projects/screencapture-new-php-full.png'} data-fancybox data-caption={project.name ?? ""}>
// 									<Image src={project.image} style={{width: 'auto', height: 100, objectFit: 'cover'}} className="d-none" />
// 								</a>
// 								<a href={'http://localhost:3000/assets/projects/screencapture-new-php-full.png'} data-fancybox data-caption={project.name ?? ""}>
// 									<Image src={project.image} style={{width: 'auto', height: 100, objectFit: 'cover'}} className="d-none" />
// 								</a>
// 							</div>
// 							<div className="card-content">
// 								<h3 className="text-2xl font-medium">{project.name}</h3>
// 								<p>{project.desc}</p>
// 							</div>
// 						</div>
// 						<div className="card-footer">
// 							<button onClick={() => openModal(index)} className="btn px-8">View detail</button>
// 						</div>
// 						{modalStates[index] && (
// 							<div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 overflow-y-scroll hide-scroll-bar">
// 								<div className="flex items-center justify-center min-h-screen">
// 									<div className="relative p-4 w-full max-w-5xl max-h-full">
// 										<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
// 											<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
// 												<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
// 													{project.name}
// 												</h3>
												
// 												<button onClick={() => closeModal(index)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
// 													<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
// 														<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
// 													</svg>
// 													<span className="sr-only">Close modal</span>
// 												</button>
// 											</div>
// 											<div className="p-4 md:p-5 space-y-4">
// 												<div className="card-image pic mb-2">
// 													{!loadedStates[index]  && <Loading />}
// 													<Image onLoad={() => handleImageLoad(index)} src={project.image_scroll} className="rounded" alt="" />
// 												</div>
// 												<ul className="list-disc pl-6">
// 													{project.main_features.map((main_feature, featureIndex) => (
// 														<li key={featureIndex}>
// 															{main_feature}
// 														</li>
// 													))}
// 												</ul>
// 											</div>
// 											<div className="flex items-center justify-end p-4">
// 												<button onClick={() => closeModal(index)} className="btn bg-rose-600 hover:bg-rose-700">Close</button>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						)}
// 						</div>
// 					))}
// 				</div>
// 			</section>
// 		</LazyMotion>
// 	);
// }

import { domAnimation, LazyMotion } from "framer-motion";
import { HeadingDivider } from "components";
import { useState, useEffect, Fragment } from 'react';
import { PROJECTS } from "../../../constants";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export function ProjectsSection() {
    const [modalStates, setModalStates] = useState(Array(PROJECTS.length).fill(false));
    const [loadedStates, setLoadedStates] = useState(Array(PROJECTS.length).fill(false));

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

    const handleImageLoad = (index) => {
        const newLoadedStates = [...loadedStates];
        newLoadedStates[index] = true;
        setLoadedStates(newLoadedStates);
    };

    useEffect(() => {
        // Effect for Fancybox setup
        return () => {
            // Cleanup for Fancybox
        };
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <section id="projects" className="section">
                <HeadingDivider title="Latest projects" />
                <div className="h-10 md:h-14" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <Fragment key={index}>
                            <ProjectCard project={project} index={index} openModal={openModal} />
                            {modalStates[index] && (
                                <ProjectModal
                                    project={project}
                                    index={index}
                                    closeModal={closeModal}
                                    loadedStates={loadedStates}
                                    handleImageLoad={handleImageLoad}
                                />
                            )}
                        </Fragment>
                    ))}
                </div>
            </section>
        </LazyMotion>
    );
}
