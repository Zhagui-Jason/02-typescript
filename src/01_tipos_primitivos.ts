export const nombreEstudiante: string = "Jason";       
export const edadEstudiante: number = 17;         
export const promedioObjetivo: number = 9.50;       
export let estaMatriculado: boolean = true;  

export function obtenerResumenPersonal(): string {
  return `👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} | 🎯 Meta: ${promedioObjetivo} | 📋 Estado: ${estaMatriculado ? "MATRICULADO" : "NO_MATRICULADO"} ` ;
}


export function calcularPromedio(notas: readonly number[]): number {
  if (notas.length == 0) 
    return 0;

  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i] ?? 0;
  }
  return Number((suma / notas.length).toFixed(2));
}

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
  return `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo: ${paralelo} - Estado: ${estado}`;
}
