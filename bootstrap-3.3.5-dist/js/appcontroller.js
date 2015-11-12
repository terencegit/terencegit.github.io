//Module defines ana application

var myApp = angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope)
{
// The $scope is the owner of all variables and
// functions in a given controller
// controller updates the view
$scope.phone = "0732 207 272";
$scope.email = "terencegit@gmail.com";
$scope.city = "Nairobi";
$scope.state = "Kenya";
});

myApp.controller('myCars',function($scope)
{
$scope.cars = [
{brand:"Toyota", model:"vits", type:"saloon", year:"2006", image:""},
{brand:"Toyota", model:"E90", type:"saloon", year:"2010"}, image:
{brand:"Nissan", model:"shark", type:"minibus", year:"2005"},
{brand:"Toyota", model:"Land Cruiser", type:"pick-up", year:"2009"},
{brand:"Mazda", model:"RX7", type:"saloon", year:"2013"}
];

});