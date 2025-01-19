import { Link, Button } from "@mui/material";
import { ArrowRight, MessageCircle } from "lucide-react";

const LandingPage = ({ setShowChat }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-400 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold text-white mb-14">
            🤖 PERSONA PALOOZA!
          </h1>
          <h2 className="text-4xl font-extrabold text-white text-primary sm:text-5xl md:text-6x">
            Meet Your Digital Companions
          </h2>
          <p className="mt-3 text-xl text-muted-foreground sm:mt-5 sm:text-2xl font-extralight text-white">
            Dive into conversations with AI personas tailored to your needs.{" "}
            <br />
            From creative muses to analytical experts, find your perfect chat
            partner.
          </p>
          <div className="mt-10 flex flex-col gap-6 justify-center items-center">
            <Button
              onClick={() => setShowChat(true)}
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: "16px 32px",
                fontSize: "1.125rem",
                fontWeight: 600,
                borderRadius: "12px",
                boxShadow: "lg",
                "&:hover": {
                  backgroundColor: "#222",
                  transform: "scale(1.05)",
                  boxShadow: "xl",
                },
                "& .MuiButton-startIcon": {
                  marginLeft: "12px",
                },
              }}
            >
              Chat Now
              <MessageCircle
                className="h-6 w-6 gap-3 ml-4"
                aria-hidden="true"
              />
            </Button>
            <Link
              href="https://github.com/dedsecrattle/persona-palooza"
              className="inline-flex items-center px-6 py-3 border border-transparent 
    text-base font-medium rounded-md 
    !text-white
    bg-black"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
