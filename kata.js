/* ═══════════════════════════════════════════════════════════
   KATA JS 7 — L'inventaire de La Remise
   ───────────────────────────────────────────────────────────
   Écris le corps des fonctions ci-dessous, dans l'ordre.
   Lance `npm test` pour voir où tu en es.
   Ne modifie ni donnees.js, ni kata.test.js.
   ═══════════════════════════════════════════════════════════ */
import { objets } from "./donnees.js"

// ─── 1 ─── Renvoie un tableau contenant seulement les libellés des objets.
export function listerLibelles(objets) {
   const libelleArray = [];
   objets.map((element) => {
      libelleArray.push(element.libelle);
   })
   // objets.forEach(element => {
   //    libelleArray.push(element.libelle);
   // });
   return libelleArray;
}


// ─── 2 ─── Renvoie les objets dont le statut correspond à celui demandé.
export function filtrerParStatut(objets, statut) {
   // const objectAsked = [];

   const objectAsked = objets.filter(element => element.statut === statut )
   // objets.forEach(element => {
   //    if(element.statut == statut) {
   //       objectAsked.push(element);
         
   //    }
   // })
   return objectAsked;
}


// ─── 3 ─── Renvoie l'objet qui porte cet id.
//           S'il n'existe pas, renvoie null.
export function trouverParId(objets, id) {
   // let result = null;
   // for(let i = 0; i < objets.length ; i++){
   //    if(objets[i].id === id){
   //       result = objets[i]
   //    }
   // }
   let result = objets.find(element => element.id === id);
   return result ? result : null;
}


// ─── 4 ─── Renvoie le poids total de tous les objets, arrondi à une décimale.
export function poidsTotal(objets) {
   // let sum = 0;
   // objets.forEach(element => {
   //    sum += element.poidsKg;
   // })

   const sum = objets.reduce((acc, element) => acc + element.poidsKg, 0);

   return Math.round(sum * 10) / 10;
}


// ─── BONUS A ─── Renvoie un objet qui compte les objets par statut.
//                 Forme attendue : { en_rayon: 3, vendu: 3, ... }
export function compterParStatut(objets) {
   // const result = {};
   // objets.forEach(element => {
   //    const statut = element.statut;
   //    if(result[statut]){
   //       result[statut] += 1;
   //    } else {
   //       result[statut] = 1;
   //    }
   // })
   const result = objets.reduce((acc, element) => {
      acc[element.statut] += 1;
      return acc
   },{
      en_rayon: 0,
      vendu: 0,
      en_reparation: 0,
      arrive: 0,
      recycle: 0
   })
   return result;
}

console.log(compterParStatut(objets));


// ─── BONUS B ─── Renvoie les objets triés du plus cher au moins cher,
//                 SANS modifier le tableau d'origine.
export function trierParPrix(objets) {
   const result = [...objets];
   return result.sort((a,b) => b.prix - a.prix)
}