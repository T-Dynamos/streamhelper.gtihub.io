function clicks() {
  hideElement("label3");
  hideElement("label9");
  hideElement("label10");
  console.log("ok domnweed");
  onEvent("button3", "click", function( ) {
    setScreen("coding");
  });
  onEvent("back", "click", function( ) {
  	console.log("back clicked!");
  	setScreen("main");
  });
  onEvent("checkbox1", "change", function( ) {
  	console.log("checkbox1 checked? " + getChecked("checkbox1"));
  	setScreen("screen1");
  });
  onEvent("back2", "click", function( ) {
  	console.log("back2 clicked!");
  	setScreen("screen2");
  });
  onEvent("checkbox2", "click", function( ) {
  	console.log("checkbox2 checked? " + getChecked("checkbox2"));
  	setScreen("screen3");
  });
  onEvent("back1", "click", function( ) {
  	console.log("back1 clicked!");
  	setScreen("screen2");
  });
  onEvent("button2", "click", function( ) {
  	setScreen("coding2");
  	console.log("button2 clicked!");
  });
  onEvent("image4", "click", function( ) {
  	console.log("image4 clicked!");
  	setScreen("main");
  });
  console.log("text_input1 current text: " + getText("text_input1"));
  onEvent("button4", "click", function( ) {
    setScreen("screen5");
  });
  onEvent("button1", "click", function( ) {
    if (getText("text_input1") == "") {
      setScreen("coding");
      playSpeech("Invaild Name", "female", "English");
      showElement("label3");
    } else {
      playSpeech("Welcome to Stream Helper " + getText("text_input1"), "male", "English");
      setScreen("screen2");
    }
  });
  onEvent("image3", "click", function( ) {
  	console.log("image3 clicked!");
  	setScreen("screen1");
  });
  onEvent("image5", "click", function( ) {
  	console.log("image5 clicked!");
  	setScreen("screen1");
  });
  onEvent("button5", "click", function( ) {
  	console.log("button5 clicked!");
  	setScreen("screen6");
  });
  onEvent("image6", "click", function( ) {
  	console.log("image6 clicked!");
  	setScreen("screen1");
  });
  onEvent("button9", "click", function( ) {
    setScreen("screen7");
  });
  onEvent("image2", "click", function( ) {
    setScreen("screen1");
  });
  onEvent("button7", "click", function( ) {
    setScreen("DEFENCE");
  });
  onEvent("button6", "click", function( ) {
  setScreen("teaching");
  });
  onEvent("image7", "click", function( ) {
    setScreen("screen1");
  });
  onEvent("image8", "click", function( ) {
    setScreen("screen1");
  });
  onEvent("button8", "click", function( ) {
    setScreen("screen8");
  });
  onEvent("button18", "click", function( ) {
    if (getText("text_input4") == "") {
      showElement("label10");
    } else {
      hideElement("label10");
        startWebRequest("https://api.callmebot.com/whatsapp.php?phone=+918556801792&text="+encodeURIComponent(getText("text_input4"))+"&apikey=150743",function (status, type, content) {
          if ("status" == 200) {
            showElement("label9");
          } else {
            setText("label9", "Sent ! ");
            showElement("label9");
          }
          
        });
    };
  });

  onEvent("image9", "click", function( ) {
    setScreen("screen1");
  });
  onEvent("button11", "click", function( ) {
  	console.log("button11 clicked!");
  	setScreen("screen1");
  });
}
clicks();
