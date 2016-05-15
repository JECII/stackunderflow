app.controller('DashboardController', function($rootScope, $scope, DataService){
	$scope.myQuestions = [];
	$scope.tags = DataService.getTags();
	DataService.getQuestions().$loaded(function(data){
		findMemberId(data)	
	});
	
	$scope.updateMember= function(){
		
	 $rootScope.member.$save()
	console.log($rootScope.member)
	}
	 function findMemberId(questions){
		var currentMember = $rootScope.member.$id;
		for(var i = 0; i < questions.length; i++){
			if(currentMember == questions[i].memberId){		
				$scope.myQuestions.add(questions[i])
			}
	console.log(questions)
		}
	 }
	 
	 
	
	// /
	//  * To edit the member object you must go through $rootScope.member
	//  * $rootScope.member is a $firebaseObject from AngularFire 
	//  * To see the methods at your disposal look here
	//  * https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebaseobject
	//  * 
	//  * Don't forget to call $rootScope.member.$save() after making changes to the $rootScope.member object
    //  * 
    //  * A feature request would be to add an edit profile button to the view that can show and hide the edit form in your html
	//  * 
	//  * */
	
});