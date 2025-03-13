
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Calculator from '@/components/calculator/Calculator';
import { CalculatorProvider } from '@/contexts/CalculatorContext';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-zyter-gray py-12">
          <div className="zyter-container">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-zyter-darkgray mb-4">
                Population Health Utilization Management ROI Calculator
              </h1>
              <p className="text-lg text-zyter-text">
                Discover how much your organization could save with Zyter's population health utilization management solutions.
              </p>
            </div>
            
            <CalculatorProvider>
              <Calculator />
            </CalculatorProvider>
          </div>
        </div>
        
        <div className="bg-white py-12">
          <div className="zyter-container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-zyter-lightblue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></path>
                    <path d="M9 1h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zyter-darkgray mb-2">Population Analytics</h3>
                <p className="text-zyter-text">Advanced analytics to identify high-risk members and drive targeted interventions.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-zyter-lightblue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 9.5V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4.5"></path>
                    <path d="M2.5 10.5h5l.75 1.5H8.5l.75-1.5h11.25a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zyter-darkgray mb-2">Care Coordination</h3>
                <p className="text-zyter-text">Streamlined care coordination tools to enhance provider collaboration and patient outcomes.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-zyter-lightblue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0071ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zyter-darkgray mb-2">Utilization Optimization</h3>
                <p className="text-zyter-text">Smart algorithms to optimize resource utilization and reduce unnecessary services.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="gradient-blue py-12">
          <div className="zyter-container text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Population Health Management?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our team to learn how Zyter's solutions can help your organization improve outcomes and reduce costs.
            </p>
            <a href="#" className="inline-block bg-white text-zyter-blue px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
