"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { User } from "@/lib/types";

type PublicUser = Omit<User, "password">;

interface AuthContextType {
  user: PublicUser | null;
  isAuthenticated: boolean;
  signUp: (name: string, email: string, dob: string, password: string) => { success: boolean; error?: string };
  signIn: (email: string, password: string) => { success: boolean; error?: string };
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = "shopclone-users";
const SESSION_KEY = "shopclone-session";

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function getUsers(): User[] {
  return loadFromStorage<User[]>(USERS_KEY, []);
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function toPublicUser(user: User): PublicUser {
  const { password: _, ...publicUser } = user;
  return publicUser;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const session = loadFromStorage<PublicUser | null>(SESSION_KEY, null);
    if (session) {
      setUser(session);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      if (user) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    }
  }, [user, hydrated]);

  const signUp = useCallback(
    (name: string, email: string, dob: string, password: string): { success: boolean; error?: string } => {
      const users = getUsers();
      const normalizedEmail = email.toLowerCase().trim();

      if (users.some((u) => u.email.toLowerCase() === normalizedEmail)) {
        return { success: false, error: "An account with this email already exists" };
      }

      const newUser: User = {
        id: `USR-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
        name: name.trim(),
        dob,
        email: normalizedEmail,
        password,
      };

      saveUsers([...users, newUser]);
      setUser(toPublicUser(newUser));
      return { success: true };
    },
    []
  );

  const signIn = useCallback(
    (email: string, password: string): { success: boolean; error?: string } => {
      const users = getUsers();
      const normalizedEmail = email.toLowerCase().trim();
      const found = users.find(
        (u) => u.email.toLowerCase() === normalizedEmail && u.password === password
      );

      if (!found) {
        return { success: false, error: "Invalid email or password" };
      }

      setUser(toPublicUser(found));
      return { success: true };
    },
    []
  );

  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  const isAuthenticated = user !== null;

  const value = useMemo(
    () => ({ user, isAuthenticated, signUp, signIn, signOut }),
    [user, isAuthenticated, signUp, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
