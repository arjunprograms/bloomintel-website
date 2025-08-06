"use client"

import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

interface FooterSectionProps {
  onBookConsultation: () => void
}

export function FooterSection({ onBookConsultation }: FooterSectionProps) {
  return (
    <footer className="bg-black border-t border-border/40">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/bloom-intel-logo.png"
                alt="BloomIntel Logo"
                width={512}
                height={512}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm font-light text-muted-foreground">We Build AI That Thinks Like You Do</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-light">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#solutions"
                  className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Automation
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                >
                  IT Support
                </a>
              </li>
              <li>
                <a
                  href="#analytics"
                  className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                >
                  Business Analytics
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                >
                  CRM Systems
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-light">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#testimonials"
                  className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onBookConsultation}
                  className="text-sm font-light text-muted-foreground hover:text-primary transition-colors text-left w-full bg-transparent p-0"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-light">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm font-light text-muted-foreground">bloomintelai@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm font-light text-muted-foreground">(925) 353-0670</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-light text-muted-foreground">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center">
                      <p className="text-sm font-light text-muted-foreground">© 2025 BloomIntel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
