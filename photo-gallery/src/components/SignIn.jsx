import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post("", formData);
      navigate("/loading");
      setTimeout(() => navigate("/", 3000));
    } catch {}
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="container">
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}
