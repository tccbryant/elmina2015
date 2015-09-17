#pragma strict

var target: Vector3;

private var nav: NavMeshAgent;

function Start () {
	nav = GetComponent(NavMeshAgent);
	target = transform.position;
}

function Update () {
	nav.SetDestination(target);
}