#pragma strict
var reach: float;
var carry_distance: float;
var smooth: float;

//throw the spirit at a 'rock' and move the rock
var earth_spirit: GameObject;
//throw this at hard to reach objects to attract them to your hand
var water_spirit: GameObject;
//spawn a single point object that onini looks for
var music_spirit: GameObject;

private var cam: Camera;

var is_carrying = false;
private var spirit_to_carry: GameObject;			//the spirit we are carrying
private var hold_height: Vector3;


function Start () {
	cam = gameObject.GetComponentInChildren(Camera);
}

function Update () {
	Cursor.lockState = CursorLockMode.Locked;
	
	hold_height = new Vector3(this.transform.position.x, this.transform.position.y + 1, this.transform.position.z); 

	var ray = cam.main.ScreenPointToRay(new Vector3(Screen.width/2, Screen.height/2, 0));
	var hit: RaycastHit;
	
	//move this in front of the other stuff
	if(is_carrying) {
		CarryObject(spirit_to_carry);
	}
	
	if(Physics.Raycast(ray, hit, reach)) {
		if(Input.GetMouseButtonDown(0)) {		//the moment that the spirit is picked up
			//when the player clicks the earth spirit
			if(hit.collider.tag == "earth_spirit") {
				var espirit_clone = Instantiate(earth_spirit);
				spirit_to_carry = espirit_clone;
				is_carrying = true;
			}
			//when the player clicks the water spirit
			else if(hit.collider.tag == "water_spirit") {
				var wspirit_clone = Instantiate(water_spirit);
				spirit_to_carry = wspirit_clone;
				is_carrying = true;
			}
			//when the player clicks the music spirit
			else if(hit.collider.tag == "music_spirit") {				
				var mspirit_clone = Instantiate(music_spirit);
				spirit_to_carry = mspirit_clone;
				is_carrying = true;
			}
			
		}
	}
	
}

//function that lets the player carry a spirit, maybe only music spirits
function CarryObject(spirit: GameObject) {
	//change back to lerping
	spirit.transform.position = cam.transform.position + cam.transform.forward * carry_distance;//hold_height + this.transform.forward * carry_distance;
	if(Input.GetMouseButtonDown(0)) {
		
		spirit.AddComponent(Rigidbody);
		var rb = spirit.GetComponent(Rigidbody);
		//spirit.transform.position.y = 1;
		rb.AddForce(cam.transform.forward*2000);
		//rb.useGravity = false;
		is_carrying = false;
	}
}