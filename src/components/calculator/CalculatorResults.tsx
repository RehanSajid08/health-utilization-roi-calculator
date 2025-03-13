
import React from 'react';
import { useCalculator } from '@/contexts/CalculatorContext';
import { ArrowLeft, ArrowRight, Printer, Download, BarChart3, TrendingDown, DollarSign, ArrowUpRight } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CalculatorResults: React.FC = () => {
  const { results, resetCalculator, setStep } = useCalculator();

  if (!results) {
    return <div>Loading results...</div>;
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Data for pie chart
  const pieData = [
    { name: 'Implementation Cost', value: results.implementationCosts },
    { name: 'Net Savings', value: results.netSavings }
  ];
  const COLORS = ['#0071ce', '#00a0df'];

  // Data for bar chart
  const barData = [
    {
      name: 'Hospital Readmissions',
      reduction: results.projectedReadmissionReduction
    },
    {
      name: 'ER Visits',
      reduction: results.projectedERVisitReduction
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="gradient-blue px-6 py-6 text-white">
        <h2 className="text-white text-2xl font-bold mb-2">
          Your Population Health Utilization Management ROI
        </h2>
        <p className="text-white/90">
          Based on your organization's data, here's what you could achieve with Zyter
        </p>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-zyter-lightblue rounded-lg p-5 flex flex-col items-center text-center">
            <div className="rounded-full bg-zyter-blue p-3 mb-3">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-zyter-blue">
              {formatCurrency(results.projectedSavings)}
            </h3>
            <p className="text-sm">Projected Annual Savings</p>
          </div>
          
          <div className="bg-zyter-lightblue rounded-lg p-5 flex flex-col items-center text-center">
            <div className="rounded-full bg-zyter-blue p-3 mb-3">
              <ArrowUpRight className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-zyter-blue">
              {results.roi}%
            </h3>
            <p className="text-sm">Return on Investment</p>
          </div>
          
          <div className="bg-zyter-lightblue rounded-lg p-5 flex flex-col items-center text-center">
            <div className="rounded-full bg-zyter-blue p-3 mb-3">
              <TrendingDown className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-zyter-blue">
              {results.projectedReadmissionReduction}%
            </h3>
            <p className="text-sm">Readmission Reduction</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-zyter-darkgray mb-4 flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-zyter-blue" />
              Financial Analysis
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Implementation Costs:</span>
                <span className="font-semibold">{formatCurrency(results.implementationCosts)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Projected Savings:</span>
                <span className="font-semibold">{formatCurrency(results.projectedSavings)}</span>
              </div>
              <div className="flex justify-between text-zyter-blue">
                <span className="font-bold">Net Savings:</span>
                <span className="font-bold">{formatCurrency(results.netSavings)}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-zyter-darkgray mb-4 flex items-center">
              <TrendingDown className="mr-2 h-5 w-5 text-zyter-blue" />
              Utilization Reductions
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Reduction %', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar dataKey="reduction" name="Percent Reduction" fill="#0071ce" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                These projections are based on average improvements seen across Zyter clients within 12-18 months of implementation. Individual results may vary based on implementation thoroughness, organizational readiness, and other factors.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-zyter-lightblue rounded-lg p-5 mb-8">
          <h3 className="text-lg font-bold text-zyter-blue mb-2">
            Key Findings
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
              <span>Your organization could see a <strong>{results.roi}% ROI</strong> with Zyter's solution</span>
            </li>
            <li className="flex items-start">
              <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
              <span>Projected <strong>{results.projectedReadmissionReduction}% reduction in hospital readmissions</strong> through improved care coordination</span>
            </li>
            <li className="flex items-start">
              <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
              <span>Expected <strong>{results.projectedERVisitReduction}% decrease in emergency department utilization</strong> through proactive care management</span>
            </li>
            <li className="flex items-start">
              <span className="bg-zyter-blue text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">✓</span>
              <span>Net annual savings of <strong>{formatCurrency(results.netSavings)}</strong> after implementation costs</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-lg p-6 mb-8">
          <div>
            <h3 className="text-lg font-bold text-zyter-darkgray mb-1">
              Ready to improve your utilization management?
            </h3>
            <p className="text-gray-600">
              Schedule a demo to see how Zyter can transform your organization.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="zyter-btn">
              Request a Demo
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between mt-8 gap-4">
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="zyter-btn-secondary flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Calculator
            </button>
            
            <button
              type="button"
              onClick={resetCalculator}
              className="zyter-btn-secondary flex items-center"
            >
              <ArrowRight className="mr-2 h-5 w-5" /> Start Over
            </button>
          </div>
          
          <div className="flex space-x-3">
            <button
              type="button"
              className="zyter-btn-secondary flex items-center"
              onClick={() => window.print()}
            >
              <Printer className="mr-2 h-5 w-5" /> Print
            </button>
            
            <button
              type="button"
              className="zyter-btn-secondary flex items-center"
            >
              <Download className="mr-2 h-5 w-5" /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResults;
