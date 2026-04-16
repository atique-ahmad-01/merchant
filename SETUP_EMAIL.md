# How to Enable Email Notifications for Orders

When a customer places an order, the system will:
1. **Auto-open WhatsApp** with the full order details sent to +44 7438 536580
2. **Send an email** to hello@unimerchant.store (requires the 5-minute setup below)

---

## Step 1 — Create a Free EmailJS Account

1. Go to https://www.emailjs.com and click **Sign Up** (free)
2. Confirm your email

---

## Step 2 — Connect Your Email

1. In EmailJS dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail** (or Outlook/Yahoo etc.)
3. Connect your **hello@unimerchant.store** account
4. Note down the **Service ID** (e.g. `service_abc123`)

---

## Step 3 — Create an Email Template

1. Go to **Email Templates** → **Create New Template**
2. Set **To Email** to: `hello@unimerchant.store`
3. Set **Subject** to: `🛒 New Order {{order_ref}} — {{customer_name}}`
4. Set **Body** to:

```
New Order Received — Uni Merchant Store

Order Reference: {{order_ref}}
Date: {{order_date}}

CUSTOMER DETAILS
Name:    {{customer_name}}
Email:   {{customer_email}}
Phone:   {{customer_phone}}

ORDER ITEMS
{{order_items}}

Total:   {{order_total}} (FREE Delivery)

DELIVERY ADDRESS
{{delivery_address}}

Notes: {{order_notes}}
```

5. Click **Save** and note the **Template ID** (e.g. `template_xyz789`)

---

## Step 4 — Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g. `user_XXXXXXXXXXXX`)

---

## Step 5 — Add Your Keys to the Website

Open `/assets/js/main.js` and find this section near the top:

```js
const STORE = {
  emailjs: {
    publicKey:  'YOUR_EMAILJS_PUBLIC_KEY',   // ← replace this
    serviceId:  'YOUR_EMAILJS_SERVICE_ID',   // ← replace this
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID'  // ← replace this
  }
};
```

Replace the three placeholder values with your real keys. Save the file.

---

## That's It!

From now on, every order will:
- Immediately open WhatsApp with the order details (works without any setup)
- Send a formatted email to hello@unimerchant.store with all customer and order info

**Free EmailJS plan:** 200 emails/month. Upgrade if you need more.
