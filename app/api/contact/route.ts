import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, propertyId, propertyTitle } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const formspree = process.env.FORMSPREE_ENDPOINT;
    if (formspree) {
      const res = await fetch(formspree, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "",
          message,
          propertyId: propertyId || "",
          propertyTitle: propertyTitle || "",
          _subject: propertyTitle
            ? `Ekhaya enquiry: ${propertyTitle}`
            : "Ekhaya Properties website enquiry",
        }),
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: "Unable to send your message. Please try WhatsApp or phone." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true });
    }

    console.info("[contact]", {
      name,
      email,
      phone: phone || null,
      propertyId: propertyId || null,
      propertyTitle: propertyTitle || null,
      messageLength: String(message).length,
      at: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      notice:
        "Enquiry received. For an immediate response, please also message us on WhatsApp.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us on WhatsApp." },
      { status: 500 }
    );
  }
}
