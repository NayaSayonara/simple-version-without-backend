function removeNum (textarea){
    if (textarea.value.length == 1){
        textarea.value = '';
    } else {
        textarea.value = textarea.value.substring(0, textarea.value.length -1);
    }
    
};