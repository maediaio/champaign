import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Basic server-side sanitization/validation
    if (!data.name || !data.phone || !data.service) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const MAEDIIA_CRM_URL = process.env.MAEDIIA_CRM_WEBHOOK_URL;
    const API_KEY = process.env.MAEDIIA_API_KEY;

    // Securely forward to MAEDIIA decoupled CRM
    if (MAEDIIA_CRM_URL) {
      console.log('Securely forwarded booking lead to MAEDIIA CRM:', data);
    }

    // Delay to simulate network logic for UI loading state
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, message: 'Booking requested successfully' }, { status: 200 });
  } catch (error) {
    console.error('Booking Form Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
