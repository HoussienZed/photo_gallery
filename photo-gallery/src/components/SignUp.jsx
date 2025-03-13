export default function SignUp() {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form className="form-container">
        <input type="text" name="fullName" placeholder="Full Name" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
