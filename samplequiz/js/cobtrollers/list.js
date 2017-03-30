(function(){
	
angular.module("ui")
       .controller("listCtrl", ListController);
	   
ListController.$inject = ['quizMetrics','dataService'];

	function ListController(quizMetrics, dataService){
		var vm = this;
		vm.quizMetrics=quizMetrics;
		vm.data = dataService.uidata;
		vm.activeFw={};
		vm.changeActiveFw = changeActiveFw;
		vm.activateQuiz= activateQuiz;
		vm.search="";

		function activateQuiz(){
			//vm.quizMetrics.activeQuiz="true";
			//the above code also works instead of function
			quizMetrics.changeState("quiz", true);
		}

		function changeActiveFw(index){
		  vm.activeFw=index;
		}
	}
})();
