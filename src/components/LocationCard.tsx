import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface LocationCardProps {
  title: string;
  addresses: string[];
  phones: string[];
}

const LocationCard: React.FC<LocationCardProps> = ({ title, addresses, phones }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold mb-4 text-primary-600">{title}</h3>
      
      {addresses.map((address, index) => (
        <div key={`address-${index}`} className="mb-4">
          <div className="flex items-start space-x-3 mb-2">
            <MapPin className="h-5 w-5 text-accent-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">{address}</span>
          </div>
          <div className="flex items-start space-x-3 ml-8">
            <Phone className="h-5 w-5 text-accent-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">{phones[index]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationCard;