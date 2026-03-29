import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, EyeOff, Eye, Anchor, ChevronRight } from "lucide-react";
import { useState } from "react";
import styles from "./style/Login.module.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.loginPage}>
      {/* Background ambient glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.card}>
        {/* Left Form Panel */}
        <div className={styles.formPanel}>
          <div className={styles.formHeader}>
            <div className={styles.logoMark}>
              <Anchor size={24} strokeWidth={2.5} />
            </div>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          <form className={styles.form} onSubmit={(e) => { e.preventDefault(); navigate("/"); }}>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.inputIcon} size={18} />
                <input type="email" placeholder="name@company.com" required />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.inputIcon} size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className={styles.formOptions}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                <span className={styles.checkboxCustom} />
                Remember me
              </label>
              <a href="#" className={styles.forgotLink}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span>Sign In</span>
              <ChevronRight size={18} className={styles.submitIcon} strokeWidth={2.5} />
            </button>
          </form>

          {/* Dev bypass */}
          <div className={styles.devOptions}>
            <p>Development Access</p>
            <Link to="/Adminpage" className={styles.devBtn}>
              Go to Dashboard
            </Link>
          </div>
        </div>

        {/* Right Marine Art Panel */}
        <div className={styles.artPanel}>
          <div className={styles.artOverlay}></div>
          <div className={styles.waveGroup}>
            {/* Animated wave SVGs */}
            <svg
              className={styles.wave1}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="rgba(16, 185, 129, 0.4)"
                fillOpacity="1"
                d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,218.7C672,203,768,149,864,138.7C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
             <svg
              className={styles.wave2}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="rgba(59, 130, 246, 0.3)"
                fillOpacity="1"
                d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,133.3C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          
          <div className={styles.artContent}>
            <div className={styles.glassBadge}>Secure Portal</div>
            <h2>Seamless Operations.</h2>
            <p>Manage fleet and supply data effectively with our marine administration engine.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
