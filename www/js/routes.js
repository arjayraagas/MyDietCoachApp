angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('myDietCoach.home', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('dietPlans', {
    url: '/page3',
    templateUrl: 'templates/dietPlans.html',
    controller: 'dietPlansCtrl'
  })

  .state('myDietCoach.settings', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('myDietCoach.weightTracker', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/weightTracker.html',
        controller: 'weightTrackerCtrl'
      }
    }
  })

  .state('myDietCoach.logout', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/logout.html',
        controller: 'logoutCtrl'
      }
    }
  })

  .state('myDietCoach', {
    url: '/sidemenu',
    templateUrl: 'templates/myDietCoach.html',
    abstract:true
  })

  .state('signup', {
    url: '/page1',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('gettingStarted', {
    url: '/page8',
    templateUrl: 'templates/gettingStarted.html',
    controller: 'gettingStartedCtrl'
  })

  .state('gettingStarted2', {
    url: '/page9',
    templateUrl: 'templates/gettingStarted2.html',
    controller: 'gettingStarted2Ctrl'
  })

  .state('gettingStarted3', {
    url: '/page10',
    templateUrl: 'templates/gettingStarted3.html',
    controller: 'gettingStarted3Ctrl'
  })

  .state('waterHelpsWeightLoss', {
    url: '/page11',
    templateUrl: 'templates/waterHelpsWeightLoss.html',
    controller: 'waterHelpsWeightLossCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});