function MainController ($scope) {

  $scope.tasks = [];

  $scope.addTodoItem = function (task) {

    let myTask = { name: task, id: $scope.tasks.length + 1 };

    $scope.tasks.push(myTask);
    $scope.newtask = '';
  }

}

MainController.$inject = ['$scope'];
export { MainController };