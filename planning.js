app = angular.module('planner',['ngStorage']);
 	       app.controller('todo',function($scope,$localStorage){
 	           $scope.task = $localStorage.tasks;
 	       
 	           // Add a new task to your list.
 	           $scope.addTasks = function (){
 	              if(angular.isUndefined($localStorage.tasks)){
 	                  $localStorage.tasks = []; 
 	              } else {
 	                  if($scope.binary_numb != " ") {
 	                      var curTask = {name:$scope.binary_numb};
 	                      $localStorage.tasks.push(curTask);
 	                   }
 	               }
 	                 $scope.task = $localStorage.tasks;
 	                 $scope.binary_numb = "";
 	                 return $scope.task;
 	              };
 	         
 	            // Clear the entire list and start over. 
 	            $scope.clearList = function (){
 	                 $localStorage.tasks = [];
 	                 $scope.task = $localStorage.tasks;
 	                 return $scope.task;
 	              };
 	       
 	             // Push a task to the top of the list.
 	            $scope.moveUp = function ($index){
 	                  $scope.item = $localStorage.tasks[$index];
 	                  $localStorage.tasks.splice($index,1);
 	                  $localStorage.tasks.unshift($scope.item);
 	              };
 	       
 	            // Delete a task in the list.
 	            $scope.remove = function($index){
 	                  $localStorage.tasks.splice($index,1);
 	           
 	                  };
 	         }); 