// // inheritance

// class Calculator {
//   readonly firstNumber: number;
//   constructor(num1: number) {
//     this.firstNumber = num1;
//   }
// }
// class PartOfCalculator extends Calculator {
//   secondNumber: number;
//   constructor(num2: number = 4) {
//     super(7);
//     this.secondNumber = num2;
//   }

//   add() {
//     return `The sum of two Numbers is : ${
//       this.firstNumber + this.secondNumber
//     }`;
//   }

//   subtract() {
//     return `The difference of two numbers is : ${
//       this.firstNumber - this.secondNumber
//     }`;
//   }
//   multiply() {
//     return `The product of two numbers is : ${
//       this.firstNumber * this.secondNumber
//     }`;
//   }
//   divide() {
//     return `The quotient of two numbers is : ${
//       this.firstNumber / this.secondNumber
//     }`;
//   }
// }

// let c = new PartOfCalculator();

// console.log(c.add());
// console.log(c.subtract());
// console.log(c.multiply());
// console.log(c.divide());
// console.log(c.firstNumber);

// getter ans Setter

// class Practice {
//   number1: number;
//   number2: number;

//   constructor(num1: number, num2: number) {
//     this.number1 = num1 = 3;
//     this.number2 = num2 = 6;
//   }
//   get numbor() {
//     return this.number2 && this.number1;
//   }
//   set numbor(value1: number) {
//     this.number1 = value1;
//     this.number2 = value1; //setter must have only 1 parameter
//   }
// }

// const objOfPractice = new Practice(1, 2);

// console.log(objOfPractice.numbor);

//                                 GETTER AND SETTER

// class GetterSetter {
//   private _length: string = "5";
//   get length() {
//     return this._length;
//   }

//   set length(value1: string) {
//     this._length = value1;
//   }
// }
// const obj = new GetterSetter();
// console.log(obj.length); //Getter call
// obj.length = "99999"; // setter
// console.log(obj.length); // setter call

// GETTER AND SETTER

// class FavPerson{
//     private myfavPerson : string = "Hazrat Muhammad PBUH";
//     get FavPerson(){
//         return this.myfavPerson;
//     }
//     set FavPerson(hisName:string){
//         this.myfavPerson = hisName;
//     }
// }

// const objOfFavPerson : FavPerson =  new FavPerson()
// console.log(objOfFavPerson.FavPerson); // Getter Call
// objOfFavPerson.FavPerson = "The one and only The same as I Mentioned above Hazrat Muhammad SAW";
// console.log(objOfFavPerson.FavPerson); //THIS IS SETTER CALL BECAUSE WE HAVE SET THE VALUE IN ABOVE LINE....

//                                       Index Signature (interface / type of class)

// class IndexSignature {
//   [built: string]: number | ((built: string , game:string) => string) // inex signature main properties ka name kuch bhi dey saktay hain

// firstName : number = 2   ;  // zaroori nahi k jo name hm ny index signature main property ka rkha ha woh hi name neechay bhi dain

// constructor(names:string){
//      this.firstName  = "3" ;  // error because we assigned the type number in the index signature while defining the structure of our class
//      this.firstName = 3

// }

// LastName(names :string , gmaes: string ): string{
//     return names
// }
// }

// let c: IndexSignature = new IndexSignature("asad")

// console.log(c);

// console.log(c.firstName);
// console.log(c.LastName);

//                                              Interface

// interface forObject {
//   names: string;
//   age: number;
//   eligible: boolean;
//   YourWork(work: string): string;
// }

// class Sonar implements forObject {
//   age!: number; // agr ! use nahi karaingy to value idher hi initialize krna parygi
//   names!: string; // agr ! use nahi karaingy to value idher hi initialize krna parygi
//   eligible!: boolean; // agr ! use nahi karaingy to value idher hi initialize krna parygi
//   YourWork(): string {
//     return "Hey !! we have implemented interface";
//   }

//   constructor() {
//     (this.names = "Usman"), (this.age = 23), (this.eligible = true);
//   }
// }

// let ooS: Sonar = new Sonar();
// // console.log(ooS.YourWork);
// console.log(ooS.age);

// console.log(ooS.YourWork());

// hum class ko bhi implement kr sakty hain lekin jis class ko hum implement kr rahe hain us main jo kuch bhi likha hua
//hoga woh humain us class main bhi likhna hoga jis main hum ny implement kia hoga (child class) main.

// class Animal {
//   Sound!: string;
//   legs!: number;
//   loyal?: boolean;
//   Khatarnak(bites:string) : string {
//     return `Ustadd ${bites} hai `
//   }
// }

// class Dog implements Animal {
//   Sound!: string;
//   legs!: number;
//   loyal!: boolean;
//   Khatarnak(bites:string) : string {
//     return `Ustadd ${bites} hai `
//   }

//   constructor() {
//     (this.Sound = "woof"), (this.legs = 4), (this.loyal = true);
//     this.Khatarnak("kaat-ta")

//   }
// }

// let objOfAnimals: Animal = new Dog();
// console.log(objOfAnimals.Khatarnak("Kaat-ta"),objOfAnimals.Sound,objOfAnimals.legs,objOfAnimals["loyal"]);

// hum ek interface ko doosrry interface ka sath bhi extend kr sakty hain.....

// interface one {
//     name: string;
//     classes : number;
// }

// interface two extends one{
//     school: string
// }

// let a : two = {
// name : "usman",
// classes : 5,
// school : "Sun bright academy"
// }

//                  access modifiers

// class Access {
//     private name!: string; // private ko hum sirf is hi class main acces kr sakty hain.....baqi neechay ek masla lkh raha hun iska
//   uni!: string;
//   protected semester!: number;
//   #secret: string = "good boy"; // ab yeh pakka private hogaya hai "#" sy. ab is ko kisi bhi tarha access nahi kr sakty humm
// }

// class ChildAccess extends Access {
//   constructor() {
//     super();

//     this.semester = 5; // protected ko hm sirf child class main access kr sakty hain...
//     this.uni = "Virtual University Of Pakistan"; // jis k sath kuch nahi ht aus k sath by default "public" hota hai.

//     // js main jo private k sath masla hai

//     this["name"] = "Usman"; // yeh masla hai .. is tarha hum private ko access kr sakty hain.. lehaza "#" use karain private k liye. 
//   }
// }

// let objofChildAccess: ChildAccess = new ChildAccess();

// console.log(objofChildAccess["name"]);
// console.log(objofChildAccess["semester"]);
// console.log(objofChildAccess["uni"]);


