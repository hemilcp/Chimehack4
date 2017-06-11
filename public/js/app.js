var API_SERVER = 'https://nameless-shore-34478.herokuapp.com';

angular.module('gt', [])
  .controller('Chat', function($scope){

    $scope.messages = [
      {
        text: 'Hi, my name is Hemil. How are you?',
        user: 'user-2'
      },
      {
        text: 'Hi Hemil, I\'m Alina. I \'m good. Sorry, my Wnglish not good.'
      },
      {
        text: 'That\'s fine. I can help you with that. I teach English on weekends.',
        user: 'user-2'
      }
    ];

    $scope.submit = function(){
      $scope.messages.push({
        text: $scope.messageText
      });
      $scope.messageText = '';
      setTimeout(function(){
        document.body.scrollTop = document.body.scrollHeight;
      }, 0);
    };
  })

  .controller('Search', function($scope, $http){

    $scope.isMentors = true;

    $http({
      url: API_SERVER + '/users',
      method: 'GET'
    }).then(function successCallback(response){
        $scope.mentors = response.data.filter(function(item){
          return item.mentor === 'true';
        });
        $scope.peers = response.data.filter(function(item){
          return item.mentor === 'false';
        });
    });

  });
