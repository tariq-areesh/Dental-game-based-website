let checkStorage = localStorage.getItem("pageIndex");

var pageIndex;
if (checkStorage) {
    if(parseFloat(checkStorage) <= -1) {
        pageIndex = -1;
    }
    else {
        pageIndex = (parseFloat(checkStorage)) - 1;
    }
    
}

 
    


else {
    pageIndex = -1;
    localStorage.setItem('pageIndex', -1);
    localStorage.setItem('userName', "")
    //-----------------------------------------------------------------------------------------------------------------
    localStorage.setItem('concussionFlag', 0);
    localStorage.setItem('subluxationFlag', 0);
    localStorage.setItem('extrusiveLuxationFlag', 0);
    localStorage.setItem('intrusiveLuxationFlag', 0);
    localStorage.setItem('lateralLuxationFlag', 0);
    //-----------------------------------------------------------------------------------------------------------------
    localStorage.setItem('uncomplicatedCrownFractureFlag', 0);
    localStorage.setItem('complicatedCrownFractureFlag', 0);
    localStorage.setItem('rootFractureFlag', 0);
    localStorage.setItem('uncomplicatedCrown_rootFractureFlag', 0);
    localStorage.setItem('complicatedCrown_rootFractureFlag', 0);
    localStorage.setItem('alveolarFractureFlag', 0);
}


let wrapper = document.querySelector(".wrapper");
const flipSound = new Audio("sounds/flipSound.mp3");
const correctSound = new Audio("sounds/correctSound.mp3");
const wrongSound = new Audio("sounds/wrongSound.mp3");

NextPage();

function startPage() {
    pageIndex = 0;
    let wrapperContent = `<img src="images/generalImages/docsPic1.png" alt="" id="docsPic1">
    <img src="images/textImages/textPicture1.png" alt="" id="start-text">
    <button id="start-button"></button>
    <div class="names">
                <h3>Developers:</h3>
                    <dt>Tariq Areesh</dt>
                    <dt>Aasaiel Alnafisi</dt>
                    <dt>Reem Areesh</dt>
                    <dt>Faisal Dardeer</dt>
        
    </div>`;
    wrapper.innerHTML += wrapperContent;

    clickSound();
    let startButton = document.getElementById("start-button");
    startButton.onclick = function () {
        NextPage();
    }
}

function namePage() {
    pageIndex = 1;
    wrapper.innerHTML += `<div class="inputArea">
    <h2>Please enter Your name:</h2>
    <input type="text" id="nameInput" maxlength="10">
    <button id="inputButton">Next</button>
</div>
<div class="conformation">
    <h2>Are you sure you want to continue with this name?</h2>
    <h2 id="name" style="color:black;"></h2>
    <button id="noButton">No</button>
    <button id="yesButton">Yes</button>
</div>
<button id="back-button">Previous</button>`;

    clickSound();

    let backButton = document.getElementById("back-button");
    backButton.onclick = () => {
        previousPage();
    }

    const inputButton = document.getElementById("inputButton");
    var name;

    const conformationAlert = document.querySelector(".conformation");
    var nameLabel = document.getElementById("name");
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    noButton.onclick = () => {
        conformationAlert.style.visibility = "hidden";
        nameLabel.innerHTML = "";
    }

    yesButton.onclick = () => {
        localStorage.setItem('userName', name);
        NextPage();
    }

    inputButton.onclick = () => {
        name = document.querySelector("input").value;
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!name) {
            alert("Please enter a name");
        }
        else if(specialChars.test(name))
            alert("please make your name free of special characters")

        else {
            nameLabel.innerHTML += "\"" + name + "\"";
            conformationAlert.style.visibility = "visible";
        }
    }
}

function startPageTwo() {

    let wrapperContent = `<div class="container">
    <img src="images/generalImages/docPic1.png" alt="" id="docPic1">
    <img src="images/generalImages/docDialog1.png" alt="" id="docDialog1">
    <p id="dialogText">Hello Dr.${localStorage.getItem("userName")}<br> Do you want to know the <br> key factors that should <br> be consider in <br> management of trauma in <br> children?</p>
    <div class="progress-buttons">
        <button class="progress-button" style="background-image: url(images/generalImages/progressB1.png);"></button>
        <button class="progress-button" style="background-image: url(images/generalImages/progressB2.png);"></button>
    </div>
    <button id="back-button">Previous</button>
</div>`
    wrapper.innerHTML += wrapperContent;

    clickSound();

    let backButton = document.getElementById("back-button");
    backButton.onclick = () => {
        previousPage();
    }

    let progressButtons = document.querySelectorAll(".progress-buttons");
    progressButtons.forEach(progressButton => {
        progressButton.onclick = function () {
            NextPage();

        }
    })
}


function startPageThree() {
    topicsIndex = 1;

    let wrapperContent = `
    <div class="container">
            <img src="images/generalImages/docPic2.png" alt="" id="docPic2">
            <img src="images/generalImages/docDialog2.png" alt="" id="docDialog2">
            <button id="topics-button"></button>
            <button id="back-button">Previous</button>
        </div>`
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let backButton = document.getElementById("back-button");
    backButton.onclick = () => {
        previousPage();
    }

    let topicsButton = document.getElementById("topics-button");
    topicsButton.onclick = function () {
        wrapper.innerHTML = `<div class="container">
        <img src="images/generalImages/docPic1.png" alt="" id="docPic2-2">
        <img src="images/generalImages/docDialog3.png" alt="" id="docDialog3">
        
    </div>
    <button id="next-button" style="visibility: hidden;">Next</button>`;
        clickSound();
        let topicsContainer = document.querySelector(".wrapper .container");
        let nextButton = document.getElementById("next-button");
        wrapper.onclick = function () {

            if (topicsIndex === 11) {
                nextButton.style.visibility = "visible";
            }
            else if (topicsIndex === 1) { topicsIndex++; }
            else if (topicsIndex === 2) {
                docDialog3 = document.getElementById("docDialog3");
                docDialog3.src = "images/generalImages/docDialog3-2.png";
                docDialog3.id = "docDialog3-2";


                topicsContainer.innerHTML += `<img src="images/topicsImages/Picture1.png" alt="" id="topic1">`;
                topicsIndex++;
            }

            else {
                topicsContainer.innerHTML += `<img src="images/topicsImages/Picture${topicsIndex - 1}.png" alt="" id="topic${topicsIndex - 1}">`;
                flipSound.play();
                topicsIndex++;
            }
        }

        nextButton.onclick = function () {
            NextPage();
        }
    }



}



