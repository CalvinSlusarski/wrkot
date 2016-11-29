export class App {
  configureRouter(config, router) {
    config.title = 'ero';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: false, title: 'Welcome' },
      { route: 'workout/:id',   name: 'workout',            moduleId: './workout',        nav: false, title: 'Workout', href: 'id'},
      { route: 'workouts',       name: 'workouts',            moduleId: './workouts',      nav: true,  title: 'History' },
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
