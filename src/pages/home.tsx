import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/placeholder.svg"
              alt="Your Profile"
              className="w-48 h-48 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white"
            />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Prathamesh Joshi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Learning AI | Data Science | Machine Learning
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Welcome to my portfolio. To know more about me, please navigate through the sections below or at the top of the page.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { name: 'About Me', path: '/about' },
              { name: 'Academic', path: '/academic' },
              { name: 'Projects', path: '/projects' },
              { name: 'Experience', path: '/experience' },
              { name: 'Resume', path: '/resume' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <span className="text-gray-700 font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
