var phonecatApp = angular.module('App', []);

phonecatApp.controller('TodoCtrl', function ($scope) {
	$scope.hinhDaiDien = {'imageUrl': 'images/Trung.jpg'};
	$scope.thongTinCaNhanh = {
		'Ten': 'Hoàng Xuân Trung',
		'CongViec': 'CEO at LinkedIn',
		'diachi': 'Duc Linh - Binh Thuan',
		'Secteur': 'Internet',
		'Influenceur': 'Influenceur',
		'Current': 'Actuel',
		'CurrentAt': 'LinkedIn',
		'Previous': 'Previous',
		'PreviousAt': 'Malaria No More',
		'EducationAndTraining': 'Education and training',
		'EducationAndTrainingAt': 'universerty of science',
		'Sdt': 'phone number',
		'sdt': '01677 978 894',
		'Suivre': 'Suivre',
		'Vousconnaissez': 'Vous connaissez Trung?',
		'SeConnecter': 'Se connecter',
		'SeConnecterLink': '/people/invite?from=profile&amp;key=22330283&amp;firstName=Jeff&amp;lastName=Weiner&amp;authToken=XTo9&amp;authType=name&amp;connectionParam=member_desktop_profile_influencer&amp;csrfToken=ajax%3A7784105811618584052&amp;goback=%2Enppvan_jeffweiner08&amp;trk=nprofile-flw_connect'
	};
	/*$scope.todos = [{ "txt":"learn angular"}];
	$scope.todos = [{ "text":"learn angular", "done":true }];*/
	
	$scope.parcours = {
		'Parcours': 'Parcours'
	};
	$scope.Summary = {
		'summary': 'summary',
		'line1': 'Internet executive with over 20 years of experience, including general management of mid to large size organizations, corporate development, product development, business operations, and strategy.',
		'line2': 'Currently CEO at LinkedIn, the web largest and most powerful network Of professionals...'
	};
	$scope.Experience = {
		'experience': 'Experience',
		'CEO': 'CEO',
		'LinkedIn': 'LinkedIn',
		'Datetime': 'décembre 2008',
		'Date': '– Aujourd’hui (7 ans 5 mois)',
		'ExperienceShowMore': 'Connecting the worlds professionals to make them more productive and successful. Since joining the company in December 2008, LinkedIn has expanded its global platform to 23 languages and more than 30 offices around the world, grown its membership base from 33M to more than 347M, and increased its revenue from $78M to over $2.2B in 2014.',
		'mediaData1': 'LinkedIn"s Vision for the Next 10 Years',
		'mediaData2': 'Bloomberg: LinkedIn Growth Has Reached "Critical Mass"',
		'mediaData3': 'LinkedIn"s Culture Of Transformation',
		'mediaData4': 'Building a Culture Of Compassion',
		'mediaData5': 'Building a Culture Of CompassionNY TImes: Jeff Weiner of LinkedIn, on the "Next Play" Philosophy'
	};
	$scope.MemberDirectors1 = {
		'a': 'Member, Board of Directors',
		'span': 'Input',
		'Datetime': 'avril 2012',
		'Date': '– Aujourd’hui (4 ans 1 mois)',
		'span_locality': 'Mountain View, CA',
		'p': 'With revenue of $4B+ and approximately 8,000 employees, Intuit is a leading provider of innovative business and financial management solutions for small and medium-sized businesses, consumers, accounting professionals and financial institutions.',
	};
	$scope.MemberDirectors2 = {
		'a': 'Member, Board of Directors',
		'span': 'DonorsChoose',
		'Datetime': '2007',
		'Date': '– Aujourd’hui (9 ans)',
		'span_locality': 'Mountain View, CA',
		'p': 'One of the web"s leading philanthropic marketplaces, designed to enable teachers to upload classroom projects in need of funding, and for anyone to select and fund a project.',
		'span21': '(en cours)',
		'span22': '1 recommandation',
		'h6': 'Founder, DonorsChoose.org',
		'span3': 'Jeff Weiner is a mentor to me and a singularly effective champion of DonorsChoose.org. His “consumer product instinct” has shaped the user experience of our website. His introductions have generated more than $1 million in funding. And his...',
		'a2': 'Voir'
	};
	$scope.idBackgroundVolunteeringContainer = {
		'h3': 'Causes et expériences de bénévolat',
		'h4': 'Des opportunités qui intéressent Jeff :',
		'span': 'Comment aimeriez-vous faire don de votre temps et de votre talent ?',
		'h42': 'Les causes qui importent à Jeff :',
		'span2': 'Les sujets et les causes qui comptent pour vous.',
		'li1': 'Autonomisation économique',
		'li2': 'Formation',
		'li3': 'Santé',
		'h43': 'Les organismes auxquels Jeff apporte son soutien :',
		'span3': 'Quels sont vos organismes préférés ?',
		'li21': 'Boys Girls Clubs of the Peninsula',
		'li22': 'DonorsChoose.org',
		'li23': 'Malaria No More',
		'li24': 'Venture For America'
	};
	$scope.skills = {
		'h3': 'Compétences',
		'h5': 'Top des compétences'
	};
	
  
});
















