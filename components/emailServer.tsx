"use server"
import { AddOn } from "@/interfaces/services"

export async function sendQuote(formData: any) {
  const addOns = formData.addOns
    .map((addOn: AddOn) => `<li>${addOn.name + " $" + addOn.price}</li>`)
    .join("")
  const emailContent = `<p>A new lead,${formData.clientName}, ${formData.clientPhone}, ${formData.clientEmail}, wants a <strong>${formData.service + " " + formData.package?.name + "package at $" + formData.package?.price}</strong> application. With these Add Ons</p> <ul>${addOns}</ul>
    <p>Priced at ${formData.total}.</p>
    <p>Submitted At: ${formData.submittedAt}</p>`

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.EMAIL_KEY}`,
    },
    body: JSON.stringify({
      from: "Spark Stack <onboarding@resend.dev>",
      to: "ahumphries102@gmail.com",
      subject: `New Quote Request`,
      html: emailContent,
    }),
  })

  return res.ok
}

export async function contact(formData: any) {
  const emailContent = `<p>From ${formData.email} <br/> ${formData.message}</p>`

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.EMAIL_KEY}`,
    },
    body: JSON.stringify({
      from: "Spark Stack <onboarding@resend.dev>",
      to: "ahumphries102@gmail.com",
      subject: `Spark Stack: Question from`,
      html: emailContent,
    }),
  })

  return res.ok
}