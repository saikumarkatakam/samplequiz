(function(){

  angular.module("ui")
         .controller("quizCtrl", QuizController);

  QuizController.$inject = ['quizMetrics','dataService'];

	function QuizController(quizMetrics, dataService){
		var vm = this;
		vm.quizMetrics = quizMetrics;
		vm.dataService = dataService
		vm.activeQuestion = 0;
		vm.questionAnswered = questionAnswered;
		vm.setActiveQuestion = setActiveQuestion;
		vm.selectAnswer = selectAnswer;
		var numQuestionsAnswered=0;
		vm.error= false;
		vm.finalise = false;
		vm.finaliseAnswers = finaliseAnswers;
		
		function setActiveQuestion(index){	
			if(index === undefined){
						//vm.activeQuestion++;
				var breakOut = false;
				var quizLength= dataService.quizdata.length - 1;
		
				while(!breakOut){
					vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;		
					if(vm.activeQuestion === 0){
						vm.error=true;
					}		
					if(dataService.quizdata[vm.activeQuestion].selected === null){				
						breakOut = true;
					}	
				}
			}
			else{			
				vm.activeQuestion = index;
			}
		}
		
		function selectAnswer(index){	
			dataService.quizdata[vm.activeQuestion].selected = index;	
		}
		  
		function questionAnswered(){
			var quizLength= dataService.quizdata.length;
			if(dataService.quizdata[vm.activeQuestion].selected !== null){	  
				numQuestionsAnswered++;	  
				if(numQuestionsAnswered >= quizLength){
				  //finalize quiz		  
					for(var i=0;i < quizLength; i++){
						if(dataService.quizdata[i].selected === null){
							setActiveQuestion(i);
							return;
						}			  
					}		  
					vm.error= false;
					vm.finalise = true;
					return;			  
				}	  
			}
			vm.setActiveQuestion(); 	
		}
	  
		function finaliseAnswers(){	  
			vm.finalise = false;
			vm.activeQuestion = 0;
			numQuestionsAnswered =0;
			quizMetrics.markQuiz();
			quizMetrics.changeState("quiz", false);
			quizMetrics.changeState("results", true);  
		}
	}
})();
