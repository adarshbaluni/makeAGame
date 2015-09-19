﻿#pragma strict

var rotationSpeed = 500 ;
var jumpHeight = 8 ;
private var isFalling = false ;
  
      
function Update () {

	//Handle ball rotation.
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed ;
	rotation *= Time.deltaTime ;
	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation) ;
	
	if(Input.GetKeyDown(KeyCode.W) && isFalling == false){ 
		GetComponent.<Rigidbody>().velocity.y = jumpHeight ;	
		
	}
	isFalling = true ;
}

function OnCollisionStay(){
	isFalling = false;

}