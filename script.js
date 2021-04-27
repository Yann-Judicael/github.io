let myButton = document.querySelector('button');
let myH2 = document.querySelector('h2');

function demanderNom()
{
    let nom = prompt("Saisissez votre nom");
    localStorage.setItem('nom',nom);
}

function changerNom()
{
    localStorage.clear();
    if(!localStorage.getItem('nom')){
        demanderNom();
        chName();
    }else{
        chName();
    }


    function chName()
    {
        myH2.textContent = localStorage.getItem('nom');
        
        alert("Nom changer avec succes");
    }
}

myButton.addEventListener('click',function(){
    changerNom();
})