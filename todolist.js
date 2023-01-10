$(document).ready(function(){
    let textBox = $(".textbox");

    $("button").click(function(){
        //creat tr 
        let trElement= $("<tr></tr>");
        //creat td
        let textTdElement= $("<td></td>");
        //fill td
        textTdElement.html(textBox.val());
        //put td in tr
        trElement.append(textTdElement);

        //creat Delete button
        let deleteBotton=$("<button> Delete </button>")

        // fuction of Delete button
        deleteBotton.click(function(){
            this.parentElement.parentElement.remove();
        }) 
        //creat td
        let deleteTdelement=$("<td></td>");
        //put deleteButton in td
        deleteTdelement.append(deleteBotton);
        //put td in tr
        trElement.append(deleteTdelement);

        //creat Done button
        let doneButton=$("<button> Done </button>")

        //function of Done button
        doneButton.click(function(){
            trElement.css('background-color' , 'green')
        })
        //creat td
        let doneTdelement=$("<td></td>");
        //put doneButton in td
        doneTdelement.append(doneButton);
        //put td in tr
        trElement.append(doneTdelement);


        //put tr in table
        $("table").append(trElement);

        














    })//button click
})//document read