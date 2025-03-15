import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post("", formData);
      navigate("/loading");
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
      navigate("/signIn");
    } catch {}
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" name="fullName" placeholder="Full Name" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
