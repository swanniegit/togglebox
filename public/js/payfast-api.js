/**
 * ToggleBox PayFast API Client
 * Use this on any site to process payments through ToggleBox
 */

class ToggleBoxPayments {
    constructor() {
        this.apiUrl = 'https://www.togglebox.co.za/api/payfast/create-payment.php';
    }

    /**
     * Start a PayFast payment
     * @param {Object} options - Payment options
     * @param {string} options.amount - Amount in ZAR (e.g., "99.00")
     * @param {string} options.itemName - Product/service name
     * @param {string} options.customerEmail - Customer email
     * @param {string} options.returnUrl - Success redirect URL
     * @param {string} options.cancelUrl - Cancel redirect URL (optional)
     * @param {string} options.itemDescription - Product description (optional)
     */
    async startPayment(options) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(options)
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Payment setup failed');
            }

            // Auto-submit payment form
            this.submitPaymentForm(result.paymentData, result.paymentUrl);
            
            return result;
        } catch (error) {
            throw new Error(`Payment failed: ${error.message}`);
        }
    }

    /**
     * Auto-submit PayFast payment form
     */
    submitPaymentForm(data, actionUrl) {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = actionUrl;

        Object.entries(data).forEach(([key, value]) => {
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
    }
}

// Global instance
window.ToggleBoxPayments = new ToggleBoxPayments();

// Example usage:
/*
ToggleBoxPayments.startPayment({
    amount: "99.00",
    itemName: "Premium Access",
    customerEmail: "customer@example.com",
    returnUrl: "https://mysite.com/success",
    cancelUrl: "https://mysite.com/cancelled",
    itemDescription: "Premium subscription"
});
*/