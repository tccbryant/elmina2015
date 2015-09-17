#pragma strict

var smooth: float;

private var hit_collectible: boolean;
private var player: GameObject;
private var start_pos: Vector3;

function Start () {
	hit_collectible = false;
	player = GameObject.FindWithTag("Player");
}

function Update () {
	if(hit_collectible) {
		this.transform.position = Vector3.Lerp(this.transform.position, player.transform.position, Time.deltaTime*smooth);
	}
}


function OnCollisionEnter(collision: Collision) {
	if(collision.collider.tag == "Collectible") {
		collision.collider.isTrigger = true;
		collision.collider.transform.position = this.transform.position;
		start_pos = collision.collider.transform.position;
		collision.collider.transform.parent = this.transform;
		hit_collectible = true;
		Destroy(this.GetComponent(Rigidbody));
	}
	if(collision.collider.tag == "Player") {
		//
		//add the item to the player's inventory
		//
	}
}