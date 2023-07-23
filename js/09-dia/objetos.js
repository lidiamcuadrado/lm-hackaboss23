//Objetos
const nombre = "Julio";
const edad = 22;

const persona = {
  nombre: "Juan Pérez",
  edad: 33,
  activo: true,
  saludar: function () {
    // ¿Por qué utilizar una función sin nombre? Una función tiene nombre para llamarla y ejecutarla cuando me sirva. Si no tiene nombre, no puedo llamarla en cualquier momento, así que solo se puede ejecutar una vez. En este caso, a través del key 'saludar' tambiénm podemos llegar a ejecutar la función, y por eso no necesita nombre (sería saludar: function saludar(){}
    console.log(`Soy ${this.nombre} y tengo ${this.edad} años.`);
    //.this es una palabra reservada que hace referencia al lugar donde estoy trabajando, al objeto específico. Así, no saca l nombre de ningún otro contexto, sino del mismo objeto
  },
};

persona["saludar"]();
persona.saludar();
