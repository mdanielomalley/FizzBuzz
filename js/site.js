
//Get Values from the user. We need to retrieve the fizz and buzz values.
function getValues() {
    //1. get value to test Fizz
    let fizzValue = document.getElementById("fizzValue").value;
    
    //2. get value to test Buzz
    let buzzValue = document.getElementById("buzzValue").value;
    
    //3. check/parse for numbers
    fizzValue = parseInt(fizzValue);

    //4. check/parse for numbers
    buzzValue = parseInt(buzzValue);

    //5. validate that "fizzValue" and "buzzValue" are actually Numbers.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        
        //6. we call fizzBuzz
        let fbArray = fizzBuzz(fizzValue,buzzValue);

        //7. we call displayNumbers
        //DO:
        //Call custom function "displayData()" with "fbData" as the parameter
        //displayData(fbData);
        displayData(fbArray);

    } else {
        //DO:
        //Else if "fizzValue" and "buzzValue" are not Numbers
        //send an alert to the user with the message "You must enter integers"
        alert("User must submit integer values only!")

    }

}

//Traditional Solve Fizz Buzz with a for loop
function fizzBuzz(fizzValue, buzzValue) {
    
    let returnArray = [];
   
    //Use "for-loop" to count form 1 to 100 using
    //"i" as the loop control variable
    for (let i = 1; i <= 100; i++){ 

        //Use an "if-else-statement" to test each number against the zero modulus(%)
        //Use an "if-else-statement" to evaluate the parameters
        //of the parameters "fizzValue" (fizz) and "buzzValue" (buzz) . (ie. i % value1 == 0)
        //First test whether the case is true for both "fizzValue" AND (&&) "buzzValue"
        if(i % fizzValue == 0 && i % buzzValue == 0){

            //If the AND case is true then "push" the value 'fizzBuzz'
            //onto the "returnArray"
            returnArray.push("Fizz-Buzz");
         
        //Else test if only the zero modulus(%) of the "fizzValue" is true
        }else if(i % fizzValue == 0){

        //If true then "push" the value 'Fizz' onto the "returnArray" and not the number
            returnArray.push("Fizz");

        //Else test if only the zero modulus(%) of the "buzzValue" is true
        }else if(i % buzzValue == 0){
            //If true then "push" the value 'Buzz' onto the "returnArray" and not the number
            returnArray.push("Buzz");
        }else{
            //Else just push the number "i" onto the "returnArray"
            returnArray.push(i);
        } 
    }
    //Finally return the variable "returnArray" 
   return returnArray;
    
}

//custom display function
function displayData(fbArray) {

    //loop over the array and create a tablerow for each item - add all rows into table
    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        //grab only the columns in the template
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
       
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];
       
        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];
       
        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];
       
        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];
 
        tableBody.appendChild(tableRow);
    }
}