#pragma strict

var time_to_destroy: float;
var go: boolean;

private var timer: float;

function Start () {
	
}

function Update() {
	if(go) {
		timer += Time.deltaTime;
		if(timer > time_to_destroy) {
			Destroy(gameObject);
		}
	}
}

function WaitTime() {
	WaitForSeconds(10);
	Destroy(gameObject);
}