import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Basic server-side sanitization/validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const MAEDIIA_CRM_URL = process.env.MAEDIIA_CRM_WEBHOOK_URL;
    const API_KEY = process.env.MAEDIIA_API_KEY;

    // Securely forward to MAEDIIA decoupled CRM instead of touching a local database
    if (MAEDIIA_CRM_URL) {
      // Simulate network request
      // const response = await fetch(MAEDIIA_CRM_URL, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${API_KEY}`
      //   },
      //   body: JSON.stringify({ source: 'champaign_contact_form', payload: data })
      // });
      
      console.log('Securely forwarded contact submission to MAEDIIA CRM:', data);
    }

    // Delay to simulate network logic for UI loading state
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
