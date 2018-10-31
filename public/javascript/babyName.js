var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.name = "";

    $scope.computeChild = function() {
        var url = "";
        if($scope.genderButt === "Male") {
            url = '/getBoy';
        } else {
            url = '/getGirl';
        }
        
        $http.get(url).then(function(response) {
            $scope.name = response.data;
        });
        
        $http.get('/funfact').then(function(response) {
            debugger;
        });
    }
    

});