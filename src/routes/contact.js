export const POST = async ({ request }) => {
	const formData = await request.formData();
	const name = formData.get('name');
	const companyName = formData.get('company-name');
	const email = formData.get('email');
	const number = formData.get('number');
	const comments = formData.get('comments');

	const response = await fetch(
		`https://docs.google.com/forms/d/e/1FAIpQLSe8Bkl9ACupaJbcpl_-YG_Nrz8nkqBKcaTT0VQ_plOuooOaLA/formResponse?usp=pp_url&entry.2104981141=${name}&entry.133838594=${companyName}&entry.575378189=${email}&entry.1582703685=${number}&entry.1472823718=${comments}`
	);

	if (response.status === 200) {
		return {
			status: 200,
			body: {
				message: 'success',
			},
		};
	}

	return {
		status: 400,
		body: {
			message: 'error',
		},
	};
};
