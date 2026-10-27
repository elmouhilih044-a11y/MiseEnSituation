# MaterialDesk — trois mises en situation de 20 minutes

Un centre de formation souhaite gérer son matériel informatique et suivre ses prêts. Ce projet propose trois exercices sur ce même thème, réalisables indépendamment.

| Exercice | Objectif | Durée |
| --- | --- | --- |
| [MES 1 — Enregistrer du matériel](enonces/MES-01.md) | Permettre à un administrateur d'ajouter un équipement, en respectant les autorisations et les règles de création. | 20 min |
| [MES 2 — Analyser les prêts](enonces/MES-02.md) | Présenter, par catégorie de matériel, le nombre de prêts rendus et leur durée moyenne. | 20 min |
| [MES 3 — Vérifier les frais de retard](enonces/MES-03.md) | Écrire deux tests : un retour en retard et un retour exactement à l'heure. | 20 min |

**Durée totale : une heure.** L'installation et la préparation des données se font avant les exercices. Le travail demandé et les fichiers à compléter sont indiqués dans chaque énoncé.

## Préparer le projet

Installer Node.js 20.19 ou supérieur, npm et Docker Compose. Une installation locale de MongoDB 7 peut également être utilisée.

Dans le dossier MES, préparer la configuration et installer les dépendances :

```sh
cp .env.example .env
npm ci
```

Dans le fichier de configuration créé, choisir une clé secrète d'au moins 24 caractères pour l'authentification. Puis démarrer la base, charger les données, générer les accès de démonstration et lancer l'application :

```sh
docker compose up -d
npm run seed
npm run tokens
npm start
```

MongoDB utilise le **port local 27018**, pour laisser le port habituel 27017 disponible. La base de démonstration s'appelle **material_mes**. Le fichier de configuration d'exemple contient déjà les paramètres nécessaires.

Si une ancienne version du projet est encore en cours d'exécution sur ce port, l'arrêter avant de lancer celle-ci.

## Données et accès fournis

Les données de départ comprennent trois comptes, cinq équipements dont un archivé, et six prêts. Leur chargement ne vide pas la base.

La commande de génération des accès fournit ceux de l'administrateur, du membre Sara et d'un compte suspendu. Copier les accès administrateur et membre dans le [fichier de requêtes](api_tests.http), aux emplacements prévus.

La vérification de l'identité, la validation des données, l'accès à la base et une partie des traitements sont déjà préparés. Chaque exercice précise ce qui reste à réaliser. Aucun système de connexion complet ni interface graphique n'est à développer.

## Lancer les vérifications

Vérifier le fonctionnement de la base du projet :

```sh
npm test
```

Lancer les vérifications de chaque exercice :

```sh
npm run test:mes1
npm run test:mes2
npm run test:mes3
```

Lancer les trois exercices ensemble :

```sh
npm run test:acceptance
```

Les vérifications du projet de départ doivent réussir. Celles des exercices échouent volontairement tant que le travail demandé n'est pas terminé.

Les deux premiers exercices utilisent une base de test temporaire, séparée des données de démonstration. Son premier démarrage peut nécessiter un téléchargement : le préparer avant la séance. Le troisième exercice fonctionne sans base de données ni application en cours d'exécution.

## Travail à rendre

Compléter uniquement les parties indiquées dans les énoncés. Les trois exercices représentent six fichiers à compléter au total. Aucun travail supplémentaire n'est demandé. Le [relevé de vérification](VALIDATION.md) présente les contrôles effectués sur le squelette.
