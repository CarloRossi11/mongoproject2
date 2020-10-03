const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {joke} = this.props
    return (
      <Layout title="Edit Joke">
        <form action={`/jokes/edit/${joke._id}?_method=PUT`} method = "post">
          <input className="links" type="text" value={joke.name }placeholder="Joke Name" name="name"/>
          <input className="links" type="text" value={joke.buildUp} placeholder="Joke Content" name="buildUp"/>
          <input className="links" type="text" value={joke.punchLine} placeholder="Punchline" name="punchLine"/>
          <input className="links" type="submit" className="btn btn-primary" value="Edit Joke"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
