console.log("****Data Types****");
// const ve let yeni gelmişken  var eskiden beri vardır
const fs= "Cohort 13";
console.log(fs);
const sayi=20;
console.log(sayi);
console.log(typeof sayi);
const sayi1="33"
console.log(sayi1);
console.log(typeof sayi1);
// sayi=55; Assigment to constant variable

//const pi;  Missibg intializer in const
// pi=3.14;
const s1="hello"
const s2=" FS13"
console.log(s1+s2); //String Concationation
// js default olarak + operatöründe eğer değişkenlerden en az birisi string ise bunları birbirine ekler.(Toplama yapmaz).
const n1="5";
const n2="8";
console.log(n1+n2); //String Concationation

// let istenildiğinde değeri değiştirilebeilir.const sadece kendi bloğunda kullanılırken let dışarıda da kullanılabilir.Aynı scope içerisnde yeniden değişken tanımlanamaz.
let dil="Java Script"
console.log(dil);
dil="Java"
console.log(dil);

dil=true;
console.log(dil, typeof dil);

dil=3.14;
console.log(dil, typeof dil);

let cohort;
console.log(cohort); // undefined(tanimsiz,türü yok)

cohort=3;
console.log(typeof cohort); // number

// let cohort="FS13"; aynı isimle tanımlayamazsın
let num1=25;
let num2=3;
let result=num1+num2;
console.log(result++);// constta böyle yapamıyoruz
console.log(++result);


count=55; // js ilk kez görmüş oldugu countu değişken olarak tanımladı.(Varla yapılmış gibi oldu)
console.log(count);
count=22;
console.log(count, typeof count);
// var ile bir değişken tanımlandığında let de olduğu gibi sonradan değiştirilebilir
// sadece tanımlandıüı block içerisinde geçerlidir.
// var globala değişkenler gibidir.
//let ve const ile tanımlanan değişkenler block-scope'dur
var x=11;
console.log(x, typeof x);
// BİR blok oluşturduk.blok denilince if-else
// switch-case, fonksiyon vb. yapilarin ic alanı dusunulebilir
{
    // Burasi local bir alandir
    let a=2;
    const b=3;
    console.log(a,b);
}
// a ve b bu alanda tanimli degildir.
// console.log(a,b);

{
    var c=99;
    console.log(c);
}
console.log(c); // var ile tanımlanan degisken dışarıda da çalışır.(global)
var varNumber=1;
let  letNumber=2;
{
    var varNumber=11;
     letNumber=22;
}
console.log(varNumber, letNumber);
console.log("**********");
var varNumber1=3;
let letNumber1=4;
{
    var varNumber1=33;
    let letNumber1=44;
    console.log(letNumber1);
}
console.log(varNumber1,letNumber1);
