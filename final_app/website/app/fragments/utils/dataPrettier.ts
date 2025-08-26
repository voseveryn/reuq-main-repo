export const formatDate = (isoDate: string) => {
	const date = new Date(isoDate)

	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear() % 100

	const dayString = day < 10 ? `0${day}` : `${day}`
	const monthString = month < 10 ? `0${month}` : `${month}`
	const yearString = year < 10 ? `0${year}` : `${year}`

	return `${dayString}/${monthString}/${yearString}`
}