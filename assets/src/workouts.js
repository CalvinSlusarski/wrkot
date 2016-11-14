import {EditData} from './edit-data';
import {DialogService} from 'aurelia-dialog';
import { Router } from 'aurelia-router';
// import {dataServices} from 'data-services';
//@inject(Router)
export class WorkOuts{
  static inject = [DialogService];
  static inject = [Router];


  heading = 'Workout';
  theList = [{name: 'Back squat', series:[{weight: 'BAR', unit: 'imperial',sets: 3, reps: 10},{weight: '135', unit: 'imperial',sets: 2, reps: 10},{weight: '155', unit: 'imperial',sets: 2, reps: 10}]},
                {lift: 'Hack squat', details:[{weight: 'BAR', unit: 'imperial',sets: 3, reps: 10},{weight: '135', unit: 'imperial',sets: 2, reps: 10}]}];
  id = '';
  workout = {};
  constructor(router) {
    this.router = router;

    let that = this;
    $.getJSON('workout').then(function(data){ 
        var mapped = [];
        Array.from(data).forEach(function(item){
            item.formatedDate = moment(item.createdAt).format('llll');
            mapped.push(item);
        });
      that.theList = mapped;
     });
  }
  navTo = function(item){
    this.router.navigate('/workout/:' + item.id);
  }
}
