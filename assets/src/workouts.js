import {EditData} from './edit-data';
import {DialogService} from 'aurelia-dialog';
import { Router } from 'aurelia-router';
// import {dataServices} from 'data-services';
//@inject(Router)
export class Workouts{
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
  removeWorkout = function(item){
    const index = this.theList.indexOf(item);
    let that = this;
    $.ajax({
      type: "DELETE",
      url: '/workout/' + item.id,
    }).then(function(data){
  
      setTimeout( () => {
        that.theListsplice(index, 1);
      },0);
    });
  }
  addWorkout = function(){
    let that = this;
    let newWorkout = {name: 'New', comment: '' };
    $.ajax({
      type: "POST",
      url: '/workout',
      data: newWorkout,
      dataType: 'json'
    }).then(function(workout) { 
      that.theList.push(workout)
    });

  }
  navTo = function(item){
    this.router.navigate('/workout/' + item.id);
  }
}
