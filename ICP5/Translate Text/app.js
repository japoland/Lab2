// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.bootstrap'])
    .controller('View1Ctrl', function ($scope, $http) {
        $scope.responseText = "";

        $scope.languageOptions=[{name:"French", id:"fr"}, {name: "Spanish", id: "es"}, {name: "Italian", id:"it"}];

        $scope.getTranslation = function(lang) {
            let translateText = document.getElementById("inputText").value;
            let language = document.getElementById("lang").value;

            if (translateText!= null && translateText !== "") {

                let api = "https://translate.yandex.net/api/v1.5/tr.json/translate" +
                    "?key=trnsl.1.1.20190618T192417Z.6d7e9763e7aa79c0.b9c181a78cb5dbf44221d70efb6cdd3d1b8e06ed" +
                    "&text=" + translateText +
                    "&lang=" + language;

                $http.get(api)
                    .then(function(response) {
                        $scope.responseText=response.data.text.toString();
                    });
            }
        }

    });