var date = new Date();
var currentYear = date.getFullYear();


function Footer() {
    return <footer><p>Copyright Meet © {currentYear}</p></footer>
}

export default Footer;