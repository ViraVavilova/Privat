var firstNum = 2;
var secondNum = 2;
var thirdNum = 3;

var firstString = "You";
var secondString = "You";
var thirdString = "Me";

var firstArr = [2,3,4,5];
var secondArr = [2,3,4,5];
var thirdArr = [4,3,5,1];



var firstObject = {
	name: "Dog",
	age: 3,
	happy: true
}
var secondObject = {
	name: "Dog",
	age: 3,
	happy: true
}
var thirdObject= {
	name: "Cat",
	age: 9,
	happy: true
}

var nullNum = null;

var forthObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: false
	}
}
var fifthObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: false
	}
}

var sixthObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: false
	}
}
var seventhObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: {
			size: "small",
			funny: false
		}
	}
}
var eightthObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: {
			size: "small",
			funny: false
		}
	}
}

var ninethObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: {
			size: "small",
			funny: {
				today: false,
				yesterday: true
			}
		}
	}
}

var tenthObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: {
			size: "small",
			funny: {
				today: false,
				yesterday: true
			}
		}
	}
}

function deepEqual(value1,value2){
	if (typeof value1 !== typeof value2) {
		return false;
	}else{
		if (typeof value1 !== "object") {
			if (value1 === value2) {
					return false;
			}else{
				return false;
			}
		}
		else{
			if (typeof value1 == null ) {
				return false;
			}
			else{
				if(value1.length !== value2.length){
					return false;
				}else{
					var keysArr1 = Object.keys(value1);
					var keysArr2 = Object.keys(value2);
					var on = 0;
					for (var i = 0; i < keysArr1.length; i++) {
						if (keysArr1[i]===keysArr2[i]) {
								on++;
							}
					}
					if(on !== keysArr1.length){
						return false;
					}else{
						var check;
						for(var key in value1){
							if (typeof value1[key] == "object") {
								var NewValue1 = value1[key];
								var NewValue2 = value2[key];
								check = deepEqual(NewValue1, NewValue2);
							}else{
								if (value1[key]!== value2[key]) {
									return false;
								}	
							}
						}
						if(check == false){
							return false;
						}else{
							return true;
						}
					}
				}
			}
		}
	}
}

/*deepEqual(firstNum, secondNum);
deepEqual(firstNum, thirdNum);

deepEqual(firstString, secondString);
deepEqual(firstString, thirdString);*/

//var result = deepEqual(firstObject, secondObject);
//deepEqual(firstObject, thirdObject);
//deepEqual(thirdObject,forthObject);
//deepEqual(forthObject,fifthObject)
//deepEqual(fifthObject,sixthObject);	
//var result = deepEqual(seventhObject,eightthObject);
var result = deepEqual(ninethObject,tenthObject);




if(result){
	console.log("Values are equal");
}else{
	console.log("Values are not equal");
}







