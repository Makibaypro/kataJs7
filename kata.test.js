import { objets } from "./donnees.js"
import {
  listerLibelles,
  filtrerParStatut,
  trouverParId,
  poidsTotal,
  compterParStatut,
  trierParPrix,
} from "./kata.js"

/* ═══════════════════════════════════════════════════════════
   Ces tests décrivent ce que tes fonctions doivent faire.
   Lis-les : ils sont plus précis que n'importe quelle consigne.
   Ne les modifie pas.
   ═══════════════════════════════════════════════════════════ */

describe("1 — listerLibelles", () => {
  test("renvoie autant de libellés que d'objets", () => {
    expect(listerLibelles(objets)).toHaveLength(10)
  })

  test("renvoie les libellés dans l'ordre", () => {
    expect(listerLibelles(objets).slice(0, 3)).toEqual([
      "Vélo de ville",
      "Grille-pain",
      "Fauteuil en rotin",
    ])
  })

  test("renvoie un tableau vide si on ne lui donne aucun objet", () => {
    expect(listerLibelles([])).toEqual([])
  })
})

describe("2 — filtrerParStatut", () => {
  test("renvoie les trois objets en rayon", () => {
    expect(filtrerParStatut(objets, "en_rayon").map((o) => o.id)).toEqual([1, 3, 6])
  })

  test("renvoie les objets entiers, pas seulement leurs libellés", () => {
    expect(filtrerParStatut(objets, "recycle")[0]).toEqual({
      id: 7,
      libelle: "Grille de barbecue",
      poidsKg: 3.4,
      statut: "recycle",
      prix: 0,
    })
  })

  test("renvoie un tableau vide quand aucun objet n'a ce statut", () => {
    expect(filtrerParStatut(objets, "perdu")).toEqual([])
  })
})

describe("3 — trouverParId", () => {
  test("renvoie l'objet demandé", () => {
    expect(trouverParId(objets, 4).libelle).toBe("Perceuse")
  })

  test("renvoie null quand l'id n'existe pas", () => {
    // Attention : find() ne renvoie pas null quand il ne trouve rien.
    expect(trouverParId(objets, 99)).toBeNull()
  })
})

describe("4 — poidsTotal", () => {
  test("additionne le poids de tous les objets", () => {
    expect(poidsTotal(objets)).toBe(56.5)
  })

  test("arrondit à une décimale", () => {
    expect(poidsTotal([{ poidsKg: 1.11 }, { poidsKg: 2.22 }])).toBe(3.3)
  })

  test("renvoie 0 quand il n'y a aucun objet", () => {
    expect(poidsTotal([])).toBe(0)
  })
})

describe("Bonus A — compterParStatut", () => {
  test("compte les objets de chaque statut", () => {
    expect(compterParStatut(objets)).toEqual({
      arrive: 1,
      en_rayon: 3,
      en_reparation: 2,
      recycle: 1,
      vendu: 3,
    })
  })

  test("n'invente pas de statut absent des données", () => {
    expect(compterParStatut(objets)).not.toHaveProperty("perdu")
  })
})

describe("Bonus B — trierParPrix", () => {
  test("trie du plus cher au moins cher", () => {
    expect(trierParPrix(objets).map((o) => o.prix)).toEqual([
      85, 60, 45, 40, 30, 25, 18, 15, 12, 0,
    ])
  })

  test("ne modifie pas le tableau d'origine", () => {
    // Attention : sort() trie le tableau sur place.
    const resultat = trierParPrix(objets)
    expect(resultat).toHaveLength(10)
    expect(objets.map((o) => o.id)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
