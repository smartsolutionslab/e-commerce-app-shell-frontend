# E-Commerce App Shell Frontend

Main application shell for the E-Commerce micro-frontend platform using Angular and Module Federation.

## Features

- Module Federation Host
- Authentication & Authorization
- Navigation & Layout
- Micro-Frontend Integration
- State Management (NgRx)
- Tailwind CSS Design System

## Micro-Frontends

- Customer Management (`/customers`)
- Product Catalog (`/products`)
- Order Management (`/orders`)
- Dashboard (`/dashboard`)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Architecture

The app shell loads micro-frontends dynamically using Module Federation and manages shared state, authentication, and navigation.
