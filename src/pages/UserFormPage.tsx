import React from 'react';
import { UserCircle } from 'lucide-react';
import Input from '../components/primitives/Input';
import Button from '../components/primitives/Button';
import { useForm } from '../hooks/useForm';

const UserFormPage: React.FC = () => {
  const { formData, errors, submittedData, handleChange, handleSubmit } = useForm();

  return (
    <div className="min-h-screen gradient-background flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
          <UserCircle className="text-[var(--color-primary)] h-6 w-6" />
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Formulario de Usuario</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nombre:"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          <Input
            label="Email:"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Button type="submit" fullWidth>
            Enviar
          </Button>
        </form>

        {submittedData && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Datos Ingresados:
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              <span className="font-medium">Nombre:</span> {submittedData.name}
            </p>
            <p className="text-[var(--color-text-secondary)]">
              <span className="font-medium">Email:</span> {submittedData.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserFormPage;