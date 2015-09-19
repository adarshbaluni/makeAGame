#pragma strict

var count : int = 0 ;
function OnTriggerEnter (info : Collider) {
	if(info.tag == "Player"){
	
		//Debug.Log("Coin Collected") ;
		count = count + 1 ;
		Debug.Log(" Count incremented") ;
		Destroy(gameObject);
		GUI.Label (Rect (10, 30, 1000, 20),"Coins: " + count.ToString());
	}
}