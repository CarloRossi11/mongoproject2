const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css2?family=Amaranth&family=Syncopate:wght@700&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Issa Joke</h1>
            <h2>It's not that serious, bro</h2>
          </header>
          <main>{this.props.children}</main>
          <footer>
            <p>Curated by Carlo Berardelli </p>
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