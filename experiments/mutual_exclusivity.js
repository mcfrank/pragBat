
// the actual experiment
var me = {
  trial: [1,2,3,4,5],
  agents: ["Monkey","Bunny","Cat","Dog","Frog"],
  agentOrient: [
          ["straight","down"],
          ["straight","down"],
          ["straight","down"],
          ["straight","down"],
          ["straight","down"]],
  novels: ["t22","t21","t23","t37","t25"],
  familiars: ["carrot","garlic","eggplant","duck","horseshoe"],
  back: [6,7,8,9,10],
  novelPos: ["left", "right", "right", "left", "right"],
  data: [],



// end of the experiment
  end: function() {
    // Show the finish slide.
    showSlide("select");
    setTimeout(function() { downloadData(me.data) }, 500);
  },


// what happens between trials - display agent from previous trial and click on it to move on to the next trial
   eat: function(event) {

    setTimeout(function() {me.eat2() }, 1500);

    showSlide("choice");

    event.target.style.border = '5px solid blue';

    sourceSound("sound/end.mp3");
    playSound();


    $(".fruit_r").unbind("click");
    $(".fruit_l").unbind("click");

      var pick_src = event.target.src;
    // get time for reaction time



    // Code correct: does name of chosen object contain the name of the correct object
    if (pick_src.indexOf(me.novels[0]) > -1) {
        var correct =1
        var pick = me.novels[0]
        } else {
        var correct = 0
        var pick = me.familiars[0]
        };

       if (me.novelPos[0] == "left"){
        var LeftFruit = me.novels[0];
        var RightFruit = me.familiars[0];

    } else  {

        var LeftFruit = me.familiars[0];
        var RightFruit = me.novels[0];
    }



    // data collected
      data = {
        subid: train.subid,
        subage: train.subage,
        task: "mutual_exclusivity",
        trial: me.trial[0],
        item: me.agents[0],
        leftObject: LeftFruit,
        rightObject: RightFruit,
        correct_location: me.novelPos[0],
        pick: pick,
        correct: correct
            };
      me.data.push(data);

  },

eat2: function(event) {

    showSlide("eat");

   background("images/back"+me.back[0]+".jpg");

    sourceSound("sound/end.mp3");
    playSound();

    showEat(me.agents[0])

    $(".agent_eat").click(me.newtrial);

},

// unbind and shift variables between trials
 newtrial: function() {

    $(".fruit_l").css("border","none")

    $(".fruit_r").css("border","none")


    $(".agent_eat").unbind("click");


    sourceLeftFruit("images/empty.png");
            showLeftFruit();
    sourceRightFruit("images/empty.png");
            showRightFruit();



    me.trial.shift();
    me.agentOrient.shift();
    me.agents.shift();
    me.novelPos.shift();
    me.novels.shift();
    me.familiars.shift();
    me.back.shift();




   me.next();
  },


// recording the choice
  choice: function(event) {

    showSlide("choice");

      $(".tree_l_c").hide();
      $(".tree_r_c").hide();
      $(".selector_l").hide();
      $(".selector_r").hide();


    background2("images/back"+me.back[0]+".jpg");

      showAgent(me.agents[0],"choice");

    // specify what is shown on the tables depending on training and test condition
    if (me.novelPos[0] == "left"){

        choiceLeftFruit("images/"+me.novels[0]+".png");

        choiceRightFruit("images/"+me.familiars[0]+".png");

        } else {

        choiceLeftFruit("images/"+me.familiars[0]+".png");

        choiceRightFruit("images/"+me.novels[0]+".png");

        }


    // play choice sound

        sourceSound("sound/"+me.agents[0]+"_me_choice.mp3");
 playSound();

    // choice can be made by clicking the objects after - possible after 5s
    setTimeout(function() {
        $(".fruit_l").click(me.eat);

        $(".fruit_r").click(me.eat);

    }, 000);
  },

// moving on within a trial

  next: function() {
$(".moveButton").unbind("click");
   // when no more trials are left, end experiment
    if (me.trial.length == 0){
        setTimeout(function() {me.end() }, 0);
      return;
    };

  // after exposure is finished, switch to choice
    if (me.agentOrient[0][0] == "down") {
      setTimeout(function() {me.choice() }, 0);
      return;
    };

    showSlide("stage");

          	$(".tree_l").hide();
    	$(".tree_r").hide();

    background("images/back"+me.back[0]+".jpg")

    // show agent
    showAgent(me.agents[0],me.agentOrient[0][0]);

    // play hello sound and write name of agent
   if (me.agentOrient[0][0] == "straight") {
        pause("moveButton",1600);
        sourceSound("sound/"+me.agents[0]+"_hello.mp3");
        playSound();
    };

    // display obejcts on table depending on training and test condition

    if (me.novelPos[0] == "left"){
        sourceLeftFruit("images/"+me.novels[0]+".png");
        showLeftFruit();

        sourceRightFruit("images/"+me.familiars[0]+".png");
        showRightFruit();

    } else  {
        sourceLeftFruit("images/"+me.familiars[0]+".png");
        showLeftFruit();

        sourceRightFruit("images/"+me.novels[0]+".png");
        showRightFruit();
    }


    // move on to next phase of exposure
    me.agentOrient[0].shift();
             $(".moveButton").click(me.next);
  }
};
