function Header() {
    return(
        <h1>Hello, World</h1>
    )
}

function MainContent() {
    return(
        <p>This is the content area</p>
    )
}

const root = document.getElementById("root");
ReactDOM.render(
    <div>
        <Header />
        <MainContent />
    </div>, 
    root);