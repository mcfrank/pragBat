// preload
var preFruits = ["duck.png","car.png","car_me.png","bear.png","ball.png","t01.png", "t02.png", "t03.png", "t04.png", "t05.png", "t06.png", "t07.png", "t08.png", "t09.png", "t10.png", "t11.png", "t12.png", "t13.png", "t14.png", "t15.png", "t16.png", "t17.png", "t17.png", "carrot.png","bread.png","apple_me.png","kite.png", "t18.png","t19.png","t20.png","t21.png","t22.png","t23.png","t24.png","t25.png","t26.png","t27.png","t28.png","t29.png","t30.png","t31.png","t32.png","t33.png","t34.png","t35.png", "t36.png","t37.png","t38.png","t39.png","t44.png","back1.jpg","back2.jpg","back3.jpg","back4.jpg","back5.jpg","back6.jpg","back7.jpg","back8.jpg","back9.jpg","back10.jpg","empty.png", "bear_me.png"];
//for critical trials and fillers
var images = new Array();
for (i = 0; i < preFruits.length; i++) {
	images[i] = new Image();
	images[i].src = "images/" + preFruits[i];
}


var preSounds = [
         "Monkey_hello.mp3",
    		 "Monkey_filler_inf_intro.mp3",
"Monkey_filler_label.mp3",
"Monkey_filler_more.mp3",
"Monkey_filler_which.mp3",
         "Monkey_inf_intro.mp3",
         "Monkey_label.mp3",
         "Monkey_me_choice.mp3",
         "Monkey_pref_choice.mp3",
         "Monkey_nov_choice.mp3",
         "Monkey_npoint.mp3",
         "Monkey_point_nothing.mp3",
         "Monkey_point_old.mp3",
         "Monkey_ppoint.mp3",
         "Monkey_pref_choice.mp3",
         "Monkey_train.mp3",
         "Monkey_which.mp3",
         "Bunny_hello.mp3",
         "Bunny_inf_intro.mp3",
         "Bunny_label.mp3",
         "Bunny_me_choice.mp3",
         "Bunny_pref_choice.mp3",
         "Bunny_nov_choice.mp3",
         "Bunny_npoint.mp3",
         "Bunny_point_nothing.mp3",
         "Bunny_point_old.mp3",
         "Bunny_ppoint.mp3",
         "Bunny_pref_choice.mp3",
         "Bunny_which.mp3",
        "Frog_hello.mp3",
   "Frog_filler_inf_intro.mp3",
"Frog_filler_label.mp3",
"Frog_filler_more.mp3",
"Frog_filler_which.mp3",
         "Frog_inf_intro.mp3",
         "Frog_label.mp3",
         "Frog_me_choice.mp3",
         "Frog_pref_choice.mp3",
         "Frog_nov_choice.mp3",
         "Frog_npoint.mp3",
         "Frog_point_nothing.mp3",
         "Frog_point_old.mp3",
         "Frog_ppoint.mp3",
         "Frog_pref_choice.mp3",
         "Frog_which.mp3",
         "Cat_hello.mp3",
         "Cat_inf_intro.mp3",
         "Cat_label.mp3",
         "Cat_me_choice.mp3",
         "Cat_pref_choice.mp3",
         "Cat_nov_choice.mp3",
         "Cat_npoint.mp3",
         "Cat_point_nothing.mp3",
         "Cat_point_old.mp3",
         "Cat_ppoint.mp3",
         "Cat_pref_choice.mp3",
         "Cat_which.mp3",
        "Dog_hello.mp3",
         "Dog_inf_intro.mp3",
         "Dog_label.mp3",
         "Dog_me_choice.mp3",
         "Dog_pref_choice.mp3",
         "Dog_nov_choice.mp3",
         "Dog_npoint.mp3",
         "Dog_point_nothing.mp3",
         "Dog_point_old.mp3",
         "Dog_ppoint.mp3",
         "Dog_pref_choice.mp3",
         "Dog_train.mp3",
         "Dog_which.mp3"
                 ];

//for critical trials and fillers
var sound = new Array();
for (i = 0; i < preSounds.length; i++) {
	sound[i] = new Audio();
	sound[i].src = "sound/" + preSounds[i];
}


var preloadItems = ["car", "truck", "train", "bus", "airplane", "boat", "motorbike", "strawberry", "apple", "banana", "cherry", "orange", "melon", "pineapple", "dog", "cat", "horse", "bear", "cow", "monkey", "elephant", "shoe", "sock", "hat", "shirt", "jacket", "dress", "skirt","drum", "flute", "guitar", "xylophone", "piano", "trumpet", "violin"];

var images2 = new Array();
for (i = 0; i < preloadItems.length; i++) {
    images2[i] = new Image();
    images2[i].src = "images/" + preloadItems[i] + ".png";
}

