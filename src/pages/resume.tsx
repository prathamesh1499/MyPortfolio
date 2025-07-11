
import Layout from '../components/Layout';

const Resume = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Resume</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Download PDF
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300">
              Print Resume
            </button>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg">
                Your PDF resume will be embedded here. To add your resume:
              </p>
              <ol className="text-left max-w-2xl mx-auto mt-6 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  Upload your PDF resume file to the project
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  Replace the placeholder with an iframe or embed element
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  Update the download button to link to your PDF file
                </li>
              </ol>
            </div>

            {/* Placeholder for PDF embed */}
            <div className="bg-gray-100 rounded-lg p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Resume PDF Preview</h3>
                <p className="text-gray-500">
                  Once you upload your resume PDF, it will be displayed here for easy viewing and downloading.
                </p>
              </div>
            </div>

            {/* Example of how to embed a PDF when you have one */}
            {/* 
            <iframe
              src="/path-to-your-resume.pdf"
              width="100%"
              height="800px"
              className="border-0 rounded-lg"
              title="Resume PDF"
            />
            */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
