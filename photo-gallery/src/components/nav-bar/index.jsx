import "./style.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container nav_container">
          <div>
            <a href="index.html" className="nav_logo">
              Main Page
            </a>
          </div>
          <div>
            <ul className="nav_items">
              <li>
                <a href="wallet_client/about.html">About</a>
              </li>
              <li>
                <a href="wallet_client/help.html">Help</a>
              </li>
              <li className="nav_profile">
                <div className="avatar">
                  <img
                    src="wallet_client/assets/illustration-businessman_53876-5856.avif"
                    alt=""
                  />
                </div>
                <ul>
                  <li className="signed_out_nav_links">
                    <a href="wallet_client/signin.html">Sign In</a>
                  </li>
                  <li className="signed_in_nav_links">
                    <a href="wallet_client/profile.html">Profile</a>
                  </li>
                  <li className="signed_in_nav_links">
                    <a href="wallet_client/dashboard.html">Dashboard</a>
                  </li>
                  <li className="signed_in_nav_links">
                    <a href="wallet_client/addCard.html">Create Card</a>
                  </li>
                  <li className="signed_in_nav_links">
                    <a href="wallet_client/transactions.html">Transactions</a>
                  </li>
                  <li className="signed_in_nav_links">Logout</li>
                </ul>
              </li>
            </ul>

            <button>
              <i className="uil uil-bars"></i>
            </button>
            <button>
              <i className="uil uil-multiply"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
