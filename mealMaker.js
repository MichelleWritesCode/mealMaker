let menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
      get appetizers() {
        return this._courses.appetizers;
      },
      get mains() {
        return this._courses.mains;
      },
      get desserts() {
        return this._courses.desserts;
      },
      set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
      },
      set mains(mains) {
        this._courses.mains = mains;
      },
      set desserts(desserts) {
        this._courses.desserts = desserts;
      },
      get courses() {
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts,
        };
      },
      addDishToCourse(courseName, dishName, dishPrice) {
          let dish = {
          name: dishName,
          price: dishPrice,
        };
          return this._courses[courseName].push(dish);
      },
      getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
      },
      generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let totalPriceMeal = appetizer.price + main.price + dessert.price;
        return `This is your meal: ${appetizer.name}, ${main.name} and ${dessert.name} with a total price of € ${totalPriceMeal}. Enjoy!`;
      },
  
  };
  
      menu.addDishToCourse('appetizers', 'Carpaccio', 8.75);
      menu.addDishToCourse('appetizers', 'Tomato Soup', 5.50);
      menu.addDishToCourse('appetizers', 'Prawn Cocktail', 9.25);
     
      menu.addDishToCourse('mains', 'Pulled Pork Burger', 13.25);
      menu.addDishToCourse('mains', 'Sparerib', 17.50);
      menu.addDishToCourse('mains', 'Risotto', 15.75);
      
      menu.addDishToCourse('desserts', 'Dame Blanche', 5.25);
      menu.addDishToCourse('desserts', 'Lemon Cake', 6.50);
      menu.addDishToCourse('desserts', 'Fruit Cocktail', 6.25);
  
      let meal = menu.generateRandomMeal();
  
      console.log(meal);
  