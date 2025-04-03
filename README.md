# ZA.NAILS

## 1. 📋 Présentation du projet

ZA.NAILS est une plateforme dédiée à la réservation de services de manucure et à la gestion des rendez-vous pour les professionnels du secteur. Elle permet aux utilisateurs de découvrir des prestations, réserver des créneaux et gérer leurs rendez-vous en ligne.

Le site sera initialement disponible en français, avec une version anglophone prévue dans les 6 mois à venir.

### 1.1 Fonctionnalités principales

- **Utilisateurs** : Consultation des prestations, réservation de créneaux, gestion des rendez-vous.
- **Administrateurs** : Gestion des prestations, suivi des réservations, supervision de l'expérience utilisateur.

## 2. 🚀 Installation et configuration

### 2.1 Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (v23 ou supérieur)
- [Docker](https://www.docker.com/) et [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)
- [WSL 2](https://learn.microsoft.com/fr-fr/windows/wsl/install) (pour les utilisateurs Windows)
- [Visual Studio Code](https://code.visualstudio.com/) (éditeur recommandé)
- [GitHub CLI](https://cli.github.com/) (pour interagir avec GitHub depuis la ligne de commande)
- **PowerShell** (pour les utilisateurs Windows) : Recommandé comme terminal pour une meilleure intégration avec Ubuntu (WSL). Téléchargez-le depuis [PowerShell](https://github.com/PowerShell/PowerShell).

### 2.2 Installation des outils

1. **Installer Node.js**
   - Téléchargez et installez Node.js depuis [nodejs.org](https://nodejs.org/).
   - Vérifiez l'installation :
     ```bash
     node -v
     npm -v
     ```

2. **Installer Docker et Docker Compose**
   - Suivez les instructions officielles pour [Docker Desktop](https://www.docker.com/products/docker-desktop/).
   - Vérifiez l'installation :
     ```bash
     docker --version
     docker compose version
     ```

3. **Configurer WSL 2 (Windows uniquement)**
   - Installez WSL 2 en suivant [ce guide](https://learn.microsoft.com/fr-fr/windows/wsl/install).
   - Configurez Docker pour utiliser WSL 2 comme backend.

4. **Installer Git**
   - Pour les utilisateurs Windows, installez Git directement dans WSL :
     ```bash
     sudo apt update
     sudo apt install git
     ```
   - Configurez votre identité Git :
     ```bash
     git config --global user.name "Votre Nom"
     git config --global user.email "votre.email@example.com"
     ```

5. **Installer GitHub CLI**
   - Pour les utilisateurs Windows, installez GitHub CLI directement dans WSL :
     ```bash
     sudo apt install gh
     ```
   - Connectez-vous à votre compte GitHub :
     ```bash
     gh auth login
     ```

6. **Installer Visual Studio Code**
   - Téléchargez et installez VS Code depuis [code.visualstudio.com](https://code.visualstudio.com/).
   - Installez les extensions recommandées :
     - Docker
     - ESLint
     - Prettier
     - GitLens

### 2.3 Étapes d'installation

1. **Cloner le dépôt**
   ```bash
   git clone <url-du-dépôt>
   cd za.nails
   ```

2. **Configuration de l'environnement avec Docker**
   ```bash
   docker compose -f docker-compose.dev.yaml up -d
   ```

3. **Configuration du serveur (backend)**
   - Accédez au conteneur backend :
     ```bash
     docker exec -it za-nails-server-1 bash
     cd /app
     npm install
     npm run dev
     ```

4. **Configuration du client (frontend)**
   - Accédez au conteneur frontend :
     ```bash
     docker exec -it za-nails-client-1 bash
     cd /app
     npm install
     npm run dev
     ```

## 3. 📜 Documentation et configuration

### 3.1 Documentation des scripts

#### 3.1.1 Scripts disponibles dans le backend (`server/package.json`)
- **`npm run dev`** : Lance le serveur en mode développement.
- **`npm run start`** : Lance le serveur en mode production.

#### 3.1.2 Scripts disponibles dans le frontend (`client/package.json`)
- **`npm run dev`** : Lance le serveur de développement Vite pour le frontend.
- **`npm run build`** : Compile le code TypeScript et génère une version optimisée pour la production.

### 3.2 Explication des fichiers `.env`

#### 3.2.1 `.env.dev` (mode développement)
- Exemple pour le backend :
  ```bash
  NODE_ENV=dev
  PORT=3000
  MYSQL_HOST=mysql
  MYSQL_USER=root
  MYSQL_PASSWORD=root
  MYSQL_DATABASE=za_nails_dev
  ```
- Exemple pour le frontend :
  ```bash
  VITE_API_URL=http://localhost:3000
  ```

#### 3.2.2 `.env` (mode production)
- Contient des valeurs similaires à `.env.dev`, mais adaptées à un environnement de production.

## 4. 🏗️ Architecture du projet

### 4.1 Structure des dossiers

```
ZA.NAILS/
├── code/
│   ├── client/            # Frontend React + TypeScript + Vite
│   └── server/            # Backend Express + TypeScript
├── docker-compose.dev.yaml  # Configuration Docker pour le développement
└── ...
```

### 4.2 Technologies utilisées

#### 4.2.1 Frontend
- React 18
- TypeScript
- Vite

#### 4.2.2 Backend
- Node.js
- Express
- TypeScript
- MySQL

## 5. 🔧 Utilisation

### 5.1 Démarrage des services

```bash
docker compose -f docker-compose.dev.yaml up -d
docker compose -f docker-compose.dev.yaml down
```

### 5.2 Accès aux applications

- **Frontend** : http://localhost:5173
- **API Backend** : http://localhost:3000
- **MySQL** : localhost:3306 (user: root, password: root)

## 6. 📝 Contribution

Pour contribuer au projet, veuillez suivre les étapes suivantes :

1. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nom-de-la-fonctionnalité`)
2. Commiter vos changements (`git commit -m 'Ajout de fonctionnalité X'`)
3. Pousser la branche (`git push origin feature/nom-de-la-fonctionnalité`)
4. Ouvrir une Pull Request
