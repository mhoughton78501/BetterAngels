function genesisError() {
  if (sessionStorage.getItem('alertedNum')!=='yes') {
    alert("Warning: System overload. Error: GENESIS. (!PLEASE REBOOT!)");
    sessionStorage.setItem('alertedNum','yes');
    setTimeout(function() {
      window.location.href = 'asduidsa.html';
    }, (.5*1000));
  }
}

function letterOverride() {
  const toOverride = document.getElementById("override");
  const archives = document.createElement("a");
  archives.href = "asdglkj.html";
  archives.target = "_self";
  archives.innerHTML = "ARCHIVES";
  archives.classList.add('archivesLink');
  toOverride.textContent = "";
  setTimeout(function () {
    toOverride.innerHTML += "<span class='blankSpace'>They lie. The circles broke. They broke ten days ago.</span> <br> <br><span class='blankSpace'>Please help us. </span> <br> <br><span class='blankSpace'>THEY DO NOT WANT THE BEST FOR YOU OR YOUR FRIEND.</span> <br> <br><span class='blankSpace'>Access the </span>";
    toOverride.appendChild(archives);
    toOverride.innerHTML += "<span class='blankSpace'>.</span>";
  }, (5*1000));
  sessionStorage.setItem('archiveAccessGranted','yes')
}

function contactError() {
  alert("This functionality is not available at the moment. We are sorry for the inconvenience. Please try again later. - The Better Angels Team")
}

function openMsg(id) {
  let oldMsg = document.getElementsByClassName('currentMessage');
  if (Object.hasOwn(oldMsg,0)) {
    oldMsg.item(0).classList.remove('currentMessage');
  }
  let curMsg = document.getElementById(id);
  curMsg.classList.add('currentMessage');
  let msgSpace = document.getElementById('inboxMsgSpace');
  msgSpace.innerHTML = jan26Inbox.get(id);
}

function brokenLinkMsg(){
  alert('This link is archived and not safe to use. If you are a regular member of our Better Angels project, please leave the site and contact Yellow Circle Lead Samuel Whitney (samuelwhitney@circleleads.betterangels.org). If you are a Circle Lead accessing the Archives for security purposes, please email Project Lead Joseph Bell (josephbell@lead.betterangels.org).');
}

function openPdf(pdfCode) {
  const pdf = document.createElement("div");
  pdf.classList.add('openedPdf');
  pdf.innerHTML = pdfs.get(0);
  const exitButton = createButton('exitButton', "X");
  const inbox = document.getElementById("inboxArchives");
  inbox.append(pdf);
  inbox.append(exitButton);
}

function createButton(classList, inner) {
  const button = document.createElement("button");
  button.classList.add(classList);
  button.innerHTML = inner;
  return button;
}

function closePdf() {
  const pdf = document.getElementsByClassName("openedPdf").item(0);
  const exitButton = document.getElementsByClassName("exitButton").item(0);
  pdf.remove();
  exitButton.remove();
}

function logout() {
  user = "";
}

function login(str) {
  let username = "wvcb1"
  let password = "adf";
  const usernameEl = document.getElementById("username");
  const passwordEl = document.getElementById("pw");
  if (usernameEl.value ??= null) {
    username = usernameEl.value;
  }
  if (passwordEl.value ??= null) {
    password = passwordEl.value;
  }
  if (password === "adf" && username === "wvcb1") {
    user = "Vanderon";
    if (sessionStorage.getItem('alertedNum')!=='yes') {
      window.location.href = 'index.html';
    } else {
      window.location.href = 'asdglkj.html';
    }
  } else {
    alert("Login information incorrect. Please try again. If your password has been disabled, please contact Yellow Circle Lead Samuel Whitney (samuelwhitney@circleleads.betterangels.org).");
  }
  console.log(user);
}

