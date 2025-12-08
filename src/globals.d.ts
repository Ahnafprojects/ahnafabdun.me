// src/globals.d.ts
export { };

declare module '*.glb';
declare module '*.png';

// Deklarasi untuk meshline
declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}