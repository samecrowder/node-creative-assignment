var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.name = "";


    $scope.isMale = function() {
        document.body.style.backgroundColor = "#89CFF0";
    }
    
    $scope.isFemale = function() {
        document.body.style.backgroundColor = "#FFB6C1";
    }
    $scope.getChild = function() {
        var url = "";
        if ($scope.genderButt === "Male") {
            url = '/getBoy';

            $http.get(url).then(function(response) {
                console.log(response);
                $scope.name = response.data;
            });

        }




        else if ($scope.genderButt === "Female") {
            url = '/getGirl';

            $http.get(url).then(function(response) {
                console.log(response);
                $scope.name = response.data;
            });
        }

        else {
            $scope.name = "Please choose a gender for your baby."
        }




    }


});