//only preload relevant audios (no speaker change)
var preloadAudios = ["hi", "lets", "intro", "thank", "it"];

var posAgents = ["Bunny","Monkey","Dog","Frog","Cat"]


// change button color on click


function downloadData(safe) {
					var toSave = JSON.stringify(safe)

				  var date = new Date().toISOString()
					var day = date.substr(0, 10)
					var time = date.substr(11, 8)

					var hiddenElement = document.createElement('a');
					hiddenElement.href = 'data:text/json;charset=utf-8,' + encodeURI(toSave);
					hiddenElement.target = '_blank';
					hiddenElement.download = 'pragBat3-' +train.subid + '-' + data.task  + '-' + day + '-' + time + '.json';
					hiddenElement.click();
		}


function submitButtonStyle(_this) {
  _this.style.backgroundColor = "green";
}


// ## Helper functions


function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

function showText(id) {
	$(".text").hide();
	$("#"+id).show();
}


function showAgent(id, orient) {
	$(".agent").hide();
    $(".point_agent_l").hide();
    $(".point_agent_r").hide();
    $(".look_agent_l").hide();
    $(".look_agent_r").hide();

	$("#"+id+"_"+orient).show();
}

function showInfAgent(id, orient) {
		$(".agent_inf").hide();
		$(".point_agent_l_inf").hide();
		$(".point_agent_r_inf").hide();
		$(".look_agent_l_inf").hide();
		$(".look_agent_r_inf").hide();

	$("#"+id+"_"+orient).show();
}


function hideAgent() {
	$(".agent").hide();
}


function choiceAgent(id) {
    $(".agent").hide();
    $(".point_agent_l").hide();
    $(".point_agent_r").hide();
    $(".look_agent_l").hide();
    $(".look_agent_r").hide();
	$("#"+id+"_choice").show();
}

function choiceInfAgent(id) {
    $(".agent_inf").hide();
	$("#"+id+"_choice").show();
}



function sourceRightFruit(a) {
   	$(".fruit_inf_r").hide();
   	$(".fruit_inf_r2").hide();
    document.getElementById("fruit_r").src = a;
};

function sourceRightFruit2(a) {
    document.getElementById("fruit_r2").src = a;
};

function sourceLeftFruit(b) {
    $(".fruit_inf_l").hide();
    $(".fruit_inf_l2").hide();
    document.getElementById("fruit_l").src = b;
};

function sourceInfLeftFruit(b) {
    $(".fruit_l").hide();
    document.getElementById("fruit_inf_l").src = b;
};

function sourceInfRightFruit(b) {
    $(".fruit_r").hide();
    document.getElementById("fruit_inf_r").src = b;
};


function sourceInfLeftFruit2(b) {
    $(".fruit_l").hide();
    document.getElementById("fruit_inf_l2").src = b;
};

function sourceInfRightFruit2(b) {
    $(".fruit_r").hide();
    document.getElementById("fruit_inf_r2").src = b;
};


function showRightFruit() {
            $(".fruit_r").show();
    document.getElementById('fruit_r').style.visibility = 'visible';
};




function showLeftFruit() {
            $(".fruit_l").show();
    document.getElementById('fruit_l').style.visibility = 'visible';
};


function showInfRightFruit() {
        $(".fruit_inf_r").show();
    document.getElementById('fruit_inf_r').style.visibility = 'visible';
};

function showInfRightFruit2() {
        $(".fruit_inf_r2").show();
    document.getElementById('fruit_inf_r2').style.visibility = 'visible';
};


function showInfLeftFruit() {
        $(".fruit_inf_l").show();
    document.getElementById('fruit_inf_l').style.visibility = 'visible';
};

function showInfLeftFruit2() {
        $(".fruit_inf_l2").show();
    document.getElementById('fruit_inf_l2').style.visibility = 'visible';
};




function showEat(id) {
	$(".agent_eat").hide();
	$("#"+id+"_eat").show();
};

function choiceLeftFruit(a) {

    $(".fruit_inf_r").hide();
            $(".fruit_l").show();
    document.getElementById("choiceFruit_l").src = a;
};

function leftObject(a) {
        $(".object_l").show();
    document.getElementById("obj_l").src = a;
};

function rightObject(a) {
        $(".object_r").show();
    document.getElementById("obj_r").src = a;
};


function leftInfObject(a) {
        $(".inf_ob_l").show();
    document.getElementById("inf_ob_l").src = a;
};

function rightInfObject(a) {
        $(".inf_ob_r").show();
    document.getElementById("inf_ob_r").src = a;
};


function choiceLeftInfObject(a) {
        $(".choice_inf_ob_l").show();
    document.getElementById("choice_inf_ob_l").src = a;
};

