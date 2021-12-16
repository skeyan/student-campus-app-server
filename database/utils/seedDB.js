const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "695 Park Ave, New York, NY 10065"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "Cambridge, MA"
	});
	const dummy_campus3 = await Campus.create({
		name: "MIT",
		address: "Somewhere in Mass."
	})

	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Shmo",
	});
	const dummy_student2 = await Student.create({
		firstname: "Schlo",
		lastname: "Mo",
	});

	await dummy_student.setCampus(dummy_campus);

}

module.exports = seedDB;