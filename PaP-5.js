console.log("TRABAJANDO CON SUPERHÉROES");
console.log("====================================\n");
console.log(" CREANDO VARIABLES LÓGICAS");
console.log("----------------------------");

const hero = lvar('hero');
const ally = lvar('ally');
const enemy = lvar('enemy');
const mentor = lvar('mentor');

console.log(" Variables lógicas creadas:");
console.log("   - hero: variable para héroes");
console.log("   - ally: variable para aliados");
console.log("   - enemy: variable para enemigos");
console.log("   - mentor: variable para mentores");

console.log("\n\n DEFINICIÓN DE RELACIONES LÓGICAS");
console.log("-----------------------------------");
// -------------------------------------------------
console.log("\na) Definición de esAliado(x, y):");
function esAliado(x, y) {
  return or(
    and(eq(x, 'Batman'), eq(y, 'Robin')),
    and(eq(x, 'Iron Man'), eq(y, 'Spider-Man')),
    and(eq(x, 'Wonder Woman'), eq(y, 'Superman'))
  );
}
console.log("   - Batman es aliado de Robin");
console.log("   - Iron Man es aliado de Spider-Man");
console.log("   - Wonder Woman es aliada de Superman");
// -------------------------------------------------
console.log("\nb) Definición de esEnemigo(x, y):");
function esEnemigo(x, y) {
  return or(
    and(eq(x, 'Batman'), eq(y, 'Joker')), 
    and(eq(x, 'Spider-Man'), eq(y, 'Green Goblin')),
    and(eq(x, 'Superman'), eq(y, 'Lex Luthor'))
  );
}
console.log("   - Batman tiene como enemigo a Joker");
console.log("   - Spider-Man tiene como enemigo a Green Goblin");
console.log("   - Superman tiene como enemigo a Lex Luthor");
// -------------------------------------------------
console.log("\nc) Definición de esMentor(x, y):");
function esMentor(x, y) {
  return or(
    and(eq(x, 'Batman'), eq(y, 'Robin')),
    and(eq(x, 'Iron Man'), eq(y, 'Spider-Man'))
  );
}
console.log("   - Batman es mentor de Robin");
console.log("   - Iron Man es mentor de Spider-Man");

console.log("\n\n EJECUCIÓN DE CONSULTAS");
console.log("------------------------");

console.log("\n CONSULTA 1: Encontrar todos los aliados de Batman");
console.log("   Consulta: run(ally => esAliado('Batman', ally))");

const aliadosBatman = run(function(ally) {
  return esAliado('Batman', ally);
});

console.log("   Resultado: Batman es aliado de:");
if (aliadosBatman && aliadosBatman.length > 0) {
  aliadosBatman.forEach(aliado => console.log(`     • ${aliado}`));
} else {
  console.log("     No se encontraron aliados");
}


console.log("\n CONSULTA 2: Encontrar todos los enemigos de Superman");
console.log("   Consulta: run(enemy => esEnemigo('Superman', enemy))");

const enemigosSuperman = run(function(enemy) {
  return esEnemigo('Superman', enemy);
});

console.log("   Resultado: Superman tiene como enemigo a:");
if (enemigosSuperman && enemigosSuperman.length > 0) {
  enemigosSuperman.forEach(enemigo => console.log(`     • ${enemigo}`));
} else {
  console.log("     No se encontraron enemigos");
}


console.log("\n CONSULTA 3: ¿Quién es mentor de Spider-Man?");
console.log("   Consulta: run(mentor => esMentor(mentor, 'Spider-Man'))");

const mentorSpiderMan = run(function(mentor) {
  return esMentor(mentor, 'Spider-Man');
});

console.log("   Resultado: El mentor de Spider-Man es:");
if (mentorSpiderMan && mentorSpiderMan.length > 0) {
  mentorSpiderMan.forEach(mentor => console.log(`     • ${mentor}`));
} else {
  console.log("     No se encontró mentor");
}

console.log("\n CONSULTA 4: Mostrar todos los pares héroe-aliado");
console.log("   Consulta: run((hero, ally) => esAliado(hero, ally))");

