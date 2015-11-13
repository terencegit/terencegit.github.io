//Module defines ana application

var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope) {
    // The $scope is the owner of all variables and
    // functions in a given controller
    // controller updates the view
    $scope.phone = "0732 207 272";
    $scope.email = "terencegit@gmail.com";
    $scope.city = "Nairobi";
    $scope.state = "Kenya";
});

myApp.controller('myCars', function($scope) {
    $scope.cars = [{
        brand: "Toyota",
        model: "vits",
        type: "saloon",
        year: "2006"
    }, {
        brand: "Toyota",
        model: "E90",
        type: "saloon",
        year: "2010"
    }, {
        brand: "Nissan",
        model: "shark",
        type: "minibus",
        year: "2005"
    }, {
        brand: "Toyota",
        model: "Land Cruiser",
        type: "pick-up",
        year: "2009"
    }, {
        brand: "Mazda",
        model: "RX7",
        type: "saloon",
        year: "2013"
    }];

});

myApp.controller('blogsController', function($scope, $http) {
    var url = "http://jsonplaceholder.typicode.com/posts/1/comments";

    $http.get(url).success(function(response)

    {
    $scope.posts = response;
    });


});
