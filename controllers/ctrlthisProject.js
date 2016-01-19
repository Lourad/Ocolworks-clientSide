    havocApp.controller('thisProject', ['$scope', '$routeParams', 'userService', '$timeout', '$localStorage', function($scope, $routeParams, userService, $timeout, $localStorage) {
        

        $scope.projectID = $routeParams.projectID;
        $localStorage.projectID = $scope.projectID;
        


    		var showTasks = function() {
    			userService.showTasks(function(data){
                $scope.proj = data;
      			$scope.tasks = data.tasks;            
    			});
    		}
    		showTasks();

        $scope.showModal = function(tasksID) {
            var modalID = "#modal" + tasksID;
            $(modalID).openModal();
        }

        $scope.showModalEdit = function(tasksID) {
            var modalID = "#modalEdit" + tasksID;
            $(modalID).openModal();
        }

        $scope.closeModal = function(tasksID) {
            var modalID = "#modal" + tasksID;
            $(modalID).closeModal();
        }

        $scope.closeModalEdit = function(tasksID) {
            var modalID = "#modalEdit" + tasksID;
            $(modalID).closeModal();
        }



    }]);