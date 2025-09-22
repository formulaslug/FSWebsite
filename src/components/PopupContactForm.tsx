"use client";

import { colors } from "@/config/colors";
import { useState } from "react";

interface PopupContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PopupContactForm({ isOpen, onClose }: PopupContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mvgwpopb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Close popup after 2 seconds to show success message
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-20 flex items-center justify-center z-50 p-4">
      <div
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-lg shadow-xl"
        style={{ backgroundColor: colors.background.secondary }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.slugYellow }}>
            Contact Us
          </h2>
          
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 rounded-md" style={{ backgroundColor: colors.slugYellow, color: colors.primary }}>
              <strong>Thanks for your message!</strong> We'll get back to you soon.
            </div>
          )}
          
          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 rounded-md bg-red-600 text-white">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="popup-name" className="block text-sm font-medium mb-1" style={{ color: colors.textColor }}>
                Name
              </label>
              <input
                type="text"
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                style={{
                  backgroundColor: colors.background.card,
                  borderColor: colors.gray[600],
                  color: colors.textColor,
                }}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="popup-email" className="block text-sm font-medium mb-1" style={{ color: colors.textColor }}>
                Email
              </label>
              <input
                type="email"
                id="popup-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                style={{
                  backgroundColor: colors.background.card,
                  borderColor: colors.gray[600],
                  color: colors.textColor,
                }}
                placeholder="Return email"
              />
            </div>

            <div>
              <label htmlFor="popup-subject" className="block text-sm font-medium mb-1" style={{ color: colors.textColor }}>
                Subject
              </label>
              <input
                type="text"
                id="popup-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                style={{
                  backgroundColor: colors.background.card,
                  borderColor: colors.gray[600],
                  color: colors.textColor,
                }}
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="popup-message" className="block text-sm font-medium mb-1" style={{ color: colors.textColor }}>
                Message
              </label>
              <textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent resize-vertical text-sm"
                style={{
                  backgroundColor: colors.background.card,
                  borderColor: colors.gray[600],
                  color: colors.textColor,
                }}
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 text-gray-300 font-medium py-2 px-4 rounded-md transition-colors duration-200 border"
                style={{
                  borderColor: colors.gray[600],
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.gray[700];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: colors.electricBlue,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = colors.titleBlue;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = colors.electricBlue;
                  }
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}