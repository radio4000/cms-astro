import dayjs from 'dayjs'

/**
 *
 * @param {date or datetime} dateValue
 * @param {string} format
 * @returns {string} formatted with dayjs according to the "format"
 * For formatting options see https://day.js.org/docs/en/display/format
 */
export default function formatDate(dateValue, format = 'DD/MM/YYYY') {
	return dateValue ? dayjs(dateValue).format(format) : '?'
}
