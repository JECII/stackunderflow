app.controller('DashboardController', function ($rootScope, $scope, DataService) {
	$scope.myQuestions = [];
	$scope.tags = DataService.getTags();
	DataService.getQuestions().$loaded(function (data) {
		findMemberId(data)
	});

	// console.log($scope.questions)
	$scope.updateMember = function () {

		$rootScope.member.$save()
		console.log($rootScope.member)
	}
	function findMemberId(questions) {
		var keys = Object.keys(questions[0].comments);
		var currentMember = $rootScope.member.$id;
		for (var i = 0; i < questions.length; i++) {
			if (currentMember == questions[i].memberId) {
				$scope.myQuestions.push(questions[i])
				
			}
		}
		// console.log(questions[0].comments[keys[0]].body)
		// console.log(questions[0].comments[keys[1]].body)
		// console.log(questions[0].comments[keys[2]].body)
		// console.log(questions[0].comments[keys[1]].body)
		
			
		}
	// $scope.findAllComments = function(comments){
	// 		var keys = Object.keys(questions[0].comments);
	// 		// var currentCommments = questions[0].comments[keys[0]].body;
	// 		for (var i = 0;i < keys.length;i++){
	// 			if( currentComments == keys[i]){
	// 				return{currentComments}
	// 			}
	// 		}
	// 		findAllComments()
	// }




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