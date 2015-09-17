#pragma strict

var spirit_point: GameObject;

function OnCollisionEnter() {
	var newpoint = Instantiate(spirit_point, this.transform.position, Quaternion.identity);
	newpoint.GetComponent(Scripts_mspiritptscript).go = true;
	Destroy(gameObject);
}