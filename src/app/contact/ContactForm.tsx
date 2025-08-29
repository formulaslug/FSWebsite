"use client";

import { colors } from "@/config/colors";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div
      className="p-8 rounded-lg shadow-lg"
      style={{ backgroundColor: colors.background.secondary }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent"
            style={{
              backgroundColor: colors.background.card,
              borderColor: colors.gray[600],
              color: colors.textColor,
            }}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent"
            style={{
              backgroundColor: colors.background.card,
              borderColor: colors.gray[600],
              color: colors.textColor,
            }}
            placeholder="your.email@ucsc.edu"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent"
            style={{
              backgroundColor: colors.background.card,
              borderColor: colors.gray[600],
              color: colors.textColor,
            }}
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent resize-vertical"
            style={{
              backgroundColor: colors.background.card,
              borderColor: colors.gray[600],
              color: colors.textColor,
            }}
            placeholder="Tell us more about your inquiry, we'd love to hear from you!"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2"
          style={{
            backgroundColor: colors.blue[600],
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.blue[700];
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.blue[600];
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
