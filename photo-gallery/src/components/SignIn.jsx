export default function SignIn() {
  return (
    <div className="container">
      <h1>Sign In</h1>
      <form>
        <div className="container">
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}
