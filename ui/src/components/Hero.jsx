import { ArrowRight } from 'lucide-react'
// import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Welcome to <span className="text-blue-600">Minimalist</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl">
        Clean design. Powerful features. Endless possibilities.
      </p>
      {/* <Button className="group animate-fade-in-delay-long">
        Get Started
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button> */}
    </section>
  )
}