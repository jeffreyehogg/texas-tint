'use client'

import { useState } from 'react'
import Container from '@/components/Container'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'What types of window film solutions do you offer?',
    answer:
      'We provide solar control films, 3M security and anti-shatter films (7, 8, 14 mil), frosted privacy films, one-way mirrored privacy films, anti-graffiti sacrificial films, and architectural vinyl graphics for commercial, residential, and automotive clients.',
  },
  {
    question: 'How long does commercial window film installation take?',
    answer:
      'Most standard storefronts and office suites can be completed within 1 to 2 business days. For larger multi-story buildings, we coordinate phased installations and offer after-hours and weekend scheduling to ensure zero disruption to your daily operations.',
  },
  {
    question: "Will window film noticeably lower our facility's energy bills?",
    answer:
      'Yes. Our commercial solar films reject up to 75% of solar heat gain and block 99% of UV rays, resulting in HVAC cooling load reductions of up to 30% and qualifying for potential utility rebates and LEED points.',
  },
  {
    question: 'Can safety & security films protect against break-ins and severe storms?',
    answer:
      'Absolutely. Our 7 to 14 mil heavy-duty security films are engineered with micro-layered tear-resistant polyester that holds shattered glass firmly in place, mitigating blast hazards and dramatically delaying forced entry attempts.',
  },
  {
    question: 'What kind of warranty comes with commercial installations?',
    answer:
      'All commercial installations come with comprehensive manufacturer-backed warranties: 10 to 15 years on interior architectural films, and 5 to 7 years on exterior films against bubbling, peeling, or discoloration.',
  },
  {
    question: 'Can window film be installed on any type of commercial glass?',
    answer:
      'Yes. Our certified team conducts a thermal stress analysis prior to installation to ensure full compatibility with annealed, tempered, tinted, and low-E insulated glass units.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800 dark:bg-brand-900/50 dark:text-brand-300">
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Commercial Window Film FAQs
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Everything you need to know about specifications, installation timelines, energy
            efficiency, and warranty coverage for your commercial property.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={clsx(
                  'rounded-2xl border transition-all duration-200',
                  isOpen
                    ? 'border-brand-500/50 bg-white shadow-sm dark:border-brand-500/50 dark:bg-zinc-800/80 ring-1 ring-brand-500/20'
                    : 'border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-zinc-700'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-base font-semibold leading-7 text-zinc-900 dark:text-white sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={clsx(
                      'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-200',
                      isOpen
                        ? 'bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300'
                        : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400'
                    )}
                  >
                    <ChevronDownIcon
                      className={clsx(
                        'h-5 w-5 transform transition-transform duration-300',
                        isOpen && 'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={clsx(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-1 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Supplementary consultation prompt */}
        <div className="mx-auto mt-12 max-w-2xl text-center rounded-2xl bg-white p-6 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-800/40">
          <p className="text-base text-zinc-700 dark:text-zinc-300">
            Have a specific requirement for your facility?{' '}
            <Link
              href="/quote"
              className="font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300 underline underline-offset-4"
            >
              Request a free commercial consultation
            </Link>{' '}
            or call us directly at{' '}
            <a
              href="tel:8323635100"
              className="font-semibold text-zinc-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400"
            >
              (832) 363-5100
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  )
}
