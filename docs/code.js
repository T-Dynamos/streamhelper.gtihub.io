function clicks() {
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
  	setScreen("screen2");
  });
  console.log("text_input1 current text: " + getText("text_input1"));
  onEvent("button1", "click", function( ) {
  	setScreen("screen2");
  });
  onEvent("button4", "click", function( ) {
    setScreen("screen5");
  });
  onEvent("button1", "click", function( ) {
    playSpeech("Welcome to Stream Helper " + getText("text_input1"), "male", "English");
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
}
clicks();
