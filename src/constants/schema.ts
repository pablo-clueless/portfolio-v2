import * as Yup from "yup"

export const FormValiadtion = Yup.object({
	name: Yup.string().required("Name is required!"),
	email: Yup.string().email("Invalid email!").required("Email is required!"),
	company: Yup.string().required("Company is required!"),
	goals: Yup.string().required("Goals are required!"),
	deadline: Yup.date().required("Deadline is required!"),
	budget: Yup.string()
		.oneOf(
			["<$500", "$500 - $1000", "$1000 - $10000", "$10000 - $20000", "$20000+"],
			"Please, select a budget range!"
		)
		.required("Budget is required!"),
	description: Yup.string().optional(),
})
