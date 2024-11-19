import React, { useState } from 'react';
import { AuthProvider } from 'shared/context/AuthContext';
import { InstructoresProvider } from 'shared/context/InstructoresContext';
import { AlumnosProvider } from 'shared/context/AlumnosContext';
import { UsuariosProvider } from 'shared/context/UsuariosContext';
import LoginPage from 'features/auth/pages/LoginPage';
import UsersPage from 'features/usuarios/pages/UsersPage';
import PrivateRoute from 'shared/navigation/PrivateRoute';
import UnAuthRoute from 'shared/navigation/UnAuthRoute';
import LayoutedRoute from 'shared/navigation/LayoutedRoute';
import WIPPage from 'shared/pages/WIPPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <InstructoresProvider>
        <AlumnosProvider>
          <UsuariosProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<UnAuthRoute />}>
                  <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route element={<LayoutedRoute />}>
                    <Route path="/usuarios" element={<UsersPage />} />
                  </Route>
                </Route>
                <Route path="*" element={<WIPPage />} />
              </Routes>
            </BrowserRouter>
          </UsuariosProvider>
        </AlumnosProvider>
      </InstructoresProvider>
    </AuthProvider>
  );
}

export default App