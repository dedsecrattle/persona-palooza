import Link from "next/link";
import { ArrowRight, MessageCircle, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Persona Palooza</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl">
            Meet Your Digital Companions
          </h2>
          <p className="mt-3 text-xl text-muted-foreground sm:mt-5 sm:text-2xl">
            Dive into conversations with AI personas tailored to your needs.
            From creative muses to analytical experts, find your perfect chat
            partner.
          </p>
          <div className="mt-10 flex justify-center items-center space-x-4">
            <Link
              href="/chat"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-150 ease-in-out"
            >
              Chat Now
              <MessageCircle
                className="ml-2 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20 transition-colors duration-150 ease-in-out"
            >
              Learn More
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Persona Palooza. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Join our community
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}