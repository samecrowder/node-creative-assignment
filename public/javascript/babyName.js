var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.name = "";
    $scope.fact = "";
    $scope.genderButt = "";


    $scope.birth = { data: {} };
    $scope.death = { data: {} };
    $scope.event = { data: {} };


    $scope.dateRegex = /^(0[1-9]||1[0-2])\/([0-2][0-9]|3[0-1])/;

    $scope.isMale = function() {
        document.body.style.backgroundColor = "#89CFF0";
        document.getElementsByClassName("data-container").style.backgroundColor = "#89CFF0";
        $scope.color_class = 'male-color';
    }

    $scope.isFemale = function() {
        document.body.style.backgroundColor = "#FFB6C1";
        document.getElementsByClassName("data-container").style.backgroundColor = "#FFB6C1";
        $scope.color_class = 'female-color';
    }

    $scope.checkedBoxes = function() {
        return $scope.genderButt == "Male" || $scope.genderButt == "Female";
    }

    $scope.getChild = function() {

        document.getElementById('responseSpace').style.opacity = "0";

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

        var dateSplit = $scope.dateText.split('/');
        var url = '/funFact/' + dateSplit[0] + '/' + dateSplit[1];
        $http.get(url).then(function(response) {
            $scope.fact = response.data;
            console.log($scope.fact);
            $scope.birth = $scope.fact.data.Births[Math.floor(Math.random()*$scope.fact.data.Births.length)]
            $scope.death = $scope.fact.data.Deaths[Math.floor(Math.random()*$scope.fact.data.Deaths.length)];
            $scope.event = $scope.fact.data.Events[Math.floor(Math.random()*$scope.fact.data.Events.length)];
            // $scope.birth = $scope.fact.data.Births[0];
            // $scope.death = $scope.fact.data.Deaths[0];
            // $scope.event = $scope.fact.data.Events[0];

            var responseSpace = document.getElementById('responseSpace');
            responseSpace.innerHTML = "";
            var response = getResponseHtml();

            responseSpace.innerHTML = response;
            document.getElementById('responseSpace').style.opacity = "1";


            function getResponseHtml() {
                var resp = `
                    <div class="container response">
                    
                        <div class="row">
                            <h1 class="name-container">

                                ${$scope.name}
                            </h1>
                        </div>
                        
                        <div class="row">
                            <h3>
                               On This Date...
                            </h3>
                        </div>

                        
                        <div class="flex-row">
                        
                            <div class="data-container">
                                <div class="data-container-title">
                                    Birth Fact:
                                </div>

                                <div class="data-container-value">
                                    In the year ${$scope.birth.year}, ${$scope.birth.text} was born.
                                </div>
                            </div>

                            
                            <div class="data-container">
                                <div class="data-container-title">
                                    Death Fact:
                                </div>

                                <div class="data-container-value">
                                    In the year ${$scope.death.year}, ${$scope.death.text} died.
                                </div>
                            </div>

                            
                            <div class="data-container">
                                <div class="data-container-title">
                                    Event Fact:
                                </div>

                                <div class="data-container-value">
                                    In the year ${$scope.event.year}, ${$scope.event.text}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                `;
                return resp;
            }
        });
    }
});
