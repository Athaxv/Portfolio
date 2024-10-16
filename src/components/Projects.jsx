import project1 from '../assets/standardboard.png'

const Projects = () => {
  return (
    <section className="projects">
        <p className="section-text-p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
            <div className="about-containers">
            <div className="details-container color-container">
            <div className="article-container">
                <img src={project1} alt="project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
                <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href="https://github.com"}
                >
                    Github
                </button>
                {/* <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href="https://github.com"}
                >
                    Live Demo
                </button> */}
            </div>
            </div>
            {/* <div className="details-container color-container">
            <div className="article-container">
                <img src={project1} alt="project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
                <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href="https://github.com"}
                >
                    Github
                </button>
                <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href="https://github.com"}
                >
                    Live Demo
                </button>
            </div>
            </div>
            <div className="details-container color-container">
            <div className="article-container">
                <img src={project1} alt="project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
                <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href="https://github.com"}
                >
                    Github
                </button>
                <button
                className="btn btn-color-2 project-btn"
                onClick={() => location.href="https://github.com"}
                >
                    Live Demo
                </button>
            </div>
            </div> */}
            </div>
        </div>
    </section>
  )
}

export default Projects
