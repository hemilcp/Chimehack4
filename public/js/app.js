angular.module('gt', [])
  .controller('Chat', function($scope){

    $scope.messages = [
      {
        text: 'Highly motivated team-builder and team-player. Passionate about front-end development.',
        user: 'user-1'
      },
      {
        text: 'team-builder and team-player. Passionate about front-end development.'
      },
      {
        text: 'Passionate about front-end development.',
        user: 'user-1'
      },
      {
        text: 'Highly motivated team-builder and team-player. Passionate about front-end development.'
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

    $http({
      url: '/users',
      method: 'GET'
    }).then(function successCallback(response){
        $scope.mentors = response.data.filter(function(item){
          return item.mentor;
        });
        $scope.peers = response.data.filter(function(item){
          return item.mentor === 'false';
        });
    });

  });
