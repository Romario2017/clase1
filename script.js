/*
var a= [];
var cad = "";
for(var j = 0; j < 4;j++){
    //console.log()}
cad = cad + "1"
a[j] = cad;
}
console.log(a);

var a = [];
var num = -1;
var cad = "";
for(var j = 0;j < 4; j++){


num = num + 2
cad = cad + num;
a[j] = cad;
cad = "";
}

int z;
        for(int i=0;i<arreglo.length;i++)
        {
            for(int j=0;j<arreglo[i].length;j++)
            {
                z=(int)(Math.random()*100+1);
                if(z%2==0)
                {
                    // valor par
                    arreglo[0][j]=z;
                }else{
                    // valor impar
                    arreglo[1][j]=z;
                }
            }
        }
    }
*/
/*var a = [];

var b = -1;
for(var j = 0; j < 4;j++){
    
b= b + 2
a[j] = b;
}
console.log(a)*/

var a = [];

var b = -1;
for(var j = 0; j < 4;j++){
    if(j%2 != 0){
        b = b + 2
    }
    a[j] = b
}
console.log(a)