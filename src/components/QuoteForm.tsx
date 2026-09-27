'use client'

import React, { useState } from 'react'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

const PROPERTY_TYPES = [
  'Corporate Office',
  'Retail Storefront',
  'Industrial / Warehouse',
  'Healthcare / Clinic',
  'Educational Facility',
  'Restaurant / Hospitality',
  'Residential Home',
  'Other',
]

const FILM_PURPOSES = [
  'Solar / Heat & Glare Reduction (Up to 75% Heat Block)',
  '3M Safety & Security Film (7 mil / 8 mil / 14 mil)',
  'Decorative & Frosted Conference Room Privacy',
  'One-Way Daytime Privacy Film',
  'Anti-Graffiti Sacrificial Film',
  'Architectural Wall Murals & Vinyl Graphics',
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
  const [purposeError, setPurposeError] = useState(false)

  const handlePurposeChange = (purpose: string) => {
    if (purposeError) {
      setPurposeError(false)
    }
    if (filmPurposes.includes(purpose)) {
      setFilmPurposes(filmPurposes.filter((p) => p !== purpose))
    } else {
      setFilmPurposes([...filmPurposes, purpose])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (filmPurposes.length === 0) {
      setPurposeError(true)
      const element = document.getElementById('film-purposes-group')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }
    setPurposeError(false)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setPropertyType('')
    setFilmPurposes([])
    setSqFootage('')
    setNumWindows('')
    setTimeline(TIMELINES[1])
    setCompanyName('')
    setContactName('')
    setEmail('')
    setPhone('')
    setContactMethod('Either')
    setMessage('')
    setPurposeError(false)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-brand-200 bg-brand-50/60 p-8 sm:p-12 text-center dark:border-brand-800/40 dark:bg-zinc-800/70">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/50">
          <CheckCircleIcon className="h-10 w-10 text-brand-600 dark:text-brand-400" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
          Thank you, {contactName || 'Valued Client'}!
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-700 dark:text-zinc-300">
          We&apos;ve received your commercial project specifications. Our window film specialists
          will review your scope and provide a detailed estimate within 1 business day.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all duration-200"
          >
            Submit Another Request
          </button>
          <a
            href="tel:8323635100"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:ring-zinc-700 dark:hover:bg-zinc-800 transition-all duration-200"
          >
            Call (832) 363-5100
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-12">
      {/* Section 1: Project Information */}
      <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-800/50">
        <div className="mb-6 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
            1
          </span>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Project Information
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-1">
            <label
              htmlFor="property-type"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Property Type <span className="text-red-500">*</span>
            </label>
            <select
              id="property-type"
              name="propertyType"
              required
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
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
            <label
              htmlFor="sq-footage"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Estimated Square Footage <span className="text-red-500">*</span>
            </label>
            <input
              id="sq-footage"
              name="sqFootage"
              type="text"
              required
              placeholder="e.g., 5,000 sq ft"
              value={sqFootage}
              onChange={(e) => setSqFootage(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="num-windows"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Number of Windows/Panes
            </label>
            <input
              id="num-windows"
              name="numWindows"
              type="text"
              placeholder="Optional (e.g., 24 panes)"
              value={numWindows}
              onChange={(e) => setNumWindows(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="timeline"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Project Timeline <span className="text-red-500">*</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              {TIMELINES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div id="film-purposes-group" className="col-span-1 md:col-span-2 mt-2">
            <fieldset>
              <legend className="mb-3 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Film Purpose (Select all that apply) <span className="text-red-500">*</span>
              </legend>
              <div
                className={`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 p-1 rounded-2xl ${
                  purposeError
                    ? 'ring-2 ring-red-500 rounded-2xl p-2 bg-red-50/20 dark:bg-red-950/10'
                    : ''
                }`}
              >
                {FILM_PURPOSES.map((purpose, index) => {
                  const isChecked = filmPurposes.includes(purpose)
                  return (
                    <label
                      key={purpose}
                      htmlFor={`film-purpose-${index}`}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all duration-200 ${
                        isChecked
                          ? 'border-brand-500 bg-brand-50/60 ring-1 ring-brand-500/30 text-zinc-900 dark:border-brand-500 dark:bg-brand-950/30 dark:text-white'
                          : 'border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:border-zinc-600'
                      }`}
                    >
                      <input
                        id={`film-purpose-${index}`}
                        name="filmPurposes"
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handlePurposeChange(purpose)}
                        className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-brand-600 focus:ring-brand-500 dark:border-zinc-600 dark:bg-zinc-900"
                        aria-invalid={purposeError}
                      />
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                        {purpose}
                      </span>
                    </label>
                  )
                })}
              </div>
              {purposeError && (
                <div
                  id="film-purposes-error"
                  role="alert"
                  className="mt-2.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400 font-medium"
                >
                  <ExclamationCircleIcon className="h-4 w-4 flex-shrink-0" />
                  <span>Please select at least one film purpose.</span>
                </div>
              )}
            </fieldset>
          </div>
        </div>
      </div>

      {/* Section 2: Contact Information */}
      <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-800/50">
        <div className="mb-6 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
            2
          </span>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Contact Information
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="company-name"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Company / Organization Name <span className="text-red-500">*</span>
            </label>
            <input
              id="company-name"
              name="companyName"
              type="text"
              required
              placeholder="e.g., Acme Properties LLC"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Contact Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              name="contactName"
              type="text"
              required
              placeholder="First and last name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(832) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>

          <div className="col-span-1">
            <fieldset>
              <legend className="mb-3 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Preferred Contact Method
              </legend>
              <div className="flex flex-wrap gap-6 pt-1">
                {['Email', 'Phone', 'Either'].map((method) => (
                  <label key={method} className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={contactMethod === method}
                      onChange={(e) => setContactMethod(e.target.value)}
                      className="h-4 w-4 border-zinc-300 text-brand-600 focus:ring-brand-500 dark:border-zinc-600 dark:bg-zinc-900"
                    />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      {method}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      {/* Section 3: Additional Details */}
      <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-800/50">
        <div className="mb-6 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
            3
          </span>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Additional Details
          </h2>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Message / Special Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
            placeholder="Tell us about any specific requirements, security ratings, or scheduling needs..."
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Your information is secure and only used for your project quote.
        </p>
        <button
          type="submit"
          className="w-full sm:w-auto rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all duration-200"
        >
          Submit Quote Request
        </button>
      </div>
    </form>
  )
}

export default QuoteForm
