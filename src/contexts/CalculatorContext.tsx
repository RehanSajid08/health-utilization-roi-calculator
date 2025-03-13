
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define calculator state types
type CalculatorInputs = {
  membersCount: number;
  chronicConditionRate: number;
  hospitalReadmissionRate: number;
  erVisitsPerThousand: number;
  annualMedicalCosts: number;
  currentCaseManagementCost: number;
};

type CalculatorResults = {
  projectedSavings: number;
  projectedReadmissionReduction: number;
  projectedERVisitReduction: number;
  roi: number;
  implementationCosts: number;
  netSavings: number;
};

interface CalculatorContextType {
  step: number;
  setStep: (step: number) => void;
  inputs: CalculatorInputs;
  setInputs: React.Dispatch<React.SetStateAction<CalculatorInputs>>;
  results: CalculatorResults | null;
  calculateResults: () => void;
  resetCalculator: () => void;
}

// Default input values
const defaultInputs: CalculatorInputs = {
  membersCount: 100000,
  chronicConditionRate: 20,
  hospitalReadmissionRate: 15,
  erVisitsPerThousand: 180,
  annualMedicalCosts: 8000,
  currentCaseManagementCost: 500000,
};

// Create context
const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

// Provider component
export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs);
  const [results, setResults] = useState<CalculatorResults | null>(null);

  // Calculate ROI based on inputs
  const calculateResults = () => {
    // Calculate members with chronic conditions
    const chronicMembers = Math.round(inputs.membersCount * (inputs.chronicConditionRate / 100));
    
    // Baseline metrics before Zyter
    const baselineReadmissions = Math.round(chronicMembers * (inputs.hospitalReadmissionRate / 100));
    const baselineERVisits = Math.round(inputs.membersCount * (inputs.erVisitsPerThousand / 1000));
    const baselineMedicalCosts = inputs.annualMedicalCosts * inputs.membersCount;
    
    // Improvement assumptions with Zyter
    const readmissionReductionRate = 0.22; // 22% reduction
    const erVisitReductionRate = 0.15; // 15% reduction
    const costSavingsPerAvoidedReadmission = 12000; // $12,000 per avoided readmission
    const costSavingsPerAvoidedERVisit = 1200; // $1,200 per avoided ER visit
    
    // Calculate improvements
    const readmissionsReduced = Math.round(baselineReadmissions * readmissionReductionRate);
    const erVisitsReduced = Math.round(baselineERVisits * erVisitReductionRate);
    
    // Calculate cost savings
    const readmissionSavings = readmissionsReduced * costSavingsPerAvoidedReadmission;
    const erVisitSavings = erVisitsReduced * costSavingsPerAvoidedERVisit;
    const totalSavings = readmissionSavings + erVisitSavings;
    
    // Implementation costs (estimated)
    const implementationCosts = inputs.membersCount > 50000 
      ? inputs.membersCount * 3 // $3 PMPM for larger plans
      : inputs.membersCount * 4; // $4 PMPM for smaller plans
    
    // Calculate ROI
    const netSavings = totalSavings - implementationCosts;
    const roi = (totalSavings / implementationCosts) * 100;
    
    // Set results
    setResults({
      projectedSavings: totalSavings,
      projectedReadmissionReduction: Math.round(readmissionReductionRate * 100),
      projectedERVisitReduction: Math.round(erVisitReductionRate * 100),
      roi: Number(roi.toFixed(2)),
      implementationCosts: implementationCosts,
      netSavings: netSavings
    });
    
    // Move to results step
    setStep(3);
  };

  // Reset calculator
  const resetCalculator = () => {
    setInputs(defaultInputs);
    setResults(null);
    setStep(1);
  };

  return (
    <CalculatorContext.Provider
      value={{
        step,
        setStep,
        inputs,
        setInputs,
        results,
        calculateResults,
        resetCalculator
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

// Hook to use the calculator context
export const useCalculator = (): CalculatorContextType => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};
