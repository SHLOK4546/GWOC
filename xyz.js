// var x=true;
// x++
// console.log(x);
// var y=10;
// let char="-";
// switch(char){
//     case "+":
//         console.log(x+y);
//         break;
//     case "-":
//         console.log(y-x); 
//         break;   
//     default:
//         console.log("no");
//         break;     
// } 

// let names=["sh","ss","tc","sc"];
// for(let i in names){
//     console.log(names[i]);
// }         

// //contructor function for objects
// function constru(naam,qu){
//     this.name=naam;
//     this.lv=qu;
// }

// let sch= new constru("shr",10);
// console.log(sch);


// class product{
//     constructor(name,price,discount){
//         this.name=name;
//         this.price=price;
//         this.discount=discount;
//     }

// }

// let pen=new product("pen",10,2);
// console.log(pen);

// class furniture extends product{
//     constructor(name,price,discount,EMI){
//         super(name,price,discount);
//         this.emi=EMI;
//         console.log(`on ${this.name} we can get emi of ${this.emi} months`);
//     }
    
    
// }
// let chair=new furniture("chair",2000,5,10);
// console.log(chair);


//operation on class and arrays

let lov=[
    {
        naam:"Sh",
        her:10,
        my:10,
    },
    {
        naam:"ss",
        her:7,
        my:6,
    },
    {
        naam:"tc",
        her:7,
        my:5,
    },
    {
        naam:"sc",
        her:8,
        my:8,
    }
]

let life=lov.filter(ch=>{
    if(ch.my>7){
    return{
        naam:ch.naam,
        her:ch.her,
        my:ch.my,
    }
}
});
console.log(life);

let ob=lov.sort((ch1,ch2)=>{
    if(ch1.my>ch2.my){
        return 1;
    }
    if(ch2.my>ch1.my){
        return -1;
    }
    return 0;
});

console.log(ob);