function choiceRightInfObject(a) {
        $(".choice_inf_ob_r").show();
    document.getElementById("choice_inf_ob_r").src = a;
};




function choiceRightFruit(a) {
            $(".fruit_r").show();
    document.getElementById("choiceFruit_r").src = a;
};



function choiceInfLeftFruit(b) {
    $(".fruit_l").hide();
    $(".fruit_inf_l").show();
    document.getElementById("choiceFruit_inf_l").src = b;
};

function choiceInfRightFruit(b) {
    $(".fruit_r").hide();
    $(".fruit_inf_r").show();
    document.getElementById("choiceFruit_inf_r").src = b;
};


function choiceInfLeftFruit2(b) {
    $(".fruit_l").hide();
    $(".fruit_inf_l2").show();
    document.getElementById("choiceFruit_inf_l2").src = b;
};

function choiceInfRightFruit2(b) {
    $(".fruit_r").hide();
    $(".fruit_inf_r2").show();
    document.getElementById("choiceFruit_inf_r2").src = b;
};










function getTime1() {
    return startTime = (new Date()).getTime();
};

// Get a random integer less than n.
function randomInteger(n) {
	return Math.floor(Math.random()*n);
};

function randomElement(array) {
  return array[randomInteger(array.length)];
};

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function background(x) {
        document.getElementById("background").src=x;
    };

function background2(x) {
        document.getElementById("background2").src=x;
    };


function sourceSound(c) {
        document.getElementById("sound").src=c;
    };
function playSound() {
    document.getElementById("sound").play();
      };


function showLeftFriend(id) {
	$(".tree_l").hide();
	$("#"+id+"_l").show();
}

function showRightFriend(id) {
	$(".tree_r").hide();
	$("#"+id+"_r").show();
}


function showLeftChoiceFriend(id) {
    $(".tree_l").hide();
	$("#"+id+"_l_c").show();
}

function showRightChoiceFriend(id) {
	$(".tree_r").hide();
	$("#"+id+"_r_c").show();
}



  function pause(id,time){
      $("#"+id).hide();
      setTimeout(function() {
           $("#"+id).show();
       }, time);
    };





// Show the instructions slide .
showSlide("instructions");


