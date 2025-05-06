import { Container, Nav, Navbar } from "react-bootstrap";
const logo = `${process.env.REACT_APP_IMAGES_PATH}/xrp-logo.png`;

const Header = () => {

    const menuLinks = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Exchange",
            link: "/",
        },
        {
            title: "Market",
            link: "/",
        }
    ];

    return(
        <Navbar expand="lg" className="bg-primary-color">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" className="main-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {menuLinks.map((item, index) => (
                            <Nav.Link href={item.link} key={index} className="text-white">{item.title}</Nav.Link>
                        ))}
                        <Nav.Link href="/" className="btn-red">Log In</Nav.Link>
                        <Nav.Link href="/" className="btn-black">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header