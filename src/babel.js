async function start() {
	return await new Promise((resolve, reject) => {
		resolve('async is working')
	})
}
start().then(console.log)

class Util {
	static id = Date.now()
}

console.log(Util.id)