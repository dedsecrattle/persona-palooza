import { Link, Button } from "@mui/material";
import { ArrowRight, MessageCircle } from "lucide-react";
import landingImage from '../images/landing-img.png';


const LandingPage = ({ setShowChat }) => {
  return (
    <div className="flex flex-col min-h-screen">
<main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-400 rounded-lg">
<div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-40">
  <div className="text-left md:w-1/2">
  <h1 className="text-5xl font-extrabold text-white mb-14 whitespace-nowrap  tracking-tight font-poppins">
       PERSONA PALOOZA! 🤖
    </h1>
    <h2 className="text-4xl font-extrabold text-white text-primary sm:text-5xl md:text-6x font-poppins">
      Meet Your Digital Companions
    </h2>
    <p className="mt-3 text-xl text-muted-foreground sm:mt-5 sm:text-2xl font-extralight text-white">
      Dive into conversations with AI personas tailored to your needs.{" "}
      <br />
      From creative muses to analytical experts, find your perfect chat
      partner.
    </p>
    <div className="mt-10 flex flex-col gap-6">
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
                  width: "100%",
                  fontFamily: 'poppins',
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
        href="#"
        c        className="inline-flex justify-center items-center px-6 py-3 border border-transparent 
        text-base font-medium rounded-md 
        !text-white
        bg-black font-poppins hover:bg-[#222] hover:scale-105 transition-all">
        Learn More
      </Link>
    </div>
  </div>
  <div className="md:w-1/2 flex justify-center">
    <img 
      src={landingImage} 
      alt="Logo" 
      className="w-auto h-auto max-h-[80vh] object-contain" 
    />
  </div>
</div>
</main>
    </div>
  );
};

export default LandingPage;