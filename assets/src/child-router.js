export class ChildRouter {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',            moduleId: 'welcome',        nav: true,  title: 'Welcome' },
      { route: 'workkout(/:id)',   name: 'workout',              moduleId: './workout',        nav: false, title: 'Workout' },
      { route: 'workouts',       name: 'workouts',            moduleId: './workouts',      nav: true,  title: 'History' },
      // { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title: 'Github Users' },
      // { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router' }
    ]);
    this.router = router;
  }
}
