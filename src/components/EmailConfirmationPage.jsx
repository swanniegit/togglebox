import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { confirmEmailRegistration, getDownloadData } from '../utils/emailService';

export default function EmailConfirmationPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('verifying'); // 'verifying', 'confirmed', 'error'
  const [error, setError] = useState('');
  const [downloadData, setDownloadData] = useState(null);

  useEffect(() => {
    const confirmEmail = async () => {
      if (!token) {
        setStatus('error');
        setError('Invalid confirmation link');
        return;
      }

      try {
        const confirmResult = confirmEmailRegistration(token);
        
        if (confirmResult.success) {
          const dataResult = getDownloadData(token);
          
          if (dataResult.success) {
            setDownloadData(dataResult.data);
            setStatus('confirmed');
            
            // Auto-start downloads after a brief delay
            setTimeout(() => {
              startDownloads(dataResult.data);
            }, 1500);
          } else {
            setStatus('error');
            setError('Could not retrieve download data');
          }
        } else {
          setStatus('error');
          setError(confirmResult.error || 'Invalid confirmation token');
        }
      } catch (err) {
        setStatus('error');
        setError('An error occurred during confirmation');
      }
    };

    confirmEmail();
  }, [token]);

  const startDownloads = (data) => {
    if (!data) return;

    // Download CSS file
    if (data.css) {
      const cssBlob = new Blob([data.css], { type: 'text/css' });
      downloadFile(cssBlob, 'six-cards-stylesheet.css');
    }

    // Download HTML file
    if (data.html) {
      const htmlBlob = new Blob([data.html], { type: 'text/html' });
      downloadFile(htmlBlob, 'index.html');
    }

    // Download agent instructions as text file
    if (data.agentInstructions) {
      const instructionsBlob = new Blob([data.agentInstructions], { type: 'text/plain' });
      downloadFile(instructionsBlob, 'agent-instructions.md');
    }
  };

  const downloadFile = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  const handleTryAgain = () => {
    navigate('/interactive');
  };

  if (status === 'verifying') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Confirming your email...
          </h2>
          <p className="text-gray-600">
            Please wait while we verify your download request.
          </p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-2xl text-red-600">❌</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Confirmation Failed
          </h2>
          <p className="text-gray-600 mb-6">
            {error}
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleReturnHome}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Return Home
            </button>
            <button
              onClick={handleTryAgain}
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'confirmed') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Downloads Starting!
          </h2>
          <p className="text-gray-600 mb-4">
            Your custom CSS files are being downloaded now.
          </p>
          
          {downloadData && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Files included:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• six-cards-stylesheet.css</li>
                <li>• index.html (demo page)</li>
                <li>• agent-instructions.md</li>
              </ul>
            </div>
          )}
          
          <div className="flex gap-3">
            <button
              onClick={handleReturnHome}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Return Home
            </button>
            <button
              onClick={() => startDownloads(downloadData)}
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Download Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}