import { useMutation } from "@tanstack/react-query"
import { ArrowLeft } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import axios from "axios"

import { usePageTitle, useScrollToTop } from "hooks"
import { FormValiadtion } from "constants/schema"
import { Input, Spinner } from "components"
import styles from "utils/styles"

const initialValues = {
	name: "",
	email: "",
	company: "",
	goals: "",
	deadline: "",
	budget: "",
	description: "",
}

const budgets = ["select", "<$500", "$500 - $1000", "$1000 - $10000", "$10000 - $20000", "$20000+"]

const Start = () => {
	const navigate = useNavigate()
	usePageTitle("Inquiries")
	useScrollToTop()

	const today = new Date()
	const deadline = new Date(today.setDate(today.getDate() + 14)).toISOString().split("T")[0]

	const { isPending } = useMutation({
		mutationFn: (payload: typeof initialValues) => axios.post("https://gql.hashnode.com", payload),
		mutationKey: ["inquiry"],
		onSuccess: ({ data }) => {
			console.log(data)
		},
		onError: () => console.log("error"),
	})

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: FormValiadtion,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<main className="my-10 flex w-full flex-col px-5 lg:px-40">
			<div className="mb-10 flex w-full items-center justify-between">
				<button onClick={() => navigate(-1)} className="flex items-center gap-2">
					<ArrowLeft />
					Back
				</button>
			</div>
			<p className={styles.heading}>Inquiries</p>
			<p className="my-5 text-base text-dark lg:text-xl">
				Thinking about your next big move? We're here to make it happen. Fill out the form below, and
				you'll hear back from us within 48 hours—because your vision deserves swift action.
			</p>
			<div className="mt-10 grid w-full grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
				<div className="w-full"></div>
				<div className="w-full">
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
						<Input
							typed="text"
							id="name"
							onChange={handleChange}
							label="My name is:"
							error={errors.name}
							placeholder="Full name"
						/>
						<Input
							typed="text"
							id="company"
							onChange={handleChange}
							label="I work at:"
							error={errors.company}
							placeholder="Company name"
						/>
						<Input
							typed="text"
							id="goals"
							onChange={handleChange}
							label="I need help with:"
							error={errors.goals}
							placeholder="My goals"
						/>
						<Input
							typed="date"
							id="deadline"
							onChange={handleChange}
							label="My deadline is:"
							error={errors.deadline}
							min={deadline}
						/>
						<Input
							as="select"
							id="budget"
							onChange={handleChange}
							label="My budget range:"
							error={errors.budget}>
							{budgets.map((budget, index) => (
								<option key={index} value={budget}>
									{budget}
								</option>
							))}
						</Input>
						<Input
							typed="email"
							id="email"
							onChange={handleChange}
							label="My email:"
							error={errors.email}
							placeholder="Email address"
						/>
						<Input
							as="textarea"
							id="description"
							onChange={handleChange}
							label="Optionally, share additional description"
							error={errors.description}
							placeholder="Product details"></Input>
						<button
							type="submit"
							className="button max-w-fit border border-dark-400 bg-dark-400 text-light transition-all duration-500  hover:bg-light hover:text-dark-400">
							{isPending ? <Spinner /> : "Send inquiry"}
						</button>
					</form>
				</div>
			</div>
		</main>
	)
}

export default Start
