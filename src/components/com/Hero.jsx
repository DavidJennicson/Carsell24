import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calculator, Menu, Zap, Shield, BarChart } from "lucide-react";
import car from '../../assets/car.png';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Hero = () => {
  const heroRef = useRef(null);
  const howItWorksRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 w-full bg-white backdrop-blur shadow-sm" 
        initial="hidden" 
        animate="visible" 
        variants={fadeInUp}>
        <div className="container mx-auto px-4 py-1 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">CarPriceCheck</span>
          </a>
          <nav className="hidden md:flex space-x-4">
            <button onClick={() => featuresRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-blue-600">Features</button>
           
            <button onClick={() => howItWorksRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-blue-600">How It Works</button>
             <button onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-blue-600">Contact</button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => howItWorksRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-blue-600">How It Works</button>
                <button onClick={() => featuresRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-blue-600">Features</button>
                <button onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-blue-600">Contact</button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef} 
        className="bg-blue-600 text-white py-20" 
        initial="hidden" 
        whileInView="visible" 
        variants={fadeInUp} 
        viewport={{ once: true }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Your Car's True Value</h1>
          <p className="text-xl mb-8">Get an accurate resale estimate in seconds with CarPriceCheck</p>
          <div className="max-w-md mx-auto flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-500 text-white">Calculate</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Server is Upgrading</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid items-center ">
                    <p>The server is busy currently, we will resume service as soon as possible</p>
                  </div>
                </div>
                
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-12">
            <motion.img
              src={car}
              alt="Car"
              className="mx-auto w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, x:50 }}
              whileInView={{ opacity: 1, x:0}}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        ref={featuresRef} 
        className="py-16" 
        initial="hidden" 
        whileInView="visible" 
        variants={fadeInUp} 
        viewport={{ once: true }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose CarPriceCheck?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="h-10 w-10 text-blue-600" />}
              title="Lightning Fast"
              description="Get your car's estimated value in seconds, not hours."
            />
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-blue-600" />}
              title="Accurate & Reliable"
              description="Our advanced algorithm ensures precise valuations based on real-time market data."
            />
            <FeatureCard 
              icon={<BarChart className="h-10 w-10 text-blue-600" />}
              title="Comprehensive Reports"
              description="Receive detailed reports with market comparisons and value trends."
            />
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="py-16 bg-gray-100">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
          }}
          viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard 
              number={1}
              title="Enter Your Car Details"
              description="Provide basic information about your car, such as make, model, year, and mileage."
            />
            <StepCard 
              number={2}
              title="Get Instant Valuation"
              description="Our algorithm processes your data and compares it with current market trends."
            />
            <StepCard 
              number={3}
              title="Receive Detailed Report"
              description="View your car's estimated value along with a comprehensive market analysis."
            />
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="bg-blue-600 text-white py-16" 
        initial="hidden" 
        whileInView="visible" 
        variants={fadeInUp} 
        viewport={{ once: true }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Know Your Car's Worth?</h2>
          <p className="text-xl mb-8">Start your free valuation now and make informed decisions about your vehicle.</p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl mb-4">This UI concept is developed by David Jennicson and Kunal Wagh <br />
          You can send mails to <a className='text-blue-400' href="mailto:davidjennicson@gmail.com">davidjennicson@gmail.com</a> and <a className='text-blue-400' href="mailto:waghkunal314@gmail.com">waghkunal314@gmail.com</a></p>
          {/* Add any additional contact details or links if necessary */}
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6 text-center"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
    viewport={{ once: true }}>
    <motion.div 
      className="flex justify-center mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 0.4 }}>
      {icon}
    </motion.div>
    <motion.h3 
      className="text-xl font-semibold mb-2 text-gray-800"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}>
      {title}
    </motion.h3>
    <motion.p 
      className="text-gray-600"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}>
      {description}
    </motion.p>
  </motion.div>
);

const StepCard = ({ number, title, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
    viewport={{ once: true }}>
    <div className="flex items-center mb-4">
      <motion.div 
        className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}>
        {number}
      </motion.div>
      <motion.h3 
        className="text-xl font-semibold text-gray-800"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        {title}
      </motion.h3>
    </div>
    <motion.p 
      className="text-gray-600"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}>
      {description}
    </motion.p>
  </motion.div>
);

export default Hero;
