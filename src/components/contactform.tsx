'use client'

import { useState } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Network error:", error)
      alert("Network error. Please try again.")
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto pl-4 pr-4 bg-background rounded"
    >
      <input
        id="name"
        name="name"
        required
        className="w-full p-2 mb-4 border border-foreground rounded bg-accent"
        placeholder="Your name"
      />
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full p-2 mb-4 border border-foreground rounded bg-accent"
        placeholder="example@example.com"
      />
      <textarea
        id="message"
        name="message"
        required
        className="w-full p-2 mb-4 border border-foreground rounded bg-accent resize-none"
        placeholder="Your message here"
        rows={5}
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