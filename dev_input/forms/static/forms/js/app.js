angular.module('GithubInput', [])
    .controller('UrlController', ['$scope', '$http', function($scope, $http) {
      $scope.repos = [{
        name: '',
        url: '',
        stargazers_count: '',
        watchers_count: '',
        forks_count: '',
      },
      {
        name: '',
        url: '',
        stargazers_count: '',
        watchers_count: '',
        forks_count: '',
      }];

      $scope.showContent = false;
      $scope.showSummary = true;

      $scope.getUrl = function() {

        // format urls and handle errors
        var url1 = $scope.repos[0].url;
        var url2 = $scope.repos[1].url;
        var gh = "https://github.com/";
        var apiUrl = "https://api.github.com/repos/";
        var ghIndex1 = url1.indexOf(gh);
        var ghIndex2 = url2.indexOf(gh);
        
        if ((ghIndex1 < 0) || (ghIndex2 < 0)) {
          alert("Please enter valid github urls");
          return false;
        }
        
        if (url1.length === (url1.lastIndexOf("/") + 1)) {
          url1 = url1.substr(0, url1.lastIndexOf("/"));
        }

        if (url2.length === (url2.lastIndexOf("/") + 1)) {
          url2 = url2.substr(0, url2.lastIndexOf("/"));
        }
        
        var userIndex1 = url1.lastIndexOf("/");
        var userRepo1 = url1.substr(gh.length, userIndex1);
        var userIndex2 = url2.lastIndexOf("/");
        var userRepo2 = url2.substr(gh.length, userIndex2);

        // query api
        Promise.all([
          $http({method: 'GET', url: apiUrl + userRepo1}), 
          $http({method: 'GET', url: apiUrl + userRepo2})
        ]).then(function(responses) {
          if (responses[0] && responses[1]) {
            setTimeout(function() {
              $scope.repos[0].name = responses[0].data.name;
              $scope.repos[1].name = responses[1].data.name;
              $scope.repos[0].stargazers_count = responses[0].data.stargazers_count;
              $scope.repos[1].stargazers_count = responses[1].data.stargazers_count;
              $scope.repos[0].watchers_count = responses[0].data.watchers_count;
              $scope.repos[1].watchers_count = responses[1].data.watchers_count;
              $scope.repos[0].forks_count = responses[0].data.forks_count;
              $scope.repos[1].forks_count = responses[1].data.forks_count;

              $scope.sorted = [responses[0].data, responses[1].data].sort(function(a, b) {
                if (a.stargazers_count == b.stargazers_count) {
                  $scope.showSummary = false;
                } else {
                  $scope.showSummary = true;
                  return a.stargazers_count - b.stargazers_count;
                };
              });
              
              $scope.showContent = true;
              $scope.$apply();
            }, 1000);
          } 
        }, function() {
          alert("Please enter valid github urls");
          return false;
        });
      };
    }]);