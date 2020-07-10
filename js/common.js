function getInfo() {
	var obs = obh.textContent
	console.log(obs)
	return obs
}
function tracePath(ep, list) {
	var fl = [ep]
	console.log(fl)
	currNode = ep
	while (currNode != sp.textContent) {
		currNode = list[currNode]
		fl.push(currNode)
	}
	return fl

}
