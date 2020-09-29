const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {jokes} = this.props
    return (
      <Layout title="My Jokes">
        <h1>My Jokes</h1>
        <a href="/jokes/new"><button type="button" className="btn btn-primary">Add Joke</button></a>
        {jokes.map(joke => <h2>{joke.name}</h2>)}
        {jokes.map(joke => <h3>{joke.buildUp}</h3>)}
        {jokes.map(joke => <h3>{joke.punchLine}</h3>)}
      </Layout>
    );
  }
}

module.exports = Index;
