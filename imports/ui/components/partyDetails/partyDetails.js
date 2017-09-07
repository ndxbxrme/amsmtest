import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './partyDetails.html';
import { Parties } from '../../../api/parties';
import player from '../player/player.js';

class PartyDetails {
  constructor($stateParams, $scope, $reactive, player) {
    'ngInject';

    $reactive(this).attach($scope);

    this.partyId = $stateParams.partyId;
    
    this.play = player.play;
    this.stop = player.stop;

    this.helpers({
      party() {
        return Parties.findOne({
          _id: $stateParams.partyId
        });
      }
    });
  }
}

const name = 'partyDetails';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  'player'
]).component(name, {
  template,
  controllerAs: name,
  controller: PartyDetails
})
  .config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('partyDetails', {
    url: '/parties/:partyId',
    template: '<party-details></party-details>'
  });
}
