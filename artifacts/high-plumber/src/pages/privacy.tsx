import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-white text-foreground pb-20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-primary-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl py-12 prose prose-slate">
        <h2>1. Introduction</h2>
        <p>Welcome to High Plumber in Liverpool. We respect your privacy and are committed to protecting your personal data.</p>
        
        <h2>2. Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul>
          <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
        </ul>
        
        <h2>3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
        </ul>
        
        <h2>4. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
        <p>
          Email: <a href="mailto:info@highplumberinliverpool.shop">info@highplumberinliverpool.shop</a><br />
          Address: 145 Alder Rd, Liverpool L12 9ES, United Kingdom<br />
          Phone: <a href="tel:+441519470798">+44 151 947 0798</a>
        </p>
      </div>
    </div>
  );
}