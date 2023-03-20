
export function rps(shot) {
	let machine_choice = Math.floor(Math.random()*3);
	machine_choice = machine_choice == 0 ? "rock" :
					machine_choice == 1 ? "paper" :
					"scissors";

	if (shot == undefined) {
		return { player: machine_choice };
	}

	let options = ['rock', 'paper', 'scissor'];

	if (!options.includes(user)) {
			if (user === "lizard" || user === "spock") {
				console.error(`${shot} is out of range.`);
				throw new RangeError();
			} else {
				console.error(`${shot} is not a valid choice.`);
				throw new RangeError();
			}
		}

	let res = '';

	if (machine_choice === user) {
		res = "tie";
	} else if (machine_choice === "rock" && user === "scissors" || machine_choice === "paper" && user === "rock" || machine_choice === "scissors" && user === "paper") {
		res = "lose";
	} else {
		res = "win";
	}

	return { "player": shot, "opponent": machine_choice, "res": res };
}

export function rpsls(shot){
    const hand = ["rock", "paper", "scissors", "lizard", "spock"];
    if(shot == null){
        return{"player": hand[Math.floor(Math.random() * 5)]};
    }
    shot = shot.tolowerCase();
    let machine_choice = hand[Math.floor(Math.random() * 5)];
    var res;
    if(!hand.includes(shot)){
        console.log(`${shot} is out of range.`);
        console.error();
    }
    if(shot === machine_choice){
        res = "tie";
    } else if( hand === "rock" && (machine_choice === "scissors" || machine_choice === "lizard") ||  hand === "paper" && (machine_choice === "rock" || machine_choice === "spock") || hand === "scissors" && (machine_choice === "paper" || machine_choice === "lizard")){
        res = "win";
    } else if( hand === "lizard" && (machine_choice === "paper" || machine_choice === "spock") || hand === "spock" && (machine_choice === "scissors" || machine_choice === "rock")){
        res = "win";
    } else{
        res = "lose";
    }
    return {"player": shot, "opponent": machine_choice, "res": res};
}