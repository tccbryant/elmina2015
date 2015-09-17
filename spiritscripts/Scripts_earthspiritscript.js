#pragma strict

var push_power: float;

function Start () {
}

function Update () {
}

function OnCollisionEnter(collision: Collision) {
	if(collision.collider.tag == "movable_rock") {
		var tar_pos = collision.collider.transform.position; //position of the rock
		
		//obtaining the direction vector
		var temp_target = tar_pos - this.transform.position;
		temp_target = temp_target/temp_target.magnitude;
		
		//changing the length of the direction vector
		temp_target.x *= push_power;
		temp_target.z *= push_power;
		temp_target.y = 0;
		
		//accounting for the original position of the rock
		temp_target.x += tar_pos.x;
		temp_target.z += tar_pos.z;
		
		//setting the destination
		collision.collider.gameObject.GetComponent(Scripts_rockscript).target = temp_target;
	}
	Destroy(gameObject);
}