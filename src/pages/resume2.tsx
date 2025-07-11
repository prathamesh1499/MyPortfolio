
import Layout from '../components/Layout';

const Resume = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Resume</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <div className="flex justify-center gap-4">
            <a 
              href="/resume.pdf" 
              download
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
              Download PDF
            </a>
            <button 
              onClick={() => window.print()}
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
            >
              Print Resume
            </button>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <iframe
              src="/Prathamesh_Resume.pdf"
              width="100%"
              height="800px"
              className="border-0 rounded-lg"
              title="Resume PDF"
            />
          </div>
        </div>
      </div>A
    </Layout>
  );
};

export default Resume;
