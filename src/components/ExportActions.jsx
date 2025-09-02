import React from 'react';

export default function ExportActions({ onExport, onExportHtml, onCopyAgentInstructions, submitStyle, locked=false, onUnlock }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {onExport && !locked && (
        <button
          onClick={onExport}
          className="px-4 py-2 text-white rounded-md transition-colors font-medium hover:opacity-90"
          style={submitStyle}
          data-testid="export-css-button"
        >
          📥 Export CSS
        </button>
      )}

      {onExportHtml && !locked && (
        <button
          onClick={onExportHtml}
          className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors font-medium"
          data-testid="export-demo-html-button"
        >
          📄 Download demo index.html
        </button>
      )}

      {onCopyAgentInstructions && !locked && (
        <button
          onClick={onCopyAgentInstructions}
          className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium"
          data-testid="copy-agent-instructions"
        >
          🤖 Copy agent instructions
        </button>
      )}

      {locked && (
        <button
          onClick={onUnlock}
          className="px-4 py-2 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition-colors font-semibold"
          data-testid="unlock-paywall"
        >
          🔓 Unlock exports ($10) + AI guide (+$5)
        </button>
      )}
    </div>
  );
}


