import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Componente isolado para renderização de Markdown
// Mantém a renderização simples (sem HTML bruto) para evitar quebras e riscos de segurança.
function MarkdownRenderer({ className = '', children }) {
	console.log(children)
	if (!children || typeof children !== 'string') return null;
	return (
		<div className={`markdown-content ${className}`}>
			<ReactMarkdown 
				remarkPlugins={[remarkGfm]}
				components={{
					table: ({ children }) => (
						<div className="overflow-x-auto my-4">
							<table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
								{children}
							</table>
						</div>
					),
					thead: ({ children }) => (
						<thead className="bg-gray-700">
							{children}
						</thead>
					),
					tbody: ({ children }) => (
						<tbody className="divide-y divide-gray-700">
							{children}
						</tbody>
					),
					tr: ({ children }) => (
						<tr className="hover:bg-gray-750">
							{children}
						</tr>
					),
					th: ({ children }) => (
						<th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
							{children}
						</th>
					),
					td: ({ children }) => (
						<td className="px-4 py-3 text-sm text-gray-200 border-b border-gray-700">
							{children}
						</td>
					),
					h1: ({ children }) => (
						<h1 className="text-2xl font-bold text-white mb-4 mt-6">
							{children}
						</h1>
					),
					h2: ({ children }) => (
						<h2 className="text-xl font-semibold text-gray-200 mb-3 mt-5">
							{children}
						</h2>
					),
					h3: ({ children }) => (
						<h3 className="text-lg font-medium text-gray-300 mb-2 mt-4">
							{children}
						</h3>
					),
					p: ({ children }) => (
						<p className="text-gray-300 mb-3 leading-relaxed">
							{children}
						</p>
					),
					ul: ({ children }) => (
						<ul className="list-disc list-inside text-gray-300 mb-3 space-y-1">
							{children}
						</ul>
					),
					ol: ({ children }) => (
						<ol className="list-decimal list-inside text-gray-300 mb-3 space-y-1">
							{children}
						</ol>
					),
					li: ({ children }) => (
						<li className="text-gray-300">
							{children}
						</li>
					),
					strong: ({ children }) => (
						<strong className="font-semibold text-white">
							{children}
						</strong>
					),
					em: ({ children }) => (
						<em className="italic text-gray-200">
							{children}
						</em>
					),
					code: ({ children }) => (
						<code className="bg-gray-800 text-violet-300 px-1 py-0.5 rounded text-sm">
							{children}
						</code>
					),
					pre: ({ children }) => (
						<pre className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4">
							{children}
						</pre>
					),
				}}
			>{children}</ReactMarkdown>
		</div>
	);
}

export default MarkdownRenderer;
