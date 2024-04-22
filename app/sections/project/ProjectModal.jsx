import Image from 'next/image';
import Loading from "app/loading";
import { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ProjectModal = ({ project, index, closeModal, loadedStates, handleImageLoad }) => {

    useEffect(() => {
        const options = {
            Carousel: {
                infinite: false,
            },
            Toolbar: {
                display: {
                    left: ["infobar"],
                    middle: [
                        "zoomIn",
                        "zoomOut",
                        "toggle1to1",
                        "toggleZoom",
                        "panLeft",
                        "panRight",
                        "panUp",
                        "panDown",
                        "rotateCCW",
                        "rotateCW",
                        "flipX",
                        "flipY",
                        "fitX",
                        "fitY",
                        "reset",
                        "toggleFS"
                    ],
                    right: ["slideshow", "download", "thumbs", "close"],
                },
            },
        };

        Fancybox.bind("[data-fancybox]", options);

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
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
                                {/* {!loadedStates[index] && <Loading />} */}
                                {project.image_list.map((image, index) => (
                                    <a key={index} href={image} className={index !== 0 ? "hover-show hidden" : "hover-show"} data-fancybox data-caption={project.name ?? ""}>
                                        <span className='show-text'>Click here to see details</span>
                                        <img onLoad={() => handleImageLoad(index)} src={image} className="rounded" alt="" />
                                    </a>
                                ))}
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
    );
};

export default ProjectModal;
