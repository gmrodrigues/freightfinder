'use strict';

angular.module('core')
    .controller("CoreCtrl", ['$scope', 'ScrollSmooth', function ($scope, ScrollSmooth) {

        $scope.AppName = 'Modify me in Core Module';
        $scope.ModuleTest = 'Modify me in Core Module';
        $scope.pin = {};

        $scope.position = [0,0];
        $scope.mapOptions = {center: [37.772323, -122.214897], zoom: 16, mapTypeId: google.maps.MapTypeId.ROADMAP};

        $scope.scrollSmoothToElementId = function (elementId) {
            ScrollSmooth.toElementId(elementId);
        };

        $scope.scrollSmoothToTop = function () {
            ScrollSmooth.toTop();
        };

        $scope.$watch('myScopeVar.geometry.location', function(newValue) {
            console.dir(newValue);
            $scope.position = [0,0];
            $scope.position = [newValue.lat(),newValue.lng()];
            $scope.mapOptions.center = $scope.position;
         });

         $scope.getMarkerAddress = function (pos) {
             var latLng = {lat:pos.lat(), lng:pos.lng()};
             var geocoder = new google.maps.Geocoder();
             geocoder.geocode({
               latLng: latLng
             }, function(responses) {
               if (responses && responses.length > 0) {
                 $scope.myScopeVar =  responses[0].formatted_address;
               } else {
                 updateMarkerAddress('Cannot determine address at this location.');
               }
             });
           };
    }]);