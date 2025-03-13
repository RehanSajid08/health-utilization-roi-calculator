
import React from 'react';
import { useCalculator } from '@/contexts/CalculatorContext';
import { ArrowRight } from 'lucide-react';

const CalculatorIntro: React.FC = () => {
  const { setStep } = useCalculator();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="gradient-blue px-6 py-10 text-white">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Population Health Utilization Management ROI Calculator
        </h2>
        <p className="mb-3 text-white/90">
          Discover how Zyter's Population Health Utilization Management solutions can transform your healthcare organization's performance and financial outcomes.
        </p>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-zyter-lightblue rounded-lg p-5">
            <h3 className="text-lg font-bold text-zyter-blue mb-3">
              Why Use This Calculator?
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
                <span>Project potential cost savings from reduced readmissions</span>
              </li>
              <li className="flex items-start">
                <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
                <span>Analyze impact on emergency department utilization</span>
              </li>
              <li className="flex items-start">
                <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
                <span>Estimate implementation costs and ROI timeline</span>
              </li>
              <li className="flex items-start">
                <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
                <span>Visualize metrics for executive presentations</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-zyter-lightblue rounded-lg p-5">
            <h3 className="text-lg font-bold text-zyter-blue mb-3">
              What You'll Need
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
                <span>Current member/patient population size</span>
              </li>
              <li className="flex items-start">
                <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
                <span>Chronic condition prevalence rates</span>
              </li>
              <li className="flex items-start">
                <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
                <span>Hospital readmission rates</span>
              </li>
              <li className="flex items-start">
                <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
                <span>Emergency department utilization data</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg mb-6">
          <h3 className="text-lg font-bold text-zyter-darkgray mb-2">
            How We Calculate Your ROI
          </h3>
          <p className="text-sm text-gray-600">
            Our ROI model is based on extensive research and real-world implementation data from healthcare organizations using Zyter's Population Health Utilization Management solutions. We analyze your current metrics and apply industry-standard improvement rates that Zyter clients typically achieve within 12-18 months of implementation.
          </p>
        </div>
        
        <div className="text-center mt-8">
          <button
            onClick={() => setStep(2)}
            className="zyter-btn flex items-center justify-center mx-auto text-lg"
          >
            Start Your ROI Calculation <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <p className="text-sm text-gray-500 mt-3">
            No personal information required. Results are for estimation purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorIntro;
