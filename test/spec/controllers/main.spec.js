'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('rockPaperScissorsApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('Should set $scope.defaultValues as ["rock", "paper", "scissor"]', function () {
        expect(scope.defaultValues).toEqual(['rock', 'paper', 'scissor']);
    });

    describe('When $scope.init() is called', function () {
        beforeEach(function () {
            scope.init();
        });
        it('Should set $scope.isGameOn as TRUE', function () {
            expect(scope.isGameOn).toBeTruthy();
        });
    });

    describe('When $scope.initializeValues() is called', function () {
        beforeEach(function () {
            scope.initializeValues();
        });

        it('should set $scope.isGameOn as FALSE', function () {
            expect(scope.isGameOn).toBeFalsy();
        });

        it('Should set $scope.playerSelection as "" (empty string)', function () {
            expect(scope.playerSelection).toBe('');
        });

        it('Should set $scope.computerSelection as "" (empty string)', function () {
            expect(scope.computerSelection).toBe('');
        });

        it('Should set $scope.score as "" (empty string)', function () {
            expect(scope.result).toBe('');
        });
    });

    describe('When $scope.setPlayerSelection() is called with "rock"', function () {
        var spySetComputerSelection;
        beforeEach(function () {
            spySetComputerSelection = spyOn(scope, 'setComputerSelection');
            scope.setPlayerSelection('rock');
        });

        it('Should set $scope.playerSelection as "rock"', function () {
            expect(scope.playerSelection).toEqual('rock');
        });

        it('Should call $scope.setComputerSelection()', function () {
            expect(spySetComputerSelection).toHaveBeenCalled();
        });
    });

    xdescribe('When $scope.setComputerSelection() is called', function () {
        var spyGetRandomSelection;
        beforeEach(function () {
            spyGetRandomSelection = spyOn(scope, 'getRandomSelection').andReturn(2);
            scope.setComputerSelection();
        });

        it('Should call $scope.getRandomSelection()', function () {
            expect(spyGetRandomSelection).toHaveBeenCalled();
        });

        it('Should set $scope.computerSelection as "scissor"', function () {
            expect(scope.computerSelection).toBe('scissor');
        });
    });

    describe('When $scope.playerSelection is "paper"', function () {
        beforeEach(function () {
            scope.playerSelection = 'paper';
            scope.$digest();
        });
        describe('When $scope.computerSelection is updated with "rock"', function () {
            beforeEach(function () {
                scope.computerSelection = 'rock';
                scope.$digest();
            });
            it('Should set $scope.result as "You Won"', function () {
                expect(scope.result).toBe('You Won');
            });
        });
    });

    describe('When $scope.playerSelection is "rock"', function () {
        beforeEach(function () {
            scope.playerSelection = 'rock';
            scope.$digest();
        });
        describe('When $scope.computerSelection is updated with "rock"', function () {
            beforeEach(function () {
                scope.computerSelection = 'rock';
                scope.$digest();
            });
            it('Should set $scope.result as "Draw"', function () {
                expect(scope.result).toBe('Draw');
            });
        });
    });

});
