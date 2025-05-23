import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-3 py-2 border rounded-md ${
          error ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
        } focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]`}
      />
      {error && (
        <p className="mt-1 text-sm text-[var(--color-error)]">{error}</p>
      )}
    </div>
  );
};

export default Input;