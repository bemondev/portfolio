// src/app/api/contact/route.ts
import { NextResponse } from "next/server"

function encodeForm(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&")
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const encodedBody = encodeForm({
      name: body.name,
      email: body.email,
      message: body.message,
    })

    const response = await fetch(process.env.FORMSPREE_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: encodedBody,
    })

    const data = await response.json()

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      console.error("Formspree error:", data)
      return NextResponse.json({ success: false, error: data }, { status: 400 })
    }
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}