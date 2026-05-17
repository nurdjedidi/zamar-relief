# Zamar Web

![React Router](https://img.shields.io/badge/React%20Router-7-ca4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-animated-7c3aed?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5-2563eb?style=for-the-badge&logo=typescript&logoColor=white)

Zamar Web is the public website for the Zamar Relief initiative.

It presents the broader humanitarian project, introduces Zamar Field, and provides simple public-facing pages such as privacy and terms.

## Purpose

This app is the communication layer of the project.

It is meant to:

- explain the Zamar Relief vision clearly
- present Zamar Field as part of that ecosystem
- provide a calm, trustworthy public presence
- host essential public information pages

## Experience Direction

The site is designed to feel:

- calm
- bright
- trustworthy
- human-first
- modern without being loud

## Stack

- React Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run type checking:

```bash
npm run typecheck
```

Create a production build:

```bash
npm run build
```

Run the production server after build:

```bash
npm run start
```

## Main App Areas

Current public routes include:

- `/`: landing page
- `/privacy`: privacy page
- `/terms`: terms page

The landing page is built from separate sections and components so it can evolve without turning into one large file.

## Project Structure

- `app/routes/`: route entry files
- `app/components/landing/`: landing page sections
- `app/components/legal/`: legal page layout pieces
- `app/app.css`: global styles and design tokens
- `public/`: static assets

## Relationship To The Bigger Project

`zamar-web` is one part of the wider Zamar Relief workspace.

If you need the broader context, see:

- [../README.md](../README.md)

