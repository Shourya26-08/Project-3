import { Link, useNavigate } from "react-router-dom";
import { Bell, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children, notifications = [] }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function signOut() {
    logout();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-900">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white">P3</span>
            Project 3
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <div className="text-sm font-semibold">{user?.name}</div>
              <div className="text-xs text-slate-500">{user?.email}</div>
            </div>
            <div className="relative">
              <Bell size={19} className="text-slate-600" />
              {notifications.filter(n => !n.isRead).length > 0 && (
                <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-[9px] text-white">
                  {notifications.filter(n => !n.isRead).length}
                </span>
              )}
            </div>
            <button onClick={signOut} className="btn-secondary flex items-center gap-2">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}