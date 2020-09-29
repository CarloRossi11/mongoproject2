const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {joke} = this.props
    return (
      <Layout title="Edit Joke">
        <form action={`/jokes/edit/${joke._id}?_method=PUT`} method = "post">
          <input type="text" value={joke.name }placeholder="Joke Name" name="name"/>
          <input type="text" value={joke.buildUp} placeholder="Joke Content" name="buildUp"/>
          <input type="text" value={joke.punchline} placeholder="Punchline" name="punchLine"/>
          <input type="submit" className="btn btn-primary" value="Edit Joke"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
