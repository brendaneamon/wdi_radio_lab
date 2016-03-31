"use strict";

(function(){
  angular
  .module("wdiRadio" , [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexVM"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html"
    });
  }

}());
