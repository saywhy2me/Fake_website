import { useState } from "react";
import SecurityWarningBanner from "./components/SecurityWarningBanner";
import LoginForm from "./components/LoginForm";
import SecurityControls from "./components/SecurityControls";

function App() {
  const [securitySettings, setSecuritySettings] = useState({
    enableCSRF: true,
    showPasswords: false,
    strictValidation: true,
    simulateDelay: true,
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <SecurityWarningBanner />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Phishing Attack Demonstration</h1>
          <p className="mt-2 text-gray-600">
            This login form demonstrates how phishing attacks can collect credentials and redirect users.
            <span className="ml-1 font-semibold text-red-600">For educational purposes only.</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <LoginForm securitySettings={securitySettings} />
          </div>

          <div>
            <SecurityControls
              settings={securitySettings}
              onChange={setSecuritySettings}
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>Created for cybersecurity education only. Not for actual authentication or malicious use.</p>
      </footer>
    </div>
  );
}

export default App;
