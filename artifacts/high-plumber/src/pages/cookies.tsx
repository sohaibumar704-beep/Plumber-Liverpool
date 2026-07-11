import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen w-full bg-white text-foreground pb-20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg text-primary-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl py-12 prose prose-slate">
        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
        
        <h2>2. How We Use Cookies</h2>
        <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
        
        <h2>3. The Cookies We Set</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> These are required for the operation of our website.</li>
          <li><strong>Performance and Analytics Cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
          <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website.</li>
        </ul>
        
        <h2>4. Disabling Cookies</h2>
        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
        
        <h2>5. More Information</h2>
        <p>Hopefully, that has clarified things for you. If there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
        <p>If you are still looking for more information, you can contact us at:</p>
        <p>
          Email: <a href="mailto:info@highplumberinliverpool.shop">info@highplumberinliverpool.shop</a><br />
          Phone: <a href="tel:+441519470798">+44 151 947 0798</a>
        </p>
      </div>
    </div>
  );
}