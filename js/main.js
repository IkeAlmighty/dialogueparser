
var sourcePane = document.getElementById("source-dialogue");
var dialoguePane = document.getElementById("dialogue-line");
var taggedPane = document.getElementById("tagged-dialogue");

var lastTagged = "";
var dialogueList = [];
var diaIndex = 0;

//reset the product pane and the tagging pane: 
dialoguePane.value = ""; 

function loadSourcePane(){
    //create the dialogue list to cycle through:
    var splitSource = sourcePane.value.split("\"");
    dialogueList = [];

    //check for a starting " and adjust the parsing accordingly
    if(taggedPane.value == "\""){
        dialogueList.push(splitSource[diaIndex]);
        diaIndex+=2;
    }
    else {
        diaIndex = 1;
    }

    //create the dialogueList by skipping every two of the split source
    for(; diaIndex < splitSource.length; diaIndex+=2){
        dialogueList.push(splitSource[diaIndex]);
    }

    diaIndex = 0;//reset the index to the beginning.
    dialoguePane.value = dialogueList[diaIndex]//set tagging pane to the first dialogue
}

var tagAdder = document.getElementById("tag-adder");
tagAdder.addEventListener("keydown", function (e) {
    if(e.key == "Enter"){
        var name = tagAdder.value;
        tagAdder.value = "";
        var button = document.createElement("BUTTON");
        var text = document.createTextNode(name.toUpperCase());
        button.appendChild(text);

        var delButton = document.createElement("BUTTON");
        text = document.createTextNode("X");
        delButton.appendChild(text);

        var br = document.createElement("BR");

        var buttonBar = document.getElementById("button-bar"); 
        buttonBar.appendChild(button);
        buttonBar.appendChild(delButton);
        buttonBar.appendChild(br);

        //create the remove event for the X button just made
        delButton.addEventListener("mousedown", function (e) {
            buttonBar.removeChild(button);
            buttonBar.removeChild(delButton);
            buttonBar.removeChild(br);
        });

        //create event for adding tag via the character button just made:
        button.addEventListener("mousedown", function(e) {
            var dialogue = dialoguePane.value;
            if(lastTagged != name){
                var taggedDialogue = "\n\n\t\t" + name.toUpperCase() + "\n" + dialogue;
                dialoguePane.value = nextDialogue();

                taggedPane.value = taggedPane.value + taggedDialogue;
            }
            else {
                dialoguePane.value = nextDialogue();
                taggedPane.value = taggedPane.value + " " + dialogue;
            }

            lastTagged = name;
        });
    }
});

document.getElementById("prev-button").addEventListener("mousedown", function(e){
    dialoguePane.value = prevDialogue();
});

document.getElementById("next-button").addEventListener("mousedown", function(e){
    dialoguePane.value = nextDialogue();
});

document.getElementById("reset-button").addEventListener("mousedown", function (e){
    loadSourcePane();
});

function nextDialogue(){
    if(diaIndex < dialogueList.length - 1){
        diaIndex++;
    }

    return dialogueList[diaIndex];
}

function prevDialogue(){
    if(diaIndex > 0){
        diaIndex--;
    }

    return dialogueList[diaIndex];
}



