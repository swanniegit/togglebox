// Lightweight PayFast client helpers (ZA)
// Note: For production, compute the signature server-side and validate ITN.

export const isPayfastReady = () => {
  try {
    const env = (typeof import.meta !== 'undefined' && import.meta.env) || {};
    return Boolean(env.VITE_PAYFAST_MERCHANT_ID && env.VITE_PAYFAST_MERCHANT_KEY);
  } catch {
    return false;
  }
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
  const env = (typeof import.meta !== 'undefined' && import.meta.env) || {};
  const endpoint = 'https://www.payfast.co.za/eng/process';

  const data = {
    merchant_id: env.VITE_PAYFAST_MERCHANT_ID || '',
    merchant_key: env.VITE_PAYFAST_MERCHANT_KEY || '',
    amount: Number(amount || 0).toFixed(2),
    item_name: itemName || 'ToggleBox Export',
    item_description: itemDescription || 'Unlock stylesheet export for ToggleBox',
    return_url: returnUrl || env.VITE_PAYFAST_RETURN_URL || `${window.location.origin}/?pf=return`,
    cancel_url: cancelUrl || env.VITE_PAYFAST_CANCEL_URL || `${window.location.origin}/?pf=cancel`,
    notify_url: notifyUrl || env.VITE_PAYFAST_NOTIFY_URL || `${window.location.origin}/api/payfast/itn`,
    email_address: customerEmail || '',
  };

  const submit = (payload) => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = endpoint;
    Object.entries(payload).forEach(([k, v]) => {
      if (v === undefined || v === null || v === '') return;
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = k;
      input.value = String(v);
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  try {
    const res = await fetch('/api/payfast/signature', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const body = await res.json().catch(() => ({}));
      if (body && body.signature) {
        data.signature = body.signature;
      }
    }
  } catch (e) {
    // No server signature available; continue without (works if merchant has no passphrase)
  }

  submit(data);
};


