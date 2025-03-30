import React from "react";

interface SecurityControlsProps {
  settings: {
    enableCSRF: boolean;
    showPasswords: boolean;
    strictValidation: boolean;
    simulateDelay: boolean;
  };
  onChange: (settings: SecurityControlsProps["settings"]) => void;
}

const SecurityControls: React.FC<SecurityControlsProps> = ({ settings, onChange }) => {
  const handleToggle = (setting: keyof typeof settings) => {
    onChange({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Security Controls</h2>
      <p className="mb-4 text-sm text-gray-600">
        Toggle these settings to demonstrate different security concepts
      </p>

      <div className="space-y-4">
        {/* CSRF Protection Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">CSRF Protection</h3>
            <p className="text-sm text-gray-500">
              Adds a token to prevent cross-site request forgery
            </p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={settings.enableCSRF}
              onChange={() => handleToggle("enableCSRF")}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
          </label>
        </div>

        {/* Show Passwords Toggle (insecure) */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Show Passwords</h3>
            <p className="text-sm text-gray-500">
              Makes passwords visible (intentionally insecure)
            </p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={settings.showPasswords}
              onChange={() => handleToggle("showPasswords")}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
          </label>
        </div>

        {/* Input Validation Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Strict Validation</h3>
            <p className="text-sm text-gray-500">
              Enforces validation rules on input fields
            </p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={settings.strictValidation}
              onChange={() => handleToggle("strictValidation")}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
          </label>
        </div>

        {/* Simulate Delay Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Simulate Server Delay</h3>
            <p className="text-sm text-gray-500">
              Adds artificial delay for login requests
            </p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={settings.simulateDelay}
              onChange={() => handleToggle("simulateDelay")}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
          </label>
        </div>
      </div>

      {/* Phishing educational notes */}
      <div className="mt-6 rounded-md bg-yellow-50 p-4">
        <h3 className="font-semibold text-yellow-800">Phishing Protection Tips</h3>
        <p className="mt-2 text-sm text-yellow-700">
          This demo illustrates how phishing attacks work. To protect yourself:
        </p>
        <ul className="mt-2 list-inside list-disc text-sm text-yellow-700">
          <li>Always verify the URL in your browser's address bar</li>
          <li>Check for HTTPS and a valid SSL certificate</li>
          <li>Be suspicious of urgent requests for credentials</li>
          <li>Use password managers that won't autofill on fake sites</li>
          <li>Enable two-factor authentication when possible</li>
          <li>Avoid clicking links in emails; go directly to sites instead</li>
        </ul>
      </div>

      {/* Technical security notes */}
      <div className="mt-4 rounded-md bg-blue-50 p-4">
        <h3 className="font-semibold text-blue-800">Technical Security Notes</h3>
        <ul className="mt-2 list-inside list-disc text-sm text-blue-700">
          <li>Never store passwords in plain text</li>
          <li>Always use HTTPS for login forms</li>
          <li>Implement proper CSRF protection</li>
          <li>Use server-side validation</li>
          <li>Implement rate limiting to prevent brute force attacks</li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityControls;
