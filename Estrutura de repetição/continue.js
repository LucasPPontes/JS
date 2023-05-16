for(i = 10; i > 0; i = i - 1){
    if(i % 2 == 0){
        console.log(`caiu no continue ${i}`);
        continue;
    }
    console.log(i)
}