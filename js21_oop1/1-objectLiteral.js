//* ========================================
//*                (OOPS)
//* =========================================

//* Object Literals
console.log("**** Object Literals ****");

const book1={
    title:"The Karamazov Brothers",
    author:"Dostoevski",
    year:1886,
    getSummary:function(){
        return   `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book1);
console.log(book1.getSummary())
console.log(book1.hasOwnProperty("year"))

const book2 = {
  title: "The Lily of Valley",
  author: "Balzac",
  year: 1842,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book2.getSummary())
