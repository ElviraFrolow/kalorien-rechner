// Grundumsatz bei Männern (Kalorien je Tag)
// 664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
// Grundumsatz bei Frauen (Kalorien je Tag)
// 655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

console.log("Test");

function calcValue(event) {
  event.preventDefault();

  // Inputfeld Usereingabe Körpergröße
  const userInputHeight = Number(document.getElementById("height").value);

  // Inputfeld Usereingabe Alter
  const userInputAge = Number(document.getElementById("age").value);

  // Inputfeld Usereingabe Alter
  const userInputWeight = Number(document.getElementById("weight").value);

  // Inputfeld Usereingabe Körperbau
  const userInputRadioFemale = document.getElementById("female").checked;
  const userInputRadioMale = document.getElementById("male").checked;

  // Berechnung Frauen Grundumsatz
  const kcalFrauenGrundumsatz =
    655.1 + 9.6 * userInputWeight + 1.8 * userInputHeight - 4.7 * userInputAge;
  const kjFrauenGrundumsatz = kcalFrauenGrundumsatz * 4.184;

  // Berechnung Männer Grundumsatz
  const kcalMännerGrundumsatz =
    664.7 + 13.7 * userInputWeight + 5 * userInputHeight - 6.8 * userInputAge;
  const kjMännerGrundumsatz = kcalMännerGrundumsatz * 4.184;

  // Berechnung Frauen Gesamtumsatz
  const kcalFrauenGesamtumsatz =
    Number(document.getElementById("activities").value) * kcalFrauenGrundumsatz;
  const kjFrauenGesamtumsatz =
    Number(document.getElementById("activities").value) * kjFrauenGrundumsatz;

  // Berechnung Männer Gesamtumsatz
  const kcalMännerGesamtumsatz =
    Number(document.getElementById("activities").value) * kcalMännerGrundumsatz;
  const kjMännerGesamtumsatz =
    Number(document.getElementById("activities").value) * kjMännerGrundumsatz;

  // Output Berechnung Grundumsatz
  const outputKcalGrundumsatz = document.getElementById(
    "output-kcal-grundumsatz"
  );
  const outputKjGrundumsatz = document.getElementById("output-kj-grundumsatz");

  // Output Berechnung Gesamtumsatz
  const outputKcalGesamtumsatz = document.getElementById(
    "output-kcal-gesamtumsatz"
  );
  const outputKjGesamtumsatz = document.getElementById(
    "output-kj-gesamtumsatz"
  );

  if (userInputRadioFemale) {
    outputKcalGrundumsatz.innerHTML = kcalFrauenGrundumsatz.toFixed(3);
    outputKjGrundumsatz.innerHTML = kjFrauenGrundumsatz.toFixed(3);
    outputKcalGesamtumsatz.innerHTML = kcalFrauenGesamtumsatz.toFixed(3);
    outputKjGesamtumsatz.innerHTML = kjFrauenGesamtumsatz.toFixed(3);
  } else if (userInputRadioMale) {
    outputKcalGrundumsatz.innerHTML = kcalMännerGrundumsatz.toFixed(3);
    outputKjGrundumsatz.innerHTML = kjMännerGrundumsatz.toFixed(3);
    outputKcalGesamtumsatz.innerHTML = kcalMännerGesamtumsatz.toFixed(3);
    outputKjGesamtumsatz.innerHTML = kjMännerGesamtumsatz.toFixed(3);
  }
}
