import { Component } from '@angular/core';
import { Taylor } from './taylor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Serie taylor';
 result1: number;
 result2: number;
 result3: number;
 result4: number;
 div: number;
 total: number;
 bernoulli: number[] = [1,-1/2,1/6,0,-1/30,0,1/42,0,-1/30,0,5/66,0,-691/2730,0,7/6,0,-3617/510,0,43867/798,0,-174611/330];
 Euler: number[] = [1,0, -1,0,5,0, -61,0,1385,0, -50521,0,2702765,0,
  -199360981,0,19391512145,0, -2404879675441,0,
  370371188237525,0, -69348874393137901,0,
  15514534163557086905,0, -4087072509293123892361,0,
  1252259641403629865468285,0,
  -441543893249023104553682821];
 taylor: Taylor = {
    n: null,
    x: null,
    resultadototal: null
};
 factorial (n){
 if (n == 0){
   return 1;
 }else if (n < 0){
   return -1;
   }else{
     return (n * this.factorial(n -1));
   }
 }
//-------------Funciones trigonometricas----------------
//SinX 
 calcularSINx(dato = this.taylor.n){ 
  if(dato < 0){
    return (this.taylor.n- 1)
  }else if (dato == 0){
    return(this.taylor.n)
  }else{
    this.result1 = Math.pow(-1, this.taylor.n)
    this.result2 = this.factorial(2* this.taylor.n) +1
    this.div = (this.result1/ this.result2)
    this.total = this.div*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
   this.taylor.resultadototal = this.total
   console.error(this.total)
   }
  }
  //COSx
  calcularCosx(dato = this.taylor.n ){
    if(dato < 0){
      return(this.taylor.n -1)
    }else if(dato == 0){
      return(this.taylor.n)
    }else{
      this.result1= Math.pow(-1, this.taylor.n)
      this.result2 = this.factorial(2 * this.taylor.n)
      this.div = this.result1 / this.result2
      this.total = this.div*(Math.pow(this.taylor.x,(2* this.taylor.n)))
      this.taylor.resultadototal = this.total
      console.error(this.total)
    }//0.04166666     
  }
  //TANx
  calcularTantx(dato = this.taylor.n){
    if(dato < 0){
      return(this.taylor.n-1)
    }else if (dato == 0){
      return(this.taylor.n)
    }else{
      if(this.taylor.x < Math.PI/2){
      this.result1 = this.bernoulli[this.taylor.n*2]*Math.pow(-4,this.taylor.n)*Math.pow(-4,this.taylor.n)-1
      this.result2 = this.factorial(2*this.taylor.n)
      this.div = this.result1/ this.result2
      this.total = this.div*Math.pow(this.taylor.x,(2*this.taylor.n)-1)
      this.taylor.resultadototal = this.total
      console.error(this.total)
      }else{
        alert("el numero x tiene que ser menor que PI/2")
      }
    }
  }
    //SecX
    CalcularSecX(dato = this.taylor.n){
      if (dato < 0){
        return(this.taylor.n -1)
      }else if (dato == 0){
        return(this.taylor.n)
      }else{
        if (this.taylor.x < Math.PI/2){
        this.result1 = Math.pow(-1,(this.taylor.n))* this.Euler[2*this.taylor.n]
        this.result2 = this.factorial(2*this.taylor.n)
        this.div = this.result1/ this.result2
        this.total = this.div * Math.pow(this.taylor.x,(2*this.taylor.n))
        this.taylor.resultadototal = this.total
        console.error(this.total)
        }else{
          alert("el numero x tiene que ser menor que PI/2")
        }
      }
  }
   //Csc
   CalcularCscX(dato = this.taylor.n){
    if (dato < 0){
      return(this.taylor.n -1)
    }else if(dato == 0){
      return(this.taylor.n)
    }else{
      if(0 < this.taylor.x &&  this.taylor.x < Math.PI){
      this.result1 = ((Math.pow(2,(2*this.taylor.n-1))-1)*2)*this.bernoulli[this.taylor.n] * Math.pow(this.taylor.x,(2*this.taylor.n)-1)
      this.result2 = this.factorial(2*this.taylor.n)
      this.div = this.result1/ this.result2  
      this.taylor.resultadototal = this.div
      console.error(this.div)
      }else{
        alert("el numero tiene que ser menor que cero y menor que PI")
      }
    }
  }
  //ArcSinX
