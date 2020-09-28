const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Jokes!">
        <div>
          <ul>
            {this.props.jokes.map((joke, i) => {
              return (
                <li>
                  Name:{joke.name}<br/>
                  Joke:{joke.narrative}<br/>
                  Punch:{joke.punchLine}
                  <br/>
                  {/* <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a> */}
                  {/* <form
                    action={`/fruits/${fruit._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form> */}
                </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
