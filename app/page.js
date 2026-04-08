import Navbar        from '@/components/Navbar';
import Hero           from '@/components/Hero';
import Pain           from '@/components/Pain';
import Opportunity    from '@/components/Opportunity';
import Calculator     from '@/components/Calculator';
import ProjectDetails from '@/components/ProjectDetails';
import AirportUrgency from '@/components/AirportUrgency';
import Location       from '@/components/Location';
import Director       from '@/components/Director';
import FormSection    from '@/components/FormSection';
import Testimonials   from '@/components/Testimonials';
import Footer         from '@/components/Footer';
import Modal          from '@/components/ui/Modal';
import ContactForm    from '@/components/ContactForm';
import WhatsAppFloat  from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Pain />
        <Opportunity />
        <Calculator />
        <ProjectDetails />
        <AirportUrgency />
        <Location />
        <Director />
        <Testimonials />
        <FormSection />
      </main>
      <Footer />

      <WhatsAppFloat />

      {/* Enquire Modal */}
      <Modal>
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ height: 4, background: 'var(--accent)' }} />
          <div style={{ padding: 'clamp(32px, 8vw, 60px) clamp(20px, 6vw, 64px)' }}>
            <h2 className="heading-premium" style={{
              fontSize: 'clamp(24px, 6vw, 32px)',
              color: 'var(--text-primary)', marginBottom: 'clamp(24px, 6vw, 32px)', textAlign: 'center',
            }}>
              Direct Consultation
            </h2>
            <ContactForm />
          </div>
        </div>
      </Modal>
    </>
  );
}
