# Tabs
This sample project would mainly shows concept of how we could achieve dynamic theming in Angular application. Each theme represents its own colors for the same application.This sample does not follow any code guidelines - please do refer and infer the concept how we can achieve together with Angular-Cli as a base, JSON-Sass, SCSS and Angular 4.

npm run build
npm run start

This has dependency on json-sass npm module (https://github.com/acdlite/json-sass)
1. We would represent colors in JSON for multiple themes [Usually designers would map in JSON]
   src/themes/json
2. Use the script [jsontosass.js] under src/scripts to generate sass maps.
3. _utils under themes would read colors from sass maps dynamically using sass map functions.
4. This can be called from our .scss files from per component. Make sure theme class is added to the body of aplication.
5. This should work on any angular-cli starter project, Make sure to copy necessary files.
6. I did ng-eject for angular-cli project to unpack webpack configurations.This was required to specify sourceMap property of webpack to true which ensures it reads sass maps generated together with other css files.

## Built from concept
https://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
