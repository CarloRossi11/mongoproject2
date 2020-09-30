const React = require("react");
const Layout = require("../layout.jsx");

class Show extends React.Component {
  render() {
    const {joke} = this.props
    return (
      <Layout title="Joke">
        <a href="/jokes/new"><button type="button" className="btn btn-primary hdr">Add Joke</button></a>
        <span className="links"><a type="button" className="btn btn-outline-primary hdr"href="/auth/logout">Logout</a></span>

          <div>
            <h2>{joke.name}</h2>
              {/* <div className="btn-group">
                <form action={`/jokes/${joke._id}?_method=DELETE`} method='POST'>
                <input type="submit" className="btn btn-outline-primary btn-sm deledit" value="Delete"/>
                </form>
                <form action={`/jokes/edit/${joke._id}`} method='GET'>
                <input type="submit" className="btn btn-outline-primary btn-sm deledit" value="Edit"/>
                </form>
              </div> */}
            <h3>{joke.buildUp}</h3>
            <h3>{joke.punchLine}</h3>
          </div>
      </Layout>
    );
  }
}

module.exports = Show;
