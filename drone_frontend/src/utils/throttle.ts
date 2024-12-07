export const throttle = (callback: () => void, delay: number) => {
	let wait = false
	return function () {
		if (!wait) {
			callback()
			wait = true
			setTimeout(function () {
				wait = false
			}, delay)
		}
	}
}
