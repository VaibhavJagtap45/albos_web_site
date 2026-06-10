'use client';

import { useSyncExternalStore, useCallback } from 'react';

function getSnapshot(query: string): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(query).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

function subscribe(query: string, callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia(query);
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

export function useReducedMotion(): boolean {
  const q = '(prefers-reduced-motion: reduce)';
  const getSnapshotMemo = useCallback(() => getSnapshot(q), []);
  const subscribeMemo = useCallback(
    (cb: () => void) => subscribe(q, cb),
    []
  );
  return useSyncExternalStore(subscribeMemo, getSnapshotMemo, getServerSnapshot);
}

export function useIsTouchDevice(): boolean {
  const q = '(pointer: coarse)';
  const getSnapshotMemo = useCallback(() => getSnapshot(q), []);
  const subscribeMemo = useCallback(
    (cb: () => void) => subscribe(q, cb),
    []
  );
  return useSyncExternalStore(subscribeMemo, getSnapshotMemo, getServerSnapshot);
}
