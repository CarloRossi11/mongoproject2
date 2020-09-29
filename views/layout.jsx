const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="https://fonts.googleapis.com/css2?family=Amaranth&family=Syncopate:wght@700&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Issa Joke</h1>
            <h2>It's not that serious...bro</h2>
            <nav>
              <span className="links"><a href="/auth/signup">|SignUp|</a></span>
              <span className="links"><a href="/auth/login">|Login|</a></span>
              <span className="links"><a href="/auth/logout">|Logout|</a></span>

            </nav>
          </header>
          <main>{this.props.children}</main>
          <footer>
            
          </footer>
        </body>
      </html>
    );
  }
}

//Other Google fonts that I like
//Bungee Shade
//Monoton

module.exports = Layout;