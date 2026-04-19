/* Netlify serverless function — creates a Stripe PaymentIntent
   Environment variable required: STRIPE_SECRET_KEY (sk_live_...)
   Set this in Netlify dashboard → Site settings → Environment variables */

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Stripe not configured' }) };
  }

  try {
    const { amount } = JSON.parse(event.body);
    const amountPence = Math.round(parseFloat(amount) * 100); // convert £ to pence

    // Call Stripe API directly (no npm package needed)
    const params = new URLSearchParams({
      amount:                            String(amountPence),
      currency:                          'gbp',
      'automatic_payment_methods[enabled]': 'true'
    });

    const response = await fetch('https://api.stripe.com/v1/payment_intents', {
      method:  'POST',
      headers: {
        'Authorization':  `Bearer ${secretKey}`,
        'Content-Type':   'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    const intent = await response.json();

    if (intent.error) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: intent.error.message })
      };
    }

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ clientSecret: intent.client_secret })
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
