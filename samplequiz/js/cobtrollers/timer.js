(function(){
	angular.module("ui")
			.controller("timer", timer);

	function timer($scope, $timeout){
		var countDowner, countDown = 40;
		
		countDowner = function() {
			if (countDown < 0) {
			  $("#warning").fadeOut(2000);
			  countDown = 0;
			  return; // quit
			} else {
			  $scope.countDown_text = countDown; // update scope
			  countDown--; // -1
			  $timeout(countDowner, 1000); // loop it again
			}
	  };

	  $scope.countDown_text = countDown;
	  countDowner()
	}
})();

//the timer  controller is set below the Legend in html. later make changes to the controller and also to the html page