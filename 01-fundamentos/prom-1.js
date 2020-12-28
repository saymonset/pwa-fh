sumaruno = ( numero, callback ) => {

    setTimeout(() => {

        let sum = numero + 1;
        callback(sum);
        //return sum
    }, 1000);
 
}

 sumaruno(5, (num)=>{
    console.log(num);

    sumaruno(num, (num2)=>{
        console.log(num2+'=num2');

        sumaruno(num2,(num3)=>{
            console.log(num3+'=num3');
        });
    });


});