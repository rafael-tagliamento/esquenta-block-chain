import { useState } from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';
import MarkdownRenderer from './MarkdownRenderer';

const HeroSection = ({ textTranslateY, textOpacity }) => {
	const [accountId, setAccountId] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [result, setResult] = useState(null);

	const apiBase = (import.meta?.env?.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000').replace(
		/\/$/,
		''
	);

	const validateAccountId = id => /^G[A-Z2-7]{55}$/.test(id.trim()); // Regex

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		setResult(null);

		const id = accountId.trim();
		if (!validateAccountId(id)) {
			setError('Chave de conta Stellar inválida. Deve iniciar com G e ter 56 caracteres.');
			return;
		}

		setLoading(true);
		setError('');
		try {
			const url = `${apiBase}/generate-report?account_id=${encodeURIComponent(id)}`;
			const res = await fetch(url, { method: 'GET' });
			if (!res.ok) {
				const data = await res.json().catch(() => null);
				throw new Error(data?.detail || `Falha ao gerar relatório (HTTP ${res.status})`);
			}
			const data = await res.json();
			setResult(data);
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

				<form
					onSubmit={handleSubmit}
					className='flex w-full max-w-2xl mt-16 shadow-lg shadow-violet-600/10'>
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

				{/* Feedback */}
				<div className='w-full max-w-2xl   text-left mt-4'>
					{error && (
						<p className='text-red-400 bg-red-900/20 border border-red-800 rounded-md p-3'>
							{error}
						</p>
					)}
					{loading && <p className='text-violet-300'>Gerando relatório, aguarde...</p>}
				</div>

				{/* Resultado, será redirecionado para outra página. 
        Está aqui apenas para vizualizar por enquanto */}
				{result && (
					<div className='w-full max-w-3xl mt-8 bg-gray-900/60 border border-gray-700 rounded-lg p-6 text-left overflow-auto'>
						<h2 className='text-xl font-semibold mb-2'>Relatório</h2>
						<MarkdownRenderer className='prose prose-invert max-w-none whitespace-pre-wrap'>
							{result.report || 'Sem conteúdo.'}
						</MarkdownRenderer>
						<h3 className='text-lg font-semibold mt-6'>Saldos</h3>
						<pre className='text-sm bg-black/30 p-3 rounded-md overflow-x-auto'>
							{JSON.stringify(result.balance, null, 2)}
						</pre>
					</div>
				)}
			</div>
		</div>
	);
};

export default HeroSection;
