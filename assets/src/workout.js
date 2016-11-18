import {EditData} from './edit-data';
import {DialogService} from 'aurelia-dialog';
// import {dataServices} from 'data-services';

export class Workout{
  static inject = [DialogService];


  heading = 'Workout';
  theList = [];
  // theList = [{name: 'Back squat', series:[{weight: 'BAR', unit: 'imperial',sets: 3, reps: 10},{weight: '135', unit: 'imperial',sets: 2, reps: 10},{weight: '155', unit: 'imperial',sets: 2, reps: 10}]},
  //               {lift: 'Hack squat', details:[{weight: 'BAR', unit: 'imperial',sets: 3, reps: 10},{weight: '135', unit: 'imperial',sets: 2, reps: 10}]}];
  id = '';
  workout = {};
  constructor(dialogService) {
    this.dialogService = dialogService;
    let that = this;
    // $.getJSON('workout').then(function(d){ 
    //   // console.log(d);
    //   // console.log(d);
    //   // console.log(d[5].exercises);
    //   // console.log(that.theList);
    //   // that.heading = d.name || '';
    //   // that.theList = d[5].exercises || [];
    //   // that.id = d[5]._id;
    //   // that.workout = d[5];
    //   that.theList = d;
    //  });
        //console.log(param.id);
    // this.getWorkout(19).then(function(data) { 
    //   console.log('$$$$$$$$$$$$$$$');
    //   that.setWorkout(data); 
    // });
  }

  addRep = function(item){
      let newRep = {weight: 'BAR', unit: 'imperial',sets: 3, reps: 10};
      item.series.push(newRep);
  }

  addExercise = function(){
    let that = this;
    let newExercise = {name: 'New', sets: 0, reps: 0, weight: 0};
    $.ajax({
      type: "POST",
      url: 'exercises/',
      data: JSON.stringify(newExercise),
      dataType: 'json'
    }).then(function(exercise) { 
      this.theList.push(exercise)
    });

  }
  removeExercise = function(item,detail){
    const index = item.details.indexOf(detail);
    setTimeout( () => {
      item.details.splice(index, 1);
    },0);
  }
  changeExcercise = function(item){
    this.dialogService.open({ viewModel: EditData, model: {title: 'Exercise Name', input: item.lift}}).then(response => {
      if (!response.wasCancelled) {
        item.lift = response.output;
        console.log('good - ', response.output);
      } else {
        // console.log('bad');
      }
      //console.log(response.output);
    });
  }
  changeWeight = function(detail){
    this.dialogService.open({ viewModel: EditData, model: {title: 'Weight', input: detail.weight}}).then(response => {
    if (!response.wasCancelled) {
        detail.weight = response.output;
        console.log('good - ', response.output);
      } else {
        // console.log('bad');
      }
      //console.log(response.output);
    });
  }
  changeSet = function(detail){
    this.dialogService.open({ viewModel: EditData, model: {title: 'Sets', input: detail.sets}}).then(response => {
    if (!response.wasCancelled) {
        detail.sets = response.output;
        console.log('good - ', response.output);
      } else {
        // console.log('bad');
      }
      //console.log(response.output);
    });
  }
  changeRep = function(detail){
    this.dialogService.open({ viewModel: EditData, model: {title: 'Reps', input: detail.reps}}).then(response => {
    if (!response.wasCancelled) {
        detail.reps = response.output;
        console.log('good - ', response.output);
      } else {
        // console.log('bad');
      }
      //console.log(response.output);
    });
  }
  getWorkout = function(id){
    return $.getJSON('/workOut/' + id);
  }
  setWorkout = function(data){
     console.log('$$$$$$$$$$$$$$$');
    this.workout = data;
    console.log(this.theList);
    this.theList = data.exercises;
    console.log(data);
    console.log(this.theList);
  }
  attached = function(param){
    console.log(param.id);
    let that = this;
    this.getWorkout(19).then(function(data) { 
      console.log('$$$$$$$$$$$$$$$');
      that.setWorkout(data); 
    });
    this.getWorkout(param.id).then(function(data) { 
      console.log('$$$$$$$$$$$$$$$');
      this.setWorkout(data); 
    });
    return true;
  } 

}
