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
  Camera
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
    { name: 'The Lodge', href: '#lodge' },
    { name: 'Grounds', href: '#grounds' },
    { name: 'Location', href: '#location' },
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
    { icon: <Coffee className="w-5 h-5" />, label: "Stocked Pond" },
  ];

  const destinations = [
    { name: "Harriet Hollister Park", dist: "1 Mile", desc: "Hiking, XC skiing, and stunning views." },
    { name: "Keuka Lake", dist: "39 Miles", desc: "Explore wineries and breweries in Penn Yan." },
    { name: "Bristol Mountain", dist: "Short Drive", desc: "Premier winter thrill-seeking and skiing." },
    { name: "Naples, NY", dist: "15-20 Min", desc: "Charming restaurants and local flavors." }
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-emerald-700' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://romig-retreats.lodgify.com" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Book Direct
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-800">
              {link.name}
            </a>
          ))}
          <a href="https://romig-retreats.lodgify.com" className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-bold">
            Book Direct Now
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="The Lodge at Luckenbach Hill"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Rustic Elegance in the <br/><span className="text-emerald-300">Finger Lakes</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow">
            Experience 6 acres of nature with a private pond, hot tub, and modern comfort just 1 mile from Harriet Hollister Park.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://romig-retreats.lodgify.com" 
              className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-lg shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Book Your Stay
            </a>
            <a 
              href="#lodge" 
              className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-full font-bold text-lg transition-all"
            >
              Explore the Lodge
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white w-8 h-8" />
        </div>
      </section>

      {/* Inside the Lodge Section */}
      <section id="lodge" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Comfort Meets Nature</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">Inside The Lodge</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Step into our charming 4-bedroom retreat, where rustic charm meets modern amenities. 
                Whether you're cooking in our fully stocked kitchen or gathering in the family room 
                with a 65-inch flat screen, every corner is designed for your comfort.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {amenities.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">{item.icon}</div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 italic text-slate-600 border-l-4 border-l-emerald-500">
                "Our home is your home. We want to ensure you have a truly memorable and pleasant stay at the Lodge."
                <footer className="mt-2 font-bold not-italic text-slate-800">— Your Hosts, Romig Retreats</footer>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-634486229724134845/original/ec2c94a8-e1f2-40f4-bb75-2b6ddf1452d2.jpeg?im_w=1200" />
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/540ec5e2-1f9e-4e26-a7db-a596320374bb.jpeg?im_w=1200" />
              </div>
              <div className="space-y-4">
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/d6bdb4e8-6936-4b82-86b0-47db3a08140c.jpeg?im_w=1200" />
                <img src="https://a0.muscache.com/im/pictures/76f68481-23ae-4af4-b0b5-9c01af42140f.jpg?im_w=1200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Grounds Section */}
      <section id="grounds" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Grounds at Luckenbach Hill</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Six private acres nestled between three tranquil Finger Lakes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-3xl h-96">
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/dfec48d7-4954-45d0-91e3-5b6560a64794.jpeg?im_w=720" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="The Pond" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">Serene Pond</h3>
                <p className="text-slate-300">Enjoy swimming and fishing right in your backyard.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl h-96">
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/e1b2248d-5409-43af-8c12-8dcd0a308204.jpeg?im_w=1200" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Hot Tub" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">Six-Person Hot Tub</h3>
                <p className="text-slate-300">Relax under the stars in our high-end outdoor spa.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl h-96">
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/b858418a-0679-4596-b322-6f92caf73567.jpeg?aki_policy=xx_large" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Fire Pit" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">Stargazing Firepit</h3>
                <p className="text-slate-300">Gather for s'mores and memories around the fire.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exploring the Area */}
      <section id="location" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Finger Lakes Gateway</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Explore the Area</h2>
              <p className="text-slate-600 mb-8">
                Situated perfectly between three lakes. Whether you're seeking adventure on the trails or relaxation 
                at local wineries, we are your home base.
              </p>
              <div className="space-y-6">
                {destinations.map((dest, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{dest.name} <span className="text-emerald-600 text-sm ml-2">{dest.dist}</span></h4>
                      <p className="text-slate-500 text-sm">{dest.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-2/3 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
               <div className="rounded-2xl overflow-hidden h-96 bg-slate-200 relative">
                  {/* Mock Map View */}
                  <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-60 grayscale" alt="Map View" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                        <Mountain className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">The Lodge</p>
                        <p className="text-xs text-slate-500 italic">8948 Luckenbach Hill Road, Springwater NY</p>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-2xl font-bold text-slate-800">3</p>
                    <p className="text-xs text-slate-500 uppercase font-bold">Lakes Nearby</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-2xl font-bold text-slate-800">1mi</p>
                    <p className="text-xs text-slate-500 uppercase font-bold">To State Park</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-2xl font-bold text-slate-800">65"</p>
                    <p className="text-xs text-slate-500 uppercase font-bold">Flat Screen</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <p className="text-2xl font-bold text-slate-800">6ac</p>
                    <p className="text-xs text-slate-500 uppercase font-bold">Private Land</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-700 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Mountain className="w-96 h-96" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 italic">Ready for your escape into nature?</h2>
          <p className="text-xl text-emerald-100 mb-12">
            Book directly through our portal to save on service fees and get the best rates guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://romig-retreats.lodgify.com" 
              className="px-12 py-5 bg-white text-emerald-800 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Check Availability
            </a>
            <a 
              href="tel:5853133670" 
              className="flex items-center space-x-2 text-white font-bold text-xl hover:text-emerald-100 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>585-313-3670</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Mountain className="w-8 h-8 text-emerald-500" />
                <span className="text-2xl font-bold">ROMIG RETREATS</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Providing spotlessly clean, rustic-elegant accommodations in the heart of the Finger Lakes region.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span>585-313-3670</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span>Derek.Romig@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>8948 Luckenbach Hill Road,<br/>Springwater NY 14560</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-emerald-500 transition-colors">Home</a></li>
                <li><a href="#lodge" className="hover:text-emerald-500 transition-colors">The Lodge</a></li>
                <li><a href="#grounds" className="hover:text-emerald-500 transition-colors">The Grounds</a></li>
                <li><a href="https://www.airbnb.com/rooms/634486229724134845" className="hover:text-emerald-500 transition-colors flex items-center">
                  Airbnb Listing <ExternalLink className="w-4 h-4 ml-1" />
                </a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:row justify-between items-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Romig Retreats. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-emerald-600" /> Dog Friendly</span>
              <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-emerald-600" /> Professional Clean</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
export default App;

### Why this fixes the "White Page":
1.  **Direct Execution:** Most React setups require a "build step" that bundles 1,000 files into one. This new `index.html` uses an **Import Map**, which lets the browser do the bundling work on the fly.
2.  **No Missing Dependencies:** It pulls React and the Icons directly from the web, so you don't have to worry about if `npm install` worked on Netlify's servers.

**Give it a minute to deploy after you update GitHub, then refresh RomigRetreats.com. If you still see a white page, check that "Secret Error" (Console) again—it should give us a more specific message now!**
