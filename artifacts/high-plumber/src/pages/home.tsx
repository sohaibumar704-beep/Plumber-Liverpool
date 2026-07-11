import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Menu, X, Phone, Wrench, Droplet, Hammer, Clock, 
  MapPin, Mail, ShieldCheck, ThumbsUp, Star, ChevronDown, Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const services = [
    { title: "Emergency Plumbing", icon: <Clock className="w-8 h-8 text-primary" />, desc: "Fast response for urgent plumbing issues." },
    { title: "Leak Detection", icon: <Droplet className="w-8 h-8 text-primary" />, desc: "Pinpointing and fixing hidden leaks quickly." },
    { title: "Pipe Repairs", icon: <Wrench className="w-8 h-8 text-primary" />, desc: "Repair and replacement of damaged pipes." },
    { title: "Blocked Drains", icon: <ShieldCheck className="w-8 h-8 text-primary" />, desc: "Clearing stubborn blockages efficiently." },
    { title: "Boiler Repairs", icon: <Hammer className="w-8 h-8 text-primary" />, desc: "Expert diagnostics and repairs for boilers." },
    { title: "Bathroom Plumbing", icon: <Droplet className="w-8 h-8 text-primary" />, desc: "Installations and repairs for bathrooms." },
    { title: "Kitchen Plumbing", icon: <Wrench className="w-8 h-8 text-primary" />, desc: "Sinks, taps, and appliance plumbing." },
    { title: "Toilet Repairs", icon: <Wrench className="w-8 h-8 text-primary" />, desc: "Fixing leaks, flushes, and blockages." },
    { title: "Tap Installation", icon: <Droplet className="w-8 h-8 text-primary" />, desc: "Fitting new taps and fixing drips." },
    { title: "General Plumbing", icon: <Hammer className="w-8 h-8 text-primary" />, desc: "All your general plumbing needs covered." },
  ];

  const features = [
    "Fast Response Times",
    "Affordable Pricing",
    "Experienced Local Plumbers",
    "Emergency Call Outs",
    "Residential & Commercial",
    "Customer Satisfaction",
    "Fully Insured"
  ];

  const areas = [
    "Liverpool", "Anfield", "Bootle", "Allerton", "Childwall", 
    "West Derby", "Kirkby", "Prescot", "Huyton", "Crosby", "Woolton"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-foreground overflow-x-hidden">
      
      {/* Sticky Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-4" : "bg-white/95 backdrop-blur-sm py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div 
            className="text-2xl font-bold text-primary cursor-pointer tracking-tight"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-testid="nav-logo"
          >
            High Plumber<span className="text-secondary-foreground"> in Liverpool</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium hover:text-primary transition-colors" data-testid="nav-home">Home</button>
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-testid={`nav-${link.id}`}
              >
                {link.name}
              </button>
            ))}
            <a 
              href="https://calendly.com/sohaibumar704/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="nav-book-online"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20">
                Book Online
              </Button>
            </a>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="nav-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-12">
                  <button 
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                    }}
                    className="text-lg font-medium text-left"
                  >
                    Home
                  </button>
                  {navLinks.map((link) => (
                    <button 
                      key={link.id} 
                      onClick={() => {
                        scrollTo(link.id);
                        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                      }}
                      className="text-lg font-medium text-left"
                    >
                      {link.name}
                    </button>
                  ))}
                  <a 
                    href="https://calendly.com/sohaibumar704/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Book Online
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                High Plumber <br/>
                <span className="text-secondary">in Liverpool</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed font-light">
                Emergency plumbing, boiler repairs, blocked drains, leak repairs and general plumbing services delivered by experienced local plumbers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+441519470798" data-testid="hero-call-now">
                  <Button size="lg" className="w-full sm:w-auto h-16 px-8 text-lg bg-white text-primary hover:bg-white/90 shadow-xl font-bold">
                    <span className="mr-2 text-2xl">📞</span> Call Now
                  </Button>
                </a>
                <a href="https://calendly.com/sohaibumar704/30min" target="_blank" rel="noopener noreferrer" data-testid="hero-book-inspection">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-8 text-lg border-2 border-white text-white hover:bg-white/10 bg-transparent font-semibold">
                    Book for Inspection
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Our Services</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground">Comprehensive plumbing solutions for your home and business.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow bg-white group">
                    <CardHeader className="pb-2">
                      <div className="mb-4 p-3 bg-primary/5 w-fit rounded-xl group-hover:bg-primary/10 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us & About */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">About High Plumber</h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
                <div className="prose prose-lg text-muted-foreground mb-8">
                  <p className="leading-relaxed">
                    High Plumber in Liverpool provides reliable plumbing services with honest pricing, quality workmanship and fast response times across Liverpool.
                  </p>
                  <p className="leading-relaxed mt-4">
                    Our team of experienced local plumbers is equipped to handle everything from minor repairs to major emergencies. We take pride in our professional approach, ensuring that every job is completed to the highest standards of safety and efficiency.
                  </p>
                </div>
                <a href="tel:+441519470798">
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    <Phone className="w-4 h-4 mr-2" /> Contact Our Team
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-border/50"
              >
                <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose Us</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-lg text-foreground/80 font-medium">
                      <div className="mr-4 p-1 bg-primary rounded-full text-white">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-10 tracking-tight">Areas We Cover</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {areas.map((area, index) => (
                <div key={index} className="px-5 py-2.5 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-sm font-semibold backdrop-blur-sm border border-white/10 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 opacity-70" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gray-50 rounded-[3rem] p-10 md:p-20 text-center border border-border/50 shadow-sm max-w-5xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 relative z-10">Need a Plumber Today?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
                Schedule your inspection online — we'll confirm your appointment quickly.
              </p>
              <a href="https://calendly.com/sohaibumar704/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 relative z-10 font-bold rounded-xl">
                  Book for Inspection
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Our Work</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-white rounded-2xl border border-border/50 flex flex-col items-center justify-center text-muted-foreground hover:bg-gray-100 transition-colors cursor-pointer group shadow-sm">
                  <Camera className="w-12 h-12 mb-4 opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-sm font-medium opacity-60">Plumbing photo — replace with real image</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FAQ */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-border/50 p-2 shadow-sm">
              <AccordionItem value="item-1" className="border-b border-border/50 px-4">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors py-6 text-left">
                  Do you offer emergency plumbing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Yes, we provide emergency plumbing services. We understand that plumbing issues can happen at any time and require immediate attention to prevent damage to your property. Please call our emergency line for urgent assistance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-border/50 px-4">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors py-6 text-left">
                  What areas do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  We cover Liverpool and the surrounding areas including Anfield, Bootle, Allerton, Childwall, West Derby, Kirkby, Prescot, Huyton, Crosby, and Woolton. If you are unsure if we cover your area, please give us a call.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-0 px-4">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors py-6 text-left">
                  Can I book online?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Yes, you can easily book an inspection online through our booking portal. Just click any of the "Book for Inspection" buttons on our website, select a time that works for you, and we will confirm your appointment quickly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Contact Us</h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-10"></div>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Ready to book or have a question? Reach out to our team today. We're here to help with all your plumbing needs.
                </p>

                <div className="space-y-8">
                  <a href="tel:+441519470798" className="flex items-start group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-primary transition-colors shrink-0">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">+44 151 947 0798</p>
                    </div>
                  </a>

                  <a href="mailto:info@highplumberinliverpool.shop" className="flex items-start group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-primary transition-colors shrink-0">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors break-all">info@highplumberinliverpool.shop</p>
                    </div>
                  </a>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-6 shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Location</h4>
                      <p className="text-lg font-medium text-foreground">145 Alder Rd<br/>Liverpool L12 9ES<br/>United Kingdom</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <a href="tel:+441519470798">
                    <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 font-bold rounded-xl">
                      <span className="mr-2 text-2xl">📞</span> Call Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-full min-h-[400px] bg-gray-50 rounded-3xl border border-border/50 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 border border-border/50 group-hover:-translate-y-2 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">High Plumber in Liverpool</h3>
                  <p className="text-muted-foreground mb-6">145 Alder Rd, Liverpool L12 9ES</p>
                  <a 
                    href="https://maps.google.com/?q=145+Alder+Rd,+Liverpool+L12+9ES,+United+Kingdom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="bg-white hover:bg-gray-50 border-border/50">
                      View on Google Maps
                    </Button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground pt-20 pb-10 text-white/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                High Plumber<span className="text-primary ml-1">in Liverpool</span>
              </h3>
              <p className="max-w-sm mb-8 text-white/60 leading-relaxed">
                Trusted local plumbing experts providing reliable, professional service across Liverpool and surrounding areas.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders if needed, empty for now */}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                <li><a href="tel:+441519470798" className="hover:text-white transition-colors flex items-center"><Phone className="w-4 h-4 mr-3 opacity-70" /> +44 151 947 0798</a></li>
                <li><a href="mailto:info@highplumberinliverpool.shop" className="hover:text-white transition-colors flex items-center break-all"><Mail className="w-4 h-4 mr-3 opacity-70" /> info@highplumberinliverpool.shop</a></li>
                <li className="flex items-start"><MapPin className="w-4 h-4 mr-3 mt-1 opacity-70" /> <span>145 Alder Rd<br/>Liverpool L12 9ES<br/>United Kingdom</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} High Plumber in Liverpool. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Call Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a href="tel:+441519470798" data-testid="mobile-floating-call">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white border-2 border-white/20"
          >
            <Phone className="w-7 h-7 fill-current" />
          </motion.div>
        </a>
      </div>

    </div>
  );
}