// beginning of actual experiment
var train = {
  // Parameters for this sequence.
  trial: ["1","2"],
  agents: ["Monkey","Dog"],
  cor_pos: ["right","left"],
  agentOrient: [["straight","down"],["straight","down"]],
  rightFruit: ["car_me","duck"],
  leftFruit: ["bear_me","ball"],
  back: [1,2],
  data: [],



// end of the experiment
  end: function() {
    // Show the finish slide.
    showSlide("select");
    setTimeout(function() { downloadData(train.data)}, 500);
  },

// end of training

// what happens between trials - display agent from previous trial and click on it to move on to the next trial
    eat: function(event) {

    setTimeout(function() {train.eat2() }, 1500);

    $(".fruit_r").unbind("click");
    $(".fruit_l").unbind("click");

    showSlide("choice");

    event.target.style.border = '5px solid blue';

    sourceSound("sound/end.mp3");
    playSound();


   // get time for reaction time
    // select correct object
    var corrFruit = $(".fruit_"+train.cor_pos[0][0]).attr("src");

    // select chosen object
    var pick = event.target.src;


     // code correct: does name of chosen object contain the name of the correct object
    if (pick.indexOf(corrFruit) > -1) {
        var correct =1
        } else {
        var correct = 0
        };

    var subid = train.subid;
    var subage = train.subage;
    // data collected
      data = {
        subid: train.subid,
        subage: train.subage,
        task: "training",
        trial: train.trial[0],
        agent: train.agents[0],
        leftObject: train.leftFruit[0],
        rightObject: train.rightFruit[0],
        correct_location: train.cor_pos[0],
        pick: pick,
        correct: correct
            };
      train.data.push(data);

  },

 eat2: function(event) {

    showSlide("eat");

    background("images/back"+train.back[0]+".jpg");

    sourceSound("sound/end.mp3");
    playSound();

    showEat(train.agents[0])

    $(".agent_eat").click(train.newtrial);

},
 // unbind and shif variables between trials
 newtrial: function() {

    $(".fruit_l").css("border","none")
    $(".fruit_r").css("border","none")

    $(".agent_eat").unbind("click");


    sourceLeftFruit("images/empty.png");
            showLeftFruit();
    sourceRightFruit("images/empty.png");
            showRightFruit();


    train.trial.shift();
    train.agentOrient.shift();
    train.agents.shift();
    train.rightFruit.shift();
    train.leftFruit.shift();
    train.back.shift();
    train.cor_pos.shift();

    train.next();
  },
// Slide recording the choice

// recording the choice
  choice: function(event) {

    showSlide("choice");

      $(".tree_l_c").hide();
      $(".tree_r_c").hide();
      $(".selector_l").hide();
      $(".selector_r").hide();

    choiceAgent(train.agents[0]);

    background2("images/back"+train.back[0]+".jpg");

    // show objects
    choiceLeftFruit("images/"+train.leftFruit[0]+".png");
    choiceRightFruit("images/"+train.rightFruit[0]+".png");

    sourceSound("sound/"+train.agents[0]+"_train.mp3");
    playSound()

    // choice can be made by clicking the objects after - possible after 8s
    setTimeout(function() {
    $(".fruit_r").click(train.eat);
    $(".fruit_l").click(train.eat);
}, 000);

  },
// moving on within a trial.
  next: function() {

      $(".moveButton").unbind("click");

    // if no more trials are left, end experiment
    if (train.trial.length == 0){
        setTimeout(function() {train.end() }, 0);
      return;
    };

    // after exposure is finished, switch to choice
    if (train.agentOrient[0][0] == "down") {
      setTimeout(function() {train.choice() }, 0);
      return;
    };
   // play sound depending on agent orientation

    showSlide("stage");

    	$(".tree_l").hide();
    	$(".tree_r").hide();

    background("images/back"+train.back[0]+".jpg");

    showAgent(train.agents[0],train.agentOrient[0][0]);

    // show objects on tables
    sourceRightFruit("images/"+train.rightFruit[0]+".png");
            showRightFruit();

    sourceLeftFruit("images/"+train.leftFruit[0]+".png");
            showLeftFruit();

    // play sound depending on agent orientation
    // agent says hello
   if (train.agentOrient[0][0] == "straight") {
        pause("moveButton",1500);
        sourceSound("sound/"+train.agents[0]+"_hello.mp3");
        playSound();
    };
    // move on to next phase of exposure
    train.agentOrient[0].shift();
     $(".moveButton").click(train.next);
  },
    checkInput: function() {
		//subject ID
		if (document.getElementById("subjectID").value.length < 1) {
			$("#checkMessage").html('<font color="red">Bitte Kind ID eintragen</font>');
			return;
		}
        if (document.getElementById("subjectAge").value.length < 1) {
			$("#checkMessage").html('<font color="red">Bitte Alter des Kindes eingeben</font>');
			return;
		}
		train.subid = document.getElementById("subjectID").value
        train.subage = document.getElementById("subjectAge").value
        train.trainingDot()
      },


    trainingDot: function() {

    function createDot(dotx, doty, i) {
	   var dots = [1, 2, 3, 4, 5];

	   var dot = document.createElement("img");
	   dot.setAttribute("class", "dot");
	   dot.id = "dot_" + dots[i];
	   dot.src = "dots/dot_" + dots[i] + ".jpg";

	   var x = Math.floor(Math.random() * 850);
	   var y = Math.floor(Math.random() * 550);

	   var invalid = "true";
	//make sure dots do not overlap
	   while (true) {
		invalid = "true";
		for (j = 0; j < dotx.length; j++) {
			if (Math.abs(dotx[j] - x) + Math.abs(doty[j] - y) < 200) {
				var invalid = "false";
				break;
			}
		}
		if (invalid === "true") {
			dotx.push(x);
			doty.push(y);
			break;
		}
		x = Math.floor(Math.random() * 400);
		y = Math.floor(Math.random() * 400);
	}

	dot.setAttribute("style", "position:absolute;left:" + x + "px;top:" + y + "px;");

	trainingDot.appendChild(dot);
};


        var allDots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5"];

		var xcounter = 0;
		var dotCount = 5;

		var dotx = [];
		var doty = [];

		for (i = 0; i < dotCount; i++) {
			createDot(dotx, doty, i, "");
		}

		showSlide("trainingDot");
		$('.dot').bind('click touchstart', function(event) {

			var dotID = $(event.currentTarget).attr('id');

			//only count towards completion clicks on dots that have not yet been clicked
			if (allDots.indexOf(dotID) === -1) {
				return;
			}
			allDots.splice(allDots.indexOf(dotID), 1);
			document.getElementById(dotID).src = "dots/x.jpg";
			xcounter++
			if (xcounter === dotCount) {
				trainingDot.removeChild(dot_1);
				trainingDot.removeChild(dot_2);
				trainingDot.removeChild(dot_3);
				trainingDot.removeChild(dot_4);
				trainingDot.removeChild(dot_5);

				setTimeout(function() {
					$("#trainingDot").hide();
					setTimeout(function() {
						showSlide("dotGame");
					}, 500);
				}, 500);
			}
		});
	}

};
