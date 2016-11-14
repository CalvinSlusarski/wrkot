export class App {
  configureRouter(config, router) {
    config.title = 'ero';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'wkout(/:id)',         name: 'wkout',        moduleId: './wkout',        nav: false, title: 'Workout' },
      { route: 'workouts',         name: 'workouts',        moduleId: './workouts',        nav: true, title: 'Workouts' }
      // { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);
    console.log('ROUTER APP.js');
    console.log(config);
    console.log(config);
    console.log(config);
    console.log(config);
    this.router = router;
  }
}
