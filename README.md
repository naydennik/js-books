<img src="https://firebearstudio.com/blog/wp-content/uploads/2016/01/Best-Node.JS-Books-1024x551.jpg" title="JS Books" alt="JS Books">

# JS Books

A simple app for creating and viewing books dedicated to Javascript

## Quick description

To enter the app everyone has to register and login first.
There are two types of users - regular and admins.
Regular users can only view the list with already created books. To test the regular users experience please create a new account.
The admins have the right to create, edit and delete books. To test the admin users experience please use these credentials:

### username: Nayden, password: 1234

## Used technology

This project was generated with Vue.js

## Architecture

1. Auth Folder - containing the components responsible for the user authentication:

   - Login Component - responsible for the login page
   - Register Component - responsible for the register page

2. Books Folder - containing all elements connected to the main content of the app:

   - Books All Component - responsible for books list page
   - Books Create Component - responsible for create page
   - Books Details Component - responsible for details page
   - Books Edit Component - responsible for edit page

3. Shared Folder - containing elements used in all pages of the app:

   - Footer Component - responsible for the footer section of all pages
   - Header Component - responsible for the header section of all pages
   - NotFound Component - responsible for the wrong URL page

4. About Component - responsible for the About page

5. Home Component - responsible for the landing page

6. Services Folder:

   - authService - all necessary functions for authentication
   - booksService - all necessary functions for creating, editing, deleting and showing the collection

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
