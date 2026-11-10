import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Default initial user for instant testing
const DEFAULT_USERS = [
  {
    id: 'user-1',
    name: 'Prof. Santiago Ramos',
    email: 'docente@cnns.edu.ar',
    password: 'password123',
    role: 'Docente Titular'
  }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('cnns_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('cnns_registered_users');
      return saved ? JSON.parse(saved) : DEFAULT_USERS;
    } catch {
      return DEFAULT_USERS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cnns_registered_users', JSON.stringify(users));
    } catch (e) {
      console.error('Error saving users to localStorage', e);
    }
  }, [users]);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('cnns_auth_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('cnns_auth_user');
      }
    } catch (e) {
      console.error('Error saving auth user to localStorage', e);
    }
  }, [user]);

  const login = (email, password) => {
    const trimmedEmail = email.trim().toLowerCase();
    const existing = users.find(
      (u) => u.email.toLowerCase() === trimmedEmail && u.password === password
    );

    if (existing) {
      const authUser = {
        id: existing.id,
        name: existing.name,
        email: existing.email,
        role: existing.role || 'Usuario Registrado'
      };
      setUser(authUser);
      return { success: true };
    }

    return {
      success: false,
      error: 'Correo electrónico o contraseña incorrectos. Verifica tus datos o regístrate.'
    };
  };

  const register = ({ name, email, password, role }) => {
    const trimmedEmail = email.trim().toLowerCase();
    const existing = users.find((u) => u.email.toLowerCase() === trimmedEmail);

    if (existing) {
      return {
        success: false,
        error: 'Ya existe una cuenta registrada con este correo electrónico.'
      };
    }

    const newUser = {
      id: 'user-' + Date.now(),
      name: name.trim(),
      email: trimmedEmail,
      password: password,
      role: role || 'Comunidad Educativa'
    };

    setUsers((prev) => [...prev, newUser]);
    
    // Automatically log in newly registered user
    const authUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    };
    setUser(authUser);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

