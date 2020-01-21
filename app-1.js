var rawDataStore = ["Meeting Room, Aung Aung, Chair", 
"Kitchen, Mya Mya, Stove", 
"Bed Room, Zaw Zaw, Bed"]; 
var people = [];

//make array 
for(var i= 0 ; i < rawDataStore.length ;i++ ){
    var person;
    for(var j =0 ; j < rawDataStore[i].length ; j++){
        person = rawDataStore[i].split(",");
    }
    people.push(person);
}


const find = (query, value) => {
    var result = undefined;
        people.forEach((person,index)=> {
            person.forEach((data) => {
                if(data.trim().toLowerCase() == value.toLowerCase()){
                    if(query == 'person.by.room' || query =='person.by.thing'){
                       return result = people[index][1];
                    } else if (query == 'thing.by.room' || query == 'thing.by.person'){
                        return result = people[index][2];
                    } else if(query == 'room.by.thing' || query == 'room.by.person'){
                        return result = people[index][0];
                    }
                }
            })
        });

        return result;
}


console.log(find("person.by.room", "Bed Room"));
console.log(find("person.by.thing", "chair"));
console.log(find("thing.by.room", "Bed Room"));
console.log(find("thing.by.person", "Aung Aung"));
console.log(find("room.by.thing" , "Stove"));
console.log(find("room.by.person", "Mya Mya"));



