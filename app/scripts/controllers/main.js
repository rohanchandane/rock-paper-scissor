'use strict';

/**
 * @ngdoc function
 * @name rockPaperScissorsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rockPaperScissorsApp
 */
angular.module('rockPaperScissorsApp')
    .controller('MainCtrl', function ($scope) {

        $scope.defaultValues = ['rock', 'paper', 'scissor'];

        $scope.$watch('computerSelection', function (newVal, oldVal) {
            if(newVal !== '' && newVal !== oldVal){
                if($scope.playerSelection === $scope.computerSelection) {
                    $scope.result = 'Draw';
                }

                if($scope.playerSelection === 'rock' && $scope.computerSelection === 'paper'){
                    $scope.result = 'You Lost';
                }
                if($scope.playerSelection === 'paper' && $scope.computerSelection === 'scissor'){
                    $scope.result = 'You Lost';
                }
                if($scope.playerSelection === 'scissor' && $scope.computerSelection === 'rock'){
                    $scope.result = 'You Lost';
                }

                if($scope.playerSelection === 'paper' && $scope.computerSelection === 'rock'){
                    $scope.result = 'You Won';
                }
                if($scope.playerSelection === 'scissor' && $scope.computerSelection === 'paper'){
                    $scope.result = 'You Won';
                }
                if($scope.playerSelection === 'rock' && $scope.computerSelection === 'scissor'){
                    $scope.result = 'You Won';
                }
            }
        });

        $scope.getRandomSelection = function () {
            return Math.floor(Math.random() * $scope.defaultValues.length);
        };

        $scope.setComputerSelection = function () {
            var randomNumber = $scope.getRandomSelection();
            $scope.computerSelection = $scope.defaultValues[randomNumber];
        };

        $scope.setPlayerSelection = function (selection) {
            $scope.playerSelection = selection;
            $scope.setComputerSelection();
        };

        $scope.init = function () {
            $scope.isGameOn = true;
        };

        $scope.initializeValues = function () {
            $scope.isGameOn = false;
            $scope.playerSelection = '';
            $scope.computerSelection = '';
            $scope.result = '';
        };

        $scope.initializeValues();
    });
