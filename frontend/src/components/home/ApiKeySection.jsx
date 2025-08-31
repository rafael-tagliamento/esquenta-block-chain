import { useState } from 'react';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import PropTypes from 'prop-types';

const ApiKeySection = ({ textTranslateY, textOpacity, onReportGenerated }) => {
	const [accountId, setAccountId] = useState('');
	const [network, setNetwork] = useState('testnet');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const apiBase = (import.meta?.env?.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
		/\/$/,
		''
	);

	const validateAccountId = id => /^G[A-Z2-7]{55}$/.test(id.trim()); // Regex

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');

		const id = accountId.trim();
		if (!validateAccountId(id)) {
			setError('Chave de conta Stellar inválida. Deve iniciar com G e ter 56 caracteres.');
			return;
		}

		setLoading(true);
		setError('');
		try {
			const url = `${apiBase}/generate-report?account_id=${encodeURIComponent(id)}&network=${network}`;
			const res = await fetch(url, { method: 'GET' });
			if (!res.ok) {
				const data = await res.json().catch(() => null);
				let errorMessage = data?.detail || `Falha ao gerar relatório (HTTP ${res.status})`;
				
				if (errorMessage.includes('Conta não existe na rede')) {
					const otherNetwork = network === 'testnet' ? 'Mainnet' : 'Testnet';
					errorMessage += ` Tente selecionar a rede ${otherNetwork} ou verifique se a chave está correta.`;
				}
				
				throw new Error(errorMessage);
			}
			const data = await res.json();

			if (onReportGenerated) {
                onReportGenerated(data);
            }
		} catch (err) {
			setError(err?.message || 'Erro inesperado ao gerar relatório.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='h-screen w-full fixed top-0 left-0'>
			<div
				className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
				style={{ backgroundImage: `url(/galaxy.png)` }}>
				<div className='w-full h-full bg-black bg-opacity-60'></div>
			</div>

			<div
				className='absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-4'
				style={{ transform: `translateY(${textTranslateY}px)`, opacity: textOpacity }}>
				<h1 className='text-5xl md:text-7xl font-bold max-w-4xl leading-tight'>
					Sua cripto
					<br />
					analisada com <span className='text-violet-600'>inteligêncIA</span>
				</h1>

				<div className='flex items-center gap-4 mt-8 bg-gray-800/50 rounded-lg p-4 border border-gray-700'>
					<span className='text-gray-300 font-medium'>Rede Stellar:</span>
					<div className='flex gap-2'>
						<button
							type='button'
							onClick={() => setNetwork('testnet')}
							className={`px-4 py-2 rounded-md font-medium transition-all ${
								network === 'testnet'
									? 'bg-blue-500 text-white shadow-md'
									: 'bg-gray-700 text-gray-300 hover:bg-gray-600'
							}`}
						>
							🧪 Testnet
						</button>
						<button
							type='button'
							onClick={() => setNetwork('mainnet')}
							className={`px-4 py-2 rounded-md font-medium transition-all ${
								network === 'mainnet'
									? 'bg-green-500 text-white shadow-md'
									: 'bg-gray-700 text-gray-300 hover:bg-gray-600'
							}`}
						>
							🌟 Mainnet
						</button>
					</div>
				</div>

				<form
					onSubmit={handleSubmit}
					className='flex w-full max-w-2xl mt-8 shadow-lg shadow-violet-600/10'>
					<input
						type='text'
						placeholder='Cole sua chave aqui...'
						className='w-full bg-gray-800 border border-gray-700 text-white rounded-l-md p-4 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-shadow'
						aria-label='Insira sua chave'
						value={accountId}
						onChange={e => setAccountId(e.target.value)}
						disabled={loading}
					/>
					<button
						type='submit'
						className='bg-violet-500 hover:bg-violet-600 text-black p-4 rounded-r-md flex items-center justify-center transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
						aria-label='Analisar com a chave'
						disabled={loading}
						title={loading ? 'Gerando relatório...' : 'Analisar'}>
						<ArrowRightIcon />
					</button>
				</form>

				<div className='w-full max-w-2xl   text-left mt-4'>
					{error && (
						<p className='text-red-400 bg-red-900/20 border border-red-800 rounded-md p-3'>
							{error}
						</p>
					)}
					{loading && <p className='text-violet-300'>Gerando relatório, aguarde...</p>}
				</div>
			</div>
		</div>
	);
};

ApiKeySection.propTypes = {
    textTranslateY: PropTypes.number.isRequired,
    textOpacity: PropTypes.number.isRequired,
    onReportGenerated: PropTypes.func.isRequired,
};

export default ApiKeySection;