const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "695 Park Ave, New York, NY 10065"
	});
	const dummy_campus2 = await Campus.create({
		name: "MIT",
		description: "",
		address: "Somewhere in Mass."
	});
	const dummy_campus3 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "Cambridge, MA"
	});
	
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Shmo",
		email: "joe_shmo@test.com",
		gpa: 4.0
	});
	const dummy_student2 = await Student.create({
		firstname: "Schlo",
		lastname: "Moe",
		email: "scholo_moe@pentagon.gov",
		gpa: 0.1
	});

	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

module.exports = seedDB;