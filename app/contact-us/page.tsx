"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateForm() {
    // Name: first + last name
    const nameParts = form.name.trim().split(/\s+/);
    if (nameParts.length < 2) {
      return "Please enter your full name (first and last name).";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return "Please enter a valid email address.";
    }

    // Message: at least 10 words
    const wordCount = form.message.trim().split(/\s+/).length;
    if (wordCount < 10) {
      return "Message should be at least 10 words long.";
    }

    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setError("");
  setSuccess("");

  const validationError = validateForm();
  if (validationError) {
    setError(validationError);
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    setSuccess("Message sent successfully. We’ll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Failed to send message. Please try again.");
    }
  } finally {
    setLoading(false);
  }
}


  return (
    <main className="bg-white">

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT */}{" "}
          <div>
            {" "}
            <h2 className="text-3xl font-bold text-gray-900">
              Get in Touch
            </h2>{" "}
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              {" "}
              Whether you’re a citizen, volunteer, media representative, or
              supporter — we’d love to hear from you.{" "}
            </p>{" "}
            <div className="mt-10 space-y-6">
              {" "}
              <div>
                {" "}
                <p className="text-sm text-gray-500">Email</p>{" "}
                <p className="text-lg text-gray-900">
                  {" "}
                  📩 info@aamjantapartyindia.in{" "}
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-sm text-gray-500">Office Address</p>{" "}
                <p className="text-lg text-gray-900 leading-relaxed">
                  {" "}
                  📍 Aam Janta Party India <br /> Sector 44, Gurugram <br />{" "}
                  Haryana – 122003{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {/* RIGHT – FORM */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="First & Last Name"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write at least 10 words..."
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 font-medium">{error}</p>
              )}

              {success && (
                <p className="text-sm text-green-600 font-medium">{success}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition disabled:opacity-60 cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
