//NEW  
const React = require("react");
const Layout = require("./layout.jsx");


class New extends React.Component {
  render() {
    return (
      <Layout>
        <h1>New Joke Page</h1>
        <form action="/jokes" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Narrative: <input type="text" name="narrative" />
          <br />
          Punchline: <input type="text" name="punchline" />
          <br />
          <input type="submit" name="" value="Create Joke" />
        </form>
      </Layout>
    );
  }
}

module.exports = New;