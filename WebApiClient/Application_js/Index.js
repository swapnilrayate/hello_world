var app = angular.module('myApp', []);

app.controller('myController', function ($scope,$http) {

    $scope.records = [];

    var onSuccess = function (data, status, headers, config) {
        if(config.method == 'GET')
        $scope.records = data;
    };

    var onError = function (data, status, headers, config) {
        $scope.records = status;
    }

    $scope.getRecords = function () {
        $http.get("http://localhost/WebApiDemo/api/WebApiDemo").success(onSuccess).error(onError);
    }

    $scope.InsertStudent = function () {

        var student = { "Id": 0, "Name": $scope.name };

        $http({ method: 'post', url: 'http://localhost/WebApiDemo/api/WebApiDemo/', data:student }).
        then(function(response) {
            debugger;
            $scope.status = response.status;
            $scope.data = response.data;
        }, function(response) {
            debugger;
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });
   



      }
});

app.directive('myDirective', function () {
    return {
        templateUrl: "http://localhost:64045/Content/Template/childView.html",
        controller:function(){


        },
        link: {

            pre: function (scope, elem, attrs) {
                 scope.getRecords();
            }

        }
    }
//Added Comment
});
