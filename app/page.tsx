const projects = [
  {
    title: "Business Management Dashboard",
    description:
      "Built a responsive admin dashboard with role-based views, searchable records, analytics summaries, and reusable UI components for daily business operations.",
  },
  {
    title: "E-Commerce Web Application",
    description:
      "Developed a full-stack storefront with product listings, cart flow, customer checkout, order tracking, and backend data handling for online sales.",
  },
  {
    title: "Booking and Scheduling Platform",
    description:
      "Created a web-based appointment system with availability controls, booking forms, email-ready notifications, and clean mobile-friendly screens.",
  },
  {
    title: "API Integration Portal",
    description:
      "Integrated third-party services into a secure client portal, including authentication, database workflows, form submissions, and reliable error handling.",
  },
];

const services = [
  "Frontend web application development",
  "Backend API and database development",
  "Responsive business websites",
  "Admin dashboards and portals",
  "Authentication and user workflows",
  "Deployment support and maintenance",
];

export default function Home() {
  return (
    <main className="page">
      <section className="portfolio">
        <header className="hero">
          <div className="hero-copy">
            <h1>Ashfaque Hussain Butt</h1>
            <p className="intro">
              Full Stack Software Developer building practical web applications,
              business portals, dashboards, and secure backend systems for
              clients who need reliable digital products.
            </p>
          </div>

          <div className="contact-card">
            <h2>Contact Details</h2>
            <div className="contact-list">
              <p>
                <span>Name</span>
                Ashfaque Hussain Butt
              </p>
              <p>
                <span>Email</span>
                ashfaquebutt@gmail.com
              </p>
              <p>
                <span>Phone</span>
                +92 330 9992301
              </p>
              <p>
                <span>Role</span>
                Full Stack Software Developer
              </p>
            </div>
          </div>
        </header>

        <div className="content-grid">
          <section className="about-column">
            <div>
              <h2>About Me</h2>
              <p>
                I am Ashfaque Hussain Butt, a full stack software developer
                focused on creating useful, stable, and easy-to-manage web
                solutions for businesses and individual clients. My work
                includes frontend interfaces, backend APIs, databases, admin
                panels, integrations, and deployment support.
              </p>
            </div>

            <div>
              <h2>Services</h2>
              <ul className="services">
                {services.map((service) => (
                  <li key={service}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2>Projects</h2>
            <div className="projects">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
