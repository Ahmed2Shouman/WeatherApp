// src/components/ErrorMessage.jsx
import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="px-4 py-3 mt-4 text-center text-red-700 bg-red-100 border border-red-400 rounded">
      {message}
    </div>
  );
};

export default ErrorMessage;