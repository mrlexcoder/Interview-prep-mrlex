

class a{
    speak(){
        console.log("alx speaking");
    }
}

class B extends a{
    speak(){
        super.speak();
        console.log("class b speaks");
    }
}


const ab = new B;
console.log(ab.speak())
