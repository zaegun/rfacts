const title = "Fun facts about React"

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

function Footer() {
    return(
        <footer>
            <small>© 20xx Barker development. All rights reserved.</small>
        </footer>
    )
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    );