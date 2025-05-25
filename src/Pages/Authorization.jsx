import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userData";
import { FileText, Shield, CheckCircle } from "lucide-react";

const MinimalLoading = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-slate-50/50"></div>

      <div className="relative z-10 text-center">
        {/* Main loading icon */}
        <div className="mb-8 relative">
          <div className="w-16 h-16 mx-auto bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center shadow-sm">
            <FileText className="w-8 h-8 text-slate-700 animate-pulse" />
          </div>

          {/* Minimal floating indicator */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-spin-slow">
            <Shield className="w-3 h-3 text-white" />
          </div>
        </div>

        {/* Brand text */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-1">
            Resume Builder
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Authenticating your session
          </p>
        </div>

        {/* Minimal progress bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="bg-slate-100 rounded-full h-1 overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* Simple status indicator */}
        <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="font-medium">Verifying credentials...</span>
        </div>
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-500/5 rounded-full animate-float-slow delay-1000"></div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 60%;
            transform: translateX(-20%);
          }
          100% {
            width: 100%;
            transform: translateX(0%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }

        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const API_URL = import.meta.env.VITE_BACKEND_URL;
      try {
        const response = await fetch(`${API_URL}/auth/check`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          setIsAuthenticated(false);
          return;
        }
        const data = await response.json();
        dispatch(setUserData(data.user));
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [dispatch]);

  if (isAuthenticated === null) {
    return <MinimalLoading />;
  }

  if (isAuthenticated === false) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
