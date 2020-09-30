const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Issa Joke">
        <nav>
          <span className="links"><a type="button" className="btn btn-outline-primary"href="/auth/signup">SignUp</a></span>
          <span className="links"><a type="button" className="btn btn-outline-primary"href="/auth/login">Login</a></span>
        </nav>
        <h1> {this.props.hello} </h1>
        <h2 className="desc">Click on a joke title to reveal its contents</h2>
      </Layout>
    );
  }
}

module.exports = Index;
