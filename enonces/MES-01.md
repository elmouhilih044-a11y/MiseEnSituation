# MES 1 — Autoriser et enregistrer un équipement

**Durée : 20 minutes, environnement déjà prêt.**

## Situation

Un centre de formation souhaite ajouter du matériel à son catalogue. Seul un administrateur peut effectuer cette opération. Un membre doit être refusé et une demande incorrecte ne doit créer aucun équipement.

Vous complétez les parties manquantes du parcours de création : réception de la demande, contrôle du rôle, réponse et traitement métier. Les zones de travail sont repérées dans le code.

La vérification de l'identité, la validation des informations, l'enregistrement en base et le traitement des doublons sont déjà préparés.

## Exemple à traiter

| Information reçue | Valeur |
| --- | --- |
| Code d'inventaire | lap-099, avec des espaces avant et après |
| Nom | Portable demo, avec des espaces avant et après |
| Catégorie | Ordinateur portable |
| Tarif journalier de retard | 1 000 centimes |

Après enregistrement, le code doit être **LAP-099**, le nom **Portable demo** et l'équipement doit être **non archivé**.

## Travail demandé

### 1. Comprendre le parcours — 3 minutes

Repérer les quatre fichiers à compléter. Lire les indications présentes dans les zones de travail, sans réécrire les traitements déjà fournis.

### 2. Contrôler le rôle — 3 minutes

Dans le [fichier de contrôle du rôle](../src/middlewares/require-role.js), autoriser la poursuite uniquement si le rôle de la personne fait partie des rôles acceptés. Sinon, refuser l'accès.

L'identité de la personne a déjà été vérifiée avant cette étape.

### 3. Relier les étapes — 3 minutes

Dans le [fichier de routage](../src/routes/equipment.routes.js), organiser le traitement dans cet ordre :

1. Vérifier l'identité.
2. Vérifier le droit d'accès administrateur.
3. Vérifier les informations reçues.
4. Confier la demande au contrôleur.

Les traitements à relier et les indications nécessaires sont présents dans le fichier.

### 4. Produire la réponse — 3 minutes

Dans le [contrôleur](../src/controllers/equipment.controller.js), transmettre les informations validées au service, attendre l'enregistrement puis retourner l'équipement créé avec le statut **201**.

Le contrôleur ne doit pas appliquer les règles de nettoyage ou accéder directement à la base.

### 5. Préparer l'enregistrement — 4 minutes

Dans le [service de création](../src/services/equipment.service.js) :

- retirer les espaces au début et à la fin du code et du nom ;
- mettre le code d'inventaire en majuscules ;
- conserver la catégorie et le tarif validés ;
- imposer un équipement non archivé ;
- enregistrer ces informations avec le traitement fourni et retourner le résultat.

Conserver la gestion des erreurs déjà écrite, notamment celle d'un code d'inventaire déjà utilisé.

### 6. Vérifier — 4 minutes

```sh
npm run test:mes1
```

| Situation | Résultat attendu |
| --- | --- |
| Personne non authentifiée | Refus : 401 |
| Membre connecté | Refus : 403 |
| Administrateur et informations valides | Création : 201, avec les informations nettoyées |
| Tarif négatif | Refus : 400, aucun enregistrement |
| Code d'inventaire déjà utilisé | Conflit : 409 |


## Rendu et évaluation

Quatre fichiers complétés. Routage : 4 points ; autorisation : 4 points ; contrôleur : 4 points ; service : 6 points ; vérification et explication : 2 points. **Total : 20 points.**

Aucune autre fonctionnalité ni nouveau test à écrire pour cet exercice.
