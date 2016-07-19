function MainController ($scope) {
  $scope.greeting = 'Hello World';
}

MainController.$inject = ['$scope'];
export { MainController };