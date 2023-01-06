function addNumber(element){

  // document.getElementById('write').value = document.getElementById('write').value+element.value;


    if (document.getElementById('write').value.length == 0) {
        document.getElementById('write').value += element.value;
    } else if (document.getElementById('write').value.length == 1) {
        document.getElementById('write').value += element.value;
    }



}

