import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import AnimatedLogo from "@/components/AnimatedLogo";

const Index = () => {
  const [email, setEmail] = useState("");
  const [openTomDialog, setOpenTomDialog] = useState(false);
  const [openIopuDialog, setOpenIopuDialog] = useState(false);

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const moveX = (x - rect.width / 2) / rect.width * 150;
    const moveY = (y - rect.height / 2) / rect.height * 150;
    
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };

  const handleLogoHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const logo = container.querySelector('.logo-image') as HTMLImageElement;
    
    if (logo) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const moveX = (x - rect.width / 2) / rect.width * 200;
      const moveY = (y - rect.height / 2) / rect.height * 200;
      
      logo.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  };

  const handleLogoLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const logo = e.currentTarget.querySelector('.logo-image') as HTMLImageElement;
    if (logo) {
      logo.style.transform = 'translate(0, 0)';
    }
  };

  const handleHostHover = (e: React.MouseEvent<HTMLDivElement>, side: 'left' | 'right') => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const button = container.querySelector('.host-button') as HTMLDivElement;
    
    if (button) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
      button.style.transform = 'translate(-50%, -50%)';
      button.style.opacity = '1';
    }
  };

  const handleHostLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget.querySelector('.host-button') as HTMLDivElement;
    if (button) {
      button.style.opacity = '0';
    }
  };

  const handleHostClick = (side: 'left' | 'right') => {
    if (side === 'left') {
      setOpenTomDialog(true);
    } else {
      setOpenIopuDialog(true);
    }
  };

  const scrollToEpisodes = () => {
    const episodesSection = document.querySelector('#episodes');
    if (episodesSection) {
      episodesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const episodes = [{
    number: "01",
    title: "Kate Malvern: Beating cancer after a four-month death sentence",
    date: "Mar 12, 2025"
  }, {
    number: "02",
    title: "Chloe Mascord: Breaking taboos - sex, intimacy, and self-discovery",
    date: "Mar 19, 2025"
  }, {
    number: "03",
    title: "Matt Smith: Growing up gay in rural New Zealand",
    date: "Mar 26, 2025"
  }, {
    number: "04",
    title: "Rob Thomas: From small watch business to multimillion-dollar success",
    date: "Apr 3, 2025"
  }, {
    number: "05",
    title: "Iopu Aso: All Black, family man, and leader",
    date: "Apr 10, 2025"
  }];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return <div className="min-h-screen">
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-50">
        <img 
          src="/joe-blow-podcast/lovable-uploads/045a54d4-e9fd-4885-bdb1-a02182b034a0.png" 
          alt="Brand Logo" 
          className="h-10 w-10"
        />
        <div className="flex gap-4">
          <button 
            className="px-6 py-2 rounded-full border border-black text-black hover:bg-highlight hover:border-highlight hover:text-white transition-all duration-200"
            onMouseMove={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={scrollToEpisodes}
          >
            Episodes
          </button>
          <button 
            className="px-6 py-2 rounded-full bg-black text-white hover:bg-highlight transition-all duration-200"
            onMouseMove={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Subscribe
          </button>
        </div>
      </nav>

      <div className="relative h-screen w-full overflow-hidden bg-white">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/c292d14c8bb14e5bbe3a5539f3eb511e.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <AnimatedLogo />
        </div>
      </div>

      <div>
        <div className="container mx-auto px-8 pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <span 
                style={{ backgroundColor: '#F49ABE' }}
                className="inline-block px-3 py-1 text-white rounded-full mb-6"
              >
                PODCAST
              </span>
              <h1 className="text-6xl font-bold mb-6">
                A PODCAST ABOUT REAL <br />
                PEOPLE AND RAW STORIES
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Hosted by Tom Uhlich and Iopo Aso, we dive into the lives of those at the top of their field and those who have survived the unthinkable. From the relentless pursuit of greatness to the darkest battles fought in silence, <span className="font-bold text-highlight">Joe Blow</span> exposes the issues we all face but are too scared to admit. No bullshit, no filter - just the raw, unvarnished truth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20" id="episodes">
        <h2 className="text-4xl font-bold mb-12 animate-slide-up">
          LATEST EPISODES
          <br />
          AVAILABLE NOW ↓
        </h2>

        <div className="max-w-4xl">
          {episodes.map((episode, index) => <a key={index} href="#" className="episode-link group">
              <div>
                <span className="text-sm text-gray-400 mb-2 block">{episode.number}</span>
                <h3 className="text-xl font-medium group-hover:text-highlight transition-colors">
                  {episode.title}
                </h3>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-4">{episode.date}</span>
                <ArrowRight className="w-5 h-5 text-highlight opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>)}
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-bold">
            MEET THE
            <br />
            CO-HOSTS ↓
          </h2>
        </div>

        <div className="relative h-[600px] overflow-hidden">
          <img 
            src="/joe-blow-podcast/lovable-uploads/161c86b3-b1a6-465b-a4f9-9843d1ead1a8.png" 
            alt="Podcast Hosts" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex">
            <div 
              className="w-1/2 h-full relative cursor-none"
              onMouseMove={(e) => handleHostHover(e, 'left')}
              onMouseLeave={handleHostLeave}
              onClick={() => handleHostClick('left')}
            >
              <div 
                className="host-button absolute px-6 py-2 rounded-full bg-highlight text-white opacity-0 transition-opacity pointer-events-none whitespace-nowrap"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                TOM UHLICH
              </div>
            </div>
            <div 
              className="w-1/2 h-full relative cursor-none"
              onMouseMove={(e) => handleHostHover(e, 'right')}
              onMouseLeave={handleHostLeave}
              onClick={() => handleHostClick('right')}
            >
              <div 
                className="host-button absolute px-6 py-2 rounded-full bg-highlight text-white opacity-0 transition-opacity pointer-events-none whitespace-nowrap"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                IOPU ASO
              </div>
            </div>
          </div>
        </div>

        <Dialog open={openTomDialog} onOpenChange={setOpenTomDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tom Uhlich</DialogTitle>
              <DialogDescription>
                Tom is a seasoned podcast host and entrepreneur. With over a decade of experience in digital media, 
                he brings a unique perspective to every conversation. His ability to connect with guests and draw out 
                their most compelling stories has made him one of the most respected voices in podcasting.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog open={openIopuDialog} onOpenChange={setOpenIopuDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Iopu Aso</DialogTitle>
              <DialogDescription>
                Iopu is a former professional athlete turned media personality. His background in sports and leadership 
                brings a dynamic energy to the show. Known for his insightful questions and authentic approach, 
                Iopu helps guests feel comfortable sharing their most personal stories.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">
            REACH OUT AND CONNECT WITH US
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" />
              <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <textarea placeholder="Message" rows={4} className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" />
            <button 
              type="submit" 
              className="px-6 py-2 rounded-full bg-black text-white hover:bg-highlight transition-all duration-200"
              onMouseMove={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <img 
              src="/joe-blow-podcast/lovable-uploads/ab081bb6-32f6-4e5b-9545-85d35726c04c.png" 
              alt="FWD Obsessed Logo" 
              className="h-6" 
            />
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-highlight">Spotify</a>
              <a href="#" className="text-gray-600 hover:text-highlight">Apple Podcasts</a>
              <a href="#" className="text-gray-600 hover:text-highlight">Google Podcasts</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
