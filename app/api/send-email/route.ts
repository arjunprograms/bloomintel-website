import { NextResponse } from "next/server"
import { Resend } from "resend"
import { EmailTemplate } from "../../../components/email-template"

// Make sure to set your RESEND_API_KEY in your environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, phone, subject, message } = body

    if (!email || !phone || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Resolve destination email at request time so env changes are respected
    const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "business@bloomintelai.com"

    const { data, error } = await resend.emails.send({
      from: "BloomIntel <inquiries@bloomintelai.com>",
      to: [toEmail],
      subject: `New Consultation Inquiry: ${subject}`,
      react: EmailTemplate({ email, phone, subject, message }),
      replyTo: email,
    })

    if (error) {
      console.error("Resend API Error:", error)
      return NextResponse.json(
        { error: error.message || "Error sending email", errorRaw: JSON.stringify(error) },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: "Email sent successfully!", data })
  } catch (error) {
    console.error("Server Error:", error)
    const errorMessage = error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json(
      { error: errorMessage, errorRaw: JSON.stringify(error) },
      { status: 500 }
    )
  }
}
