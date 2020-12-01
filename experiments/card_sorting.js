function showSample(a) {
    $(".sample").show();
    document.getElementById("sample").src = a;
};


// the actual experiment
var sort = {
    trial: ["train", "train2", 1, 2, 3, 4, 5, 6, "switch", 1, 2, 3, 4, 5, 6],
    sample: ["red_rabbit", "blue_boat", "red_rabbit", "blue_boat", "blue_boat", "red_rabbit", "red_rabbit", "blue_boat", "red_rabbit", "blue_boat", "blue_boat", "red_rabbit", "blue_boat", "red_rabbit"],
    phase: ["color", "shape"],
    data: [],



    // end of the experiment
    end: function () {
        // Show the finish slide.
        showSlide("select");
        setTimeout(function () {
            downloadData(sort.data)
        }, 500);
    },


    // unbind and shift variables between trials
    newtrial: function () {

        $(".target_l").css("border", "none")
        $(".target_r").css("border", "none")
        $(".sample").css("border", "none")

        $(".target_l").unbind("click");
        $(".target_r").unbind("click");
        $(".sample").unbind("click");

        showSample("images/empty.png");


        if (sort.trial[0] == "train") {
            sort.trial.shift()
            sort.sample.shift();
            showSlide("cardSortingIntro2");
            return;
        };


        if (sort.trial[0] == "train2") {
            sort.trial.shift()
            sort.sample.shift();
            showSlide("cardSortingIntro3");
            return;
        };


        $("#text").text("");


        sort.trial.shift();
        sort.sample.shift();

        setTimeout(function () {
            sort.next()
        }, 1100);

    },

    next: function () {

        $(".selector").hide();

        if (sort.trial.length == 0) {
            setTimeout(function () {
                sort.end()
            }, 0);
            return;
        };

        if (sort.trial[0] == "switch") {
            sort.phase.shift()
            sort.trial.shift()
            showSlide("cardSortingSwitch");
            return;
        };

        showSlide("cardSorting")

        $("#sample").css({
            bottom: "100px",
            left: "50%",
            opacity: 1
        })

        showSample("images/" + sort.sample[0] + ".png")


        if (sort.phase[0] == "color") {

            if (sort.sample[0] == "red_rabbit") {
                $("#text").text("Hier ist eine Rote, wo kommt die hin?");
            } else {
                $("#text").text("Hier ist eine Blaue, wo kommt die hin?");
            }

        } else {

            if (sort.sample[0] == "red_rabbit") {
                $("#text").text("Hier ist ein Hase, wo kommt der hin?");
            } else {
                $("#text").text("Hier ist ein Boot, wo kommt das hin?");
            }

        }

        $(".target_l").click(function () {

            event.target.style.border = '5px solid orange';

            $(".selector").show();

            $("#sample").animate({
                bottom: "300px",
                left: "25%",
                opacity: 0
            }, {
                duration: 1000
            })

            pause("moveButton", 1000)

            setTimeout(function () {
                sort.newtrial()
            }, 1000);


            // Code correct: does name of chosen object contain the name of the correct object
            if (sort.phase[0] == "color") {

                if (sort.sample[0] == "blue_boat") {
                    var correct = 1
                    var correct_location = "left"
                } else {
                    var correct = 0
                    var correct_location = "right"
                }


            } else {
                if (sort.sample[0] == "blue_boat") {
                    var correct = 0
                    var correct_location = "right"
                } else {
                    var correct = 1
                    var correct_location = "left"
                }
            };


            // data collected
            data = {
                subid: train.subid,
                subage: train.subage,
                phase: sort.phase[0],
                task: "card_sorting",
                item: sort.sample[0],
                trial: sort.trial[0],
                leftObject: "blue_rabbit",
                leftObject: "red_boat",
                correct_location: correct_location,
                pick: "blue_rabbit",
                correct: correct
            };
            sort.data.push(data);
        });


        $(".target_r").click(function () {

            $(".selector").show();

            event.target.style.border = '5px solid orange';

            $("#sample").animate({
                bottom: "300px",
                left: "75%",
                opacity: 0
            }, {
                duration: 1000
            })

            pause("moveButton", 1000)

            setTimeout(function () {
                sort.newtrial()
            }, 1000);


            // Code correct: does name of chosen object contain the name of the correct object
            if (sort.phase[0] == "color") {

                if (sort.sample[0] == "blue_boat") {
                    var correct = 0
                    var correct_location = "left"
                } else {
                    var correct = 1
                    var correct_location = "right"
                }


            } else {
                if (sort.sample[0] == "blue_boat") {
                    var correct = 1
                    var correct_location = "right"
                } else {
                    var correct = 0
                    var correct_location = "left"
                }
            };


            // data collected
            data = {
                subid: train.subid,
                subage: train.subage,
                phase: sort.phase[0],
                task: "card_sorting",
                item: sort.sample[0],
                trial: sort.trial[0],
                leftObject: "blue_rabbit",
                leftObject: "red_boat",
                correct_location: correct_location,
                pick: "red_boat",
                correct: correct
            };
            sort.data.push(data);
        });

        $(".sample").click(function (event) {
            event.target.style.border = '5px solid orange'
        })

    }
};
