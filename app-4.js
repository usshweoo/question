// Question 4
var rawData = [ 
    "KBZ MyayNiGone, address, No/12. Pyay Road. Yangon", 
    "KBZ MyayNiGone, website, https://www.kbz.com.mm", 
    "KFC, address, No/34. Hlelden", 
    "KFC, website, https://www.kfc.com.mm", 
    "KFC, facebook, https://www.facebook.com/kfcmm", 
    "Lotteria, address, No/50. Hlelden", 
    "Lotteria, website, https://www.lotteria.com.mm", 
    "Lotteria, branches_in_myanmar, 50", "KFC, twitter, https://www.twitter.com/kfcmm", 
    "KBZ MyayNiGone, number_of_staffs, 30", 
    "Lotteria, branches_in_china, 150" 
   ]; 
var data = [];
//make array split by , 
for(var i= 0 ; i < rawData.length ;i++ ){
    var oneData;
    for(var j =0 ; j < rawData[i].length ; j++){
        oneData = rawData[i].split(",");
    }
    data.push(oneData);
}

var companiesName = [];
//get all companies name
for(var i = 0 ; i < data.length ; i ++ ){
    var companyName = data[i][0];
    if(companiesName.indexOf(companyName) == -1){
        companiesName.push(data[i][0]);
    }
}

var companiesData = [];
companiesName.forEach((data) => {
    companiesData.push([data])
})

for(var i = 0 ; i < companiesData.length ; i++){
    for(var j = 0; j < data.length ; j++){
        if(companiesData[i][0].indexOf(data[j][0]) !== -1){
            //add data to each companyData
            for(var k = 1 ; k < data[j].length ; k++){
                companiesData[i].push(data[j][k]);
            }
        }
    }
}  


const makeJson = (company) => {
    var result ;
    for(var i = 0 ; i < company.length; i++){
        if(i == 0 ){
            result = 
            `{
                'name' : '${company[0]}', `
        } else if(i % 2 !== 0 ){
            //if index is odd make as a key
            result += ` '${company[i]}' :  `
        } else if(i % 2 == 0 ){
            //if index is even make as a key
            result += ` '${company[i]}' `
        }
    }
    return result;
}

for(var i = 0 ; i < companiesData.length ; i ++){
    var company = companiesData[i];
    var data = makeJson(company);
    console.log(data);
}