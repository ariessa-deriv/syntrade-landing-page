import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import LogoIcon from '@/images/logos/old_logo_name.svg'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/syntradeSignUpQR.svg'

function QrCodeBorder(props) {
  return (
    <svg
      id="qr-code-border"
      viewBox="0 0 96 96"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer id="main-footer" className="border-t border-gray-200">
      <Container>
        <div
          id="footer-container"
          className="flex flex-col items-center justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16"
        >
          <div id="footer-left-container">
            <div
              id="logo-container"
              className="flex w-full items-center text-gray-900"
            >
              <img
                id="syntrade-logo"
                src={LogoIcon.src}
                href=""
                className="mx-auto h-28 w-auto"
              />
            </div>
            <nav
              id="footer-nav-menu"
              className="mt-11 flex items-center justify-center gap-8"
            >
              <NavLinks />
            </nav>
          </div>
          <div
            id="footer-right-container"
            className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6"
          >
            <div
              id="qr-container"
              className="relative flex h-24 w-24 flex-none items-center justify-center"
            >
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div id="signup-container" className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="https://app.syntrade.xyz/signup">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Sign up now
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to sign up and start trading now!
              </p>
            </div>
          </div>
        </div>
        <div
          id="bottom-footer"
          className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6"
        >
          <p className="mx-auto mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Syntrade {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
