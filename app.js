
var main = document.getElementById('main')
    function getval(val){
main.value+=val
    }
    function calculate(){
        main.value=eval(main.value)
    }
    function cler(){
        main.value=''
    }