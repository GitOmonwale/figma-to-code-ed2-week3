import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center py-4">
      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-dark"></div>
    </div>
  );
};

export default Loader;
