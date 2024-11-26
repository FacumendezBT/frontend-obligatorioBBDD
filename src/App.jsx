import React, { useState } from 'react';
import { AuthProvider } from 'shared/context/AuthContext';
import { InstructoresProvider } from 'shared/context/InstructoresContext';
import { AlumnosProvider } from 'shared/context/AlumnosContext';
import { UsuariosProvider } from 'shared/context/UsuariosContext';
import { TurnosProvider } from 'shared/context/TurnosContext';
import LoginPage from 'features/auth/pages/LoginPage';
import UsersPage from 'features/usuarios/pages/UsersPage';
import ClasesPage from 'features/clases/pages/ClasesPage';
import PrivateRoute from 'shared/navigation/PrivateRoute';
import UnAuthRoute from 'shared/navigation/UnAuthRoute';
import LayoutedRoute from 'shared/navigation/LayoutedRoute';
import WIPPage from 'shared/pages/WIPPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ActividadesProvider } from './shared/context/ActividadesContext';
import { ClasesProvider } from './shared/context/ClasesContext';
import EquipamientoPage from './features/equipamiento/pages/EquipmentPage';
import { EquipamientoProvider } from './shared/context/EquipamientoContext';

function App() {
  return (
    <AuthProvider>
    <EquipamientoProvider>
      <InstructoresProvider>
        <AlumnosProvider>
          <UsuariosProvider>
            <TurnosProvider>
              <ActividadesProvider>
                <ClasesProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route element={<UnAuthRoute />}>
                        <Route path="/login" element={<LoginPage />} />
                      </Route>
                      <Route element={<PrivateRoute />}>
                        <Route element={<LayoutedRoute />}>
                          <Route path="/usuarios" element={<UsersPage />} />
                          <Route path="/clases" element={<ClasesPage />} />
                          <Route path="/equipamiento" element={<EquipamientoPage />}/>
                        </Route>
                      </Route>
                      <Route path="*" element={<WIPPage />} />
                    </Routes>
                  </BrowserRouter>
                </ClasesProvider>
              </ActividadesProvider>
            </TurnosProvider>
          </UsuariosProvider>
        </AlumnosProvider>
      </InstructoresProvider>
      </EquipamientoProvider>
    </AuthProvider>
  );
}

export default App