const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {jokes} = this.props
    return (
      <Layout title="New Joke">
        <form action="/jokes/" method = "post">
          <input className="links" type="text" placeholder="Joke Name" name="name"/>
          <input className="links" type="text" placeholder="Joke Content" name="buildUp"/>
          <input className="links" type="text" placeholder="Punchline" name="punchLine"/>
          <input className="links" type="submit" className="btn btn-primary" value="Full Send"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