calcularArcSinX(dato = this.taylor.n){
  if(dato < 0){
    return (this.taylor.n-1)
  }else if(dato == 0){
    return(this.taylor.n)
  }else{
    if(this.taylor.x < 1){
    this.result1 = this.factorial(2 * this.taylor.n)
    this.result2 = Math.pow(4, this.taylor.n) * this.factorial(Math.pow(this.taylor.n, 2))*(2*this.taylor.n + 1)
    this.div = this.result1/ this.result2
    this.total = this.div*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
    this.taylor.resultadototal = this.total
    console.error(this.total)
     }else{
       alert("el numero tiene que ser menor que uno")
     }
   }
  }
  //ARCTANx
  calcularArctanx(dato = this.taylor.n){
    if(dato < 0){
      return (this.taylor.n-1)
    }else if(dato == 0){
      return(this.taylor.n)
    }else{
      if(this.taylor.x < 1){
      this.result1 = Math.pow(-1, this.taylor.n)
      this.result2 = (2*this.taylor.n) +1
      this.div = this.result1/ this.result2
      this.total = this.div*Math.pow(this.taylor.x,(2*this.taylor.n)+1)
      this.taylor.resultadototal = this.total
      console.error(this.total)
      }else{
        alert("el numero tiene que ser menor que uno")
      }
    }
  }

  //--------Funciones Hiperbolicas-------------------
  //SinhX
  CalcularsinhX(dato = this.taylor.n){
    if (dato < 0){
      return(this.taylor.n -1)
    }else if(dato == 0){
      return(this.taylor.n)
    }else{
      this.result1 = 1
      this.result2 = this.factorial(2*this.taylor.n +1)
      this.div = this.result1/ this.result2
      this.total = this.div*Math.pow(this.taylor.x,(2*this.taylor.n +1))
      this.taylor.resultadototal = this.total
      console.error(this.total)
    }
  }
