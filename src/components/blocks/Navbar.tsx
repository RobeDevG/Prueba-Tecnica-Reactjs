import { UserCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-4xl mx-auto flex gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
        >
          <Users className="h-5 w-5" />
          Lista de Usuarios
        </Link>
        <Link
          to="/form"
          className="flex items-center gap-2 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
        >
          <UserCircle className="h-5 w-5" />
          Formulario
        </Link>
      </div>
    </nav>
  );
}