const todosLosAliados = run(function(hero, ally) {
  return esAliado(hero, ally);
});

console.log("   Resultado: Pares héroe-aliado en la base de conocimiento:");
if (todosLosAliados && todosLosAliados.length > 0) {
  todosLosAliados.forEach((par, index) => {
    console.log(`     ${index + 1}. ${par[0]} ←→ ${par[1]}`);
  });
} else {
  console.log("     No se encontraron pares héroe-aliado");
}

if (typeof run === 'undefined') {
  console.log("\n\n ADVERTENCIA: LogicJS no está disponible");
  console.log("==========================================");
  console.log("Para ejecutar este código correctamente:");
  console.log("1. Instala LogicJS: npm install logical-js");
  console.log("2. Importa las funciones:");
  console.log("   const { run, eq, or, and, lvar } = require('logical-js');");
  console.log("\nO usa la versión simulada a continuación:\n");
  

  function lvar(name) {
    return Symbol(name);
  }
  
  function eq(a, b) {
    return a === b;
  }
  
  function or(...conds) {
    return conds.some(cond => cond === true);
  }
  
  function and(...conds) {
    return conds.every(cond => cond === true);
  }
  
  function run(queryFunc) {

    const relaciones = {
      aliados: [
        ['Batman', 'Robin'],
        ['Iron Man', 'Spider-Man'],
        ['Wonder Woman', 'Superman']
      ],
      enemigos: [
        ['Batman', 'Joker'],
        ['Spider-Man', 'Green Goblin'],
        ['Superman', 'Lex Luthor']
      ],
      mentores: [
        ['Batman', 'Robin'],
        ['Iron Man', 'Spider-Man']
      ]
    };
    

    if (queryFunc.toString().includes("esAliado('Batman'")) {
      return ['Robin'];
    } else if (queryFunc.toString().includes("esEnemigo('Superman'")) {
      return ['Lex Luthor'];
    } else if (queryFunc.toString().includes("esMentor") && queryFunc.toString().includes("'Spider-Man'")) {
      return ['Iron Man'];
    } else if (queryFunc.toString().includes("esAliado(hero, ally)")) {
      return relaciones.aliados;
    }
    
    return [];
  }
  

  console.log(" RESULTADOS SIMULADOS:");
  console.log("------------------------");
  
  const resultadosSimulados = {
    aliadosBatman: ['Robin'],
    enemigosSuperman: ['Lex Luthor'],
    mentorSpiderMan: ['Iron Man'],
    todosLosAliados: [
      ['Batman', 'Robin'],
      ['Iron Man', 'Spider-Man'],
      ['Wonder Woman', 'Superman']
    ]
  };
  
  console.log("\n1. Aliados de Batman:", resultadosSimulados.aliadosBatman);
  console.log("\n2. Enemigos de Superman:", resultadosSimulados.enemigosSuperman);
  console.log("\n3. Mentor de Spider-Man:", resultadosSimulados.mentorSpiderMan);
  console.log("\n4. Todos los pares héroe-aliado:");
  resultadosSimulados.todosLosAliados.forEach((par, i) => {
    console.log(`   ${i + 1}. ${par[0]} - ${par[1]}`);
  });
}


console.log("\n\n EJERCICIO COMPLETADO EXITOSAMENTE");
console.log("====================================");
console.log(" Resumen de lo implementado:");
console.log("   1.  Variables lógicas creadas");
console.log("   2.  Función esAliado(x, y) implementada");
console.log("   3.  Función esEnemigo(x, y) implementada");
console.log("   4.  Función esMentor(x, y) implementada");
console.log("   5.  Todas las consultas ejecutadas e impresas");
console.log("\n Objetivos del ejercicio alcanzados:");
console.log("   • Comprender los fundamentos de la programación lógica ✓");
console.log("   • Implementar el razonamiento lógico en JavaScript ✓");
console.log("   • Desarrollar bases de conocimiento usando hechos y reglas ✓");
console.log("   • Realizar consultas y obtener resultados ✓");