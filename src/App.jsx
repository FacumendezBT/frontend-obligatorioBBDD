import React, { useState } from 'react';
import { AuthProvider } from 'shared/context/AuthContext';
import { InstructoresProvider } from 'shared/context/InstructoresContext';
import { AlumnosProvider } from 'shared/context/AlumnosContext';
import { UsuariosProvider } from 'shared/context/UsuariosContext';
import { TurnosProvider } from 'shared/context/TurnosContext';
import LoginPage from 'features/auth/pages/LoginPage';
import UsersPage from 'features/usuarios/pages/UsersPage';
import TurnosPage from 'features/turnos/pages/TurnosPage';
import PrivateRoute from 'shared/navigation/PrivateRoute';
import UnAuthRoute from 'shared/navigation/UnAuthRoute';
import LayoutedRoute from 'shared/navigation/LayoutedRoute';
import WIPPage from 'shared/pages/WIPPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ActividadesProvider } from './shared/context/ActividadesContext';

function App() {
  return (
    <AuthProvider>
      <InstructoresProvider>
        <AlumnosProvider>
          <UsuariosProvider>
            <TurnosProvider>
              <ActividadesProvider>
                <BrowserRouter>
                  <Routes>
                    <Route element={<UnAuthRoute />}>
                      <Route path="/login" element={<LoginPage />} />
                    </Route>
                    <Route element={<PrivateRoute />}>
                      <Route element={<LayoutedRoute />}>
                        <Route path="/usuarios" element={<UsersPage />} />
                        <Route path="/turnos" element={<TurnosPage />} />
                      </Route>
                    </Route>
                    <Route path="*" element={<WIPPage />} />
                  </Routes>
                </BrowserRouter>
              </ActividadesProvider>
            </TurnosProvider>
          </UsuariosProvider>
        </AlumnosProvider>
      </InstructoresProvider>
    </AuthProvider>
  );
}

export default App