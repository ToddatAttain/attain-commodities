import { NextRequest, NextResponse } from 'next/server';

interface InquiryData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  inquiryType: string;
  commodity?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: InquiryData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.inquiryType || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, inquiryType, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitized: InquiryData = {
      name: body.name.trim().slice(0, 200),
      company: body.company?.trim().slice(0, 200) || undefined,
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim().slice(0, 50) || undefined,
      inquiryType: body.inquiryType.trim(),
      commodity: body.commodity?.trim() || undefined,
      message: body.message.trim().slice(0, 5000),
    };

    // Log the inquiry (for development / fallback)
    console.log('[Attain Commodities] New inquiry received:', {
      timestamp: new Date().toISOString(),
      name: sanitized.name,
      email: sanitized.email,
      company: sanitized.company,
      inquiryType: sanitized.inquiryType,
      commodity: sanitized.commodity,
      messageLength: sanitized.message.length,
    });

    // --- Airtable Integration (optional) ---
    // To enable Airtable, set AIRTABLE_API_KEY and AIRTABLE_BASE_ID in your .env file
    // and uncomment the block below.
    //
    // const airtableApiKey = process.env.AIRTABLE_API_KEY;
    // const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    // const airtableTableName = process.env.AIRTABLE_TABLE_NAME || 'Inquiries';
    //
    // if (airtableApiKey && airtableBaseId) {
    //   const airtableRes = await fetch(
    //     `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableName)}`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         Authorization: `Bearer ${airtableApiKey}`,
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         fields: {
    //           Name: sanitized.name,
    //           Email: sanitized.email,
    //           Company: sanitized.company || '',
    //           Phone: sanitized.phone || '',
    //           'Inquiry Type': sanitized.inquiryType,
    //           Commodity: sanitized.commodity || '',
    //           Message: sanitized.message,
    //           'Received At': new Date().toISOString(),
    //         },
    //       }),
    //     }
    //   );
    //
    //   if (!airtableRes.ok) {
    //     const errBody = await airtableRes.json().catch(() => ({}));
    //     console.error('[Attain Commodities] Airtable write failed:', errBody);
    //     // Do not fail the request — the inquiry was received and logged
    //   }
    // }

    // --- Email Integration (optional) ---
    // To enable email notifications, set RESEND_API_KEY and RESEND_FROM_EMAIL in your .env file
    // and uncomment the block below.
    //
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'Attain Commodities <onboarding@resend.dev>';
    const resendToEmail = process.env.RESEND_TO_EMAIL || 'info@attaincommodities.com';

    if (resendApiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: resendFromEmail,
          to: [resendToEmail],
          subject: `New Inquiry: ${sanitized.inquiryType} from ${sanitized.name}`,
          text: [
            `Name: ${sanitized.name}`,
            `Email: ${sanitized.email}`,
            `Company: ${sanitized.company || 'N/A'}`,
            `Phone: ${sanitized.phone || 'N/A'}`,
            `Inquiry Type: ${sanitized.inquiryType}`,
            `Commodity: ${sanitized.commodity || 'N/A'}`,
            `\nMessage:\n${sanitized.message}`,
          ].join('\n'),
        }),
      });
    }

    return NextResponse.json({ success: true, message: 'Inquiry received. We will respond within two business days.' });
  } catch (err) {
    console.error('[Attain Commodities] Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
