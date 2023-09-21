
function spaceCreate(howMany){
    var space = '';
    for (i = 0; i < howMany; i++){
         space = space + "&nbsp";
    }
    return space;
}


function changeColor(color, className) {
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
        element.style.color = color;
    }
}

function addDocument(id, color, className) {
    document.querySelector(id).addEventListener("click", function (){
        changeColor(color, className);
    })
}

var colors = ["red", "green", "magenta", "white", "blue"];

for (let i = 0; i < colors.length; i++) {
    addDocument("#All-" + colors[i], colors[i], "numbers");
    addDocument("#Even-" + colors[i], colors[i], "numbersEven");
    addDocument("#Odd-" + colors[i], colors[i], "numbersOdd");
}



$(document).ready(function() {
    $("#button").click(function() {


        var Value1 = $("#number1").val();
        var intValue1 = parseInt(Value1, 10);

        var Value2 = $("#number2").val();
        var intValue2 = parseInt(Value2, 10);

        var Value3 = $("#goldenString").val();

        var dynamicNumbersArray = [intValue1, intValue2];

        var wynik = "";
        var sum = 0;

        //Loop generate numbers Value3 times
        for (let i = 1; i <= Value3; i++) {

            //Two primary numbers
            if (i<= 2){
                if (i === 1){
                    //Adding classes in order to detection even and odd numbers in the future
                    wynik = wynik + '<br>' + "0" + i + " -> " + '<span class="numbers numbersOdd">' + dynamicNumbersArray[i - 1] + '</span>' + spaceCreate(21) + "0" + i + " ->" + ' <span class="numbers numbersOdd">brak</span>';
                }
                else {
                    wynik = wynik + '<br>' + "0" + i + " -> " + '<span class="numbers numbersEven">' + dynamicNumbersArray[i - 1] + '</span>' + spaceCreate(21) + "0" + i + " -> " + '<span class="numbers numbersEven">' + (intValue2 / intValue1).toFixed(35) + '</span>';
                    sum = intValue1 + intValue2;
                }

            }

            //Numbers from 3 to 9
            else if (i > 2 && i<= 9){
                if (i % 2 !== 0) {
                    intValue2 = sum - intValue1;
                    wynik = wynik + '<br>' + "0" + i + " -> " + '<span class="numbers numbersOdd">' + sum + '</span>' + spaceCreate(21) + "0" + i + " -> " + '<span class="numbers numbersOdd">' + (sum / intValue2).toFixed(35) + '</span>';
                    sum = sum + intValue2;
                }
                else {
                    intValue1 = sum - intValue2;
                    wynik = wynik + '<br>' + "0" + i + " -> " + '<span class="numbers numbersEven">' + sum + '</span>' + spaceCreate(21) + "0" + i + " -> " + '<span class="numbers numbersEven">' + (sum / intValue1).toFixed(35) + '</span>';
                    sum = sum + intValue1;
                }

                $("#Display").html(wynik);
            }

            //Other numbers from 9 to infinity
            else {
                if (i % 2 !== 0) {
                    intValue2 = sum - intValue1;
                    wynik = wynik + '<br>' + i + " -> " + '<span class="numbers numbersOdd">' + sum + '</span>' + spaceCreate(21) + i + " -> " + '<span class="numbers numbersOdd">' + (sum / intValue2).toFixed(35) + '</span>';
                    sum = sum + intValue2;
                }
                else {
                    intValue1 = sum - intValue2;
                    wynik = wynik + '<br>' + i + " -> " + '<span class="numbers numbersEven">' + sum + '</span>' + spaceCreate(21) + i + " -> " + '<span class="numbers numbersEven">' + (sum / intValue1).toFixed(35) + '</span>';
                    sum = sum + intValue1;
                }

                $("#Display").html(wynik);
            }


        }
    })
})
