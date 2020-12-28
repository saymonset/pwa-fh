sumaruno = ( numero ) => {

    var promesa = new Promise( (resolve, reject)=>{

        setTimeout(() => {

            let sum = numero + 1;
            resolve(sum);
         
        }, 1000);

    } );




    return promesa;
 
}

 

sumaruno(5).then((nueroNuevo)=>{
    console.log(nueroNuevo);
    return (sumaruno(nueroNuevo));
})
.then( nueroNuevo =>{
    console.log('dos = ' + nueroNuevo);
    return (sumaruno(nueroNuevo));
})
.then(nueroNuevo => {
    console.log('tres' + nueroNuevo);
})