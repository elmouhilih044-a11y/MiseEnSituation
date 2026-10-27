# MES 2 — Analyser les prêts rendus

**Durée : 20 minutes, base et données déjà prêtes.**

## Situation — 3 minutes de lecture

Le responsable du matériel souhaite savoir, pour chaque catégorie, **combien de prêts ont été rendus** et **combien de jours ils ont duré en moyenne**.

Les prêts et les équipements sont enregistrés séparément. Chaque prêt indique le matériel concerné, son état et sa durée. L'équipement indique sa catégorie et s'il est archivé.

Le lien entre ces deux sources est déjà préparé. L'accès au rapport est réservé à l'administrateur.

## Travail demandé

Compléter uniquement le [fichier de préparation du rapport](../src/analytics/returned-loans.pipeline.js). Les zones à compléter y sont repérées. Le rapprochement des données et le tri final sont fournis.

### 1. Sélectionner les données — 4 minutes

Conserver uniquement les prêts rendus. Exclure les prêts encore en cours et les prêts annulés.

Après avoir retrouvé le matériel concerné, exclure également les équipements archivés.

### 2. Regrouper et calculer — 5 minutes

Regrouper les prêts retenus par catégorie de matériel. Pour chaque catégorie, calculer :

- le nombre de prêts rendus ;
- leur durée moyenne en jours.

On compte les prêts, pas le nombre d'équipements distincts. Les durées sont déjà renseignées dans les données fournies : aucun calcul entre des dates n'est demandé.

### 3. Préparer le résultat — 4 minutes

Le rapport doit présenter uniquement la catégorie, le nombre de prêts rendus et la œ à deux décimales.

Ne pas afficher les informations internes utilisées pour le regroupement. Le classement alphabétique des catégories est déjà préparé.

Tous les calculs doivent être réalisés par MongoDB, sans récupérer les documents pour effectuer les statistiques dans l'application.
 // Echeance 2027-01-10T10:00:00Z, retour 2027-01-12T11:00:00Z.
  // Tarif 1000 centimes : verifier lateDays=3 et totalFeeCents=3000.
### 4. Vérifier — 4 minutes

```sh
npm run test:mes2
```

## Données de contrôle

| Matériel | Situation du prêt | Durée | À inclure ? |
| --- | --- | --- | --- |
| Portable 1 | Rendu | 3 jours | Oui |
| Portable 2 | Rendu | 5 jours | Oui |
| Caméra | Rendu | 2 jours | Oui |
| Portable 1 | En cours | Non renseignée | Non |
| Caméra | Annulé | Non renseignée | Non |
| Ancien portable archivé | Rendu | 30 jours | Non |

Résultat attendu :

| Catégorie | Prêts rendus | Durée moyenne |
| --- | --- | --- |
| Caméra | 1 | 2 jours |
| Ordinateur portable | 2 | 4 jours |

Les catégories conservent les codes prévus dans les données du projet. Une catégorie sans prêt rendu n'apparaît pas. Si aucun prêt ne remplit les conditions, le rapport est vide.


## Rendu et évaluation

Un seul fichier à compléter. Filtres : 5 points ; compréhension du lien entre les données : 3 points ; compteur et moyenne : 6 points ; présentation du résultat : 4 points ; vérification et explication : 2 points. **Total : 20 points.**
