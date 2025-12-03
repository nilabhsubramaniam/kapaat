# Kapaat - Admin Panel

A modern, responsive admin panel built with Angular 21 that connects to a backend API running on port 8080.

## Features

- 📊 **Dashboard** - Overview with statistics and recent activities
- 👥 **User Management** - View and manage users
- 🎨 **Modern UI** - Clean, professional design with dark sidebar
- 📱 **Responsive** - Works on desktop, tablet, and mobile devices
- 🔄 **HTTP Service** - Ready-to-use API service for backend integration
- 🚀 **Server-Side Rendering (SSR)** - Enabled for better performance

## Project Structure

```
kapaat/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/      # Dashboard with stats & recent activities
│   │   │   ├── layout/         # Main layout with sidebar & topbar
│   │   │   └── users/          # User management component
│   │   ├── services/
│   │   │   └── api.service.ts  # HTTP service for backend API calls
│   │   ├── app.config.ts       # App configuration with HttpClient
│   │   ├── app.routes.ts       # Route definitions
│   │   ├── app.ts              # Root component
│   │   └── app.html            # Root template
│   ├── environments/
│   │   ├── environment.ts               # Development environment config
│   │   └── environment.development.ts   # Development environment config
│   └── styles.scss             # Global styles
├── angular.json                # Angular CLI configuration
├── package.json                # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v10 or later)

### Installation

1. Clone the repository and navigate to the project directory:
```bash
cd kapaat
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Start the development server:

```bash
npm start
```

Or:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change source files.

## Backend Configuration

The application is configured to connect to a backend API at `http://localhost:8080/api`.

To change the API URL, update the `apiUrl` in:
- `src/environments/environment.ts`
- `src/environments/environment.development.ts`

## API Service Usage

The `ApiService` provides generic HTTP methods for communicating with your backend:

```typescript
import { ApiService } from './services/api.service';

constructor(private api: ApiService) {}

// GET request
this.api.get<User[]>('users').subscribe(users => {
  console.log(users);
});

// POST request
this.api.post<User>('users', { name: 'John', email: 'john@example.com' }).subscribe(user => {
  console.log('Created:', user);
});

// PUT request
this.api.put<User>('users/1', { name: 'Jane' }).subscribe(user => {
  console.log('Updated:', user);
});

// DELETE request
this.api.delete('users/1').subscribe(() => {
  console.log('Deleted');
});
```

## Available Routes

- `/` - Redirects to dashboard
- `/dashboard` - Main dashboard with stats and activities
- `/users` - User management page

## Building

To build the project for production:

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

## Running Tests

Execute unit tests with Vitest:

```bash
ng test
```

## Code Scaffolding

Generate a new component:

```bash
ng generate component component-name
```

For available schematics:

```bash
ng generate --help
```

## Customization

### Adding New Routes

1. Create a new component in `src/app/components/`
2. Add the route to `src/app/app.routes.ts`
3. Add a navigation link in `src/app/components/layout/layout.component.ts`

### Styling

- **Global styles**: `src/styles.scss`
- **Component styles**: Each component has its own `.scss` file

## Technologies

- **Angular 21** - Latest Angular with standalone components
- **TypeScript** - Type-safe JavaScript
- **SCSS** - Advanced CSS with variables and nesting
- **HttpClient** - For API communication
- **Angular Router** - Client-side routing
- **SSR** - Server-side rendering for better performance

## Project Info

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.2.

## License

This project is open source.

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
