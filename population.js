var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    // Get whole data
    var result=JSON.parse(request.response);
    console.log(result);

    // Filter regin = Asia
    var res=result.filter((ele)=>ele.region==="Asia");
    console.log(res);
    for(i=1;i<res.length;i++){
        console.log(res[i].name,res[i].region);
        
    }

    // Filter population less than 2 lakhs
    var res=result.filter((ele)=>ele.population<200000);
    console.log(res);
    for(i=1;i<res.length;i++){
        console.log(res[i].name,res[i].population);
        
    }

    // Print country name, capital and flag
    result.forEach(printcountry);
    function printcountry(country,index){
        console.log(country.name,country.capital,country.flag);
    }


    // Calculate all countries population
    console.log("totalpopulation",result.reduce(calculatepopulation,0));
    function calculatepopulation(total, country){   
        return total+country.population;
    }

    // Print country which have USD as currency
    result.forEach(printCurrencyUSD);
    function printCurrencyUSD(country,index){
        if(country.hasOwnProperty('currencies'))
        {
            if(country.currencies[0].code === 'USD')
            {
                console.log(country.name,country.currencies[0].code);
            }
            
        }
    }
}