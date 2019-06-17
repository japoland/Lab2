var angularTodo = angular.module('angularTodo', []);

angularTodo.controller('angularTodoC', ['$scope', function ($scope) {
    // define list of items
    $scope.list = [];
    $scope.items = [{todoText:'Call Dad', done:false}, {todoText: 'finish ICP', done: false}];

    $scope.submit = function(){
        if ($scope.text){
            $scope.items.push({todoText:$scope.text, done: false});
            $scope.text='';
        }
    };

    // Write code to complete item
    $scope.completeItem = function (index) {
        if ($scope.items[index].done === false){
            $scope.items[index].done = true;
        }else if ($scope.items[index].done === true){
            $scope.items[index].done = false;
        }
    };

    $scope.deleteItem = function (index) {
        $scope.items.splice(index,1);
    };
}]);