'use client'

import React, { useState } from 'react'

const PROPERTY_TYPES = [
  'Office Building',
  'Retail/Storefront',
  'Healthcare Facility',
  'Educational Institution',
  'Government Building',
  'Restaurant/Hospitality',
  'Multi-Family Residential',
  'Other',
]

const FILM_PURPOSES = [
  'Solar/Energy Reduction',
  'Security/Anti-Shatter',
  'Privacy/Decorative',
  'UV Protection',
  'Glare Reduction',
]

const TIMELINES = [
  'Urgent (within 2 weeks)',
  'Standard (2-4 weeks)',
  'Flexible (1-3 months)',
  'Planning Phase',
]

export const QuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [propertyType, setPropertyType] = useState('')
  const [filmPurposes, setFilmPurposes] = useState<string[]>([])
  const [sqFootage, setSqFootage] = useState('')
  const [numWindows, setNumWindows] = useState('')
  const [timeline, setTimeline] = useState(TIMELINES[1])

  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [contactMethod, setContactMethod] = useState('Either')

  const [message, setMessage] = useState('')

  const handlePurposeChange = (purpose: string) => {
    if (filmPurposes.includes(purpose)) {
      setFilmPurposes(filmPurposes.filter((p) => p !== purpose))
    } else {
      setFilmPurposes([...filmPurposes, purpose])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validation is handled by HTML5 `required` attributes for simplicity,
    // plus custom check for filmPurposes if desired (though standard requested fields are required).
    if (filmPurposes.length === 0) {
      alert('Please select at least one film purpose.')
      return
    }
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-brand-50 p-8 text-center dark:bg-brand-900/20">
        <h3 className="mb-4 text-2xl font-bold text-brand-800 dark:text-brand-300">
          Thank you!
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          We&apos;ll prepare your custom estimate within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Section 1: Project Information */}
      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/5 dark:bg-zinc-800/50">
        <div className="mb-6 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
            1
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Project Information
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Property Type *
            </label>
            <select
              required
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              <option value="" disabled>
                Select property type
              </option>
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Estimated Square Footage *
            </label>
            <input
              type="text"
              required
              placeholder="e.g., 5,000 sq ft"
              value={sqFootage}
              onChange={(e) => setSqFootage(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Number of Windows/Panes
            </label>
            <input
              type="text"
              placeholder="Optional"
              value={numWindows}
              onChange={(e) => setNumWindows(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Project Timeline *
            </label>
            <select
              required
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              {TIMELINES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1 md:col-span-2 mt-2">
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Film Purpose (Select all that apply) *
            </label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {FILM_PURPOSES.map((purpose) => (
                <label
                  key={purpose}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  <input
                    type="checkbox"
                    checked={filmPurposes.includes(purpose)}
                    onChange={() => handlePurposeChange(purpose)}
                    className="h-5 w-5 rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-zinc-600 dark:bg-zinc-900"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {purpose}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Contact Information */}
      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/5 dark:bg-zinc-800/50">
        <div className="mb-6 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
            2
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Contact Information
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Company/Organization Name *
            </label>
            <input
              type="text"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contact Name *
            </label>
            <input
              type="text"
              required
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div className="col-span-1">
            <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Preferred Contact Method
            </label>
            <div className="flex gap-6">
              {['Email', 'Phone', 'Either'].map((method) => (
                <label key={method} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={contactMethod === method}
                    onChange={(e) => setContactMethod(e.target.value)}
                    className="h-4 w-4 border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-zinc-600 dark:bg-zinc-900"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {method}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Additional Details */}
      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/5 dark:bg-zinc-800/50">
        <div className="mb-6 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
            3
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Additional Details
          </h2>
        </div>

        <div className="col-span-1">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message/Special Requirements
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            placeholder="Tell us about any specific requirements or questions you have..."
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-xl bg-brand-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
        >
          Submit Quote Request
        </button>
      </div>
    </form>
  )
}
