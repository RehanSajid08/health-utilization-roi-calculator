
import React from 'react';
import { useCalculator } from '@/contexts/CalculatorContext';
import CalculatorIntro from './CalculatorIntro';
import CalculatorForm from './CalculatorForm';
import CalculatorResults from './CalculatorResults';

const Calculator: React.FC = () => {
  const { step } = useCalculator();

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= stepNumber
                    ? 'bg-zyter-blue text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
              <span
                className={`mt-2 text-sm ${
                  step >= stepNumber ? 'text-zyter-blue font-medium' : 'text-gray-500'
                }`}
              >
                {stepNumber === 1
                  ? 'Introduction'
                  : stepNumber === 2
                  ? 'Your Data'
                  : 'Results'}
              </span>
            </div>
          ))}
        </div>
        
        <div className="relative mt-3">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-zyter-blue transition-all"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 1 && <CalculatorIntro />}
      {step === 2 && <CalculatorForm />}
      {step === 3 && <CalculatorResults />}
    </div>
  );
};

export default Calculator;
