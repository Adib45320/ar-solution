const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About AR Solution</h1>
          <p className="about-subtitle">
            Your trusted partner in digital transformation
          </p>
        </div>
      </section>

      <section className="company-bio">
        <div className="container">
          <div className="bio-content">
            <h2>Who We Are</h2>
            <p>
              AR Solution is a dynamic digital solutions provider dedicated to empowering 
              businesses and startups with cutting-edge technology and innovative strategies. 
              We specialize in creating custom websites, implementing AI-powered automation 
              systems, and delivering comprehensive digital marketing solutions that drive 
              real results.
            </p>
            <p>
              Our team of experienced professionals combines technical expertise with creative 
              thinking to deliver solutions that not only meet but exceed our clients' expectations. 
              We believe in building long-term partnerships with our clients, understanding their 
              unique challenges, and providing tailored solutions that contribute to their success.
            </p>
            <p>
              From startups looking to establish their digital presence to established businesses 
              seeking to optimize their operations through automation, we provide end-to-end 
              solutions that are scalable, reliable, and future-proof.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Completed</div>
              <p className="stat-description">
                Successfully delivered diverse projects across multiple industries
              </p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
              <p className="stat-description">
                Every client satisfied with our quality and service
              </p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">3</div>
              <div className="stat-label">Core Services</div>
              <p className="stat-description">
                Web development, AI automation, and digital marketing
              </p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">💡</div>
              <div className="stat-number">79</div>
              <div className="stat-label">Automation Workflows</div>
              <p className="stat-description">
                Pre-built solutions ready to transform your business
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Innovation</h3>
              <p>
                We stay at the forefront of technology, constantly exploring new ways 
                to solve problems and deliver value to our clients.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>
                We view our clients as partners, working collaboratively to achieve 
                shared goals and long-term success.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Excellence</h3>
              <p>
                We are committed to delivering the highest quality in everything we 
                do, from code to customer service.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Growth</h3>
              <p>
                We believe in continuous learning and improvement, both for ourselves 
                and for our clients' businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose AR Solution?</h2>
          <div className="why-choose-content">
            <div className="reason">
              <h3>🔧 Tailored Solutions</h3>
              <p>
                Every business is unique. We create customized solutions that align 
                with your specific needs and goals.
              </p>
            </div>
            
            <div className="reason">
              <h3>🤖 Cutting-Edge Technology</h3>
              <p>
                We leverage the latest technologies including AI, automation, and 
                modern web frameworks to give you a competitive edge.
              </p>
            </div>
            
            <div className="reason">
              <h3>📈 Results-Driven</h3>
              <p>
                Our focus is on delivering measurable results that contribute to 
                your business growth and success.
              </p>
            </div>
            
            <div className="reason">
              <h3>💬 Transparent Communication</h3>
              <p>
                We maintain clear, open communication throughout every project, 
                keeping you informed at every step.
              </p>
            </div>
            
            <div className="reason">
              <h3>⚙️ Ongoing Support</h3>
              <p>
                Our relationship doesn't end at delivery. We provide continuous 
                support to ensure your success.
              </p>
            </div>
            
            <div className="reason">
              <h3>💰 Value for Money</h3>
              <p>
                Quality solutions at competitive prices with negotiable terms to 
                fit your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Let's Work Together</h2>
          <p>
            Ready to take your business to the next level? Get in touch with us today 
            and let's discuss how we can help you achieve your goals.
          </p>
          <a 
            href="https://wa.me/8801763636997" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
