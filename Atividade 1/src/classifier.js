function classifier(personName, personAge) {
  let person = {};
  person.name = personName;
  person.age = personAge;

  if (person.age < 0 || person.age >= 110) {
    throw "Idade inválida";
  }

  let type = "";

  if (person.age <= 11) {
    type = "criança";
  } else if (person.age <= 18) {
    type = "adolescente";
  } else if (person.age <= 59) {
    type = "adulto";
  } else {
    type = "idoso";
  };

	return `${person.name} é ${type}`; 
}

module.exports = classifier;