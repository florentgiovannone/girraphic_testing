import { Link } from "react-router-dom";

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function Footer() {
  return (
    <>
      <footer className="footer  p-0" >
        <div className="content">
          <div className="level m-0 p-0">
            <div className="level-center">
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a target="blank" className="navbar-item text-is-yellow" href="https://girraphic.com/">Home</a>
                  <a target="blank" className="navbar-item text-is-yellow" href="https://girraphic.com/about/">About</a>
                  <a target="blank" className="navbar-item text-is-yellow" href="https://girraphic.com/blog">Blog</a>
                  <a target="blank" className="navbar-item text-is-yellow" href="https://girraphic.com/contact/">Contact</a>
                </div>
              </div>
            </div>
            <div className="level-right m-6 ">
              <a href="https://www.facebook.com/girraphic/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="text-is-yellow custom-icon" />
              </a>
              <a href="https://x.com/Girraphic" target="_blank" rel="noopener noreferrer">
                <XIcon className="text-is-yellow custom-icon" />
              </a>
              <a href="https://www.instagram.com/girraphic/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="text-is-yellow custom-icon" />
              </a>
              <a href="https://www.linkedin.com/company/girraphic/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="text-is-yellow custom-icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;