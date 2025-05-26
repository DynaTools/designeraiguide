import React from 'react';

interface FeatureComparisonProps {
  tools: {
    name: string;
    features: {
      [key: string]: boolean | string | number;
    };
  }[];
  categories: {
    name: string;
    features: string[];
  }[];
}

export const FeatureComparison: React.FC<FeatureComparisonProps> = ({ tools, categories }) => {
  const renderValue = (value: boolean | string | number) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="text-green-600">✓</span>
      ) : (
        <span className="text-red-600">✗</span>
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900">
              Feature
            </th>
            {tools.map((tool, index) => (
              <th key={index} className="border border-gray-300 px-4 py-3 text-center font-medium text-gray-900">
                {tool.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              <tr className="bg-gray-100">
                <td 
                  colSpan={tools.length + 1} 
                  className="border border-gray-300 px-4 py-2 font-semibold text-gray-800"
                >
                  {category.name}
                </td>
              </tr>
              {category.features.map((feature, featureIndex) => (
                <tr key={featureIndex} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    {feature}
                  </td>
                  {tools.map((tool, toolIndex) => (
                    <td key={toolIndex} className="border border-gray-300 px-4 py-3 text-center">
                      {renderValue(tool.features[feature] ?? '—')}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureComparison;
