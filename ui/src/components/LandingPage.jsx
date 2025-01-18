import { Link } from "@mui/material";
import { ArrowRight, MessageCircle, Users } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">

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
    </div>
  );
};

export default LandingPage;