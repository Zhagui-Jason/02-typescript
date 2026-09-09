export const nombreEstudiante: string = "Jason";       
export const edadEstudiante: number = 17;         
export const promedioObjetivo: number = 9.50;       
export let estaMatriculado: boolean = true;  

export function obtenerResumenPersonal(): string {
  return `👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} | 🎯 Meta: ${promedioObjetivo} | 📋 Estado: ${estaMatriculado ? "MATRICULADO" : "NO_MATRICULADO"} ` ;
}


export function calcularPromedio(notas: readonly number[]): number {
  let suma = 0;
  if (notas.length == 0){
    return 0;
  }
  for (let i=0; i<notas.length; i++) {
    let nota = notas[i];
    if (nota == null){
      nota = 0;
    }
    suma += nota; 
  }
  let promedio = Number((suma / notas.length).toFixed(2))
  return promedio ;
}

// ============================================================================
// PASO 3: Formateador de Ficha Técnica
// ============================================================================
/**
 * TODO: Implementa la función `formatearFichaEstudiante`.
 * Parámetros requeridos:
 *  - nombre (string)
 *  - edad (number)
 *  - paralelo ("E1" | "E2") -> Literal Type
 *  - activo (boolean)
 * 
 * Formato de salida requerido:
 *  `[FICHA UETS] NOMBRE_EN_MAYUSCULAS (XX años) - Paralelo: E1 - Estado: MATRICULADO` (o RETIRADO si activo es false)
 */
export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
  let estado="RETIRADO";
  if(activo){
    estado="MATRICULADO";
  }
  return `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo: ${paralelo} - Estado: ${estado};
}