function contentsTablePage() {

    wrapperContent = `<div class="container">
    <img src="images/generalImages/contentsTableText.png" alt="" id="contentsTableText">
    <img src="images/generalImages/contentsTableText2.png" alt="" id="contentsTableText2" style="visibility: hidden;">
    <img src="images/generalImages/docPic3.png" alt="" id="docPic3">
    <img src="images/generalImages/docDialog4.png" alt="" id="docDialog4">
    <div class="timer">
            
        </div>
    <button id="back-button">Previous</button>
    <button id="next-button" style="visibility: hidden;">Next</button>
</div>`;
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let contentsTableText2 = document.getElementById("contentsTableText2");
    setTimeout(function () { contentsTableText2.style.visibility = 'visible' }, 7000)

    let previousButton = document.getElementById("back-button");
    previousButton.onclick = function () {
        previousPage();
    }
    let nextButton = document.getElementById("next-button");
    nextButton.onclick = function () {
        NextPage();
    }
    timeOutButton(nextButton, 15000)
}

function luxationSection() {

    var concussionFlag = parseFloat(localStorage.getItem("concussionFlag")), subluxationFlag = parseFloat(localStorage.getItem("subluxationFlag")), extrusiveLuxationFlag = parseFloat(localStorage.getItem("extrusiveLuxationFlag")), intrusiveLuxationFlag = parseFloat(localStorage.getItem("intrusiveLuxationFlag")), lateralLuxationFlag = parseFloat(localStorage.getItem("lateralLuxationFlag"));

    wrapperContent = `<img src="images/textImages/luxationText.png" alt="" id="luxation-text">
    <div class="luxation-buttons">
        <button id="concussion"><h1>Concussion</h1></button>
        <button id="subluxation"><h1>Subluxation</h1></button>
        <button id="extrusive-luxation"><h1>Extrusive luxation</h1></button>
        <button id="intrusive-luxation"><h1>Intrusive luxation</h1></button>
        <button id="lateral-luxation"><h1>Lateral luxation</h1></button>
    </div>
    
<button id="back-button">Previous</button>
<button id="next-button" style="visibility: hidden;">Next</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let nextButton = document.getElementById("next-button");
    if (concussionFlag === 1 && subluxationFlag === 1 && extrusiveLuxationFlag === 1 && intrusiveLuxationFlag === 1 && lateralLuxationFlag === 1) {
        nextButton.style.visibility = "visible";
    }

    let concussionButton = document.getElementById("concussion");
    let subluxationButton = document.getElementById("subluxation");
    let extrusiveLuxationButton = document.getElementById("extrusive-luxation");
    let intrusiveLuxationButton = document.getElementById("intrusive-luxation");
    let lateralLuxationButton = document.getElementById("lateral-luxation");

    if (concussionFlag === 1)
        concussionButton.style.backgroundColor = "#464646";

    if (subluxationFlag === 1)
        subluxationButton.style.backgroundColor = "#464646";

    if (extrusiveLuxationFlag === 1)
        extrusiveLuxationButton.style.backgroundColor = "#464646";

    if (intrusiveLuxationFlag === 1)
        intrusiveLuxationButton.style.backgroundColor = "#464646";

    if (lateralLuxationFlag === 1)
        lateralLuxationButton.style.backgroundColor = "#464646";

    concussionButton.onclick = function () {
        wrapper.innerHTML = "";
        concussion();
    }

    subluxationButton.onclick = function () {
        wrapper.innerHTML = "";
        subluxation();
    }

    extrusiveLuxationButton.onclick = function () {
        wrapper.innerHTML = "";
        extrusiveLuxation();
    }

    intrusiveLuxationButton.onclick = function () {
        wrapper.innerHTML = "";
        intrusiveLuxation();
    }

    lateralLuxationButton.onclick = function () {
        wrapper.innerHTML = "";
        lateralLuxation();
    }

    let previousButton = document.getElementById("back-button");
    previousButton.onclick = function () {
        previousPage();
    }

    nextButton.onclick = function () {
        wrapper.innerHTML = "";

        wrapper.className = "wrapperWhiteBackground";

        wrapper.innerHTML += `<div class="videoContainer">
        <video autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto" style="width: 520px; margin-top: 53px; margin-left: 370px; position: absolute;"><source src="videos/IMG_7898.MP4" type="video/mp4"></video>
        <img src="images/textImages/repositionText.png" alt="" id="repositionText">
        <button id="next-button" style="visibility: hidden; margin-top: 647px;">Next</button>
    </div>`;
        clickSound();

        nextButton = document.getElementById("next-button");
        timeOutButton(nextButton, 0);

        nextButton.onclick = function () {
            NextPage();
        }
    }
}

function concussion() {

    wrapperContent = `<img src="images/luxationSectionImages/Concussion/concussionImages.png" alt="" id="concussionImages">
    <img src="images/luxationSectionImages/Concussion/concussionInfo.png" alt="" id="CaseInfo3">
    <div class="timer">
            
        </div>
    <button id="back-button" style="visibility: hidden;">back</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();



    let backButton = document.getElementById("back-button");
    timeOutButton(backButton, 10000);



    backButton.onclick = function () {
        localStorage.setItem('concussionFlag', 1);

        wrapper.innerHTML = "";
        luxationSection();
    }
}

