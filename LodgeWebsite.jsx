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
  Wine,
  ShieldCheck,
  CreditCard,
  Send,
  MessageCircle,
  Quote,
  Maximize2
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    name: '',
    email: '',
    message: ''
  });

  // Direct link format for Google Drive images
  const logoUrl = "https://lh3.googleusercontent.com/d/1F5ewK2BZgziU12A7IEl_bj2ECQqyC-gW";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquiry = (e) => {
    e.preventDefault();
    const subject = `Booking Inquiry: ${bookingData.checkIn} to ${bookingData.checkOut}`;
    const body = `Hi Derek,%0D%0A%0D%0AI'm interested in booking the Lodge.%0D%0A%0D%0ADates: ${bookingData.checkIn} - ${bookingData.checkOut}%0D%0AGuests: ${bookingData.guests}%0D%0AMy Name: ${bookingData.name}%0D%0A%0D%0AMessage: ${bookingData.message}`;
    
    window.location.href = `mailto:Derek.Romig@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Lodge', href: '#lodge' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Grounds', href: '#grounds' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Availability', href: '#book' }
  ];

  const galleryImages = [
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/b8a88269-23c4-41f8-ab1f-9958675a160a.jpeg?aki_policy=xx_large", caption: "Cozy Bedroom Retreat" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/dfec48d7-4954-45d0-91e3-5b6560a64794.jpeg?aki_policy=xx_large", caption: "Spacious Living Area" },
    { url: "https://a0.muscache.com/im/pictures/2f8d3b90-324b-4c47-8fc1-67e306d445ae.jpg?aki_policy=xx_large", caption: "Modern Rustic Bath" },
    { url: "https://a0.muscache.com/im/pictures/76f68481-23ae-4af4-b0b5-9c01af42140f.jpg?aki_policy=xx_large", caption: "Comfortable Queen Suite" },
    { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/7b96143c-145c-4e59-813b-5ef5e279ef68.jpeg?aki_policy=xx_large", caption: "Elegant Dining Space" },
    { url: "https://a0.muscache.com/im/pictures/99ba5a54-b772-4877-98c1-fe59b844b2ac.jpg?aki_policy=xx_large", caption: "Outdoor Entertainment" }
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

  const reviews = [
    {
      name: "Sarah Jenkins",
      date: "October 2025",
      rating: 5,
      text: "Absolutely stunning property. The views of Honeoye Lake from the nearby park were breathtaking, but honestly, we didn't want to leave the lodge. The private pond and hot tub made for the most relaxing weekend we've had in years.",
      source: "Direct Booking"
    },
    {
      name: "The Miller Family",
      date: "August 2025",
      rating: 5,
      text: "Derek was a fantastic host. The lodge is impeccably clean and the game room kept the kids entertained for hours while the adults enjoyed the fire pit. 6 stars if I could!",
      source: "Airbnb Guest"
    },
    {
      name: "James T.",
      date: "December 2025",
      rating: 5,
      text: "A winter wonderland. We stayed for a ski trip to Bristol Mountain and coming back to that hot tub was heaven. The kitchen is fully equipped—we cooked every night.",
      source: "Direct Booking"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={logoUrl} 
              alt="Luckenbach Hill Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-14 w-14'} object-contain brightness-0 ${scrolled ? '' : 'invert'}`}
            />
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
            <a href="#book" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl">
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
            <a href="#book" className="block py-3 bg-emerald-600 text-white text-center rounded-lg font-bold">
              Check Availability
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
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="h-24 w-24 object-contain invert drop-shadow-2xl opacity-90"
            />
          </div>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Top-Rated Finger Lakes Retreat</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Rustic Elegance in the <br/><span className="text-emerald-300">Finger Lakes</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow">
            6 private acres with a private pond, 6-person hot tub, and modern comfort just 1 mile from Harriet Hollister Park.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-lg shadow-2xl transition-all transform hover:-translate-y-1">
              Check Availability
            </a>
            <a href="#lodge" className="px-10 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 rounded-full font-bold text-lg transition-all">
              See The Lodge
            </a>
          </div>
        </div>
      </section>

      {/* Lodge Details */}
      <section id="lodge" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Comfort Meets Nature</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-2 leading-tight">Modern Luxury In The Wild</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our 4-bedroom retreat offers the perfect balance of rustic charm and modern amenities. Gather around the fire, relax in the hot tub, or explore 6 private acres.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700">
                    <div className="text-emerald-600">{item.icon}</div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/c8865a1a-e31e-47f3-a978-8f88e5679c64.jpeg?aki_policy=xx_large" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" alt="Kitchen" />
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/2375c61f-7700-4601-a3f8-37eaac183dea.jpeg?aki_policy=xx_large" className="rounded-2xl shadow-lg w-full h-80 object-cover" alt="Living Room" />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Additional Photos Gallery */}
      <section id="gallery" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Interior & Details</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Take a Closer Look</h2>
            <p className="text-slate-500 mt-4">Every corner of the Lodge is designed for comfort and style.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md bg-white break-inside-avoid transition-all hover:shadow-2xl"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <Maximize2 className="text-white w-8 h-8 mx-auto mb-2" />
                    <p className="text-white font-medium">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Grounds Section */}
      <section id="grounds" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The Grounds</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Six private acres of Springwater's finest hillside.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-3xl h-96 shadow-2xl">
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/540ec5e2-1f9e-4e26-a7db-a596320374bb.jpeg?aki_policy=xx_large" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Serene Pond" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">Serene Pond</h3>
                <p className="text-slate-300 text-sm">Private swimming and fishing.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl h-96 shadow-2xl">
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-634486229724134845/original/dcbe31f5-8c8f-4755-8357-e33fccf6dd77.jpeg?aki_policy=xx_large" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hot Tub" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">Private Spa</h3>
                <p className="text-slate-300 text-sm">6-Person Hot Tub under the stars.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl h-96 shadow-2xl">
              <img src="https://a0.muscache.com/im/pictures/f910b196-6a56-493e-9a7e-3db5e168062c.jpg?aki_policy=xx_large" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Harriet Hollister" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">Stunning Views</h3>
                <p className="text-slate-300 text-sm">Vistas of Honeoye Lake 1 mile away.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Guest Experiences
              </h2>
              <p className="text-slate-600 mt-4 text-lg">
                We take pride in providing a perfect getaway. Read what our guests have to say about their stay at the Lodge.
              </p>
            </div>
            <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="text-3xl font-bold text-slate-900">4.9</div>
              <div className="h-10 w-[1px] bg-slate-200"></div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Average <br/> Rating
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col relative group transition-all hover:shadow-xl hover:-translate-y-1">
                <Quote className="absolute top-6 right-8 w-10 h-10 text-emerald-50 opacity-50 transition-colors group-hover:text-emerald-100" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-8 flex-grow italic">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-xs text-slate-400 font-medium">{review.date}</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-tighter">
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability & Inquiry Section */}
      <section id="book" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Availability & Booking</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Check our live calendar below. To book directly and avoid service fees, send us a request!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar Embed */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold flex items-center gap-2 text-slate-800">
                  <Calendar className="text-emerald-600 w-5 h-5" />
                  Live Booking Calendar
                </h3>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  Synced
                </span>
              </div>
              
              <div className="flex-grow bg-white rounded-2xl overflow-hidden shadow-inner border border-slate-200 min-h-[450px]">
                <iframe 
                  src="https://calendar.google.com/calendar/embed?wkst=1&ctz=America%2FNew_York&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=YWRmODVhZWEwZTViZjdhNWEyMGNkY2RmZGVjMGViNDY5NTg2N2NmODkwZTAzNjFiMmIxNDI5ZDMxMjA3NTlkOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=OTNrMXBrMHBrNHI3Y2M4ZzJkcWtmZWUydXJ2OGNnNHVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=bXM3OTk0OG9hdDI2NDExYmI5a28ydDUyZnZrZG1iOWlAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23ad1457&color=%23795548&color=%23d81b60" 
                  style={{border: 0}} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no"
                  title="Availability Calendar"
                ></iframe>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <ShieldCheck className="w-12 h-12 text-emerald-50 opacity-10" />
              </div>
              
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Request Drafted!</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Your email client should have opened with the pre-filled inquiry. <br/>
                    <strong>Just hit send!</strong>
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Back to form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-slate-900">Request to Book</h3>
                    <p className="text-slate-500 text-sm italic">Direct bookings save you ~15% vs Airbnb fees.</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Check In</label>
                      <input 
                        type="date" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Check Out</label>
                      <input 
                        type="date" 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none"
                        onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Number of Guests</label>
                      <select 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none"
                        onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
                      >
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Booking Inquiry</span>
                    <Send className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center justify-center gap-6 pt-4 text-slate-400 text-xs font-medium border-t border-slate-100">
                    <a href="tel:5853133670" className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                      <Phone className="w-3.5 h-3.5" /> Call Derek
                    </a>
                    <a href="sms:5853133670" className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                      <MessageCircle className="w-3.5 h-3.5" /> Text Now
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage.url} 
            alt={selectedImage.caption} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium">{selectedImage.caption}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-slate-800 pb-12 mb-12">
            <div className="max-w-xs">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logoUrl} alt="Logo" className="h-12 w-12 object-contain invert opacity-90" />
                <span className="text-2xl font-bold tracking-tight">ROMIG RETREATS</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Direct booking for The Lodge at Luckenbach Hill. Skip the fees, get the best rates.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Camera className="w-4 h-4" />
                </a>
                <a href="mailto:Derek.Romig@gmail.com" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12 md:gap-24">
              <div>
                <h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-wider text-xs">Reach Out</h4>
                <div className="space-y-3 text-slate-400 text-sm font-medium">
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 585-313-3670</p>
                  <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> Derek.Romig@gmail.com</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-emerald-400 uppercase tracking-wider text-xs">Location</h4>
                <div className="space-y-3 text-slate-400 text-sm">
                  <p>8948 Luckenbach Hill Road</p>
                  <p>Springwater NY 14560</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} Romig Retreats</p>
            <div className="mt-4 md:mt-0 flex gap-8">
              <a href="#home" className="hover:text-emerald-500 transition-colors">Top</a>
              <a href="#book" className="hover:text-emerald-500 transition-colors">Availability</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
