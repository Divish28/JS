function count(number){
    console.log(number)
    const change=number-1
    if(change>0){
        count(change)
    }
}
count(10);