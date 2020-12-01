function showRmtsSample(a) {
    $(".rmts_sample").show();
    document.getElementById("rmts_sample").src = a;
};

function showMatchL(a) {
    $(".match_l").show();
    document.getElementById("match_l").src = a;
};

function showMatchR(a) {
    $(".match_r").show();
    document.getElementById("match_r").src = a;
};


// the actual experiment
var rmts = {
    trial: ["train", "train2", 1, 2, 3, 4, 5, 6],
    sample: ["train_1","train_2","A","B","C","D","E","F"],
    matchPos: ["left", "right", "right", "left", "right","right", "left", "left"],
    data: [],



    // end of the experiment
    end: function () {
        // Show the finish slide.
        showSlide("select");
        setTimeout(function () {
            downloadData(rmts.data)
        }, 500);
    },


    // unbind and shift variables between trials
    newtrial: function () {

        $(".match_l").css("border", "none")
        $(".match_r").css("border", "none")
        $(".rmts_sample").css("border", "none")

        $(".match_l").unbind("click");
        $(".match_r").unbind("click");
        $(".rmts_sample").unbind("click");

        showRmtsSample("images/empty.png");
        showMatchL("images/empty.png");
        showMatchR("images/empty.png");

                $("#rmts_text").text("");
                $("#rmts_text_bottom").text("");

        rmts.trial.shift();
        rmts.sample.shift();
        rmts.matchPos.shift();

        setTimeout(function () {
            rmts.next()
        }, 500);

    },

    next: function () {

        $(".selector").hide();

        if (rmts.trial.length == 0) {
            setTimeout(function () {
                rmts.end()
            }, 0);
            return;
        };

        showSlide("rmts")

        $("#rmts_sample").css({
            top: "100px",
            left:"50%",
            opacity: 1
        })

        showRmtsSample("images/rmts/sample_" + rmts.sample[0] + ".png")


  showMatchL("images/empty.png");
  showMatchR("images/empty.png");

  setTimeout(function () {

        if (rmts.matchPos[0] == "left") {
          showMatchL("images/rmts/match_" + rmts.sample[0] + ".png");
          showMatchR("images/rmts/dis_" + rmts.sample[0] + ".png");
        } else {
          showMatchR("images/rmts/match_" + rmts.sample[0] + ".png");
          showMatchL("images/rmts/dis_" + rmts.sample[0] + ".png")
        }
      }, 3000)


  $("#rmts_text").text("Schau mal, hier ist eine Karte!");
  $("#rmts_text_bottom").text("");

setTimeout(function () {
    $("#rmts_text_bottom").text("Hier sind noch zwei Karten. Welche von den Karten passt besser zur Ersten? Welches Karte ist ähnlicher zur ersten Karte?");
  }, 3000)

        $(".match_l").click(function () {

            event.target.style.border = '5px solid orange';

            $(".selector").show();

            $("#rmts_sample").animate({
                top: "300px",
                left:"35%",
                opacity: 0
            }, {
                duration: 1000
            })

            pause("moveButton", 1100)


            setTimeout(function () {
                rmts.newtrial()
            }, 1000);


            // Code correct: does name of chosen object contain the name of the correct object


              if (rmts.matchPos[0] == "left") {
                    var correct = 1
                    var pick = "match_" + rmts.sample[0]
                    var leftObject = "match_" + rmts.sample[0];
                    var rightObject = "dis_" + rmts.sample[0];
                } else {
                  var correct = 0
                  var pick = "dis_" + rmts.sample[0]
                  var leftObject = "dis_" + rmts.sample[0];
                  var rightObject = "match_" + rmts.sample[0];
                }




            // data collected
            data = {
                subid: train.subid,
                subage: train.subage,
                task: "match_to_sample",
                item: rmts.sample[0],
                trial: rmts.trial[0],
                leftObject: leftObject,
                rightObject: rightObject,
                correct_location: rmts.matchPos[0],
                pick: pick,
                correct: correct
            };
            rmts.data.push(data);
        });


        $(".match_r").click(function () {

            $(".selector").show();

            event.target.style.border = '5px solid orange';

            $("#rmts_sample").animate({
                top: "300px",
                left: "65%",
                opacity: 0
            }, {
                duration: 1000
            })

            pause("moveButton", 1100)

            setTimeout(function () {
                rmts.newtrial()
            }, 1000);



          if (rmts.matchPos[0] == "right") {
                      var correct = 1
                      var pick = "match_" + rmts.sample[0]
                      var rightObject = "match_" + rmts.sample[0];
                      var leftObject = "dis_" + rmts.sample[0];
                  } else {
                    var correct = 0
                    var pick = "dis_" + rmts.sample[0]
                    var rightObject = "dis_" + rmts.sample[0];
                    var leftObject = "match_" + rmts.sample[0];
                  }




              // data collected
              data = {
                  subid: train.subid,
                  subage: train.subage,
                  task: "match_to_sample",
                  item: rmts.sample[0],
                  trial: rmts.trial[0],
                  leftObject: leftObject,
                  rightObject: rightObject,
                  correct_location: rmts.matchPos[0],
                  pick: pick,
                  correct: correct
              };
            rmts.data.push(data);
        });

        $(".sample").click(function (event) {
            event.target.style.border = '5px solid orange'
        })

    }
};
