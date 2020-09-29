const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {jokes} = this.props
    return (
      <Layout title="New Joke">
        <form action="/jokes/" method = "post">
          <input type="text" placeholder="Joke Name" name="name"/>
          <input type="text" placeholder="Joke Content" name="buildUp"/>
          <input type="text" placeholder="Punchline" name="punchLine"/>
          <input type="submit" value="Full Send"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
