const title = "Fun facts about React"

/// This segment has the header information for the page
function Header() {
    return(
        <header>
            <nav>
                <img src='react_logo.png' id="logo" width="40" />
                <h1>{title}</h1>
            </nav>
        </header>
    )
}

/// This segment has the main portion of the page
function MainContent() {
    return(
        <div>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originall created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

/// This segment houses the footer and legal information
function Footer() {
    return(
        <footer>
            <small>© 20xx Barker development. All rights reserved.</small>
        </footer>
    )
}

/// Creates the page content
function Page() {
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

/// Get the right element and render the content
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Page />);