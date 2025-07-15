// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Tailwind CSS directives
import { ThemeProvider } from './context/ThemeContext.jsx';
import { ShadowProvider } from './context/ShadowContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ShadowProvider>
        <App />
        {/* ToastContainer for react-toastify notifications */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" // Default theme for toasts, can be overridden by individual toasts
        />
      </ShadowProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