function subluxation() {

    wrapperContent = `<img src="images/luxationSectionImages/subluxation/subluxationInfo.png" alt="" id="CaseInfo3">
    <h1 id="question">Guess what is the treatment for subluxation?</h1>
    <div class="answer-area">
        <div class="answer">
            <input name="question" id="answer1" type="radio" data-answer="A. Send the patient to a real doctor." checked="true">
            <label for="answer1">A. Send the patient to a real doctor.</label>
        </div>
        <div class="answer">
            <input name="question" id="answer2" type="radio" data-answer="B. No treatment, unless tender, then splint for 2 weeks.">
            <label for="answer2">B. No treatment, unless tender, then splint for 2 weeks.</label>
        </div>
        <div class="answer">
            <input name="question" id="answer3" type="radio" data-answer="C. I don’t know.">
            <label for="answer3">C. I don’t know.</label>
        </div>
        <div class="answer">
            <input name="question" id="answer4" type="radio" data-answer="D. I’ll extract that tooth, and everyone will be happy!">
            <label for="answer4">D. I’ll extract that tooth, and everyone will be happy!</label>
        </div>
    </div>
    <div class="timer">
            
        </div>
    <button id="next-button" style="visibility: hidden;">submit</button>
    <button id="back-button" style="visibility: hidden;">back</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let correctAnswer = "B. No treatment, unless tender, then splint for 2 weeks.";
    let checkButton = document.getElementById("next-button");
    let backButton = document.getElementById("back-button");

    timeOutButton(checkButton, 20000);
    checkButton.onclick = function () {
        if (checkAnswer(correctAnswer)) {
            checkButton.remove();
            backButton.style.visibility = "visible";
        }
    }
    backButton.onclick = function () {
        localStorage.setItem('subluxationFlag', 1);
        wrapper.innerHTML = "";
        luxationSection();
    }
}

function extrusiveLuxation() {

    wrapperContent = `<img src="images/luxationSectionImages/Extrusive luxation/extrusiveLuxation.png" alt="" id="CaseInfo3">
     <h1 id="question" style="font-size: 24px;">Guess what is the treatment for if the extruded tooth became non-vital?</h1>
     <div class="answer-area">
         <div class="answer">
             <input name="question" id="answer1" type="radio" data-answer="A. Wiggle the tooth till it comes back to life." checked="true">
             <label for="answer1">A. Wiggle the tooth till it comes back to life.</label>
         </div>
         <div class="answer">
             <input name="question" id="answer2" type="radio" data-answer="B. Class V restoration, I’ll make sure it’s shiny!">
             <label for="answer2">B. Class V restoration, I’ll make sure it’s shiny!</label>
         </div>
         <div class="answer">
             <input name="question" id="answer3" type="radio" data-answer="C. RCT according to tooth stage of development.">
             <label for="answer3">C. RCT according to tooth stage of development.</label>
         </div>
         <div class="answer">
             <input name="question" id="answer4" type="radio" data-answer="D. Extraction… sounds right.">
             <label for="answer4">D. Extraction… sounds right.</label>
         </div>
     </div>
     <div class="timer">
            
        </div>
     <button id="next-button" style="visibility: hidden;">next</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let correctAnswer = "C. RCT according to tooth stage of development.";
    let nextButton = document.getElementById("next-button");
    timeOutButton(nextButton, 20000);

    nextButton.onclick = function () {
        if (checkAnswer(correctAnswer)) {
            wrapper.innerHTML = "";
            extrusiveLuxationDragAndDrop();
        }
    }
}

function extrusiveLuxationDragAndDrop() {

    wrapperContent = `<img src="images/textImages/ExtrusiveluxationGameText.png" alt="" id="GameText">
    <h2 id="GameInstrucation">Drag and drop the steps in order</h2>
    <div class="answer-image"><img src="images/generalImages/Picture1.jpg" alt=""></div>
    <div class="answers-list">
        <div class="dragAnswer" id="dragA-id1" draggable="true"><img src="images/generalImages/Picture7.png" alt=""></div>
        <div class="dragAnswer" id="dragA-id2" draggable="true"><img src="images/generalImages/Picture8.png" alt=""></div>
        <div class="dragAnswer" id="dragA-id3" draggable="true"><img src="images/generalImages/Picture9.png" alt=""></div>
        <div class="dragAnswer" id="dragA-id4" draggable="true"><img src="images/generalImages/Picture10.png" alt="" style="width: 120px; margin-left:40px;"></div>
        <div class="dragAnswer" id="dragA-id5" draggable="true"><img src="images/generalImages/Picture11.png" alt=""></div>
    </div>
    <button id="back-button" style="visibility: hidden;">back</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();

    answerList = ["dragA-id1", "dragA-id2", "dragA-id5", "dragA-id4", "dragA-id3"];
    dragAndDropGame(answerList, 2);

    let backButton = document.getElementById("back-button");

    backButton.onclick = function () {
        localStorage.setItem('extrusiveLuxationFlag', 1);
        wrapper.innerHTML = "";
        luxationSection();
    }
}

function intrusiveLuxation() {

    wrapperContent = `<img src="images/luxationSectionImages/Intrusive luxation/IntrusiveLuxationInfo.png" alt="" id="CaseInfo3">
    <h1 id="question" style="font-size: 24px;">If you take an x-ray, how do you think an intruded tooth will look like?</h1>
 <div class="answer-area">
     <div class="answer">
         <input name="question" id="answer1" type="radio" data-answer="A. Like a potato." checked="true">
         <label for="answer1">A. Like a potato.</label>
     </div>
     <div class="answer">
         <input name="question" id="answer2" type="radio" data-answer="B. Like a molar.">
         <label for="answer2">B. Like a molar.</label>
     </div>
     <div class="answer">
         <input name="question" id="answer3" type="radio" data-answer="C. This is a wrong answer.">
         <label for="answer3">C. This is a wrong answer.</label>
     </div>
     <div class="answer">
         <input name="question" id="answer4" type="radio" data-answer="D. Decreased or no PDL space apically.">
         <label for="answer4">D. Decreased or no PDL space apically.</label>
     </div>
 </div>
 <div class="timer">
            
        </div>
 <button id="next-button" style="visibility: hidden;">next</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let correctAnswer = "D. Decreased or no PDL space apically.";
    let nextButton = document.getElementById("next-button");
    timeOutButton(nextButton, 20000);

    nextButton.onclick = function () {
        if (checkAnswer(correctAnswer)) {
            wrapper.innerHTML = "";
            wrapper.innerHTML += `<img src="images/luxationSectionImages/Intrusive luxation/IntrusiveLuxationInfo2.png" alt="" id="CaseInfo3">
            <div class="timer">
            
        </div>
            <button id="next-button" style="visibility: hidden;">Next</button>`;
            clickSound();

            let nextButton = document.getElementById("next-button");
            timeOutButton(nextButton, 10000);

            nextButton.onclick = function () {
                wrapper.innerHTML = "";
                wrapper.innerHTML += `<div class="container">
                <img src="images/luxationSectionImages/Intrusive luxation/IntrusiveLuxationInfo3.png" alt="" id="CaseInfo3">
                    <button id="next-button" style="visibility: hidden;">Next</button>
                    <div class="timer">
            
        </div>
            </div>`
                clickSound();

                let nextButton = document.getElementById("next-button");
                timeOutButton(nextButton, 10000);

                nextButton.onclick = function () {
                    wrapper.innerHTML = "";
                    intrusiveLuxationDragAndDrop();
                }

            }
        }
    }
}



