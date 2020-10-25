# Angular-Advanced-Topics

Angular app meant as an exercise for advanced topics

# To Create

-   `npm install ngx-bootstrap bootstrap` and add in style.scss `@import "~bootstrap/scss/bootstrap.scss";`
-   `ng add @fortawesome/angular-fontawesome` then add [icon library](https://github.com/FortAwesome/angular-fontawesome/blob/HEAD/docs/usage/icon-library.md#using-the-icon-library) in app.module or lazy loaded module:

```constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    // library.addIcons(faCoffee);
    library.addIconPacks(fas, far);
  }
```

-   angular [JWT authentication](https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3) - `npm install --save @auth0/angular-jwt`
-   create auth service
-   create login guard
-   create login component - import reactive forms module
