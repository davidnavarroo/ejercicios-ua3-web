/*
 * ============================================================
 *  EJERCICIO 12 · Patrón de diseño: Template Method
 *  Referencia: diapositiva 52 · Nivel: Ampliación
 * ============================================================
 *
 * ENUNCIADO
 *
 * TEMPLATE METHOD: una función base define el esqueleto fijo de un algoritmo y
 * delega algunos pasos en otras funciones que pueden variar.
 *
 * Pasos variables (una función para cada uno, devuelven true/false):
 *    - validarEmail(texto):     true si contiene "@" y ".".
 *    - validarSeguridad(texto): true si NO contiene "malapalabra".
 *    - validarLongitud(texto):  true si tiene al menos 8 caracteres.
 * Y limpiarTexto(texto): quita espacios de los extremos y pasa a minúsculas.
 *
 * Esqueleto fijo: procesarTexto(tipo, texto) ("email", "seguridad" o "longitud"):
 *    1. Escribe "Iniciando validación..."
 *    2. Limpia el texto.
 *    3. Valida según el tipo. Si el tipo no existe, escribe
 *       "Tipo de validación no válido" y termina.
 *    4. Escribe "Texto válido: <texto limpio>" o "Texto inválido: <texto limpio>".
 *
 * Pruébalo con:
 *    procesarTexto("email", "  Ana@Correo.com ");
 *    procesarTexto("seguridad", "Esto es una MALAPALABRA");
 *    procesarTexto("longitud", "hola");
 *    procesarTexto("telefono", "123");
 *
 * RESULTADO ESPERADO en la Salida:
 *     Iniciando validación...
 *     Texto válido: ana@correo.com
 *     Iniciando validación...
 *     Texto inválido: esto es una malapalabra
 *     Iniciando validación...
 *     Texto inválido: hola
 *     Iniciando validación...
 *     Tipo de validación no válido
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
const validarEmail = (texto) => texto.includes("@") && texto.includes(".");
const validarSeguridad = (texto) => !texto.includes("malapalabra");
const validarLongitud = (texto) => texto.length >= 8;
const limpiarTexto = (texto) => texto.trim().toLowerCase();

function procesarTexto(tipo, texto) {
  console.log("Iniciando validación...");
  texto = limpiarTexto(texto);

  let isValid = false;
  switch (tipo) {
    case "email":
      isValid = validarEmail(texto);
      break;
    case "seguridad":
      isValid = validarSeguridad(texto);
      break;
    case "longitud":
      isValid = validarLongitud(texto);
      break;
    default:
      console.log("Tipo de validación no válido");
      return;
  }

  console.log(`${isValid ? "Texto válido" : "Texto inválido"}: ${texto}`);
}

procesarTexto("email", "  Ana@Correo.com ");
procesarTexto("seguridad", "Esto es una MALAPALABRA");
procesarTexto("longitud", "hola");
procesarTexto("telefono", "123");
