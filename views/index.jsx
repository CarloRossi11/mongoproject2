const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    // const {jokes} = this.props
    return (
      <Layout title="Issa Joke">
        <nav>
          <span className="links"><a type="button" className="btn btn-outline-primary"href="/auth/signup" data-toggle="tooltip" data-placement="left" title="Sign up to create, edit and delete your own jokes!">SignUp</a></span>
          <span className="links"><a type="button" className="btn btn-outline-primary"href="/auth/login" data-toggle="tooltip" data-placement="right" title="Login to do the things">Login</a></span>
        </nav>
        <h1> {this.props.hello} </h1>
        <h2 className="desc">Click a joke title to reveal its contents</h2>
        {/* Jokes will go here */}
        {/* {jokes.map((joke) => (
          <div>
            <h2>{joke.name}</h2>
            <h3>{joke.buildUp}</h3>
            <h3>{joke.punchLine}</h3>
          </div> */}
        {/* ))} */}
      </Layout>
    );
  }
}

module.exports = Index;
