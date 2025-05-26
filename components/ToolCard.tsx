import React from 'react';

interface ToolCardProps {
  name: string;
  description: string;
  pricing: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  features: string[];
  pros: string[];
  cons: string[];
  website?: string;
  apiAvailable?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  name,
  description,
  pricing,
  category,
  difficulty,
  features,
  pros,
  cons,
  website,
  apiAvailable = false
}) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-3">{description}</p>
        </div>
        <div className="text-right">
          <span className={`inline-block px-2 py-1 rounded text-sm ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          {apiAvailable && (
            <div className="mt-1">
              <span className="inline-block px-2 py-1 rounded text-sm bg-blue-100 text-blue-800">
                API
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2">Pricing</h4>
          <p className="text-sm">{pricing}</p>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2">Category</h4>
          <p className="text-sm">{category}</p>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2">Website</h4>
          {website ? (
            <a href={website} target="_blank" rel="noopener noreferrer" 
               className="text-sm text-blue-600 hover:underline">
              Visit Site
            </a>
          ) : (
            <p className="text-sm text-gray-400">Not available</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2">Key Features</h4>
          <ul className="text-sm space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-sm text-green-700 mb-2">Pros</h4>
          <ul className="text-sm space-y-1">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm text-red-700 mb-2">Cons</h4>
          <ul className="text-sm space-y-1">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