//coshX
  CalcularcoshX(dato = this.taylor.n){
    if (dato < 0){
      return(this.taylor.n -1)
    }else if(dato == 0){
      return(this.taylor.n)
    }else{
      this.result1 = 1
      this.result2 = this.factorial(2*this.taylor.n)
      this.div = this.result1/this.result2
      this.total = this.div*Math.pow(this.taylor.x,(2*this.taylor.n))
      this.taylor.resultadototal = this.total
      console.error(this.total)
    }
  }
  //tanhX
  CalculartanhX(dato = this.taylor.n){
    if (dato < 0){
      return(this.taylor.n -1)
    }else if (dato == 0){
      return(this.taylor.n)
    }else{
      if(this.taylor.x < Math.PI /2){
        this.result1 = this.bernoulli[2*this.taylor.n]*Math.pow(4,this.taylor.n)*Math.pow(4,this.taylor.n)-1
        this.result2 = this.factorial(2*this.taylor.n)
        this.div = this.result1 / this.result2
        this.total = this.div*(Math.pow(this.taylor.x,(2*this.taylor.n)-1))
        this.taylor.resultadototal = this.total
        console.error(this.total)
      }else{
        alert("el numero tiene que ser menor que Pi/2")
      }
    }
  }

  //sinh^-1X
  Calcularsinhx1(dato = this.taylor.n){
    if (dato < 0){
      return(this.taylor.n -1)
    }else if (dato == 0){
      return(this.taylor.n)
    }else{
      if(this.taylor.x < 1){
        this.result1 = Math.pow(-1, this.taylor.n) * this.factorial(2*this.taylor.n)
        this.result2 = Math.pow(4, this.taylor.n) * this.factorial(Math.pow(this.taylor.n,2)) * (2*this.taylor.n + 1)
        this.div = this.result1 / this.result2
        this.total = this.div*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
        this.taylor.resultadototal = this.total
        console.error(this.total)
      }else{
        alert("el numero tiene que ser menor que uno")
      }
    }
  
  }
  //tanh-1
  Calculartanh(dato = this.taylor.n){
    if(dato < 0){
      return(this.taylor.n -1)
      }else if (dato == 0){
        return(this.taylor.n)
      }else{
        if(this.taylor.x <1){
        this.result1 = 1
        this.result2 = (2*this.taylor.n)+1
        this.div = this.div*Math.pow(this.taylor.x,2*this.taylor.n)+1
        this.taylor.resultadototal = this.total
        console.error(this.total)
        
        }else{
          alert("El numero tiene que ser menor que 1")
      }
    }
  }
  //---------------------------Funcion W de Lambert-------------
  //wo
  CalcularWo(dato = this.taylor.n){
    if(dato < 0){
      return(this.taylor.n -1)
    }else if(dato == 0){
      return(this.taylor.n)
    }else{
      this.result1 = Math.pow(this.taylor.n *-1,this.taylor.n-1)
      this.result2 = this.factorial(this.taylor.n)
      this.div = this.result1 / this.result2
      this.total =this.div*Math.pow(this.taylor.x,this.taylor.n)
      this.taylor.resultadototal = this.total
      console.error(this.total)
    }
  }

  //-----------------------Funciones Exponenciales y Logaritmos Naturales-------------------------
  //e^x
  CalcularEx(dato = this.taylor.x){
    if(dato < 0){
      return(this.taylor.x -1)
    }else if(dato == 0){
      return(this.taylor.x)
    }else{
      this.result1 = Math.pow(this.taylor.x,this.taylor.n)
      this.result2 = this.factorial(this.taylor.n)
      this.div = this.result1/this.result2
      this.total = this.div
      this.taylor.resultadototal = this.total
      console.error(this.total)

        }
      }
  //ln(1+x)    
  Calcularln1X(dato = this.taylor.n){
    if(dato<0){
      return(this.taylor.n -1)
    }else if (dato == 0){
      return(this.taylor.x)
    }else{
      if(this.taylor.x < 1){
      this.result1 = Math.pow(-1,this.taylor.n + 1)
      this.result2 = this.taylor.n
      this.div = this.result1/this.result2
      this.total = this.div * Math.pow(this.taylor.x,this.taylor.n)
      this.taylor.resultadototal = this.total
      console.error(this.total)
      }else{
        alert("el numero tiene que ser menor que uno")
      }
    }
  }
  //ln(X)
  calcularIn(dato = this.taylor.n){
    if(dato < 0){
      return(this.taylor.n-1)
    }else if(dato == 0){
      return(this.taylor.n)
    }else{
      this.result1 = 1
      this.result2 = (2*this.taylor.n +1)
      this.result3 = Math.pow(this.taylor.x -1 / this.taylor.x +1,2*this.taylor.n+1)
      this.div = this.result1/this.result2 * this.result3
      this.total = this.div *2
      this.taylor.resultadototal = this.total
      console.error(this.total)
    }
  }

  //Serie geometrica
  calcularS2(dato = this.taylor.n){
    if(dato < 0){
      return(this.taylor.n-1)
    }else if(dato == 0){
      return(this.taylor.n)
    }else{
      if(this.taylor.x < 1){
      this.result1 = 1
      this.result2 = 1 - this.taylor.x
      this.div = this.result1/this.result2
      this.total= this.div * Math.pow(this.taylor.x,this.taylor.n)
      this.taylor.resultadototal = this.total
      console.error(this.total)
      }else{
        alert("el numero tiene que ser menor que uno")
      }
  }
}

}


