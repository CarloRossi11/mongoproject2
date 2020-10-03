const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    const {jokes} = this.props
    return (
      <Layout title="Issa Joke">
        <nav>
          <a type="button" className="btn btn-outline-primary links"href="/auth/signup" data-toggle="tooltip" data-placement="left" title="Sign up to create, edit and delete your own jokes!">SignUp</a>
          <a type="button" className="btn btn-outline-primary links"href="/auth/login" data-toggle="tooltip" data-placement="right" title="Login to do the things">Login</a>
        </nav>
        <h1 className= "gallery"> Joke Pool</h1>
        <div className="container">
          <h5 className="desc">The jokes below were submitted by members of the Issa community.<br></br>Sign up if <s>you're not a chump</s> you'd like to submit your own jokes!</h5>
        </div>

        {jokes.map((joke) => (
          <div className="container-sm jokeGroup">
            <h2 className="name">{joke.name}</h2>
            <h4 className="build">{joke.buildUp}</h4>
            <h5 className="punch">{joke.punchLine}</h5>
            <p className="submitter">Submitted by: {joke.username}</p>
          </div>
        ))}

      </Layout>
    ); 
  }
}

module.exports = Index;
