import React from 'react';
import Product from './product'; // Assuming product.tsx is in the same directory

interface CategoryTileProps {
  category: string;
  groupedData: any; // groupedData is an object with category as key
}

const CategoryTile: React.FC<CategoryTileProps> = ({ category, groupedData }) => {
  return (
    <div key={category} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
        {category}
      </h2>
      {groupedData[category].map((item: any) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CategoryTile;