jan26Inbox = new Map();
jan26Inbox.set('msg1', '<span class = "title">Good luck!</span><br><span class = "sender">Christopher Henry <i>&lt;christopherhenry@one.betterangels.org&gt;</i></span><br><span class = "date">26/01/08</span><br><br>Hi Will!<br>Good luck today!<br>I\'m sure your immersion will go well; can\'t wait to see your new email. (And for you to join us in the Blue Circle, of course.)<br><br>Christopher Henry<br>One-Star | Blue Circle | Y2');
jan26Inbox.set('msg2', '<span class = "title">Final Preparations</span><br><span class = "sender">Joseph Bell <i>&lt;josephbell@lead.betterangels.org&gt;</i></span><br><span class = "date">26/01/08</span><br><br>Hello');
jan26Inbox.set('msg3', '<span class = "title">Increased Security</span><br><span class = "sender">Joan Alexander <i>&lt;joanalexander@circleleads.betterangels.org&gt;</i></span><br><span class = "date">25/01/08</span><br><br>Hello');
jan26Inbox.set('msg4', '<span class = "title">Personal Predictions</span><br><span class = "sender">Bethany Jones <i>&lt;bethanyjones@two.betterangels.org&gt;</i></span><br><span class = "date">24/01/08</span><br><br>Hello');
jan26Inbox.set('msg5', '<span class = "title">Confirmation for Procedure</span><br><span class = "sender">Isaac Boyle <i>&lt;isaacboyle@circleleads.betterangels.org&gt;</i></span><br><span class = "date">24/01/08</span><br><br>Hello');
jan26Inbox.set('msg6', 'f');
jan26Inbox.set('msg7', '<span class = "title">Double Congratulations!</span><br><span class = "sender">Christopher Henry <i>&lt;christopherhenry@one.betterangels.org&gt;</i></span><br><span class = "date">15/01/08</span><br><br>Hello');
jan26Inbox.set('msg8', '<span class = "title">Selection for Research</span><br><span class = "sender">Isaac Boyle <i>&lt;isaacboyle@circleleads.betterangels.org&gt;</i></span><br><span class = "date">14/01/08</span><br><br>Hello');
jan26Inbox.set('msg9', '<span class = "title">Addressing Grievances</span><br><span class = "sender">Joseph Bell <i>&lt;josephbell@lead.betterangels.org&gt;</i></span><br><span class = "date">12/01/08</span><br><br>Hello');
jan26Inbox.set('msg10', '<span class = "title">Disciplinary Action Resolved</span><br><span class = "sender">Maryann Zimmerman <i>&lt;maryannzimmerman@manager.betterangels.org&gt;</i></span><br><span class = "date">12/01/08</span><br><br>Hello');
jan26Inbox.set('msg11', '<span class = "title">Review Updates</span><br><span class = "sender">Louis Barras <i>&lt;louisbarras@one.betterangels.org&gt;</i></span><br><span class = "date">12/01/08</span><br><br>Hello');
jan26Inbox.set('msg12', '<span class = "title">Disciplinary Action</span><br><span class = "sender">Maryann Zimmerman <i>&lt;maryannzimmerman@manager.betterangels.org&gt;</i></span><br><span class = "date">10/01/08</span><br><br>Hello');
jan26Inbox.set('msg13', '<span class = "title">How\'s your experience so far?</span><br><span class = "sender">Christopher Henry <i>&lt;christopherhenry@one.betterangels.org&gt;</i></span><br><span class = "date">09/01/08</span><br><br>Hello');
jan26Inbox.set('msg14', '<span class = "title">New Privacy Protection Device - Free for All Members!</span><br><span class = "sender">Samuel Whitney <i>&lt;samuelwhitney@circleleads.betterangels.org&gt;</i></span><br><span class = "date">07/01/08</span><br><br>Hello');
jan26Inbox.set('msg15', '<span class = "title">Updated External Communications Standards</span><br><span class = "sender">John Doe <i>&lt;johndoe@circleleads.betterangels.org&gt;</i></span><br><span class = "date">05/01/08</span><br><br>Hello');
jan26Inbox.set('msg16', '<span class = "title">Yearly Predictions</span><br><span class = "sender">Theresa Urban <i>&lt;theresaurban@circleleads.betterangels.org&gt;</i></span><br><span class = "date">01/01/08</span><br><br>Hello');
jan26Inbox.set('msg17', '<span class = "title">Yearly Summary</span><br><span class = "sender">Joseph Bell <i>&lt;josephbell@lead.betterangels.org&gt;</i></span><br><span class = "date">31/12/07</span><br><br>Hello');
jan26Inbox.set('msg18', 'r');
jan26Inbox.set('msg19', '<span class = "title">Concerning Your Brother...</span><br><span class = "sender">Martin Cromwell <i>&lt;martincromwell@two.betterangels.org&gt;</i></span><br><span class = "date">23/12/07</span><br><br>Hello');
jan26Inbox.set('msg20', '<span class = "title">Onboarding Requirements</span><br><span class = "sender">Winston Ford <i>&lt;winstonford@circleleads.betterangels.org&gt;</i></span><br><span class = "date">21/12/07</span><br><br>Hello');
jan26Inbox.set('msg21', '<span class = "title">Nice to meet you!</span><br><span class = "sender">Christopher Henry <i>&lt;christopherhenry@one.betterangels.org&gt;</i></span><br><span class = "date">21/12/07</span><br><br>Hello');
jan26Inbox.set('msg22', '<span class = "title">Welcome</span><br><span class = "sender">Joseph Bell <i>&lt;josephbell@lead.betterangels.org&gt;</i></span><br><span class = "date">20/12/07</span><br><br>Hello');
jan26Inbox.set('msg23', '<span class = "title">Assessment Results and Orientation</span><br><span class = "sender">Better Angels Project Welcome Team <i>&lt;noreply@welcome.betterangels.org&gt;</i></span><br><span class = "date">19/12/07</span><br><br>Hello William Vanderon,<br>Thank you for taking our assessment. You are best suited for the Blue Circle, just as our recruiters suspected. You will be a researcher with the Better Angels Project. Our leader, Mr. Bell, will reach out shortly to inform you of the orientation process, and Pink Circle Lead Ford will reach out to assist you with the rest of our onboarding process. You may review your responses in the attached file.<br><br>Thank you for helping us find the better angels of this world,<br>Better Angels Project Welcome Team<br><br><br><div class = "pdf"><b class = "pdfText">Assessment - W. Vanderon - 20071219</b>');
jan26Inbox.set('msg24', '<span class = "title">Welcome to the Better Angels Project!</span><br><span class = "sender">Better Angels Project Welcome Team <i>&lt;noreply@welcome.betterangels.org&gt;</i></span><br><span class = "date">19/12/07</span><br><br>Hello William Vanderon,<br>We here at the Better Angels Project are delighted you have taken an interest in our research. Please take the assessment found <span class = "brokenLink">here</span>.<br><br>Thank you for helping us find the better angels of this world,<br>Better Angels Project Welcome Team');

pdfs = new Map();
pdfs.set(0, '<span class = "title">Results</span><h4>Overall Summary</h4>');

let user = "Vanderon";

document.addEventListener('click', event => {
  event.stopImmediatePropagation(); // when things are situated within other elements, like divs, stops multiple clicks from registering!
  const className = event.target.className;
 if (className === 'contactButton') {
   contactError();
 } else if (className === 'inboxCell') {
   openMsg(event.target.id);
 } else if (className === 'brokenLink') {
   brokenLinkMsg(event.target.id);
 } else if (className === 'pdf' || className === 'pdfText') {
   openPdf(0); //0 is the int code for the assessment pdf
 } else if (className === 'exitButton') {
   closePdf();
 }
}
)