function intrusiveLuxationDragAndDrop() {
    wrapperContent = `<img src="images/textImages/IntrusiveLuxationGameText.png" alt="" id="GameText2">
    <h2 id="GameInstrucation">Drag and drop the correct answer</h2>
    <h2 style="position: absolute; margin-top: 150px; margin-left:150px;">The first thing to do in treating an immature intruded tooth:</h2>
    <div class="answer-image"><img src="images/luxationSectionImages/Intrusive luxation/gameMainPicture.png" alt="" style="width: 800px; margin-left: 70px; margin-top: 200px;"></div>
    <div class="answers-list" style="margin-left: 110px;">
        <div class="dragAnswer" id="dragA-id1" draggable="true"><img src="images/luxationSectionImages/Intrusive luxation/answer1.png" alt="" ></div>
        <div class="dragAnswer" id="dragA-id2" draggable="true"><img src="images/luxationSectionImages/Intrusive luxation/answer2.png" alt="" style="width: 120px; margin-left:100px;"></div>
        <div class="dragAnswer" id="dragA-id3" draggable="true"><img src="images/luxationSectionImages/Intrusive luxation/answer3.png" alt="" style="margin-left:100px;"></div>
    </div>
    <button id="back-button" style="visibility: hidden;">back</button>`;
    wrapper.innerHTML += wrapperContent;
    clickSound();

    answerList = ["dragA-id1"];
    dragAndDropGame(answerList, 0);

    let backButton = document.getElementById("back-button");

    backButton.onclick = function () {
        localStorage.setItem('intrusiveLuxationFlag', 1);
        wrapper.innerHTML = "";
        luxationSection();
    }

}

function lateralLuxation() {

    wrapperContent = `<img src="images/luxationSectionImages/Lateral luxation/lateralLuxationInfo.png" alt="" id="CaseInfo3">
    <h1 id="question" style="font-size: 24px;">Sensibility testing for a luxated tooth will likely be:</h1>
 <div class="answer-area">
     <div class="answer">
         <input name="question" id="answer1" type="radio" data-answer="A. Green." checked="true">
         <label for="answer1">A. Green.</label>
     </div>
     <div class="answer">
         <input name="question" id="answer2" type="radio" data-answer="B. Blue.">
         <label for="answer2">B. Blue.</label>
     </div>
     <div class="answer">
         <input name="question" id="answer3" type="radio" data-answer="C. No response.">
         <label for="answer3">C. No response.</label>
     </div>
     <div class="answer">
         <input name="question" id="answer4" type="radio" data-answer="D. Orange.">
         <label for="answer4">D. Orange.</label>
     </div>
 </div>
 <div class="timer">
            
        </div>
 <button id="next-button" style="visibility: hidden;">next</button>`;
    wrapper.innerHTML += wrapperContent;
    clickSound();

    correctAnswer = "C. No response.";
    let nextButton = document.getElementById("next-button");
    timeOutButton(nextButton, 20000);

    nextButton.onclick = function () {
        if (checkAnswer(correctAnswer)) {
            wrapper.innerHTML = "";
            wrapper.innerHTML += `<img src="images/luxationSectionImages/Lateral luxation/lateralLuxationInfo2.png" alt="" id="CaseInfo3">
            <div class="timer">
            
        </div>
            <button id="next-button" style="visibility: hidden;">Next</button>`;
            clickSound();

            let nextButton = document.getElementById("next-button");
            timeOutButton(nextButton, 10000);

            nextButton.onclick = function () {
                wrapper.innerHTML = "";
                lateralLuxationDragAndDrop();
            }
        }
    }
}


function lateralLuxationDragAndDrop() {
    wrapperContent = `<img src="images/textImages/lateralLuxationGameText.png" alt="" id="GameText2">
    <h2 id="GameInstrucation">Drag and drop the steps in order</h2>
    <div class="answer-image"><img src="images/generalImages/Picture12.jpg" alt=""></div>
    <div class="answers-list" style="width:100px;">
        <div class="dragAnswer" id="dragA-id1" draggable="true"><img src="images/luxationSectionImages/Lateral luxation/answer1.png" alt="" style="width:160px;"></div>
        <div class="dragAnswer" id="dragA-id2" draggable="true"><img src="images/luxationSectionImages/Lateral luxation/answer2.png" alt="" style="width:180px;"></div>
        <div class="dragAnswer" id="dragA-id3" draggable="true"><img src="images/luxationSectionImages/Lateral luxation/answer3.png" alt="" style="width:160px;"></div>
        <div class="dragAnswer" id="dragA-id4" draggable="true"><img src="images/luxationSectionImages/Lateral luxation/answer4.png" alt="" style="width:180px;"></div>
        <div class="dragAnswer" id="dragA-id5" draggable="true"><img src="images/luxationSectionImages/Lateral luxation/answer5.png" alt="" style="width:160px;"></div>
    </div>
    <button id="back-button" style="visibility: hidden;">back</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();

    answerList = ["dragA-id1", "dragA-id4", "dragA-id2", "dragA-id5", "dragA-id3"];
    dragAndDropGame(answerList, 13);

    let backButton = document.getElementById("back-button");

    backButton.onclick = function () {
        localStorage.setItem('lateralLuxationFlag', 1);
        wrapper.innerHTML = "";
        luxationSection();
    }

}

function preFractureSection() {
    wrapper.className = "wrapperWhiteBackground";
    wrapperContent = `<button id="next-button" style="margin-top: 657px; visibility: hidden;">Next</button>
    <div class="preFractureBorder" style="position: absolute;">
        <img src="images/generalImages/docPic4.png" alt="" id="docPic4">
        <img src="images/generalImages/docDialog5.png" alt="" id="docDialog5">
        <button id="no-button"></button>
    </div>
    <button id="back-button">Previous</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();


    let previousButton = document.getElementById("back-button");
    previousButton.onclick = function () {
        wrapper.className = "wrapper";
        previousPage();
    }
    let noButton = document.getElementById("no-button");
    noButton.onclick = function () {
        wrapper.innerHTML = "";
        wrapper.innerHTML += `<div class="preFractureBorder" style="position: absolute;">
        <video autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto" style="width: 650px; margin-top: 80px; position: absolute;"><source src="videos/video6003548055633138404.mp4" type="video/mp4"></video>
    </div>
    <button id="back-button">Previous</button>
    <button id="next-button">Next</button>`;
        wrongSound.play();
        clickSound();

        let previousButton = document.getElementById("back-button");
        previousButton.onclick = function () {
            wrapper.className = "wrapper";
            previousPage();
        }
        let nextButton = document.getElementById("next-button");
        nextButton.onclick = function () {
            wrapper.className = "wrapper";
            NextPage();
        }
    }


}

