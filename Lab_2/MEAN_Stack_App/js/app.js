var myapp = angular.module('app',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});

myapp.controller('addController',function($scope,$http){
    $scope.addUser = function(){
        console.log($scope.firstName);

        var dataParams = {
            'firstName' : $scope.firstName,
            'lastName' : $scope.lastName,
            'email' : $scope.email,
            'userName' : $scope.userName,
            'password' : $scope.password,
            'status' : true
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        var req = $http.post('http://127.0.0.1:8081/create',dataParams);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
            $scope.firstName='';
            $scope.lastName='';
            $scope.email='';
            $scope.userName='';
            $scope.password='';
            let showDiv = function () {
                document.getElementById('welcome').style.display = "block";
            }
            showDiv();
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };
    $scope.validateUser = function() {

        var dataParams = {
            'val_userName' : $scope.val_userName,
            'val_password' : $scope.val_password,
        };
        if (val_userName) {
            $scope.status=true;
            $scope.userName='';
            $scope.password='';
            console.log("Validated User");
        }
        else {
            alert("User account not valid");
        }
    }

});


myapp.controller('homeController',function($scope,$http){

    $scope.getData=function(){
        var req = $http.get('http://127.0.0.1:8081/get');
        req.success(function(data, status, headers, config) {
            $scope.userList = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });

    };

    $scope.delete = function(id,callback){

        $http.get('http://127.0.0.1:8081/delete/'+id)
            .success(function(data){
                console.log("Successfully deleted");
                $scope.getData();
            });
    };


    $scope.update = function(book,callback){

        $http.get('http://127.0.0.1:8081/update/'+book._id,{params:book})
            .success(function(data){
                console.log("Successfully updated");
                $scope.getData();
            });
    }

});

