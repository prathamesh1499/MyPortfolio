
import Layout from '../components/Layout';

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist & Analyst",
      company: "General Motors Canada",
      period: "Sep 2023 – Dec 2024",
      //description: "Lead development of web applications using React and Node.js. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Developed innovative Grafana dashboards for system monitoring data pipeline, delivering real-time data-driven insights from a 10000 + vehicle fleet dataset to stakeholders.",
        "Optimized Azure Data Explorer - KQL queries to cut dashboard load times by 45%, accelerating decision-making.",
        "Analyzed OTEL collector logs and metrics to identify trends and anomalies in vehicle control unit (VCU) microservices.",
        "Improved failure detection accuracy by 50% through threshold-based alerting using PromQL, and contributed to CI/CD pipelines using GitHub Actions and Terraform to enable agile dashboard development and automate MS Teams alerts",
        "Applied feature engineering in PySpark to extract CPU/RAM usage patterns from delta_metrics, normalizing the data to enhance the quality of input features for advanced analytics.",
        "Conducted EDA with Pandas and Plotly, and built predictive models such as AutoEncoder (TensorFlow) and Isolation Forest (Scikit-learn) on Databricks for time-series forecasting, reducing software downtime by 35%.",
        "Collaborated with cross-functional teams to visualize KPIs in Power BI and presented insights to engineering leads and product managers, resolving vehicle performance bottlenecks."
      ]
    },
    {
      title: "Volunteer and Mentor",
      company: "Indian Development Foundation",
      period: "Oct 2019 - Feb 2020",
      //description: "Worked as a Mentor to impart Student Leadership Program (SLP). Did fieldwork in the western suburbs of Mumbai by visiting more than 14 + schools to teach students Time management, public speaking, ppt development and many more",
      achievements: [
        "Taught basics of Python 500+ students in Mumbai's western suburbs, enhancing their coding skills.",
        "Conducted workshops on time management, public speaking, and presentation skills.",
        "Mentored fellow volunteers in effective teaching methods and student engagement and visited over 14 schools to implement the Student Leadership Program (SLP).",
        "Received excellent performance reviews"
      ]
    },
    {
      title: "IOS App Developer Intern",
      company: "Cognitio Knowledge Tech Pvt. LTD",
      period: "Jun 2019 – Aug 2019",
      //description: "Developed and maintained full-stack applications using modern web technologies. Worked closely with designers and product managers to create user-friendly interfaces.",
      achievements: [
        "Designed user interfaces (UI/UX) optimized for all Apple devices in Swift on Xcode, adhering to App Store guidelines.",
        "Launched Exameaze, an IOS app to aid engineering students, resulting in a 15% increase in grades.",
        "Spearheaded maintenance of student-teacher interactive pages and real-time database using Firebase as backend."
      ]
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Professional Experience</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h2>
                  <h3 className="text-xl text-blue-600 font-semibold">{exp.company}</h3>
                </div>
                <span className="text-gray-500 font-medium text-lg mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
