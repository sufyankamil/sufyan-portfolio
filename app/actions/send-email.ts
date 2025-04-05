// "use server"

// import { Resend } from "resend"

// // Initialize Resend with your API key
// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function sendEmail(formData: FormData) {
//   try {
//     const name = formData.get("name") as string
//     const email = formData.get("email") as string
//     const subject = formData.get("subject") as string
//     const message = formData.get("message") as string

//     // Validate form data
//     if (!name || !email || !subject || !message) {
//       return { success: false, error: "All fields are required" }
//     }

//     // Send email using Resend
//     const { data, error } = await resend.emails.send({
//       from: "Portfolio Contact Form <onboarding@resend.dev>", // Using Resend's test email
//       to: "sufyankamil15@gmail.com", // Your Gmail address associated with Resend
//       subject: `Portfolio Contact: ${subject}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
        
//         Message:
//         ${message}
//       `,
//       html: `
//         <h2>New message from your portfolio</h2>
//         <p><strong>From:</strong> ${name} (${email})</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <div>
//           <h3>Message:</h3>
//           <p>${message.replace(/\n/g, "<br>")}</p>
//         </div>
//       `,
//     })

//     if (error) {
//       console.error("Email sending failed:", error)
//       return { success: false, error: "Failed to send email" }
//     }

//     return { success: true }
//   } catch (error) {
//     console.error("Email sending error:", error)
//     return { success: false, error: "An unexpected error occurred" }
//   }
// }

