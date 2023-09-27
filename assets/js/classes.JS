

class Phone {
    constructor(brand, model, color, price, year) {
      this._brandbrand = brand;
      this._model = model;
      this._color = color;
      this._price = price;
      this._year = year;
    }
    
    set year (value) {
        if(value > new Date().getFullYear() || value < 2000) {throw new TypeError('year must be number value')}
this._year = value
    }
get year () {
    return this._year;
}

get age () {
    return new Date().getFullYear - this._year
}    

    calcPhoneAge() {
        return new Date().getFullYear() - this._year;
       }
    }
   

    const newPhone  = new Phone('Samsung', 'SN2345','black', '25000', 2016);

    
  
    console.log(newPhone.calcPhoneAge());

   // не розумію що нетак, але не працює. Може так?
  /* set year(value){
        if (typeof value !== 'number') {
            throw new TypeError('year must be number value');
        }
if (value < 2014 || value > 2018) {
    throw new RangeError('year must be between 2014 und 2018');
}

this.year = value;
    }

    get  year() {
return this._year
    }
*/



    

    




