import {EditData} from './edit-data';
import {DialogService} from 'aurelia-dialog';
// import {dataServices} from 'data-services';

export class Workout{
  static inject = [DialogService];


  heading = 'Workout';
  theList = [];
  id = '';
  workout = {};
  constructor(dialogService) {
    this.dialogService = dialogService;
    let that = this;
  }

  addSet= function(item){
    let that = this;
    let newSet = {name: 'New', sets: 0, reps: 0, weight: 0, exercise: item.id};
    $.ajax({
      type: "POST",
      url: '/set',
      data: newSet,
      // success: function(d) { console.log(d) },
      dataType: 'json'
    }).then(function(data){
      if(item.sets === undefined){
        item.sets = [];
      }
      item.sets.push(newSet);
    });
  }

  addWorkout = function(){
    let that = this;
    let newExercise = {name: 'New', workOut: that.workout.id};
    $.ajax({
      type: "POST",
      url: '/exercise',
      data: newExercise,
      dataType: 'json'
    }).then(function(exercise) { 
      that.theList.push(exercise)
    });

  }
  removeSet = function(item,detail){
    const index = item.sets.indexOf(detail);
    $.ajax({
      type: "DELETE",
      url: '/set/' + detail.id,
    }).then(function(data){
  
      setTimeout( () => {
        item.details.splice(index, 1);
      },0);
    });

  }
  changeExcercise = function(item){
    let that = this;
    this.dialogService.open({ viewModel: EditData, model: {title: 'Exercise Name', input: item.name}}).then(response => {
      if (!response.wasCancelled) {
        item.name = response.output;
        //console.log('good - ', response.output);
        $.ajax({
          type: "PUT",
          url: '/exercise/'+ item.id,
          data: item,
          dataType: 'json'
        }).then(function(exercise) { 
          //that.theList.push(exercise)
        });
      } else {
        // console.log('bad');
      }
      //console.log(response.output);
    });
  }
  changeWeight = function(detail){
    let that = this;
    this.dialogService.open({ viewModel: EditData, model: {title: 'Weight', input: detail.weight}}).then(response => {
    if (!response.wasCancelled) {
        detail.weight = response.output;
        console.log('good - ', response.output);
        that.updateSet(detail);
      } else {
        // console.log('bad');
      }
      //console.log(response.output);
    });
  }
  changeSet = function(detail){
    let that = this;
    this.dialogService.open({ viewModel: EditData, model: {title: 'Sets', input: detail.sets}}).then(response => {
    if (!response.wasCancelled) {
        detail.sets = response.output;
        console.log('good - ', response.output);
        that.updateSet(detail);
      } else {
        // console.log('bad');
      }
      //console.log(response.output);
    });
  }
  changeRep = function(detail){
    let that = this;
    this.dialogService.open({ viewModel: EditData, model: {title: 'Reps', input: detail.reps}}).then(response => {
    if (!response.wasCancelled) {
        detail.reps = response.output;
        console.log('good - ', response.output);
        that.updateSet(detail);
      } else {
        // console.log('bad');
      }
      //console.log(response.output);
    });
  }
  updateSet = function(set){
    $.ajax({
      type: "PUT",
      url: '/set/'+ set.id,
      data: set,
      // success: function(d) { console.log(d) },
      dataType: 'json'
    }).then(function(data){
      //item.sets.push(newSet);
      console.log('good - ', data);
    });
  }
  getWorkout = function(id){
    return $.getJSON('/workOut/' + id);
  }
  getExercise = function(id){
    return $.getJSON('/exercise/' + id);
  }
  setWorkout = function(data){
    let that = this;
    this.workout = data;
    $.each(data.exercises,function(index, exercise){
        if(exercise.sets === undefined){
          exercise.set = [];
          console.log(exercise);
          that.getExercise(exercise.id).then(function(data){
            exercise.sets = data.sets;
            console.log(that.theList);
          });
        }
    });
    this.theList = data.exercises;
    
  }
  activate = function(param){
    console.log(param.id);
    let that = this;

    this.getWorkout(param.id).then(function(data) { 

      that.setWorkout(data); 
    });
    return true;
  } 

}
