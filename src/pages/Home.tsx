import { Link, useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const whatsappLink = "https://wa.me/8801763636997";
  const navigate = useNavigate();

  const keyServices = [
    {
      title: "Web Development",
      description: "Custom websites tailored to your business needs with modern technologies and responsive design.",
      icon: "🌐",
      features: ["Custom Websites", "E-commerce Solutions", "SEO Optimization", "Responsive Design"],
      tab: "web"
    },
    {
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation workflows and AI-powered solutions.",
      icon: "🤖",
      features: ["Workflow Automation", "AI Integration", "Process Optimization", "Custom Solutions"],
      tab: "automation"
    },
    {
      title: "Social Media Management",
      description: "Comprehensive social media strategies to boost your online presence and engage your audience.",
      icon: "📱",
      features: ["Content Creation", "Platform Management", "Analytics & Reporting", "Community Engagement"],
      tab: "marketing"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your brand and reach your target audience effectively.",
      icon: "📈",
      features: ["SEO & SEM", "Content Marketing", "Email Campaigns", "Performance Analytics"],
      tab: "marketing"
    }
  ];

  const partners = [
    { name: "Illusive Canvas", image: "/partners/illusive canvas.jpg" },
    { name: "Maze", image: "/partners/maze.jpg" },
    { name: "eHub", image: "/partners/ehub.jpg" },
    { name: "Exam Essentials", image: "/partners/examessentials.jpg" },
    { name: "Bangla Bahini", image: "/partners/banglabahini.jpg" },
    { name: "Ektu Opinion", image: "/partners/ektuopinion.jpg" },
    { name: "Eminent Clothing", image: "/partners/eminentclothing.jpg" },
    { name: "Kit Castillo", image: "/partners/kitcastillo.jpg" },
    { name: "Los Galaticos", image: "/partners/losgalaticos.jpg" },
    { name: "Nishonkoch", image: "/partners/nishonkoch.png" },
    { name: "Tutors Intelligence", image: "/partners/tutorsintelligence.jpg" },
    { name: "Artistry", image: "/partners/artistry.jpg" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Business with <span className="highlight">AR Solution</span>
            </h1>
            <p className="hero-subtitle">
              We empower businesses and startups with cutting-edge website services, 
              AI automation, and comprehensive digital marketing solutions.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-cta">
              Get Started Today
            </a>
          </div>
          <div className="hero-image">
            <div className="hero-illustration">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" 
                alt="Web Development"
                className="hero-image-item"
              />
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80" 
                alt="AI Automation"
                className="hero-image-item"
              />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" 
                alt="Digital Marketing"
                className="hero-image-item"
              />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" 
                alt="Analytics"
                className="hero-image-item"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Short Description */}
      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Your Partner in Digital Success</h2>
            <p>
              At AR Solution, we combine innovation with expertise to deliver exceptional 
              digital solutions. Whether you're a startup looking to establish your online 
              presence or an established business seeking to optimize operations with AI, 
              we have the tools and expertise to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">Our Partners</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <img src={partner.image} alt={partner.name} className="partner-logo" />
              </div>
            ))}
            {partners.map((partner, index) => (
              <div key={`duplicate-${index}`} className="partner-card partner-duplicate">
                <img src={partner.image} alt={partner.name} className="partner-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Key Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions to elevate your business in the digital landscape
          </p>
          <div className="services-grid">
            {keyServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                onOrder={() => navigate(`/services?tab=${service.tab}`)}
              />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="secondary-button">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="contact-options">
              <a href="mailto:arsolution45320@gmail.com" className="contact-button email-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Us
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-button whatsapp-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/company/ar-solution/" target="_blank" rel="noopener noreferrer" className="contact-button linkedin-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
