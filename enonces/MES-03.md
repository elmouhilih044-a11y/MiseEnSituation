# MES 3 — Vérifier les frais de retard

**Durée : 20 minutes. Deux tests unitaires, sans base ni serveur.**

## Situation et règle — 4 minutes

Le centre facture chaque période de **24 heures de retard commencée**. Le calcul des frais est déjà écrit dans le [service fourni](../src/services/late-fee.service.js). Vous devez vérifier son comportement sans le modifier.

Le calcul reçoit l'échéance, la date du retour et le tarif journalier en centimes. Il retourne le nombre de jours facturés et le montant total des frais.

## Travail demandé

Compléter les deux tests préparés dans le [fichier de test](../tests/mes3.unit.test.js). Remplacer les échecs provisoires par vos vérifications.

### Test A : retour en retard — 6 minutes

| Information | Valeur |
| --- | --- |
| Échéance | 10 janvier 2027 à 10 h, heure UTC |
| Retour | 12 janvier 2027 à 11 h, heure UTC |
| Tarif | 1 000 centimes par jour commencé |

Le retard est de **49 heures**. Le résultat doit être **3 jours facturés** et **3 000 centimes de frais**.

Préparer ces données, exécuter le calcul fourni puis vérifier les deux résultats. Les dates doivent être préparées dans le format attendu par le service, indiqué dans le code.

### Test B : retour exactement à l'heure — 5 minutes

Utiliser la même date pour l'échéance et le retour, avec un tarif de 1 000 centimes.

Vérifier **zéro jour de retard** et **zéro frais**. Ce deuxième test permet de détecter une facturation injustifiée à la limite exacte de l'échéance.

Dans chaque test, distinguer clairement trois étapes : **préparer les données, exécuter le calcul et vérifier le résultat**. Les valeurs attendues doivent être écrites explicitement, sans reproduire la formule du service.

## Vérifier et expliquer — 5 minutes

```sh
npm run test:mes3
```

Les deux tests doivent réussir. Pour vérifier que le premier détecte une erreur, remplacer temporairement le nombre de jours attendu par 2 : il doit alors échouer. Rétablir ensuite la bonne valeur.


Les tests doivent exécuter le vrai calcul fourni. Aucune base de données, application en cours d'exécution ou simulation du calcul n'est nécessaire. Aucun troisième test n'est demandé.

## Rendu et évaluation

Un seul fichier de test à rendre. Jeux de données : 4 points ; exécution du calcul réel : 4 points ; vérifications du cas nominal : 5 points ; vérifications du cas limite : 5 points ; lecture du résultat et explication : 2 points. **Total : 20 points.**
