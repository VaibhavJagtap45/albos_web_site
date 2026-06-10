# Task 8 — Three.js Particle Mesh Hero Background

**Agent**: code-agent
**Date**: 2025-05-25

## What was created

### 1. `src/components/three/ParticleMesh.tsx` (~364 lines)

- `'use client'` component exporting `ParticleMesh`
- R3F `Canvas` with camera at z=5, FOV 60, transparent background
- 150 particles positioned in a uniform sphere (cube-root sampling for volume uniformity)
- Two `Points` layers:
  - **Core layer**: size 0.09, vertex-colored (white / #FF5C00 accent), additive blending, glow sprite texture
  - **Accent glow layer**: size 0.28, opacity 0.18, orange only — simulates bloom without postprocessing
- `LineSegments` connecting nearby particles (threshold 1.15), white at 0.1 opacity, additive blending
- Per-frame animation via `useFrame`:
  - Particle drift with velocity reflection at sphere boundary
  - O(n²) connection recomputation (~11k checks/frame, fast with typed arrays)
  - `needsUpdate` flags for GPU re-upload of dynamic buffers
  - Slow Y-axis rotation at 0.02 rad/s
- Programmatic 64×64 radial-gradient canvas texture for soft glow dots
- `DynamicDrawUsage` on all mutable `BufferAttribute`s
- Canvas is `position: absolute`, `pointer-events: none`, fills parent
- `dpr: [1, 1.5]`, `powerPreference: 'high-performance'`
- `eslint-disable react-hooks/refs` with explanation comment (standard R3F pattern for buffer geometry)

### 2. `src/components/three/HeroCanvas.tsx` (~30 lines)

- `'use client'` component exporting `HeroCanvas`
- Uses `next/dynamic` with `ssr: false` to import `ParticleMesh`
- Loading placeholder: subtle radial gradient (`rgba(255,92,0,0.06)`)

## Design decisions

- **Points over InstancedMesh**: More performant for 150 small dots; glow texture gives visual richness without needing 3D geometry per particle.
- **AccentGlowLayer**: A second, larger, softer Points layer for the ~15% orange particles creates a convincing bloom/halo effect without requiring `@react-three/postprocessing`.
- **Ref-based mutable arrays**: Three.js `BufferAttribute` requires in-place array mutation for animation; React's `useMemo` values must remain immutable per lint rules. Solution: `useRef` for mutable arrays, with an `eslint-disable` comment for the render-time ref reads needed during geometry construction.
- **O(n²) connections**: With n=150 this is only ~11k distance checks per frame — negligible vs GPU upload cost.

## Quality checks

- ✅ `bun run lint` — 0 errors, 0 warnings
- ✅ Dev server compiles successfully
