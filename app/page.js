import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Grandeur from '@/components/Grandeur';
import Projects from '@/components/Projects';
import MasterPlan from '@/components/MasterPlan';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutUs from '@/components/AboutUs';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Modal from '@/components/ui/Modal';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Grandeur />
        <Projects />
        <MasterPlan />
        <WhyChooseUs />
        <Amenities />
        <Location />
        <AboutUs />
        <Testimonials />
      </main>
      <Footer />

      {/* Global Contact Modal */}
      <Modal>
        <ContactForm />
      </Modal>
    </>
  );
}
