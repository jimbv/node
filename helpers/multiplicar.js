const fs = require('fs')
var colors = require('colors')

const crearArchivo = async(base = 5, hasta=10, listar=false) => {
    try{ 
        console.log(colors.green('========================='))
        console.log(`      TABLA DEL ${base}`.red)
        console.log(colors.green('========================='))
            
        let salida = ''
        let consola = ''

        for (let i = 1; i <= hasta; i++) { 
            salida += colors.blue(`${base} x ${ i} = ${ base*i } \n`)
            consola += `${base} x ${ i} = ${ base*i } \n`
        
        }

        if(listar==true){
            console.log(salida)
        }

        fs.writeFileSync(`./salida/tabla_${base}.txt`,consola);
        return `tabla_${base}.txt `;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}