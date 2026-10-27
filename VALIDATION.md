# Vérification — MES de niveau intermédiaire, 20 minutes chacune

## Périmètre courant

- MES 1 : route, middleware de rôle, contrôleur et préparation métier du service à compléter. JWT, validation, repository et traitement des doublons fournis.
- MES 2 : filtres, regroupement et projection à compléter ; jointure, unwind et tri déjà écrits. Compteur et durée moyenne des prêts rendus par catégorie.
- MES 3 : deux tests unitaires à écrire, retard partiel et retour exactement à l'échéance.
- Installation et téléchargement éventuel du binaire MongoDB préparés avant le chronomètre.

## Vérifications réalisées

- Syntaxe des 31 fichiers JavaScript vérifiée avec `node --check`.
- Docker Compose validé : port local 27018 vers 27017 dans le conteneur.
- Les 3 tests du socle passent dans le dossier apprenant.
- Les 10 tests des exercices sont volontairement rouges avant résolution : cinq de parcours Express, trois d'agrégation et deux tests unitaires à compléter.
- Une copie temporaire résolue passe **13 tests sur 13**, avec Supertest et MongoDB éphémère 7.0.24.

Les six fichiers apprenant restent incomplets ; les solutions de vérification ne sont pas livrées dans leurs TODO. Les versions précédentes plus longues ou trop simplifiées ne constituent plus la référence.
