// function getInfo() {
// 	var obs = ob.textContent
// 	return obs
// }

function algobfs(info) {

	var obj = new Object()
	var seen = []
	var obs = info
	var list = []
	list.push(sp.textContent)

	if (sp.textContent == ep.textContent) {
		return []
	}

	while (list.length) {

		node = list.shift()
		seen.push(node)


		var neighbors = getNeighbors(node)
		for (i = 0, l = neighbors.length; i < l; ++i) {
			nb = neighbors[i]
			if (nb == ep.textContent) {
				obj[nb] = node
				return tracePath(nb, obj)
			}
			if (seen.includes(nb)) {
				continue;
			}
			if (!(obs.includes(nb))) {
				if (!(list.includes(nb))) {
					if ((+(nb.split('x')[0]) > -1 && +(nb.split('x')[1]) > -1 && +(nb.split('x')[0]) < 25 && +(nb.split('x')[1]) < 25)) {
						obj[nb] = node
						list.push(nb)
					}
				}
			}

		}

	}
	alert("No path found!")
	return [];


}

// function tracePath(ep, list) {
// 	var fl = [ep]
// 	currNode = ep
// 	while (currNode != sp.textContent) {
// 		currNode = list[currNode]
// 		fl.push(currNode)
// 	}
// 	return fl

// }

function getNeighbors(node) {
	var arr = node.split('x')
	return [
		parseInt((+arr[0]) - 1) + 'x' + parseInt(+arr[1] - 1),
		parseInt((+arr[0]) - 1) + 'x' + parseInt(+arr[1] - 0),
		parseInt((+arr[0]) - 1) + 'x' + parseInt(+arr[1] + 1),
		parseInt((+arr[0]) - 0) + 'x' + parseInt(+arr[1] - 1),
		parseInt((+arr[0]) - 0) + 'x' + parseInt(+arr[1] + 1),
		parseInt((+arr[0]) + 1) + 'x' + parseInt(+arr[1] - 1),
		parseInt((+arr[0]) + 1) + 'x' + parseInt(+arr[1] - 0),
		parseInt((+arr[0]) + 1) + 'x' + parseInt(+arr[1] + 1)
	]
}

function breadth() {
	var info = getInfo()
	var path = algobfs(info)
	console.log(path)
	return path


}