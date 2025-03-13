
import React from 'react';
import { useCalculator } from '@/contexts/CalculatorContext';
import { ArrowLeft, ArrowRight, Activity, Users, DollarSign, Heart, AlertTriangle, Building } from 'lucide-react';

const CalculatorForm: React.FC = () => {
  const { inputs, setInputs, setStep, calculateResults } = useCalculator();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value === '' ? '' : Number(value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateResults();
  };

  const formatNumberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="gradient-blue px-6 py-6 text-white">
        <h2 className="text-white text-2xl font-bold mb-2">
          Enter Your Healthcare Organization Data
        </h2>
        <p className="text-white/90">
          Provide your current metrics to calculate potential ROI with Zyter's solutions
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-1">
            <label htmlFor="membersCount" className="flex items-center font-medium text-zyter-darkgray">
              <Users className="h-4 w-4 mr-2 text-zyter-blue" />
              Total Member/Patient Population
            </label>
            <input
              id="membersCount"
              name="membersCount"
              type="number"
              min="1000"
              required
              value={inputs.membersCount}
              onChange={handleInputChange}
              className="zyter-input"
              placeholder="e.g. 100,000"
            />
            <p className="text-xs text-gray-500">Total number of members/patients in your organization</p>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="chronicConditionRate" className="flex items-center font-medium text-zyter-darkgray">
              <Heart className="h-4 w-4 mr-2 text-zyter-blue" />
              Chronic Condition Rate (%)
            </label>
            <input
              id="chronicConditionRate"
              name="chronicConditionRate"
              type="number"
              min="1"
              max="100"
              required
              value={inputs.chronicConditionRate}
              onChange={handleInputChange}
              className="zyter-input"
              placeholder="e.g. 20"
            />
            <p className="text-xs text-gray-500">Percentage of members with one or more chronic conditions</p>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="hospitalReadmissionRate" className="flex items-center font-medium text-zyter-darkgray">
              <Building className="h-4 w-4 mr-2 text-zyter-blue" />
              Hospital Readmission Rate (%)
            </label>
            <input
              id="hospitalReadmissionRate"
              name="hospitalReadmissionRate"
              type="number"
              min="1"
              max="100"
              required
              value={inputs.hospitalReadmissionRate}
              onChange={handleInputChange}
              className="zyter-input"
              placeholder="e.g. 15"
            />
            <p className="text-xs text-gray-500">Percentage of patients readmitted within 30 days of discharge</p>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="erVisitsPerThousand" className="flex items-center font-medium text-zyter-darkgray">
              <AlertTriangle className="h-4 w-4 mr-2 text-zyter-blue" />
              ER Visits Per 1,000 Members
            </label>
            <input
              id="erVisitsPerThousand"
              name="erVisitsPerThousand"
              type="number"
              min="1"
              required
              value={inputs.erVisitsPerThousand}
              onChange={handleInputChange}
              className="zyter-input"
              placeholder="e.g. 180"
            />
            <p className="text-xs text-gray-500">Annual emergency department visits per 1,000 members</p>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="annualMedicalCosts" className="flex items-center font-medium text-zyter-darkgray">
              <DollarSign className="h-4 w-4 mr-2 text-zyter-blue" />
              Annual Medical Cost Per Member ($)
            </label>
            <input
              id="annualMedicalCosts"
              name="annualMedicalCosts"
              type="number"
              min="1000"
              required
              value={inputs.annualMedicalCosts}
              onChange={handleInputChange}
              className="zyter-input"
              placeholder="e.g. 8,000"
            />
            <p className="text-xs text-gray-500">Average annual medical costs per member</p>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="currentCaseManagementCost" className="flex items-center font-medium text-zyter-darkgray">
              <Activity className="h-4 w-4 mr-2 text-zyter-blue" />
              Current Case Management Costs ($)
            </label>
            <input
              id="currentCaseManagementCost"
              name="currentCaseManagementCost"
              type="number"
              min="0"
              required
              value={inputs.currentCaseManagementCost}
              onChange={handleInputChange}
              className="zyter-input"
              placeholder="e.g. 500,000"
            />
            <p className="text-xs text-gray-500">Current annual spending on case management services</p>
          </div>
        </div>
        
        <div className="bg-zyter-lightblue rounded-lg p-4 mt-8 mb-6">
          <h3 className="text-md font-bold text-zyter-blue flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Based on your inputs:
          </h3>
          <p className="mt-2">
            Your organization manages approximately <strong>{formatNumberWithCommas(Math.round(inputs.membersCount * (inputs.chronicConditionRate / 100)))}</strong> members with chronic conditions who may benefit from enhanced utilization management.
          </p>
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="zyter-btn-secondary flex items-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back
          </button>
          
          <button
            type="submit"
            className="zyter-btn flex items-center"
          >
            Calculate ROI <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;
