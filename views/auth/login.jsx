const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <form action="/auth/login" method="post">
  <div className="form-group">
    <input type="text" className="form-control" name="username" placeholder="username"/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control"  aria-describedby="pwHelp"  name="password" placeholder="password"/>
    <small id="pwHelp" class="form-text text-muted">Forgot Password? Rememeber harder.</small>
  </div>
  <input type="submit" className="btn btn-primary" value="Login"></input>
</form>
      </Layout>
    );
  }
}

module.exports = Login;


