(function(){

  angular
          .module("ui")
          .factory("quizMetrics", QuizMetrics);
		  
		  QuizMetrics.$inject = ['dataService'];

  function QuizMetrics(dataService){
    var quizObj = {
      quizActive: false,
	  resultsActive: false,
   changeState: changeState,
   markQuiz:markQuiz,
   correctAnswers:[],
   numAnswersCorrect:0
   
    };
    return quizObj;

  function changeState(metric, state){
	  
	  if(metric === "quiz"){
		  
		   quizObj.quizActive = state;
	  }
	  else if(metric === "results"){
		  
		   quizObj.resultsActive = state;
		  
	  }else{
		  
		  return false;
	  }
	  
     

    }
	
	function markQuiz(){
		
		quizObj.correctAnswers = dataService.correctAnswers;
		
		for(var i=0; i<dataService.quizdata.length; i++){
			
			if(dataService.quizdata[i].selected === dataService.correctAnswers[i]){
				
				dataService.quizdata[i].correct = true;
				quizObj.numAnswersCorrect++;
			}
			else{
				
				dataService.quizdata[i].correct = false;
			}
		}		
	}

  }
})();
