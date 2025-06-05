import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, Button, Modal } from 'react-bootstrap';
import CountUp from 'react-countup';
import './Home.css';

const featuresData = [
  {
    id: 'schemes',
    icon: '🎖',
    title: 'Welfare Schemes',
    desc: 'Explore benefits tailored for our heroes — education, medical, housing & more.',
    route: '/schemes',
  },
  {
    id: 'apply',
    icon: '📝',
    title: 'Apply for Schemes',
    desc: 'Find and apply for schemes based on your eligibility.',
    route: '/apply',
  },
  {
    id: 'emergency',
    icon: '📞',
    title: 'Emergency Network',
    desc: 'Instant access to critical contacts and medical support.',
    route: '/emergency',
  },
  {
    id: 'marketplace',
    icon: '📦',
    title: 'Resource Marketplace',
    desc: 'Exchange books, equipment, and housing within the community.',
    route: '/marketplace',
  },
  {
    id: 'grievance',
    icon: '📝',
    title: 'Grievance Redressal',
    desc: 'Raise concerns, track resolution, and get your voice heard.',
    route: '/grievance',
  },
];

const testimonials = [
  {
    name: 'Lt. Col. Rajesh Kumar',
    text: 'This portal connected me to benefits I never knew existed. Truly a lifesaver!',
  },
  {
    name: 'Capt. Anjali Singh',
    text: 'The emergency contacts feature gave me peace of mind during critical times.',
  },
  {
    name: 'Major Vikram Sharma',
    text: 'Marketplace helped me find equipment and housing easily within the community.',
  },
];

function Home() {
  const navigate = useNavigate();
  const [sosAlert, setSosAlert] = useState(false);
  const [showSosModal, setShowSosModal] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  // Detect when stats section is visible to trigger countup
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (!statsSection) return;
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setStatsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSOSConfirm = () => {
    setSosAlert(true);
    setShowSosModal(false);
    // TODO: backend call here
    setTimeout(() => setSosAlert(false), 4000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white d-flex flex-column justify-content-center align-items-center text-center">
        <div className="overlay"></div>
        <div className="hero-content container">
          <h1 className="display-3 fw-bold mb-3 animate-fade-in-down">
            Indian Armed Forces Welfare Portal
          </h1>
          <p className="lead mb-4 animate-fade-in-up">
            Your gateway to welfare schemes, emergency support, and a thriving community.
          </p>
          <div className="d-flex justify-content-center gap-3 animate-fade-in-up delay-1">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/register')}
              aria-label="Register"
            >
              Register
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              onClick={() => navigate('/login')}
              aria-label="Login"
            >
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container py-5">
        <h2 className="text-center mb-5 fw-bold">Explore Our Features</h2>
        <div className="row g-4">
          {featuresData.map(({ id, icon, title, desc, route }) => (
            <div
              key={id}
              className="col-12 col-md-6 col-lg-4"
              tabIndex={0}
              role="button"
              onClick={() => navigate(route)}
              onKeyDown={e => e.key === 'Enter' && navigate(route)}
              aria-label={`Explore ${title}`}
            >
              <div className="feature-card p-4 shadow rounded h-100 d-flex flex-column">
                <div className="feature-icon fs-1 mb-3">{icon}</div>
                <h3>{title}</h3>
                <p className="flex-grow-1">{desc}</p>
                <Button
                  variant="outline-primary"
                  onClick={e => {
                    e.stopPropagation();
                    navigate(route);
                  }}
                  aria-label={`Explore ${title}`}
                >
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats-section"
        className="stats-section bg-light py-5 text-center"
        aria-label="Platform statistics"
      >
        <div className="container">
          <h2 className="mb-4 fw-bold">Our Impact So Far</h2>
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4">
              <div className="stat-number display-4 text-primary">
                {statsVisible ? <CountUp end={1500} duration={3} /> : '0'}
              </div>
              <p className="stat-label">Registered Users</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="stat-number display-4 text-success">
                {statsVisible ? <CountUp end={85} duration={3} /> : '0'}
              </div>
              <p className="stat-label">Active Schemes</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="stat-number display-4 text-warning">
                {statsVisible ? <CountUp end={24} duration={3} /> : '0'}
              </div>
              <p className="stat-label">Emergency Contacts</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="stat-number display-4 text-danger">
                {statsVisible ? <CountUp end={320} duration={3} /> : '0'}
              </div>
              <p className="stat-label">Marketplace Listings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="testimonials-section container py-5">
        <h2 className="text-center mb-5 fw-bold">What Our Veterans Say</h2>
        <Carousel
          indicators={false}
          interval={6000}
          pause="hover"
          variant="dark"
          className="mx-auto"
          style={{ maxWidth: 600 }}
        >
          {testimonials.map(({ name, text }, i) => (
            <Carousel.Item key={i}>
              <blockquote className="blockquote text-center">
                <p className="mb-4 fst-italic">"{text}"</p>
                <footer className="blockquote-footer">{name}</footer>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Fixed SOS Button */}
      <Button
        className="fixed-sos-button rounded-circle shadow"
        variant="danger"
        size="lg"
        onClick={() => setShowSosModal(true)}
        aria-label="Trigger SOS alert"
      >
        🚨
      </Button>

      {/* SOS Confirmation Modal */}
      <Modal show={showSosModal} onHide={() => setShowSosModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm SOS Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to trigger an SOS alert? Emergency services will be notified immediately.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSosModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSOSConfirm}>
            Yes, Trigger SOS
          </Button>
        </Modal.Footer>
      </Modal>

      {/* SOS Alert */}
      {sosAlert && (
        <div className="position-fixed bottom-0 end-0 m-3 alert alert-danger shadow" role="alert" aria-live="assertive">
          <strong>🚨 SOS Triggered!</strong> Emergency services have been notified.
          <Button variant="close" onClick={() => setSosAlert(false)} aria-label="Close alert" />
        </div>
      )}
    </>
  );
}

export default Home;
