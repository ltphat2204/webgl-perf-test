export const GEOMETRIES = [
  { 
  name: 'Hình hộp (Box)', 
  i18nKey: 'geometry.box',
    geometryType: 'box',
    args: [1, 1, 1], 
    vertices: 36 
  },
  { 
  name: 'Hình cầu (Sphere)', 
  i18nKey: 'geometry.sphere',
    geometryType: 'sphere',
    args: [0.8, 16, 16], 
    vertices: 512 
  },
  { 
  name: 'Hình xoắn (TorusKnot)', 
  i18nKey: 'geometry.torusKnot',
    geometryType: 'torusKnot',
    args: [0.5, 0.2, 64, 8], 
    vertices: 2048 
  },
]
