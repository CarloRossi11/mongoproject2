const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {jokes} = this.props
    return (
      <Layout title="My Jokes">
        <a href="/jokes/new"><button type="button" className="btn btn-primary hdr links">Add Joke</button></a>
        <a type="button" className="btn btn-outline-primary hdr links"href="/auth/logout">Logout</a>
        <h1 className="gallery">My Jokes</h1>
       
        {jokes.map((joke) => (
          <div>
            <div className="container-sm jokeGroup">
              <h2 className="name">{joke.name}</h2>
              <h4 className="build">{joke.buildUp}</h4>
              <h5 className="punch">{joke.punchLine}</h5>
          </div>
            <div className="btn-group">
              <form action={`/jokes/${joke._id}?_method=DELETE`} method='POST'>
              <input type="submit" className="btn btn-outline-primary btn-sm deledit" value="Delete"/>
              </form>
              <form action={`/jokes/edit/${joke._id}`} method='GET'>
              <input type="submit" className="btn btn-outline-primary btn-sm deledit" value="Edit"/>
              </form>
            </div>
            
          </div>
        ))}
      </Layout>
    );
  }
}

module.exports = Index;
