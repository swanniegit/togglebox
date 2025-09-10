import React, { useState } from 'react';
import { startPayfastCheckout, isPayfastReady } from '../utils/payfast';

export default function PayFastPurchase({ 
  onClose, 
  agentInstructions, 
  amount = "49.00",
  itemName = "ToggleBox AI Prompt",
  itemDescription = "Get the tailored AI prompt for your custom stylesheet"
}) {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handlePurchase = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!isPayfastReady()) {
      setError('Payment system is not configured. Please contact support.');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      // Store agent instructions temporarily for post-payment delivery
      const purchaseData = {
        email,
        agentInstructions,
        timestamp: Date.now(),
        amount,
        itemName
      };
      
      // Store in localStorage temporarily (in production, use a secure backend)
      const purchaseId = `purchase_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem(purchaseId, JSON.stringify(purchaseData));
      
      // Start PayFast checkout
      await startPayfastCheckout({
        amount,
        itemName,
        itemDescription,
        customerEmail: email,
        returnUrl: `${window.location.origin}/payment-success?purchase=${purchaseId}`,
        cancelUrl: `${window.location.origin}/payment-cancelled`,
        notifyUrl: `${window.location.origin}/api/payfast/itn`
      });
      
    } catch (err) {
      setError(err.message || 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            🤖 Purchase AI Prompt
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-gray-900 mb-2">What you get:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Custom AI prompt for your exact color palette</li>
              <li>• Instructions for Claude, ChatGPT, and other AI tools</li>
              <li>• Ready-to-use markdown file (.md format)</li>
              <li>• Lifetime access to your purchase</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handlePurchase} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              required
              disabled={isProcessing}
            />
            <p className="text-xs text-gray-500 mt-1">
              We'll send your AI prompt to this email after payment
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-green-600">R{amount}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Secure payment via PayFast (South Africa)
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : `Pay R${amount}`}
            </button>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            🔒 Secure payment powered by PayFast<br/>
            Your CSS and HTML files remain free via email registration
          </p>
        </div>
      </div>
    </div>
  );
}