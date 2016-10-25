/**
 * Resume Interactivity
 */

 // run after DOM construction
$(function() {

	/* Content  Array */
	var content = [];

	/* Objects with toggle and content properties */
	var education = {},
		work = {},
		awards = {},
		skills = {},
		volunteer = {},
		personal = {};

	education.content = $('#education');
	education.toggle = $('#education-toggle');
	content.push(education);

	work.content = $('#work-experience');
	work.toggle = $('#work-toggle');
	content.push(work);

	awards.content = $('#awards');
	awards.toggle = $('#awards-toggle');
	content.push(awards);

	skills.content = $('#technical-skills');
	skills.toggle = $('#skills-toggle');
	content.push(skills);

	volunteer.content = $('#volunteer');
	volunteer.toggle = $('#volunteer-toggle');
	content.push(volunteer);

	personal.content = $('#personal');
	personal.toggle = $('#personal-toggle');
	content.push(personal);

	/* Event Handling */
	var eventHandler = function(elem) {
		elem.toggle.change(function() {
			if ( elem.toggle.prop('checked') ) {
				elem.content.show();
			}
			else {
				elem.content.hide();
			}
		});
	};

	/* Apply Event Handler Content */
	content.forEach(function(element){
		eventHandler(element);
	});
});