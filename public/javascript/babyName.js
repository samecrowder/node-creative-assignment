var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.name = "";

    $scope.getChild = function() {
        var url = "";
        if($scope.genderButt === "Male") {
            url = '/getBoy';
        
        }
        else {
            url = '/getGirl';
        }
        $http.get(url).then(function(response) {
            console.log(response);
            $scope.name = response.data;
        });
    }
    

});