/**
 * ============================================================================
 * 🥊 RETO 03: Union Types, Type Narrowing & Discriminated Unions para UI Móvil
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN:
 * En React Native, una pantalla conectada a una API puede estar: cargando con
 * un spinner, mostrando los datos obtenidos con éxito, o mostrando un mensaje
 * de error si se cae la red.
 * Tu misión es modelar estos 3 estados con un 'Discriminated Union' para que
 * la app jamás explote por variables indefinidas.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Implementa `formatearIdentificador` usando estrechamiento de tipos (`typeof`).
 * 2. Implementa `renderizarEstadoUI` con un `switch(estado.status)`.
 * 3. Ejecuta en tu terminal: `pnpm run start:03` para verificar los tests.
 */


export function formatearIdentificador(id: string | number): string {
  if(typeof id === "string"){
    return `ID-ALFANUMERICO-${id.toUpperCase()}`;
  }

  return `ID-NUMERICO-#${id.toFixed(0).padStart(6, "0")}`;
}

// ============================================================================
// PASO 2: Modelado de Estados con Discriminated Unions
// ============================================================================
export interface EstadoCargando {
  status: "LOADING";
  porcentaje: number;
}

export interface EstadoExito<T> {
  status: "SUCCESS";
  datos: T;
  hora: string;
}

export interface EstadoError {
  status: "ERROR";
  codigo: number;
  mensaje: string;
}

// Unión discriminada:
export type EstadoPantalla<T> =
  | EstadoCargando
  | EstadoExito<T>
  | EstadoError;

export function renderizarEstadoUI<T>(estado: EstadoPantalla<T>): string {
  switch (estado.status) {
    case "LOADING":
      return `⏳ Cargando datos (${estado.porcentaje}%)...`;
    case "SUCCESS":
      return `🎉 Datos cargados con éxito a las ${estado.hora}`;
    case"ERROR":
      return `❌ Error ${estado.codigo}: ${estado.mensaje}`;
  }
}
