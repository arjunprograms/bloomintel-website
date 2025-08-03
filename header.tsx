"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  onBookConsultation: () => void
}

export function Header({ onBookConsultation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-32 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center">
            <Image
              src="/images/bloom-intel-logo.png"
              alt="BloomIntel Glowing Logo"
              width={512}
              height={512}
              className="h-28 w-auto"
              priority
            />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-light">
            <button
              onClick={() => scrollToSection("solutions")}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("roi-calculator")}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Calculate Potential Savings
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              FAQs
            </button>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/bloom-intel-logo.png"
                alt="BloomIntel Glowing Logo"
                width={512}
                height={512}
                className="h-28 w-auto"
              />
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="text-left font-light transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Solutions
                </button>
                <button
                  onClick={() => scrollToSection("roi-calculator")}
                  className="text-left font-light transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Calculate Potential Savings
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left font-light transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  FAQs
                </button>
                <Button onClick={onBookConsultation} className="mt-4 font-light">
                  Book Consultation
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link href="/" className="flex items-center md:hidden">
            <Image
              src="/images/bloom-intel-logo.png"
              alt="BloomIntel Glowing Logo"
              width={512}
              height={512}
              className="h-24 w-auto"
            />
          </Link>
          <nav className="flex items-center">
            <Button onClick={onBookConsultation} className="font-light">
              Book Consultation
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