function fractureSection() {

    var uncomplicatedCrownFractureFlag = parseFloat(localStorage.getItem("uncomplicatedCrownFractureFlag")), complicatedCrownFractureFlag = parseFloat(localStorage.getItem("complicatedCrownFractureFlag")),
        rootFractureFlag = parseFloat(localStorage.getItem("rootFractureFlag")), uncomplicatedCrown_rootFractureFlag = parseFloat(localStorage.getItem("uncomplicatedCrown_rootFractureFlag")),
        complicatedCrown_rootFractureFlag = parseFloat(localStorage.getItem("complicatedCrown_rootFractureFlag")), alveolarFractureFlag = parseFloat(localStorage.getItem("alveolarFractureFlag"));


    wrapperContent = `<img src="images/textImages/fractureText.png" alt="" id="fracture-text">
    <div class="fracture-buttons">
        <button id="UncomplicatedCrownFracture"><h1>Uncomplicated<br>crown fracture</h1></button>
        <button id="ComplicatedCrownFracture"><h1>Complicated crown<br>fracture</h1></button>
        <button id="RootFracture"><h1>Root fracture</h1></button>
        <button id="UncomplicatedCrown-rootFracture"><h1>Uncomplicated<br>crown-root fracture</h1></button>
        <button id="ComplicatedCrown-rootFracture"><h1>Complicated<br>crown-root fracture</h1></button>
        <button id="AlveolarFracture"><h1>Alveolar Fracture</h1></button>
    </div>
    <button id="back-button">Previous</button>
    <button id="next-button" style="visibility: hidden;">Next</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let nextButton = document.getElementById("next-button");
    if (uncomplicatedCrownFractureFlag === 1 && complicatedCrownFractureFlag === 1 && rootFractureFlag === 1 &&
        uncomplicatedCrown_rootFractureFlag === 1 && complicatedCrown_rootFractureFlag === 1 && alveolarFractureFlag === 1) {
        nextButton.style.visibility = "visible";
    }

    let uncomplicatedCrownButton = document.getElementById("UncomplicatedCrownFracture");
    let complicatedCrownFractureButton = document.getElementById("ComplicatedCrownFracture");
    let rootFractureButton = document.getElementById("RootFracture");
    let uncomplicatedCrown_rootFractureButton = document.getElementById("UncomplicatedCrown-rootFracture");
    let complicatedCrown_rootFractureButton = document.getElementById("ComplicatedCrown-rootFracture");
    let alveolarFractureButton = document.getElementById("AlveolarFracture");

    if (uncomplicatedCrownFractureFlag === 1)
        uncomplicatedCrownButton.style.backgroundColor = "#464646";

    if (complicatedCrownFractureFlag === 1)
        complicatedCrownFractureButton.style.backgroundColor = "#464646";

    if (rootFractureFlag === 1)
        rootFractureButton.style.backgroundColor = "#464646";

    if (uncomplicatedCrown_rootFractureFlag === 1)
        uncomplicatedCrown_rootFractureButton.style.backgroundColor = "#464646";

    if (complicatedCrown_rootFractureFlag === 1)
        complicatedCrown_rootFractureButton.style.backgroundColor = "#464646";

    if (alveolarFractureFlag === 1)
        alveolarFractureButton.style.backgroundColor = "#464646";


    uncomplicatedCrownButton.onclick = function () {
        wrapper.innerHTML = "";
        uncomplicatedCrown();
    }

    complicatedCrownFractureButton.onclick = function () {
        wrapper.innerHTML = "";
        complicatedCrown();
    }

    rootFractureButton.onclick = function () {
        wrapper.innerHTML = "";
        root();
    }

    uncomplicatedCrown_rootFractureButton.onclick = function () {
        wrapper.innerHTML = "";
        uncomplicatedCrown_root();
    }

    complicatedCrown_rootFractureButton.onclick = function () {
        wrapper.innerHTML = "";
        complicatedCrown_root();

    }

    alveolarFractureButton.onclick = function () {
        wrapper.innerHTML = "";
        alveolar();
    }

    let previousButton = document.getElementById("back-button");
    previousButton.onclick = function () {
        previousPage();
    }

    nextButton.onclick = function () {
        NextPage();
    }
}



function uncomplicatedCrown() {

    wrapperContent = `<img src="images/fractureSectionImages/UncomplicatedCrownFracture/Uncomplicated crown fractureInfo.png" alt="" id="CaseInfo">
    <h1 id="question" style="font-size: 20px;">In case of a lip laceration and a missing tooth fragment, why do we need to take soft tissue x-rays?</h1>
 <div class="answer-area">
     <div class="answer">
         <input name="question" id="answer1" type="radio" data-answer="A. They told me to do that" checked="true">
         <label for="answer1">A. They told me to do that</label>
     </div>
     <div class="answer">
         <input name="question" id="answer2" type="radio" data-answer="B. To charge for an x-ray in my private clinic $$">
         <label for="answer2">B. To charge for an x-ray in my private clinic $$</label>
     </div>
     <div class="answer">
         <input name="question" id="answer3" type="radio" data-answer="C. I think it’s unnecessary exposure">
         <label for="answer3">C. I think it’s unnecessary exposure</label>
     </div>
     <div class="answer">
         <input name="question" id="answer4" type="radio" data-answer="D. The tooth fragment might be embedded there!">
         <label for="answer4">D. The tooth fragment might be embedded there!</label>
     </div>
 </div>
 <div class="timer">
            
        </div>
 <button id="next-button" style="visibility: hidden;">next</button>`;
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let correctAnswer = "D. The tooth fragment might be embedded there!";
    let nextButton = document.getElementById("next-button");
    timeOutButton(nextButton, 20000);

    nextButton.onclick = function () {
        if (checkAnswer(correctAnswer)) {
            wrapper.innerHTML = "";
            wrapper.innerHTML += `<div class="container">
            <img src="images/fractureSectionImages/UncomplicatedCrownFracture/Uncomplicated crown fractureInfo2.png" alt="" id="UncomplicatedCrownFractureInfo">
            <div class="timer">
            
        </div>
            <button id="back-button" style="visibility: hidden; margin-top: 657px;">Back</button>
            </div>`;
            clickSound();
            let backButton = document.getElementById("back-button");
            timeOutButton(backButton, 10000);

            backButton.onclick = function () {
                localStorage.setItem('uncomplicatedCrownFractureFlag', 1);
                wrapper.innerHTML = "";
                fractureSection();
            }
        }
    }
}

function uncomplicatedCrown_root() {

    wrapperContent = `<img src="images/fractureSectionImages/UncomplicatedCrown_rootFracture/Uncomplicated crown-root fractureInfo.png" alt="" id="CaseInfo">
    <h1 id="question" style="font-size: 24px;">In case of a lip laceration and a missing tooth fragment in an uncomplicated crown-root fracture, do we need to take a soft tissue x-ray?</h1>
 <div class="answer-area">
     <div class="answer">
         <input name="question" id="answer1" type="radio" data-answer="A. YES 😌" checked="true">
         <label for="answer1">A. YES 😌</label>
     </div>
     <div class="answer">
         <input name="question" id="answer2" type="radio" data-answer="B. No 😏">
         <label for="answer2">B. No 😏</label>
     </div>
     <div class="answer">
         <input name="question" id="answer3" type="radio" data-answer="C. No 😡">
         <label for="answer3">C. No 😡</label>
     </div>
     <div class="answer">
         <input name="question" id="answer4" type="radio" data-answer="D. No🤔">
         <label for="answer4">D. No🤔</label>
     </div>
 </div>
 <div class="timer">
            
        </div>
 <button id="next-button" style="visibility: hidden;">next</button>`;
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let correctAnswer = "A. YES 😌";
    let nextButton = document.getElementById("next-button");
    timeOutButton(nextButton, 20000);

    nextButton.onclick = function () {
        if (checkAnswer(correctAnswer)) {
            wrapper.innerHTML = "";
            wrapper.innerHTML = `<div class="container">
            <img src="images/fractureSectionImages/UncomplicatedCrown_rootFracture/Uncomplicated crown-root fractureInfo2.png" alt="" id="UncomplicatedCrown_rootFractureInfo">
            <div class="timer">
            
        </div>
            <button id="back-button" style="visibility: hidden; margin-top: 657px;">Back</button>
            </div>`;
            clickSound();

            let backButton = document.getElementById("back-button");
            timeOutButton(backButton, 10000);

            backButton.onclick = function () {
                localStorage.setItem('uncomplicatedCrown_rootFractureFlag', 1);
                wrapper.innerHTML = "";
                fractureSection();
            }
        }
    }
}

function complicatedCrown() {

    wrapper.innerHTML += `<div class="container">
    <img src="images/fractureSectionImages/ComplicatedCrownFracture/Complicated crown fractureInfo.png" alt="" id="CaseInfo">
    <img src="images/fractureSectionImages/ComplicatedCrownFracture/Complicated crown images.png" alt="" id="ComplicatedCrownImages">
    <div class="timer">
            
        </div>
    <button id="next-button" style="visibility: hidden;">Next</button>
    </div>`
    clickSound();

    let nextButton = document.getElementById("next-button");
    timeOutButton(nextButton, 10000);

    nextButton.onclick = function () {
        wrapper.innerHTML = "";
        complicatedCrownDragAndDrop();
    }
}

function complicatedCrownDragAndDrop() {
    wrapperContent = `<img src="images/textImages/Complicated crown fracture GameText.png" alt="" id="GameText2">
    <h2 id="GameInstrucation" style="font-size: 20px; text-align: center; margin: 90px 55px; font-size: 24px;">Drag and drop the steps of treating tooth with a complicated crown fracture <br> (in order):</h2>
    <div class="answer-image"><img src="images/generalImages/Picture18.jpg" alt=""></div>
    <div class="answers-list" style="margin-top: 450px;">
        <div class="dragAnswer" id="dragA-id1" draggable="true"><img src="images/fractureSectionImages/ComplicatedCrownFracture/answer1.png" alt="" style="width:180px;"></div>
        <div class="dragAnswer" id="dragA-id2" draggable="true"><img src="images/fractureSectionImages/ComplicatedCrownFracture/answer2.png" alt="" style="width:210px; margin-top:35px;"></div>
        <div class="dragAnswer" id="dragA-id3" draggable="true"><img src="images/fractureSectionImages/ComplicatedCrownFracture/answer3.png" alt="" style="width:200px;margin-top:20px;"></div>
        <div class="dragAnswer" id="dragA-id4" draggable="true"><img src="images/fractureSectionImages/ComplicatedCrownFracture/answer4.png" alt="" style="width:200px;margin-top:25px;"></div>
    </div>
    <button id="back-button" style="visibility: hidden;">Back</button>`
    wrapper.innerHTML += wrapperContent;
    clickSound();

    answerList = ["dragA-id1", "dragA-id4", "dragA-id3", "dragA-id2"];
    dragAndDropGame(answerList, 19);

    let backButton = document.getElementById("back-button");
    
    backButton.onclick = function () {
        localStorage.setItem('complicatedCrownFractureFlag', 1);
        wrapper.innerHTML = "";
        fractureSection();
    }
}

function complicatedCrown_root() {
    
    wrapperContent = `<div class="container">
    <img src="images/fractureSectionImages/ComplicatedCrown_rootFracture/Complicated crown-root fractureInfo.png" alt="" id="CaseInfo">
    <img src="images/fractureSectionImages/ComplicatedCrown_rootFracture/Complicated crown-root fracture images.png" alt="" id="ComplicatedCrown_rootImages">
    <div class="timer">
            
        </div>
    <button id="next-button" style="visibility: hidden;">Next</button>
    </div>`;
    wrapper.innerHTML += wrapperContent;
    clickSound();

    let nextButton = document.getElementById("next-button");
    timeOutButton(nextButton, 10000);

    nextButton.onclick = function () {
        wrapper.innerHTML = "";
        wrapperContent = `<img src="images/fractureSectionImages/ComplicatedCrown_rootFracture/Complicated crown-root fractureInfo2.png" alt="" id="CaseInfo">
        <h1 id="question" style="font-size: 24px;">Why is it important to preserve the pulp (pulp capping or partial pulpotomy) in immature teeth with complicated crown-root fracture?</h1>
     <div class="answer-area">
         <div class="answer">
             <input name="question" id="answer1" type="radio" data-answer="A. I think so" checked="true">
             <label for="answer1">A. I think so</label>
         </div>
         <div class="answer">
             <input name="question" id="answer2" type="radio" data-answer="B. Blue.">
             <label for="answer2">B. Blue.</label>
         </div>
         <div class="answer">
             <input name="question" id="answer3" type="radio" data-answer="C. To promote further root development.">
             <label for="answer3">C. To promote further root development.</label>
         </div>
         <div class="answer">
             <input name="question" id="answer4" type="radio" data-answer="D. No">
             <label for="answer4">D. No</label>
         </div>
     </div>
     <div class="timer">
            
        </div>
     <button id="back-button" style="visibility: hidden;">Back</button>
     <button id="next-button" style="visibility: hidden;">submit</button>`;
        wrapper.innerHTML += wrapperContent;
        clickSound();

        correctAnswer = "C. To promote further root development.";
        let backButton = document.getElementById("back-button");
        let checkButton = document.getElementById("next-button");
        timeOutButton(checkButton, 20000);

        checkButton.onclick = function () {
            if (checkAnswer(correctAnswer)) {
                checkButton.remove();
                backButton.style.visibility = "visible";
            }
        }
        backButton.onclick = function () {
            localStorage.setItem('complicatedCrown_rootFractureFlag', 1);
            wrapper.innerHTML = "";
            fractureSection();
        }
    }
}

function root() {
    
    wrapper.innerHTML += `<div class="container">
    <img src="images/fractureSectionImages/RootFracture/Root fractureInfo.png" alt="" id="CaseInfo">
    <img src="images/fractureSectionImages/RootFracture/Root fracture images.png" alt="" id="RootImages">
    <div class="timer">
            
        </div>
    <button id="next-button" style="visibility: hidden; margin-top: 658px;">Next</button>
    </div>`;
    clickSound();

    let nextButton = document.getElementById("next-button");
    timeOutButton(nextButton, 10000);

    nextButton.onclick = function () {
        wrapper.innerHTML = "";
        wrapper.innerHTML += `<div class="container"> 
        <img src="images/fractureSectionImages/RootFracture/Root fractureInfo2.png" alt="" id="CaseInfo">
        <img src="images/fractureSectionImages/RootFracture/Root fracture images2.png" alt="" id="RootImages2">
        <div class="timer">
            
        </div>
        <button id="back-button" style="visibility: hidden; margin-top: 658px;">Back</button>
        </div>`
        clickSound();

        let backButton = document.getElementById("back-button");
        timeOutButton(backButton, 10000);

        backButton.onclick = function () {
            localStorage.setItem('rootFractureFlag', 1);
            wrapper.innerHTML = "";
            fractureSection();
        }
    }
}

function alveolar() {
    
    wrapperContent = `<img src="images/fractureSectionImages/AlveolarFracture/Alveolar FractureInfo.png" alt="" id="CaseInfo">
    <h1 id="question" style="font-size: 24px;">What’s the treatment for an alveolar fracture?</h1>
 <div class="answer-area">
     <div class="answer">
         <input name="question" id="answer1" type="radio" data-answer="A. I will be freaking out" checked="true">
         <label for="answer1">A. I will be freaking out</label>
     </div>
     <div class="answer">
         <input name="question" id="answer2" type="radio" data-answer="B. Reposition, splint for 4 weeks, then monitor the pulp">
         <label for="answer2">B. Reposition, splint for 4 weeks, then monitor the pulp</label>
     </div>
     <div class="answer">
         <input name="question" id="answer3" type="radio" data-answer="C. Refer to a good dentist">
         <label for="answer3">C. Refer to a good dentist</label>
     </div>
     <div class="answer">
         <input name="question" id="answer4" type="radio" data-answer="D. Give the patient a nice Hollywood smile to post it on Instagram">
         <label for="answer4" style="font-size: 13px;">D. Give the patient a nice Hollywood smile to post it on Instagram</label>
     </div>
 </div>
 <div class="timer">
            
        </div>
 <button id="back-button" style="visibility: hidden;">Back</button>
 <button id="next-button" style="visibility: hidden;">submit</button>`;
    wrapper.innerHTML += wrapperContent;
    clickSound();

    correctAnswer = "B. Reposition, splint for 4 weeks, then monitor the pulp";
    let backButton = document.getElementById("back-button");
    let checkButton = document.getElementById("next-button");
    timeOutButton(checkButton, 20000);

    checkButton.onclick = function () {
        if (checkAnswer(correctAnswer)) {
            checkButton.remove();
            backButton.style.visibility = "visible";
        }
    }
    backButton.onclick = function () {
        localStorage.setItem('alveolarFractureFlag', 1);
        wrapper.innerHTML = "";
        fractureSection();
    }
}

function summary1() {
    summaryIndex = 1;
    wrapper.innerHTML = `<div class="container">
    <img src="images/generalImages/docPic5.png" alt="" id="docPic5">
    <div class="summary-list1">

    </div>
    <button id="back-button" style="margin-top: 657px;">Previous</button>
    <button id="next-button" style="visibility: hidden; margin-top: 657px;">Next</button>
</div>`
    clickSound();

    let nextButton = document.getElementById("next-button");
    let summaryList = document.querySelector(".wrapper .container .summary-list1");
    wrapper.onclick = function () {
        if (summaryIndex === 7) {
            nextButton.style.visibility = "visible";
        }
        else {
            summaryList.innerHTML += `<img src="images/summaryImages/sum${summaryIndex}.png" alt="">`;
            flipSound.play();
            summaryIndex++;
        }
    }
    let previousButton = document.getElementById("back-button");
    previousButton.onclick = function () {
        previousPage();
    }
    nextButton.onclick = function () {
        NextPage();
    }
}


function summary2() {
    summaryIndex = 7;
    wrapper.innerHTML = `<div class="container">
    <img src="images/generalImages/docPic5.png" alt="" id="docPic5">
    <div class="summary-list2">
        
    </div>
    <button id="back-button" style="margin-top: 657px;">Previous</button>
    <button id="next-button" style="visibility: hidden; margin-top: 657px;">Next</button>
</div>`
    clickSound();

    let nextButton = document.getElementById("next-button");
    let summaryList = document.querySelector(".wrapper .container .summary-list2");
    wrapper.onclick = function () {
        if (summaryIndex === 13) {
            nextButton.style.visibility = "visible";
        }
        else {
            summaryList.innerHTML += `<img src="images/summaryImages/sum${summaryIndex}.png" alt="">`;
            flipSound.play();
            summaryIndex++;
        }
    }
    let previousButton = document.getElementById("back-button");
    previousButton.onclick = function () {
        previousPage();
    }
    nextButton.onclick = function () {
        NextPage();
    }

}

function endPage() {
    wrapper.innerHTML += `<button id="end-button">END</button>
    <button id="back-button" style="margin-top: 658px;">Previous</button>`

    clickSound();

    let previousButton = document.getElementById("back-button");
    previousButton.onclick = function () {
        previousPage();
    }

    let endButton = document.getElementById("end-button");
    endButton.onclick = function () {
        wrapper.innerHTML = "";

        closeOfPage();

        localStorage.clear();
    }
}

function closeOfPage() {
    wrapper.innerHTML += `<div class="container">
    <img src="images/generalImages/docsPic2.png" alt="" id="docsPic2">
    <div class="logoArea">
        <div id="logoText">Designed  by :</div>
        <img src="images/generalImages/logo.png" alt="" id="logo">
    </div>
</div>`;
    
}

//------------------------------------------------------------------------------------------------

function setTimer(time) {

    timer = document.querySelector(".timer")
    setTimeout(function () {
        if (time <= 0) {
            timer.remove();
            return;
        }

        if (time >= 10)
            timer.innerHTML = "00:" + time--;

        else
            timer.innerHTML = "00:0" + time--;
        setTimer(time)
    }, 1000)
}

//-----------------------------------------------------------------------------------------------

function timeOutButton(button, time) {
    setTimer((time / 1000) - 1);
    setTimeout(function () { button.style.visibility = "visible" }, time + 100);
}

//-----------------------------------------------------------------------------------------------

function clickSound() {
    let buttons = document.querySelectorAll("button");
    const audio = new Audio("sounds/click1.wav");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            audio.play();
        })
    })
}

function checkAnswer(correctAnswer) {
    let answers = document.getElementsByName("question");
    let choosenAnswer;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            choosenAnswer = answers[i].dataset.answer;
        }
    }
    if (choosenAnswer === correctAnswer) {
        correctSound.play();
        alert("that's correct!");
        return true;
    }
    else {
        wrongSound.play();
        alert("wrong");
        return false;
    }
}

function dragAndDropGame(answerList, imageIndex) {
    let dragAnswers = document.querySelectorAll(".dragAnswer");
    let answerPlace = document.querySelector(".answer-image");
    let answerImage = document.querySelector(".answer-image img");
    let Button = document.querySelector("button")


    answerIndex = 0;
    let drag = null;
    dragAnswers.forEach(dragAnswer => {
        dragAnswer.addEventListener('dragstart', function () {
            drag = dragAnswer;
        })

        dragAnswer.addEventListener('dragend', function () {
            drag = null;
        })
    });

    answerPlace.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    answerPlace.addEventListener('drop', function () {
        checkAnswer();
        if (answerIndex === answerList.length)
            Button.style.visibility = "visible";

    });


    function checkAnswer() {
        if (answerList[answerIndex] === drag.id) {
            correctSound.play();
            if (answerList.length > 1) {
                if (imageIndex === 16)
                    answerPlace.innerHTML = "";
                else
                    answerPlace.removeChild(answerImage);
                if (imageIndex === 15) {
                    answerPlace.innerHTML = "";
                    answerPlace.innerHTML = `<video autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"><source src="images/luxationSectionImages/Lateral luxation/video5978765883881820064.mp4" type="video/mp4"></video>`;
                    imageIndex++;
                }
                else
                    insertNewImage();
            }
            if (answerList.length > 1)
                alert(`that's correct, this is step ${answerIndex + 1}`)
            else
                alert("that's correct")
            answerIndex++;

        }
        else if (answerIndex === answerList.length) {
            alert("nothing more can be done")
        }
        else {
            wrongSound.play();
            alert("wrong")
        }

    }

    function insertNewImage() {
        answerImage.src = `images/generalImages/Picture${imageIndex}.jpg`;
        answerPlace.appendChild(answerImage);
        imageIndex++;
    }
}

