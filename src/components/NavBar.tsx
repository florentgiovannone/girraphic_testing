import logo from "../assets/images/girraphic_logo.jpeg"
export default function NavBar () {

    return <>
        <nav className="navbar has-background-gira-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand has-background-black">
                <a target="blank" href="https://girraphic.com/" >
                <figure className="image is-128x128">
                    <img src={logo} />
                </figure>
                </a>

                <a className="navbar-burger is-active" role="button" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a target="blank" className="navbar-item text-is-yellow" href="https://girraphic.com/">Home</a>
                    <a target="blank" className="navbar-item text-is-yellow" href="https://girraphic.com/about/">About</a>
                    <a target="blank" className="navbar-item text-is-yellow" href="https://girraphic.com/blog">Blog</a>
                    <a target="blank" className="navbar-item text-is-yellow" href="https://girraphic.com/contact/">Contact</a>
                </div>
            </div>
        </nav>
    </>
}