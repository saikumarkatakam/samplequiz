(function(){
	angular.module("ui")
		   .controller("ResultsCtrl", ResultsController);
	
	ResultsController.$inject=['quizMetrics', 'dataService'];
	
	function ResultsController(quizMetrics, dataService){
		var vm = this;
		vm.quizMetrics= quizMetrics;
		vm.dataService= dataService;
		vm.activeQuestion = 0;
		vm.getAnswerClass=getAnswerClass;
		vm.setActiveQuestion = setActiveQuestion;
		vm.reset = reset;
		vm.calculatePercentage=calculatePercentage;
	
		function calculatePercentage(){
			return quizMetrics.numAnswersCorrect/dataService.quizdata.length * 100;
		}
	
		function setActiveQuestion(index){
			vm.activeQuestion= index;
		}
	
		function getAnswerClass(index){	
			if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
				return "bg-success";
			}
			else if(index === dataService.quizdata[vm.activeQuestion].selected){		
				return "bg-danger";
			}
		}
	
		function reset(){
			quizMetrics.changeState("results", false);
			quizMetrics.numAnswersCorrect = 0;
			
			for(var i=0; i < dataService.quizdata.length; i++){		
				var data= dataService.quizdata[i];		
				data.selected = null;
				data.correct = null;				
			}	
		}	
	}	
})();