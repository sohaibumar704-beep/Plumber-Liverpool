import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen w-full bg-white text-foreground pb-20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg text-primary-foreground/80">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl py-12 prose prose-slate">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the services of High Plumber in Liverpool, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2>2. Services Provided</h2>
        <p>High Plumber in Liverpool provides plumbing services including, but not limited to, emergency repairs, boiler installations, leak detection, and general plumbing maintenance. All services are subject to availability and scheduling.</p>
        
        <h2>3. Pricing and Payments</h2>
        <p>All prices quoted are subject to change based on the specific requirements of the job. Payment is due upon completion of services unless otherwise agreed upon in writing.</p>
        
        <h2>4. Cancellations</h2>
        <p>If you need to cancel or reschedule an appointment, please provide at least 24 hours notice. Cancellations made with less notice may be subject to a cancellation fee.</p>
        
        <h2>5. Warranty</h2>
        <p>We provide a warranty on our workmanship. Specific terms of the warranty will be provided to you upon completion of the service.</p>
        
        <h2>6. Limitation of Liability</h2>
        <p>High Plumber in Liverpool shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.</p>
        
        <h2>7. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>
          Email: <a href="mailto:info@highplumberinliverpool.shop">info@highplumberinliverpool.shop</a><br />
          Address: 145 Alder Rd, Liverpool L12 9ES, United Kingdom<br />
          Phone: <a href="tel:+441519470798">+44 151 947 0798</a>
        </p>
      </div>
    </div>
  );
}