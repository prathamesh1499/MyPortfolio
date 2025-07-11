
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">My Story</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                I’m passionate about building and scaling end-to-end systems. 
                From model development to deployment, monitoring, and continuous improvement, I enjoy working across the stack to ensure everything 
                is not only functional but observable, reliable, and maintainable in production. I recently Graduated from McMaster University with a 
                Master of Engineering in Systems & Technology, specializing in Automation & Smart Systems. 
                I am seeking a role in Data Science, Machine Learning, or Software Development to build innovative, data-driven solutions.
                When I'm not coding, you can find me exploring the latest advancements in AI and machine learning || at the gym || watching sports. 
                Fun fact, I have discovered a passion for cooking and love experimenting with new recipes in my free time.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="About Me"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
