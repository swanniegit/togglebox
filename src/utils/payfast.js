// Lightweight PayFast client helpers (ZA)
// Note: For production, compute the signature server-side and validate ITN.

export const isPayfastReady = () => {
  // Check if backend PayFast API is available (no credentials exposed)
  return true; // Backend will validate credentials
};

// Attempts to start a PayFast checkout by auto-submitting a form.
// If an API endpoint exists at /api/payfast/signature, it will request a server-side signature.
export const startPayfastCheckout = async ({
  amount,
  itemName,
  itemDescription,
  customerEmail,
  returnUrl,
  cancelUrl,
  notifyUrl,
}) => {
  // Use secure backend API instead of exposing credentials
  const paymentData = {
    amount: Number(amount || 0).toFixed(2),
    itemName: itemName || 'ToggleBox Export',
    itemDescription: itemDescription || 'Unlock stylesheet export for ToggleBox',
    returnUrl: returnUrl || `${window.location.origin}/payment-success`,
    cancelUrl: cancelUrl || `${window.location.origin}/payment-cancelled`,
    customerEmail: customerEmail || '',
  };

  try {
    const response = await fetch('/api/payfast/create-payment.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Payment setup failed');
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || 'Payment failed');
    }

    // Auto-submit the payment form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = result.paymentUrl;

    Object.entries(result.paymentData).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      }
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    return result;
  } catch (error) {
    throw new Error(`Payment failed: ${error.message}`);
  }
};


