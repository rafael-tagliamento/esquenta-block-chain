import React from 'react';
import ReactMarkdown from 'react-markdown';

// Componente isolado para renderização de Markdown
// Mantém a renderização simples (sem HTML bruto) para evitar quebras e riscos de segurança.
function MarkdownRenderer({ className = '', children }) {
	if (!children || typeof children !== 'string') return null;
	return (
		<div className={className}>
			<ReactMarkdown>{children}</ReactMarkdown>
		</div>
	);
}

export default MarkdownRenderer;
