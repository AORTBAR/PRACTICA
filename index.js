window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("boton").addEventListener('click', (event)=> {
        const num=parseInt(document.getElementById("numero").value);
        if (num >=0 && num <=9) {
            document.querySelector("span").innerHTML="ok";
            let tr="";

            for (let i=0; i<=10; i++) {
                tr+=`<tr><td>${i}</td><td>*</td><td>${num}</td><td>=</td><td>${i*num}</td></tr>`;
            }


            document.querySelector("table").innerHTML=tr;
        } else {
            document.querySelector("span").innerHTML="error";
            document.querySelector("table").innerHTML="";
        }

    });  
});