function NextPage() {
    wrapper.onclick = null;
    wrapper.innerHTML = "";
    pageIndex++;
    localStorage.setItem("pageIndex", pageIndex);

    if (pageIndex === 0) startPage();
    else if(pageIndex === 1) namePage()
    else if (pageIndex === 2) startPageTwo();
    else if (pageIndex === 3) startPageThree();
    else if (pageIndex === 4) contentsTablePage();
    else if (pageIndex === 5) luxationSection();
    else if (pageIndex === 6) preFractureSection();
    else if (pageIndex === 7) fractureSection();
    else if (pageIndex === 8) summary1();
    else if (pageIndex === 9) summary2();
    else if (pageIndex === 10) endPage();
}

function previousPage() {
    wrapper.onclick = null;
    wrapper.innerHTML = "";
    pageIndex--;
    localStorage.setItem("pageIndex", pageIndex);

    if (pageIndex === 0) startPage();
    else if(pageIndex === 1) namePage()
    else if (pageIndex === 2) startPageTwo();
    else if (pageIndex === 3) startPageThree();
    else if (pageIndex === 4) contentsTablePage();
    else if (pageIndex === 5) luxationSection();
    else if (pageIndex === 6) preFractureSection();
    else if (pageIndex === 7) fractureSection();
    else if (pageIndex === 8) summary1();
    else if (pageIndex === 9) summary2();
}
