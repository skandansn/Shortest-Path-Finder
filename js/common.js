function getInfo() {
	var obs = ob.textContent
	return obs
}
function tracePath(ep, list) {
	var fl = [ep]
	currNode = ep
	while (currNode != sp.textContent) {
		currNode = list[currNode]
		fl.push(currNode)
	}
	return fl

}
