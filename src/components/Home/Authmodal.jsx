export default function Authmodal() {
  return (
    <div className="auth-modal-overlay" id="authModal">
    <div className="auth-modal">
      <button className="auth-modal-close" id="authModalClose"><i className="fas fa-times"></i></button>

      <div className="auth-tabs">
        <button className="auth-tab active" data-auth="login">Login</button>
        <button className="auth-tab" data-auth="signup">Sign Up</button>
      </div>

      
      <div className="auth-form active" id="auth-login">
        <h3>Welcome Back 👋</h3>
        <p>Login to your BrainUp Labs account</p>
        <div className="auth-field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="auth-field">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className="auth-submit">Login <i className="fas fa-arrow-right"></i></button>
        <p className="auth-switch">Don't have an account? <span data-auth="signup">Sign Up</span></p>
      </div>

      
      <div className="auth-form" id="auth-signup">
        <h3>Create Account 🚀</h3>
        <p>Join BrainUp Labs today</p>
        <div className="auth-field">
          <label>Full Name</label>
          <input type="text" placeholder="Your full name" />
        </div>
        <div className="auth-field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="auth-field">
          <label>Password</label>
          <input type="password" placeholder="Create a password" />
        </div>
        <button className="auth-submit">Create Account <i className="fas fa-arrow-right"></i></button>
        <p className="auth-switch">Already have an account? <span data-auth="login">Login</span></p>
      </div>
    </div>
  </div>
  );
}
