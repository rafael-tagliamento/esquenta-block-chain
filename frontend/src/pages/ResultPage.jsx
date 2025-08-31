import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';

const ResultPage = () => {
  const { saldo } = useParams(); 
  const { state } = useLocation();
  const reportData = state?.reportData;


  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <header>
          <h1 className="text-8xl md:text-9xl font-bold text-gray-100 mb-6 break-all">
            {saldo}
          </h1>
        </header>

        {reportData.report && (
          <div className="max-w-2xl mx-auto">
            <MarkdownRenderer content={reportData.report} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;