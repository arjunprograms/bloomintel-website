import type * as React from "react"
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components"

interface EmailTemplateProps {
  email: string
  phone: string
  subject: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email, phone, subject, message }) => (
  <Html>
    <Head />
    <Preview>New Consultation Inquiry from {email}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Consultation Inquiry</Heading>
        <Text style={subheading}>Subject: {subject}</Text>
        <Hr style={hr} />
        <Section>
          <Text style={paragraph}>You've received a new inquiry through the BloomIntel website contact form.</Text>
          <Heading as="h2" style={detailsHeading}>
            Inquiry Details:
          </Heading>
          <Text style={details}>
            <strong>From:</strong> {email}
          </Text>
          <Text style={details}>
            <strong>Phone:</strong> {phone}
          </Text>
          <Hr style={hr} />
          <Heading as="h2" style={detailsHeading}>
            Message:
          </Heading>
          <Text style={messageText}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This message was sent from the contact form on the BloomIntel website. You can reply directly to this email to
          contact {email}.
        </Text>
      </Container>
    </Body>
  </Html>
)

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid #f0f0f0",
  borderRadius: "4px",
}

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center" as const,
  color: "#484848",
  padding: "0 20px",
}

const subheading = {
  fontSize: "18px",
  lineHeight: "26px",
  textAlign: "center" as const,
  color: "#595959",
  padding: "0 20px",
}

const detailsHeading = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#484848",
  padding: "0 20px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#484848",
  padding: "0 20px",
}

const details = {
  ...paragraph,
  padding: "0 20px",
}

const messageText = {
  ...paragraph,
  padding: "0 20px",
  whiteSpace: "pre-wrap" as const,
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  padding: "0 20px",
}
