const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
               <form action="/auth/signup" method="post">
  <div className="form-group">
    <input type="text" className="form-control" name="username" placeholder="username"/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" aria-describedby="pwHelp" name="password" placeholder="password"/>
    <small id="pwHelp" class="form-text text-muted">Must contain at least 1 character of any type</small>
  </div>
  <input type="submit" className="btn btn-primary" value="Sign Up"></input>
</form>
      </Layout>
    );
  }
}

module.exports = Index;
