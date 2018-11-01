var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.name = "";
    $scope.fact = "";
    $scope.genderButt = "";
    
    $scope.dateRegex = /^(0[1-9]||1[0-2])\/([0-2][0-9]|3[0-1])/;

    $scope.isMale = function() {
        document.body.style.backgroundColor = "#89CFF0";
    }

    $scope.isFemale = function() {
        document.body.style.backgroundColor = "#FFB6C1";
    }
    
    $scope.checkedBoxes = function() {
         return $scope.genderButt == "Male" || $scope.genderButt == "Female";
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

        $http.get('/funfact').then(function(response) {
            $scope.fact = response.data;
        });
    }
});
