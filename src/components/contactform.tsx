'use client'

import { useState } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
    console.log("Endpoint:", endpoint)

    try {
      const response = await fetch(endpoint!, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Network error. Please try again.")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-background rounded"
    >
      <input
        id="name"
        name="name"
        required
        className="w-full p-2 mb-4 border border-foreground rounded"
        placeholder="Your name"
      />
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full p-2 mb-4 border border-foreground rounded"
        placeholder="example@example.com"
      />
      <textarea
        id="message"
        name="message"
        required
        className="w-full p-2 mb-4 border border-foreground rounded"
        placeholder="Your message here"
        rows={4}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-foreground text-background font-bold rounded hover:bg-foreground/90 transition"
      >
        Send
      </button>
      {submitted && (
        <p className="mt-4 text-green-500">Thanks for contacting me!</p>
      )}
    </form>
  )
}