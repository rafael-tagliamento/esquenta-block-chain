import React from "react";
import { useLocation } from "react-router-dom";
import MarkdownRenderer from "../components/MarkdownRenderer";

const ResultPage = () => {
  const { state } = useLocation();
  const reportData = state?.reportData;
  const saldo = reportData?.balance || [];
  
  const nativeBalance = saldo.find(b => b.asset_type === 'native');
  const saldoXLM = nativeBalance ? parseFloat(nativeBalance.balance).toFixed(2) : '0.00';

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div>
        <header>
          <h1 className="text-8xl md:text-9xl font-bold text-gray-100 mb-6 break-all">
            {saldoXLM} XLM
          </h1>
        </header>

        {reportData?.report && (
          <div className="text-white max-w-2xl mx-auto prose prose-invert whitespace-pre-wrap">
            <MarkdownRenderer>{reportData.report}</MarkdownRenderer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;