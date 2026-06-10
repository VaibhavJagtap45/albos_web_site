'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// ─── Context ────────────────────────────────────────────────────────────────
const LenisContext = createContext<Lenis | null>(null);

// ─── Hook ───────────────────────────────────────────────────────────────────
/** Returns the active Lenis instance (or null if the provider hasn't mounted). */
export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}

// ─── Provider ───────────────────────────────────────────────────────────────
interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect -- initializing an external library instance that requires the DOM
    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}
