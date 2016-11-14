export class ChildRouter {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: 'welcome',       nav: true, title: 'Welcome' },
      { route: 'wkout(/:id)',         name: 'wkout',        moduleId: './wkout',        nav: false, title: 'Workout' },
      { route: 'wrkouts',         name: 'wrkouts',        moduleId: './wrkouts',        nav: true, title: 'Workouts' }
      // { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title: 'Github Users' },
      // { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router' }
    ]);
          console.log('ROUTER CHILD.js');
          console.log(config);
          console.log(config);
          console.log(config);
          console.log(config);
    this.router = router;
  }
}
