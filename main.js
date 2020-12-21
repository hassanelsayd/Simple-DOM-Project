var myDiv = document.getElementById("main"),
    myHeading = document.getElementById("heading"),
    num = prompt("please Enter Number To Proccess it"),
    choose = prompt("Enter 1 if you want summation and enter 2 if you want multiplication");

if (choose == 1 ){
  myHeading . innerHTML = "Summation of " + num;

  for (i = 1 ; i <= 10 ; i = i + 1){
      var newElement = document.createElement("p"),
          text = document.createTextNode( i + " + " + num + " = " + (i + parseInt(num)));

      newElement.appendChild(text);
      myDiv.appendChild(newElement);

  }
} else if(choose == 2 ) {
    myHeading . innerHTML = "multiplication of " + num;

    for (i = 1 ; i <= 10 ; i = i + 1){
        var newElement = document.createElement("p"),
            text = document.createTextNode( i + " * " + num + " = " +  (i * parseInt(num)));
        newElement.appendChild(text);
        myDiv.appendChild(newElement);

    }
}
