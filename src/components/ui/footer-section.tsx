"use client"

import * as React from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Textarea } from "./textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter, ArrowRight, ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { SITE_IMAGES } from "../../data/imageData"
import { newsletterSchema } from "../../lib/validation"
import { sanitizeEmail, sanitizeTextarea } from "../../lib/sanitize"

interface FooterdemoProps {
  onNavigateTab?: (tab: string) => void;
  onOpenQuoteModal?: (service?: string) => void;
}

function Footerdemo({ onNavigateTab, onOpenQuoteModal }: FooterdemoProps) {
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [newsletterEmail, setNewsletterEmail] = React.useState("")
  const [newsletterSubscribed, setNewsletterSubscribed] = React.useState(false)
  const [newsletterError, setNewsletterError] = React.useState("")
  const [quickMsg, setQuickMsg] = React.useState("")
  const [quickMsgSent, setQuickMsgSent] = React.useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterError("")
    const clean = sanitizeEmail(newsletterEmail)
    const result = newsletterSchema.safeParse({ email: clean })
    if (!result.success) {
      setNewsletterError(result.error.issues[0]?.message || "Invalid email address")
      return
    }

    setNewsletterSubscribed(true)
    setTimeout(() => {
      setNewsletterSubscribed(false)
      setNewsletterEmail("")
    }, 4000)
  }

  const handleQuickMsgSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cleanMsg = sanitizeTextarea(quickMsg)
    if (cleanMsg.trim().length >= 3) {
      setQuickMsgSent(true)
      setTimeout(() => {
        setQuickMsgSent(false)
        setQuickMsg("")
      }, 4000)
    }
  }

  return (
    <footer className="relative border-t bg-white border-neutral-200 text-neutral-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo Placeholder Column */}
          <div className="relative space-y-4">
            <div className="inline-flex items-center">
              <div className="h-14 min-w-[4.75rem] px-4 py-2 rounded-2xl bg-white border border-neutral-200 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_6px_16px_rgba(0,0,0,0.04)] flex items-center justify-center overflow-hidden">
                <img
                  src={SITE_IMAGES.logo}
                  alt="Company Logo"
                  referrerPolicy="no-referrer"
                  className="h-full w-auto max-h-10 object-contain rounded-md"
                />
              </div>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We work with investors, energy companies, suppliers, traders and strategic partners seeking commercially viable opportunities within Ghana and African energy markets.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Oil & Gas', 'Energy Trading', 'Renewables', 'Infrastructure', 'Commodities', 'Industrial Energy'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-2 flex items-center space-x-2 text-xs text-neutral-600">
              <ShieldCheck className="h-4 w-4 text-neutral-900 shrink-0" />
              <span>NPA & ISO Regulatory Aligned &bull; Accra, Ghana</span>
            </div>
          </div>

          {/* Strategic Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Quick Navigation</h3>
            <nav className="space-y-2 text-xs">
              <div>
                <button
                  type="button"
                  onClick={() => onNavigateTab?.('home')}
                  className="transition-colors hover:text-neutral-950 text-neutral-600"
                >
                  Home & Executive Overview
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigateTab?.('about')}
                  className="transition-colors hover:text-neutral-950 text-neutral-600"
                >
                  About Us & Executive Directorate
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigateTab?.('services')}
                  className="transition-colors hover:text-neutral-950 text-neutral-600"
                >
                  Energy Services & Trading Solutions
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigateTab?.('insights')}
                  className="transition-colors hover:text-neutral-950 text-neutral-600"
                >
                  Market Intelligence & Research
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigateTab?.('blog')}
                  className="transition-colors hover:text-neutral-950 text-neutral-600"
                >
                  Executive Blog & Perspectives
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigateTab?.('training')}
                  className="transition-colors hover:text-neutral-950 text-neutral-600"
                >
                  Executive Training & Masterclasses
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigateTab?.('contact')}
                  className="transition-colors hover:text-neutral-950 text-neutral-600"
                >
                  Contact Desk & Trade Inquiries
                </button>
              </div>
            </nav>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Contact Desk</h3>
            <address className="space-y-2.5 text-xs not-italic text-neutral-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                <span>Accra & Tema Deepwater Corridor, Greater Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-900 shrink-0" />
                <a href="tel:+233246470010" className="hover:text-neutral-950 transition-colors">
                  +233 246470010 / +233 244799015
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-900 shrink-0" />
                <a href="mailto:thedevelopersenergy@gmail.com" className="hover:text-neutral-950 transition-colors">
                  thedevelopersenergy@gmail.com
                </a>
              </div>
            </address>

            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs font-semibold border-neutral-300 hover:bg-neutral-100 text-neutral-900"
                onClick={() => onOpenQuoteModal ? onOpenQuoteModal('Strategic Energy Collaboration') : onNavigateTab?.('contact')}
              >
                <span>Request Trade Allocation Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Newsletter & Interactive Desk */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Market Intelligence</h3>
            <p className="text-xs text-neutral-600">
              Subscribe to bi-weekly West Africa petroleum pricing, downstream policy shifts, and vessel discharge schedules.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Market reports will arrive in your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <Input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value)
                      if (newsletterError) setNewsletterError("")
                    }}
                    placeholder="Enter corporate email"
                    className={`pr-10 text-xs bg-neutral-50 ${newsletterError ? 'border-red-400' : 'border-neutral-200'}`}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-sm bg-neutral-950 hover:bg-neutral-800 text-white"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span className="sr-only">Subscribe</span>
                  </Button>
                </div>
                {newsletterError && (
                  <p className="text-[11px] text-red-600 font-medium">{newsletterError}</p>
                )}
              </form>
            )}

            <div className="pt-2 border-t border-neutral-200 space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <span className="font-medium">Direct Trade Query</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-[11px] text-neutral-800 hover:bg-neutral-100"
                  onClick={() => setIsChatOpen(!isChatOpen)}
                >
                  {isChatOpen ? "Hide Form" : "Quick Message"}
                </Button>
              </div>

              {isChatOpen && (
                <div className="space-y-2">
                  {quickMsgSent ? (
                    <div className="p-2.5 rounded-md bg-emerald-50 text-emerald-700 text-xs flex items-center gap-1.5 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Message received. Our trade desk will respond.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleQuickMsgSubmit} className="space-y-2">
                      <Textarea
                        rows={2}
                        value={quickMsg}
                        onChange={(e) => setQuickMsg(e.target.value)}
                        placeholder="Brief inquiry / volume required..."
                        className="text-xs bg-neutral-50 border-neutral-200"
                      />
                      <Button type="submit" size="sm" className="w-full text-xs h-8 bg-neutral-950 text-white hover:bg-neutral-800">
                        Send to Trade Desk
                      </Button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-center md:flex-row">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} The Developers Energy Limited (TDE). All rights reserved. Registered in Ghana.
          </p>

          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                  >
                    <Facebook className="h-3.5 w-3.5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow us on Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow us on Twitter</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow us on Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Connect on LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
