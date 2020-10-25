# Angular-Advanced-Topics

Angular app meant as an exercise for advanced topics

# To Create

-   `npm install ngx-bootstrap bootstrap` and add in style.scss `@import "~bootstrap/scss/bootstrap.scss";`
-   `ng add @fortawesome/angular-fontawesome` then add [icon library](https://github.com/FortAwesome/angular-fontawesome/blob/HEAD/docs/usage/icon-library.md#using-the-icon-library) in app.module or lazy loaded module:

```constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    // library.addIcons(faCoffee);
    library.addIconPacks(fas, far); // to add all of them
  }
```

usage : `<fa-icon [icon]="['fas', 'save']"></fa-icon>`

-   angular [JWT authentication](https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3) - `npm install --save @auth0/angular-jwt`
-   create auth service
-   create login guard
-   create login component - import reactive forms module
-   create interceptor to add token to all requests (optional, alternative is to add headers for all) -

```const headers = new Headers({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${auth_token}`
})
return this.http.get(apiUrl, { headers: headers })
```

-   create resolvers for route requests

```
@Injectable()
export class HomeResolve implements Resolve<Observable<any>> {
  constructor(private service: HomeApiService) {}

  resolve(): Observable<any> {
    return this.service.getHomeData();
  }
}

```

usage: in component

```
constructor(private activatedRoute: ActivatedRoute) {
    const { data } = this.activatedRoute.snapshot.data;
  }

```

usage on route:

```
const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { data: HomeResolve } },
];
```
