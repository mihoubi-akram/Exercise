'use strict';

// Classe Disque pour enregistrer les éléments et leur priorités.  ****
class Disque {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
//classe Stack pour créer les trois Pilonnes x,y,z
class Pilonnes {
  constructor() {
    this.pilonne = [];
  }

  // function add pour ajouter des éléments selon leur priorité.
  add(disque) {
    if (!this.isEmpty() && this.lastE()?.prio > disque.prio) {
      console.log("can't add this élément: Priority is not respected");
      return false;
    }
    this.pilonne.push(disque);
    return true;
  }

  //Function pop supprime le dernier élément et retourne cet élément, si l'élément n'existe pas elle retourne false.
  pop() {
    return this.pilonne.pop();
  }

  //Function isEmpty returne true si la pilonne est vide.
  isEmpty() {
    return this.pilonne.length == 0;
  }

  //Function lastE retoune le dernier élément de la pilonne , retourne false si la pilonne est vide
  lastE() {
    this.isEmpty ? false : this.pilonne[this.pilonne.length - 1];
  }
  //Function displayE pour afficher les element de la pilonne.
  displayE() {
    this.pilonne.forEach(el => console.log(el));
  }
}

// fonction MoveElement pour déplacer les éléments de la pilonne x à la pilonne z.
const MoveElement = (x, y, z) => {
  //déplacer les éléments de la pilonne x vers y
  for (let i = x.pilonne.length - 1; i >= 0; i--) y.pilonne.push(x.pilonne[i]);
  //déplacer les éléments de la pilonne y vers z
  for (let i = y.pilonne.length - 1; i >= 0; i--) z.pilonne.push(y.pilonne[i]);
};

//-------PARTIE 1 -------

//création de 3 pilonnes x,y,z
let x = new Pilonnes();
let y = new Pilonnes();
let z = new Pilonnes();

//création de 3 Disques A,B,C
const a = new Disque('A', 1);
const b = new Disque('B', 2);

// Ajouter les disques A,B,C a la pilonne x.
x.add(a);
x.add(b);

//1. Déplacer le disque A,B de la colonne X à la colonne Z
MoveElement(x, y, z);

//-------PARTIE 2 -------
const c = new Disque('C', 4);
x.add(c);
MoveElement(x, y, z);

//-------PARTIE 3 -------
let x1 = new Pilonnes();
let y1 = new Pilonnes();
let z1 = new Pilonnes();

//Création de 10 Disques
let d = [];
for (let j = 0; j < 10; j++) {
  d[j] = new Disque(`D${j}`, j);
  x1.add(d[j]);
}

//Déplacer les disques de la colonne x1 vers z1.
MoveElement(x1,y1,z1);
z1.displayE();
