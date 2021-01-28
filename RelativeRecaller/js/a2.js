let images = [
    {
        "image": 'pics/brother.jpg', "tag": "brother",
        "name1": "Roger", "name2": "John", "name3": "David"
    },
    {
        "image": 'pics/grandchild1.jpg', "tag": "grandchild",
        "name1": "Alex", "name2": "Kim", "name3": "Charlie"
    },
    {
        "image": 'pics/grandchild2.jpg', "tag": "granddaughter",
        "name1": "Lizzy", "name2": "May", "name3": "Cleo"
    },
    {
        "image": 'pics/nephew1.jpg', "tag": "brother's son (Nephew)",
        "name1": "Jake", "name2": "Ray", "name3": "Marcus"
    },
    {
        "image": 'pics/nephew2.jpg', "tag": "sister's son (Nephew)",
        "name1": "Thomas", "name2": "Drake", "name3": "Andrew"
    },
    {
        "image": 'pics/niece1.jpg', "tag": "sister's daughter (Niece)",
        "name1": "Kelly", "name2": "Leah", "name3": "Sally"
    },
    {
        "image": 'pics/niece2.jpg', "tag": "brother's daughter (Niece)",
        "name1": "Delia", "name2": "Olivia", "name3": "Sarah"
    },
    {
        "image": 'pics/niece3.jpg', "tag": "brother's baughter (Niece)",
        "name1": "Jennifer", "name2": "Daisy", "name3": "Molly"
    },
    {
        "image": 'pics/sister.jpg', "tag": "sister",
        "name1": "Jane", "name2": "Nancy", "name3": "Joy"
    }
]

// set picture counter and text underneath the picture
let curPic = 0;
let variableImage = document.getElementById("familyMember");
variableImage.src = images[curPic]["image"];

document.getElementById("n1").innerHTML = images[curPic]["name1"]
document.getElementById("n2").innerHTML = images[curPic]["name2"]
document.getElementById("n3").innerHTML = images[curPic]["name3"]

//handler for the hint button
document.getElementById("hintButt").onclick = function () {
    document.getElementById("hintText").innerHTML = "This is your " + images[curPic]["tag"];
}

//handler for clicking 'next'
document.getElementById("next").onclick = function () {
    curPic = (curPic + 1) % images.length;
    variableImage.src = images[curPic]["image"];
    document.getElementById("hintText").innerHTML = "";
    document.getElementById("correct").innerHTML = "";
    document.getElementById("incorrect").innerHTML = "";

    //fill buttons with names
    document.getElementById("n1").innerHTML = images[curPic]["name1"]
    document.getElementById("n2").innerHTML = images[curPic]["name2"]
    document.getElementById("n3").innerHTML = images[curPic]["name3"]
}

function nextPerson() {
    curPic = (curPic + 1) % images.length;
    variableImage.src = images[curPic]["image"];
    document.getElementById("hintText").innerHTML = "";
    document.getElementById("correct").innerHTML = "";
    document.getElementById("incorrect").innerHTML = "";

    //fill buttons with names
    document.getElementById("n1").innerHTML = images[curPic]["name1"]
    document.getElementById("n2").innerHTML = images[curPic]["name2"]
    document.getElementById("n3").innerHTML = images[curPic]["name3"]
}

document.getElementById("n1").onclick = function () {
    if (curPic === 0 || curPic === 2 || curPic === 5) {
        document.getElementById("correct").innerHTML = "CORRECT!"
        document.getElementById("incorrect").innerHTML = ""
        document.getElementById("hintText").innerHTML = "This is your " + images[curPic]["tag"];
        nextPerson();
    } else {
        document.getElementById("correct").innerHTML = ""
        document.getElementById("incorrect").innerHTML = "Try again :)"
    }
}

document.getElementById("n2").onclick = function () {
    if (curPic === 1 || curPic === 7 || curPic === 8 || curPic === 9) {
        document.getElementById("correct").innerHTML = "CORRECT!"
        document.getElementById("incorrect").innerHTML = ""
        document.getElementById("hintText").innerHTML = images[curPic]["tag"];
        nextPerson();
    } else {
        document.getElementById("correct").innerHTML = ""
        document.getElementById("incorrect").innerHTML = "Try again :)"
    }
}

document.getElementById("n3").onclick = function () {
    if (curPic === 3 || curPic === 4 || curPic === 6) {
        document.getElementById("correct").innerHTML = "CORRECT!"
        document.getElementById("incorrect").innerHTML = ""
        document.getElementById("hintText").innerHTML = images[curPic]["tag"];
        nextPerson();
    } else {
        document.getElementById("correct").innerHTML = ""
        document.getElementById("incorrect").innerHTML = "Try again :)"
    }
}