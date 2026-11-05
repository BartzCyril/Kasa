# Kasa — application de location de logements en React

> Refonte en React du site de location entre particuliers Kasa : liste des logements, fiche détaillée avec carrousel, page « À propos » et page d'erreur.

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

**👉 Voir le site : [bartzcyril.github.io/Kasa](https://bartzcyril.github.io/Kasa/)**

## Sujet

Projet de formation OpenClassrooms. Kasa, acteur de la location d'appartements entre particuliers, migre son site codé en ASP.NET il y a plus de 10 ans vers une stack JavaScript. Mission : développer le front-end en React à partir des maquettes Figma, les données des logements étant fournies dans un fichier JSON.

## Fonctionnalités

- Page d'accueil avec la liste des logements sous forme de cartes
- Fiche logement : **carrousel** d'images (navigation circulaire, compteur d'images, flèches masquées s'il n'y a qu'une image), tags, note en étoiles, hôte, description et équipements
- **Menus déroulants** (collapse) réutilisés sur la fiche logement et la page « À propos »
- **Page 404** pour toute URL inconnue ou identifiant de logement invalide
- Mise en page responsive

## Compétences acquises

- **React** : composants fonctionnels réutilisables, props, `useState`, `useEffect`
- **TypeScript** : typage des données de logement et des props
- **React Router** : routes, paramètres d'URL, page d'erreur
- **Intégration** fidèle d'une maquette Figma en responsive
- **ESLint** pour la qualité du code
- **Déploiement continu** sur GitHub Pages avec GitHub Actions

## Lancer le projet en local

```bash
npm install
npm run dev       # http://localhost:5173/Kasa/
npm run build
```

## Site

[Site Kasa](https://bartzcyril.github.io/Kasa/)

## Maquette

[Maquette Figma](https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&mode=design&t=P002zs9LzZBd3G8C-0)
