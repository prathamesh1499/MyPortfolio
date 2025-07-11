
import Layout from '../components/Layout';

const Academic = () => {
  const degrees = [
    {
      degree: "Master of Engineering, Systems and Technology - Automation and Smart Systems",
      institution: "McMaster University",
      year: "2022 - 2024",
      // description: "Advanced coursework in algorithms, machine learning, and software engineering. Thesis on distributed systems and cloud computing.",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor of Engineering, Computer Engineering",
      institution: "University of Mumbai",
      year: "2017 - 2021",
      //description: "Comprehensive foundation in programming, data structures, database systems, and software development methodologies.",
      gpa: "9.07/10.0"
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Academic Background</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {degrees.map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">{item.degree}</h2>
                <span className="text-blue-600 font-semibold text-lg">{item.year}</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl text-gray-600 mb-2 md:mb-0">{item.institution}</h3>
                <span className="text-green-600 font-medium">GPA: {item.gpa}</span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {index === 0 ? (
                  // Master's degree tags
                  ['AI/ML Fundamentals', 'Deep Learning', 'Multivariate Statistical Methods for Big Data', 'Cloud Computing', 'Data Analysis', 'IoT'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))
                ) : (
                  // Bachelor's degree tags
                  ['Machine Learning', 'NLP', 'Big Data Analytics', 'Data Structures and Advanced Algorithms', 'DBMS', 'Software Engineering.'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Academic;
