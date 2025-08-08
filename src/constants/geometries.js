export const GEOMETRIES = [
  { name: 'Hình hộp (Box)', geometry: <boxGeometry args={[1, 1, 1]} />, vertices: 36 },
  { name: 'Hình cầu (Sphere)', geometry: <sphereGeometry args={[0.8, 16, 16]} />, vertices: 512 },
  { name: 'Hình xoắn (TorusKnot)', geometry: <torusKnotGeometry args={[0.5, 0.2, 64, 8]} />, vertices: 2048 },
]
