// api/send-email/route.tsx
// file for sending emails
export async function POST(request: { json: () => any; }) {
  const body = await request.json();
  const { name, email, message } = body;
  try {
    console.log("Attempting to send email from name: ", name, " email: ", email)
    // TODO: send the email
    const data = { message: "Email sent successfully" };
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (err) {
    console.log(err);
    const data = { message: "Internal server error" };
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}