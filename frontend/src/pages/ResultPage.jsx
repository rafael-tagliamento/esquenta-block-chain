import React from "react";
import { useLocation } from "react-router-dom";
import MarkdownRenderer from "../components/MarkdownRenderer";

const ResultPage = () => {
  const { state } = useLocation();
  const reportData = state?.reportData;
  const saldo = reportData?.balance || [];
  const chave = reportData?.account_id || [];
  
  const nativeBalance = saldo.find(b => b.asset_type === 'native');
  const saldoXLM = nativeBalance ? parseFloat(nativeBalance.balance).toFixed(2) : '0.00';

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-6xl mx-auto w-full">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Conta Stellar
          </h1>
          <p className="text-gray-400 text-sm break-all font-mono">
            {chave}
          </p>
        </header>

        {saldoXLM && (
          <div className="mb-8 bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-violet-400 mb-4">Saldo da Conta</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-800 rounded-md p-4">
                <span className="text-gray-300">XLM (Stellar Lumens)</span>
                <span className="text-white font-bold text-xl">{saldoXLM} XLM</span>
              </div>
            </div>
          </div>
        )}

        {reportData?.report && (
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-violet-400 mb-6">Análise</h2>
            <div className="text-left text-white">
              <MarkdownRenderer>{reportData.report}</MarkdownRenderer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;