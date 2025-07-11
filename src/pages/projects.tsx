
import Layout from '../components/Layout';

const Projects = () => {
  const projects = [
    {
      title: "Facial Attribute Recognition",
      description: "Implemented transfer learning using Python, TensorFlow and Keras to detect 40 facial attributes on Kaggle’s CelebA data.",
      technologies: ["Python", "EDA", "TensorFlow", "Keras", "OpenCV", "Kaggle - CelebA dataset"],
      link: "https://github.com/prathamesh1499/McMaster_Projects2022-2024/tree/main/Deep%20Learning",
      image: "/placeholder.svg"
    },
    {
      title: "Predicting Credit Risk on Bank Data",
      description: "Developed a Binary Classification model using Python and Scikit-learn to predict customer credit risk to the bank.",
      technologies: ["Python", "PCA", "T-SNE", "EDA", "SMOTE", "ROC curve", "F1 score"],
      link: "https://github.com/prathamesh1499/McMaster_Projects2022-2024/tree/main/Multivariate%20Stats",
      image: "/placeholder.svg"
    },
    {
      title: "Depth Estimation of Martian Surface using ISRO’s MARS Color Camera Images",
      description: "Leveraged ISRO's Mars Images captured from satellite and GANs, to estimate the Depth of the surface, valleys, canyon systems.",
      technologies: ["Python", "PyTorch", "Albumentations", "Gradio", "C#"],
      link: "https://github.com/prathamesh1499/Depth-Estimation-of-Martian-Surface-using-ISRO-s-MARS-Color-Camera-Images",
      image: "/placeholder.svg"
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
