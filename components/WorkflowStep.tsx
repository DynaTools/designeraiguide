import React from 'react';

interface WorkflowStepProps {
  steps: {
    title: string;
    description: string;
    tools?: string[];
    tips?: string[];
    duration?: string;
  }[];
  title?: string;
}

export const WorkflowStep: React.FC<WorkflowStepProps> = ({ steps, title = "Workflow Steps" }) => {
  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 bg-gray-300 h-16 mx-auto mt-2"></div>
              )}
            </div>
            
            <div className="flex-1 pb-8">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-medium text-gray-900">{step.title}</h4>
                {step.duration && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {step.duration}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-3">{step.description}</p>
              
              {step.tools && step.tools.length > 0 && (
                <div className="mb-3">
                  <span className="text-sm font-medium text-gray-700">Recommended tools: </span>
                  <div className="inline-flex flex-wrap gap-1 mt-1">
                    {step.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {step.tips && step.tips.length > 0 && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                  <div className="text-sm">
                    <p className="font-medium text-yellow-800 mb-1">💡 Tips:</p>
                    <ul className="text-yellow-700 space-y-1">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <span className="mr-2">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowStep;
