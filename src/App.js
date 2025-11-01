import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="App">
      {/* Header / Navbar */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="#home" onClick={closeMenu}>Portfolio</a>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </nav>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Hero / Introduction Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-name">Adithya</h1>
          <p className="hero-tagline">Web Developer | Student</p>
          <p className="hero-description">
            Creating beautiful and functional web experiences with modern technologies
          </p>
          <a href="#contact" className="btn-primary">Hire Me</a>
        </div>
        <div className="hero-gradient"></div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="profile-picture">
                <div className="profile-placeholder">
                  <span>JD</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <p>
                Hello! I'm a passionate web developer and student with a keen interest in creating
                modern, responsive web applications. I love combining design and functionality to
                build user-friendly experiences.
              </p>
              <p>
                Currently pursuing my studies while working on various projects to expand my skills
                in front-end development. I enjoy learning new technologies and applying them to
                solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new frameworks, contributing to open-source
                projects, or simply enjoying a good cup of coffee while brainstorming new ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>HTML5</h3>
              <p>Semantic markup and modern HTML structure</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>CSS3</h3>
              <p>Flexbox, Grid, animations, and responsive design</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>React</h3>
              <p>Component-based UI development</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Mobile-first approach and cross-device compatibility</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🚀</div>
              <h3>JavaScript</h3>
              <p>ES6+, modern JS patterns and best practices</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎯</div>
              <h3>UI/UX</h3>
              <p>User-centered design and intuitive interfaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 1</div>
              </div>
              <div className="project-content">
                <h3>E-Commerce Website</h3>
                <p>
                  A fully responsive e-commerce platform with shopping cart functionality,
                  product filtering, and payment integration.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>CSS3</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 2</div>
              </div>
              <div className="project-content">
                <h3>Weather App</h3>
                <p>
                  A modern weather application with real-time data, location-based forecasts,
                  and beautiful animated backgrounds based on weather conditions.
                </p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>API</span>
                  <span>CSS3</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 3</div>
              </div>
              <div className="project-content">
                <h3>Task Management Tool</h3>
                <p>
                  A productivity app for managing tasks with drag-and-drop functionality,
                  due dates, priorities, and team collaboration features.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Material-UI</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project 4</div>
              </div>
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>
                  A personal portfolio website showcasing projects, skills, and contact
                  information with smooth animations and modern design.
                </p>
                <div className="project-tech">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume" id="resume">
        <div className="container">
          <h2 className="section-title">Resume</h2>
          <p className="resume-description">
            Download my resume to learn more about my experience, education, and achievements.
          </p>
          <a href="#" className="btn-resume" download>
            <span>Download Resume</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 14L5 9H8V4H12V9H15L10 14Z" fill="currentColor"/>
              <path d="M3 16H17V18H3V16Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:john.doe@example.com">john.doe@example.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="contact-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Portfolio. All rights reserved.</p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
