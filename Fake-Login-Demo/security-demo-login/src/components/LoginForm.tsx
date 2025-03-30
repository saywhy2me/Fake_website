import React, { useState, useEffect } from "react";

interface LoginFormProps {
  securitySettings: {
    enableCSRF: boolean;
    showPasswords: boolean;
    strictValidation: boolean;
    simulateDelay: boolean;
  };
}

const LoginForm: React.FC<LoginFormProps> = ({ securitySettings }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | "info" | null;
  }>({
    message: "",
    type: null,
  });
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: "No password entered",
  });

  // Generate CSRF token
  useEffect(() => {
    if (securitySettings.enableCSRF) {
      // In a real app, this would be generated server-side
      const randomToken = Math.random().toString(36).substring(2, 15) +
                         Math.random().toString(36).substring(2, 15);
      setCsrfToken(randomToken);
    }
  }, [securitySettings.enableCSRF]);

  // Password strength checker
  useEffect(() => {
    if (!password) {
      setPasswordStrength({ score: 0, message: "No password entered" });
      return;
    }

    let score = 0;
    let message = "";

    // Length check
    if (password.length < 8) {
      message = "Too short";
    } else {
      score += 1;

      // Complexity checks
      if (/[A-Z]/.test(password)) score += 1;
      if (/[0-9]/.test(password)) score += 1;
      if (/[^A-Za-z0-9]/.test(password)) score += 1;

      if (score === 2) message = "Weak";
      else if (score === 3) message = "Medium";
      else if (score === 4) message = "Strong";
    }

    setPasswordStrength({ score, message });
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ message: "", type: null });

    // Basic form validation, but we'll bypass the strict validation for this demo
    if (securitySettings.strictValidation) {
      if (username.length < 1) {
        setFormStatus({
          message: "Username must not be empty",
          type: "error",
        });
        return;
      }
    }

    // Simulate submission and server delay
    setIsSubmitting(true);

    try {
      if (securitySettings.simulateDelay) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Log for educational purposes
      console.log({
        username,
        password: securitySettings.showPasswords ? password : "[REDACTED]",
        csrfToken: securitySettings.enableCSRF ? csrfToken : "Disabled",
      });

      // Accept any credentials and redirect
      setFormStatus({
        message: "Login successful - Redirecting...",
        type: "success",
      });

      // Redirect to Google after a brief delay
      setTimeout(() => {
        window.location.href = "https://www.google.com";
      }, 1500);

    } catch (error) {
      setFormStatus({
        message: "An error occurred. This is simulated for educational purposes.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get appropriate colors for password strength
  const getPasswordStrengthColor = () => {
    switch (passwordStrength.score) {
      case 0: return "bg-gray-200";
      case 1: return "bg-red-500";
      case 2: return "bg-orange-500";
      case 3: return "bg-yellow-500";
      case 4: return "bg-green-500";
      default: return "bg-gray-200";
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Demo Login Form</h2>

      {/* Status message */}
      {formStatus.type && (
        <div
          className={`mb-4 rounded p-3 ${
            formStatus.type === "success"
              ? "bg-green-100 text-green-800"
              : formStatus.type === "error"
                ? "bg-red-100 text-red-800"
                : "bg-blue-100 text-blue-800"
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* CSRF Token */}
        {securitySettings.enableCSRF && (
          <input type="hidden" name="csrf_token" value={csrfToken} />
        )}

        {/* Username field */}
        <div>
          <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
            Email or Username
          </label>
          <input
            type="text"
            id="username"
            className="block w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            placeholder="Enter your email or username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {securitySettings.strictValidation && username.length > 0 && username.length < 4 && (
            <p className="mt-1 text-sm text-red-600">Username must be at least 4 characters</p>
          )}
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type={securitySettings.showPasswords ? "text" : "password"}
            id="password"
            className="block w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Password strength indicator */}
          {password.length > 0 && (
            <div className="mt-2">
              <div className="mb-1 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className={`h-full ${getPasswordStrengthColor()}`}
                  style={{ width: `${passwordStrength.score * 25}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600">
                Password strength: {passwordStrength.message}
              </p>
            </div>
          )}

          {securitySettings.strictValidation && password.length > 0 && password.length < 8 && (
            <p className="mt-1 text-sm text-red-600">Password must be at least 8 characters</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-md bg-blue-600 px-5 py-2.5 text-center text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
            isSubmitting ? "cursor-not-allowed opacity-75" : ""
          }`}
        >
          {isSubmitting ? "Processing..." : "Login"}
        </button>
      </form>

      {/* Enhanced educational warning */}
      <div className="mt-6 rounded-md bg-red-50 p-4">
        <h3 className="font-semibold text-red-800">IMPORTANT EDUCATIONAL NOTICE</h3>
        <p className="mt-2 text-sm text-red-700">
          <strong>This form redirects to Google.com after submission as part of a security demonstration.</strong>
          In a real phishing attack, credentials could be collected without your knowledge.
          This is why you should always verify website URLs before entering credentials.
        </p>
        <ul className="mt-2 list-inside list-disc text-sm text-red-700">
          <li>Form validation: {securitySettings.strictValidation ? "Enabled" : "Disabled"}</li>
          <li>Password visibility: {securitySettings.showPasswords ? "Enabled (insecure)" : "Disabled (secure)"}</li>
          <li>CSRF protection: {securitySettings.enableCSRF ? "Enabled" : "Disabled"}</li>
          <li>Password strength meter: Always enabled</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginForm;
