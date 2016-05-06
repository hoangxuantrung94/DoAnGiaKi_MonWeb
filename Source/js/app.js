var phonecatApp = angular.module('App', []);

phonecatApp.controller('TodoCtrl', function ($scope,$http) {
	$http.get('https://api.myjson.com/bins/386rc').success(function(data) {
		//https://api.myjson.com/bins/3kt5o
    $scope.hinhDaiDien = data.JhinhDaiDien;
	$scope.thongTinCaNhanh = data.JthongTinCaNhanh;
	$scope.parcours = data.Jparcours;
	$scope.Summary = data.JSummary;
	$scope.Experience = data.JExperience;
	$scope.MemberDirectors1 = data.JMemberDirectors1;
	$scope.MemberDirectors2 = data.JMemberDirectors2;
	$scope.idBackgroundVolunteeringContainer = data.JidBackgroundVolunteeringContainer;
	$scope.skills = data.Jskills;
	$scope.education = data.Jeducation;
	});
	
	$scope.ten;
	
	$scope.FTen = function() {
			var theElement = document.getElementById("fullname");
			theElement.innerHTML = $scope.ten;
			$scope.ten = null;
		};
		
	$scope.congviec;
	
	$scope.FCongViec = function() {
			var theElement = document.getElementById("CongViec");
			theElement.innerHTML = $scope.congviec;
			$scope.congviec = null;
		};
		
	$scope.diachi;
	
	$scope.FDiaChi = function() {
			var theElement = document.getElementById("locality");
			theElement.innerHTML = $scope.diachi;
			$scope.diachi = null;
		};
		
	$scope.secteur;
	
	$scope.FSecteur = function() {
			var theElement = document.getElementById("industry");
			theElement.innerHTML = $scope.secteur;
			$scope.secteur = null;
		};
		
	$scope.currentAt;
	
	$scope.FCurrentAt = function() {
			var theElement = document.getElementById("CurrentAt");
			theElement.innerHTML = $scope.currentAt;
			$scope.currentAt = null;
		};
		
	$scope.previousAt;
	
	$scope.FPreviousAt = function() {
			var theElement = document.getElementById("PreviousAt");
			theElement.innerHTML = $scope.previousAt;
			$scope.previousAt = null;
		};
		
	$scope.educationAndTrainingAt;
	
	$scope.FEducationAndTrainingAt = function() {
			var theElement = document.getElementById("EducationAndTrainingAt");
			theElement.innerHTML = $scope.educationAndTrainingAt;
			$scope.educationAndTrainingAt = null;
		};
		
	$scope.sdt;
	
	$scope.Fsdt = function() {
			var theElement = document.getElementById("sdt");
			theElement.innerHTML = $scope.sdt;
			$scope.sdt = null;
		};
		
	$scope.parcours;
	
	$scope.FParcours = function() {
			var theElement = document.getElementById("Parcours");
			theElement.innerHTML =  "<h2>" + $scope.parcours + "</h2>";
			$scope.parcours = null;
		};
		
	$scope.summary;
	
	$scope.FSummary = function() {
			var theElement = document.getElementById("Summary");
			theElement.innerHTML =  "<h3>" + $scope.summary + "</h3>";
			$scope.summary = null;
		};
		
	$scope.summaryLine1;
	$scope.summaryLine2;
	$scope.FSummaryLine = function() {
			var theElement = document.getElementById("SummaryLine");
			if($scope.summaryLine1 == null)
				$scope.summaryLine1 = $scope.Summary.line1;
			if($scope.summaryLine2 == null)
				$scope.summaryLine2 = $scope.Summary.line2;
			theElement.innerHTML =  $scope.summaryLine1 + "<br>" + "<br>" + $scope.summaryLine2 + "<br>";
			$scope.summaryLine1 = null;
			$scope.summaryLine2 = null;
		};
		
	$scope.experience;
	$scope.FExperience = function() {
			var theElement = document.getElementById("Experience");
			theElement.innerHTML =  "<h3>" + $scope.experience + "</h3>";
			$scope.experience = null;
		};
		
	$scope.ceo;
	$scope.FCeo = function() {
			var theElement = document.getElementById("Ceo");
			theElement.innerHTML =  $scope.ceo;
			$scope.ceo = null;
		};
		
	$scope.datetime;
	$scope.date;
	$scope.FDate = function() {
			var theElement = document.getElementById("Date");
			if($scope.datetime == null)
				$scope.datetime = $scope.Experience.Datetime;
			if($scope.date == null)
				$scope.date = $scope.Experience.Date;
			theElement.innerHTML =  "<time>" + $scope.datetime + "</time>" + " - " + $scope.date;
			$scope.date = null;
			$scope.datetime = null;
		};
		
	$scope.experienceShowMore;
	$scope.FExperienceShowMore = function() {
			var theElement = document.getElementById("ExperienceShowMore");
			theElement.innerHTML =  $scope.experienceShowMore;
			$scope.experienceShowMore = null;
		};
		
	$scope.a;
	$scope.FA = function() {
			var theElement = document.getElementById("A");
			theElement.innerHTML =  $scope.a;
			$scope.a = null;
		};
		
	$scope.p;
	$scope.FP = function() {
			var theElement = document.getElementById("P");
			theElement.innerHTML =  $scope.p;
			$scope.p = null;
		};
	
	$scope.a2;
	$scope.FA2 = function() {
			var theElement = document.getElementById("A2");
			theElement.innerHTML =  $scope.a2;
			$scope.a2 = null;
		};
		
	$scope.p2;
	$scope.FP2 = function() {
			var theElement = document.getElementById("P2");
			theElement.innerHTML =  $scope.p2;
			$scope.p2 = null;
		};
		
	$scope.h3;
	$scope.FH3 = function() {
			var theElement = document.getElementById("H3");
			theElement.innerHTML =  $scope.h3;
			$scope.h3 = null;
		};
		
	$scope.skillsH3;
	$scope.FSkillsH3 = function() {
			var theElement = document.getElementById("SkillsH3");
			theElement.innerHTML =  $scope.skillsH3;
			$scope.skillsH3 = null;
		};
		
	$scope.skillsH5;
	$scope.FSkillsH5 = function() {
			var theElement = document.getElementById("SkillsH5");
			theElement.innerHTML =  $scope.skillsH5;
			$scope.skillsH5 = null;
		};
		
	$scope.educationA;
	$scope.FEducationA = function() {
			var theElement = document.getElementById("EducationA");
			theElement.innerHTML =  $scope.educationA;
			$scope.educationA = null;
		};
		
	$scope.educationSpan;
	$scope.FEducationSpan = function() {
			var theElement = document.getElementById("EducationSpan");
			theElement.innerHTML =  $scope.educationSpan;
			$scope.educationSpan = null;
		};
		
	$scope.educationDateFrom;
	$scope.educationDateTo;
	$scope.FEducationDate = function() {
			var theElement = document.getElementById("EducationDate");
			if($scope.educationDateFrom == null)
				$scope.educationDateFrom = $scope.education.datetimefrom;
			if($scope.educationDateTo == null)
				$scope.educationDateTo = $scope.education.datetimeto;
			theElement.innerHTML =  "<time>" + $scope.educationDateFrom + "</time>" + " - " + "<time>" + $scope.educationDateTo + "</time>";
			$scope.educationDateFrom = null;
			$scope.educationDateTo = null;
		};
  
});
















