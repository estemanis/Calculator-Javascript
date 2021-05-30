let status = 0;
let error = 0;
let temp = "";

$(document).ready(function(){
    $('#one').click(function(){
        if(error == 0){
            document.forms.result.value += 1;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#two').click(function(){
        if(error == 0){
            document.forms.result.value += 2;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#three').click(function(){
        if(error == 0){
            document.forms.result.value += 3;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#four').click(function(){
        if(error == 0){
            document.forms.result.value += 4;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#five').click(function(){
        if(error == 0){
            document.forms.result.value += 5;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#six').click(function(){
        if(error == 0){
            document.forms.result.value += 6;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#seven').click(function(){
        if(error == 0){
            document.forms.result.value += 7;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#eight').click(function(){
        if(error == 0){
            document.forms.result.value += 8;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#nine').click(function(){
        if(error == 0){
            document.forms.result.value += 9;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#zero').click(function(){
        if(error == 0){
            document.forms.result.value += 0;
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#decimal').click(function(){
       if(error == 0){
           document.forms.result.value += '.';
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#divide').click(function(){
       if(error == 0){
                document.forms.result.value += '/';
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#multiply').click(function(){
       if(error == 0){
           document.forms.result.value += '*';
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#min').click(function(){
       if(error == 0){
           document.forms.result.value += '-';
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });   
    $('#plus').click(function(){
       if(error == 0){
           document.forms.result.value += '+';
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#open').click(function(){
       if(error == 0){
           if(status == 0){
               document.forms.result.value += '(';
               status=1;
           }else{
            alert("Please insert the close bracket");
           }
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#close').click(function(){
        if(error == 0){
            if(status == 1){
                document.forms.result.value += ')';
                status = 0;
            }
            else{
                alert("Please insert the open bracket");
            }
        }
        else{
            alert("Please press delete or clear button to continue");
        }
    });
    $('#equal').click(function(){
        if(result.value == "" ){
            alert("Please enter any numbers to continue");
        }else{
            try {
                temp = document.forms.result.value;
                document.forms.equation.value = temp + ' =';
                document.forms.result.value = eval(document.forms.result.value);
            } catch {
                document.forms.result.value = "ERROR!!";
                document.forms.equation.value = "";
                error=1;
            }
        }
    });
    $('#clear').click(function(){
        document.forms.result.value = "";
        document.forms.equation.value = "";
        status = 0;
        error = 0;
    });
    $('#delete').click(function(){
        if( document.forms.result.value == "ERROR!!")
        {
            document.forms.result.value = "";
            document.forms.equation.value = "";
            status=0;
            error = 0;
        }
        else{
            if(document.forms.result.value.substring(document.forms.result.value.length, document.forms.result.value.length-1) == '('){
                status = 0;
            }
            else if(document.forms.result.value.substring(document.forms.result.value.length, document.forms.result.value.length-1) == ')'){
                status = 1;
            } 
            document.forms.result.value = document.forms.result.value.substring(0, document.forms.result.value.length-1);
        }
        });
})

