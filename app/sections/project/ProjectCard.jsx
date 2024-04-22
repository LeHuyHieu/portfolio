// import Image from 'next/image';

const ProjectCard = ({ project, index, openModal }) => {

    return (
        <div key={index} className="card shadow-lg rounded p-3 border border-neutral-200 hover:shadow-sm transition duration-300">
            <div className="card-body mb-4 min-h-72">
                <div className="card-image mb-2">
                    <img src={project.image} className="rounded" alt="" />
                </div>
                <div className="card-content">
                    <h3 className="text-2xl font-medium">{project.name}</h3>
                    <p>{project.desc}</p>
                </div>
            </div>
            <div className="card-footer">
                <button onClick={() => openModal(index)} className="btn px-8">View detail</button>
            </div>
        </div>
    );
};

export default ProjectCard;
