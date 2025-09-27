
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useAppContext } from './hooks/useAppContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProcessCallPage from './pages/ProcessCallPage';
import CallHistoryPage from './pages/CallHistoryPage';
import ActionItemsPage from './pages/ActionItemsPage';
import QBRGeneratorPage from './pages/QBRGeneratorPage';
import NotFoundPage from './pages/NotFoundPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const PrivateLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const { user } = useAppContext();

  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        
        <Route path="/" element={user ? <PrivateLayout /> : <Navigate to="/login" />}>
          <Route index element={<DashboardPage />} />
          <Route path="process" element={<ProcessCallPage />} />
          <Route path="process/:id" element={<ProcessCallPage />} />
          <Route path="history" element={<CallHistoryPage />} />
          <Route path="actions" element={<ActionItemsPage />} />
          <Route path="qbr" element={<QBRGeneratorPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;