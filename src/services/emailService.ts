import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  title: string;
  message: string;
}

interface PricingInquiryData {
  planName: string;
  price: string;
  features: string;
  email: string;
}

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const sendContactEmail = async (data: ContactFormData) => {
  const { name, email, title, message } = data;
  
  // Get current date in a readable format
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const templateParams = {
    to_name: "MajorWerks Team",
    from_name: name,
    title: title || 'Website Contact',
    from_email: email,
    message: message,
    date: today,
    company_name: 'MajorWerks',
    reply_to: email
  };
  
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      templateParams
    );
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Failed to send email' };
  }
};

export const sendSubscriptionEmail = async (email: string) => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const templateParams = {
    to_email: email,
    date: today,
    company_name: 'MajorWerks',
    reply_to: 'noreply@majorwerks.com'
  };
  
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_SUBSCRIBE_TEMPLATE_ID,
      templateParams
    );
    return { success: true };
  } catch (error) {
    console.error('Subscription email sending failed:', error);
    return { success: false, error: 'Failed to send subscription confirmation' };
  }
};
export const sendPricingInquiryEmail = async (data: PricingInquiryData) => {
  const { planName, price, features, email } = data;
  
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const templateParams = {
    plan_name: planName,
    date: today,
    from_email: email,
    price: price,
    features: features,
    company_name: 'MajorWerks',
    reply_to: email
  };
  
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_PRICING_TEMPLATE_ID,
      templateParams
    );
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Failed to send email' };
  }
};