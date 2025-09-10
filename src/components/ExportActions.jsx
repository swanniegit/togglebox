import React from 'react';

export default function ExportActions({ onExport, onExportHtml, onBuyAIPrompt, submitStyle, onEmailRequired }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {onExport && (
        <button
          onClick={onEmailRequired ? onEmailRequired : onExport}
          className="px-4 py-2 text-white rounded-md transition-colors font-medium hover:opacity-90"
          style={submitStyle}
          data-testid="export-css-button"
        >
          📥 Export CSS
        </button>
      )}

      {onExportHtml && (
        <button
          onClick={onEmailRequired ? onEmailRequired : onExportHtml}
          className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors font-medium"
          data-testid="export-demo-html-button"
        >
          📄 Download demo index.html
        </button>
      )}

      {onBuyAIPrompt && (
        <button
          onClick={onBuyAIPrompt}
          className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-colors font-medium"
          data-testid="buy-ai-prompt"
        >
          🤖 Buy AI Prompt (R49)
        </button>
      )}
    </div>
  );
}


