import React, { useState, useEffect } from 'react';
import { 
  Navigation, 
  MapPin, 
  Wifi, 
  Wind, 
  Users, 
  Bed, 
  Waves, 
  Utensils, 
  Coffee, 
  Tv, 
  ExternalLink, 
  Mail, 
  Phone, 
  Star,
  ChevronRight,
  Menu,
  X,
  Mountain,
  Zap,
  CheckCircle,
  Camera,
  Flame,
  Calendar,
  Compass,
  Wine
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Availability', href: '#book' },
    { name: 'The Lodge', href: '#lodge' },
    { name: 'Grounds', href: '#grounds' },
    { name: 'Explore', href: '#explore' },
    { name: 'Contact', href: '#contact' }
  ];

  const amenities = [
    { icon: <Bed className="w-5 h-5" />, label: "4 Queen Bedrooms" },
    { icon: <Users className="w-5 h-5" />, label: "Family Friendly" },
    { icon: <Waves className="w-5 h-5" />, label: "6-Person Hot Tub" },
    { icon: <Zap className="w-5 h-5" />, label: "Game Room" },
    { icon: <Utensils className="w-5 h-5" />, label: "Full Kitchen" },
    { icon: <Wifi className="w-5 h-5" />, label: "High Speed WiFi" },
    { icon: <Wind className="w-5 h-5" />, label: "A/C & Heating" },
    { icon: <Flame className="w-5 h-5" />, label: "Fire Pit" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Mountain className={`w-8 h-8 ${scrolled ? 'text-emerald-700' : 'text-white'}`} />
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-800' : 'text-white'}`}>
              LUCKENBACH HILL
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-emerald-700' : 'text-white/90 hover:text-white'}`}>
                {link.name}
              </a>
            ))}
            <a href="https://romig-retreats.lodgify.com" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl">
              Book Direct
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 
              <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : 
              <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-slate-600 font-medium border-b border-slate-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a href="https://romig-retreats.lodgify.com" className="block py-3 bg-emerald-600 text-white text-center rounded-lg font-bold">
              Book Direct
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://a0.muscache.com/im/pictures/miso/Hosting-634486229724134845/original/ec2c94a8-e1f2-40f4-bb75-2b6ddf1452d2.jpeg?aki_policy=xx_large" 
            className="w-full h-full object-cover" 
            alt="Lodge Exterior"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Rustic Elegance in the <br/><span className="text-emerald-300">Finger Lakes</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow">
            Experience 6 acres of nature with a private pond, hot tub, and modern comfort just 1 mile from Harriet Hollister Park.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-lg shadow-2xl transition-all transform hover:-translate-y-1">
              Check Availability
            </a>
            <a href="#lodge" className="px-10 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 rounded-full font-bold text-lg transition-all">
              Explore The Lodge
            </a>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section id="book" className="py-16 bg-emerald-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-8 justify-center">
              <Calendar className="w-6 h-6 text-emerald-600" />
              <h2 className="text-3xl font-bold text-slate-800">Book Your Stay</h2>
            </div>
            
            <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
              <p className="text-slate-600 max-w-md">
                Our calendar is synced live with Airbnb and VRBO. Book here directly to save on platform service fees.
              </p>
              
              <div className="w-full max-w-2xl border-2 border-dashed border-slate-200 rounded-2xl p-8 bg-slate-50">
                <h3 className="text-xl font-semibold mb-4 text-emerald-700">Ready to reserve?</h3>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2">Check In</label>
                    <div className="w-full bg-white border border-slate-200 p-3 rounded-xl mt-1 text-slate-400">Select Date</div>
                  </div>
                  <div className="flex-1 text-left">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2">Check Out</label>
                    <div className="w-full bg-white border border-slate-200 p-3 rounded-xl mt-1 text-slate-400">Select Date</div>
                  </div>
                </div>
                <a 
                  href="https://romig-retreats.lodgify.com/en/the-lodge-at-luckenbach-hill" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all"
                >
                  View Prices & Availability
                </a>
                <p className="mt-4 text-xs text-slate-400 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 mr-1 text-emerald-500" /> Secure Checkout via Lodgify
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Lodge Section */}
      <section id="lodge" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Comfort Meets Nature</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">Inside The Lodge</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Step into our charming 4-bedroom retreat. Whether you're cooking in our fully stocked kitchen or gathering in the family room with a 65-inch flat screen, every corner is designed for your comfort.
              </p>
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                {amenities.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">{item.icon}</div>
                    <span className="text-sm md:text-base">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4 pt-12">
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/c8865a1a-e31e-47f3-a978-8f88e5679c64.jpeg?aki_policy=xx_large" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Kitchen Area" />
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/e1b2248d-5409-43af-8c12-8dcd0a308204.jpeg?aki_policy=xx_large" className="rounded-2xl shadow-lg w-full h-80 object-cover" alt="Bedroom" />
              </div>
              <div className="space-y-4">
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/2375c61f-7700-4601-a3f8-37eaac183dea.jpeg?aki_policy=xx_large" className="rounded-2xl shadow-lg w-full h-80 object-cover" alt="Living Room" />
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/99c328f3-f4b1-40ae-817a-ec1edb87863f.jpeg?aki_policy=xx_large" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Game Room" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Grounds Section */}
      <section id="grounds" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Grounds</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Six private acres nestled in the hills of Springwater, NY.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-3xl h-96 shadow-2xl">
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/540ec5e2-1f9e-4e26-a7db-a596320374bb.jpeg?aki_policy=xx_large" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Serene Pond" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">Serene Pond</h3>
                <p className="text-slate-300 text-sm">Swimming and fishing right on the property.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl h-96 shadow-2xl">
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/dcbe31f5-8c8f-4755-8357-e33fccf6dd77.jpeg?aki_policy=xx_large" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Hot Tub" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">6-Person Hot Tub</h3>
                <p className="text-slate-300 text-sm">Relax under the stars after a day of hiking.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl h-96 shadow-2xl">
              <img src="https://a0.muscache.com/im/pictures/f910b196-6a56-493e-9a7e-3db5e168062c.jpg?aki_policy=xx_large" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Harriet Hollister View" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">Harriet Hollister</h3>
                <p className="text-slate-300 text-sm">Stunning vistas of Honeoye Lake just 1 mile away.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section (Guidebook Content) */}
      <section id="explore" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nearby Attractions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium">The best of the Finger Lakes region, as featured in our guest book.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Compass className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">State Parks</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Harriet Hollister (1 mi):</strong> Hiking, skiing & lake vistas.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Letchworth (37 min):</strong> The "Grand Canyon of the East".</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Stony Brook (30 min):</strong> Stunning waterfalls and trails.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Wine className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Wineries & Towns</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Naples (12 min):</strong> Famous Grape Pies & wineries.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Hammondsport (50 min):</strong> Keuka Lake breweries & museums.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Canandaigua (25 min):</strong> CMAC concerts & lakefront dining.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Star className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Local Favorites</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Conesus Lake (20 min):</strong> Great for a scenic drive.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Bristol Mountain:</strong> Premier skiing in the winter months.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Corning Museum:</strong> World-class glass art (1 hour).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-12 border-b border-slate-800 pb-12 mb-12">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                <Mountain className="w-8 h-8 text-emerald-500" />
                <span className="text-2xl font-bold tracking-tight">ROMIG RETREATS</span>
              </div>
              <p className="text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
                Rustic-elegant accommodations in the heart of the Finger Lakes region. Your gateway to nature and adventure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-wider text-xs">Contact</h4>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm">585-313-3670</p>
                  <p className="text-slate-400 text-sm">Derek.Romig@gmail.com</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-wider text-xs">Location</h4>
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm">8948 Luckenbach Hill Road</p>
                  <p className="text-slate-400 text-sm">Springwater NY 14560</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} Romig Retreats. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6 uppercase tracking-widest">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="https://romig-retreats.lodgify.com" className="hover:text-white transition-colors">Book Direct</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
