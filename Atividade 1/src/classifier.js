function classifier(personName, personAge) {
  let person = {};
  person.name = personName;
  person.age = personAge;

  if (person.age < 0 || person.age >= 110) {
    throw new Error("Idade inválida");
  }

  let type = "";

  if (person.age <= 11) {
    type = "Criança";
  } else if (person.age <= 18) {
    type = "Adolescente";
  } else if (person.age <= 59) {
    type = "Adulto";
  } else {
    type = "Idoso";
  };

	return person.name + " é " + type; 
}
