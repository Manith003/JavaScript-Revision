function isEmpty(value){
    if(value === null){
        console.log('NULL')
    }
    else if (value === undefined){
        console.log('UNDEFINED')
    }
    else if(value === ""){
        console.log("NO VALUES")
    }
    else{
        console.log(value)
    }
}


isEmpty(123)