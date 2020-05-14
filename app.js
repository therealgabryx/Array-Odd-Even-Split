//Funzione che crea un vettore di n elementi random
function Vettore() 
{
    //Dimensione del vettore
    var n = parseInt(prompt("Inserisci la dimensione del vettore"),0);
    //Dichiarazione del vettore
    var vett=[];
    //For che riempie il vettore di numeri casuali
    for(let i= 0; i<n;i++)
    {
        //Math.floor è usata per arrotondare il numero e Math.random per generarlo
        vett[i]=Math.floor(Math.random()*1000);
    }
    //Stampa del vettore inserito
    document.write("Vettore inserito: " + vett);
    //Inserisco in una variabile mat il risultato della funzione Matrice()
    var mat = Matrice(vett);
    //Stampa della prima riga della matrice che contiene tutti i numeri pari
    document.write("<br>Elementi pari: " + mat[0]);
    //Stampa della seconda riga della matrice che contiene tutti i numeri dispari
    document.write("<br>Elementi dispari: " + mat[1]);
}

//Funzione che crea una matrice composta da 2 vettori 
//(nel primo inseriamo tutti i numeri pari, nel secondo i numeri dispari)
function Matrice(vett) 
{
    //Dichiarazione dei 2 vettori pari e dispari
    var pari=[];
    var dispari=[];
    //For che tramite un controllo inserisce nel vettore pari i numeri pari, in quello dispari quelli dispari
    for(let i = 0;i<vett.length;i++)
    {
        if(vett[i]%2==0)
        {
            pari.push(vett[i]);
        }
        else
        {
            dispari.push(vett[i]);
        }
    }
    //Dichiaro e inizializzo la matrice mat composta dai 2 vettori pari e dispari
    var mat = [pari,dispari];
    //Il valore di ritorno sarà l'intera matrice
    return mat;
}