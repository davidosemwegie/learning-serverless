const handler = async (event: any) => {
	console.log("Taking off in 5, 4, 3, 2, 1")

	if (event.httpMethod === "GET") {
		return {
			statusCode: 200,
			body: JSON.stringify({
				type: "GET",
				message: "Getting some data",
			}),
		}
	}
	if (event.httpMethod === "POST") {
		return {
			statusCode: 200,
			body: JSON.stringify({
				type: "POST",
				message: "Posting some data",
			}),
		}
	}

	return {
		message: "SERVERLESS FUNCTION IS WORKING",
	}
}

export { handler }
