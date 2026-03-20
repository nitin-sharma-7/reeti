import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryName } = useParams();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 capitalize">
          {categoryName?.replace('-', ' ')}
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        <p className="mt-6 text-xl text-gray-600">
          Showing our curated collection for {categoryName?.replace('-', ' ')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 animate-pulse">
            <div className="bg-gray-200 aspect-square rounded-md mb-4 bg-gradient-to-br from-gray-100 to-gray-200"></div>
            <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
