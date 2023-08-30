//Clase
class Person {
  //Constructor y atributos
  constructor(name, lastName, email, password) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  //metodos
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }

  getlastName() {
    return this.lastName;
  }
}
