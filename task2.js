function gladiator(health, power, speed, name){
    this.health = health;
    this.power = power;
    this.speed = speed;
    this.name = name;
}

function* gen(n){
    var index=0;
    while(index<n){
        yield new gladiator(Math.floor(Math.random()*21+80),   Math.floor((Math.random()*3+2)*10)/10, Math.floor((Math.random()*4+1)*1000)/1000,faker.name.findName() )
        index++;
    }
};


function start(n){
    var glads = [];
    var decision = ["Live", "Finish him"];
    for(let i= 1; i<=n;i++){
        glads.push(gen(n).next().value);
    }

    glads.forEach(function(elem){
        
        setInterval(function(){
            let opponent = glads[Math.floor(Math.random()*glads.length)]
            console.log("[ " + elem.name + " x " + elem.health + " ] hits" +"[ " + opponent.name + " x " + opponent.health + " ] with power " + elem.power )
    let temp = opponent.health;
    let temp2 = elem.health;
    temp -= elem.power;

    if(opponent.health<30 && opponent.health>=15){
            opponent.speed*=3;
        }
        
        if(elem.health<30 && elem.health>=15){
            elem.speed*=3;
        }

    if(opponent.health<=0){
        console.log(opponent.name+" is dying ")
        
        //caesar's decision
        if(decision[Math.floor(Math.random()*2)]==="Live"){
        console.log("Caesar showed 👍" )
            opponent.health+=50;
            opponent.speed= opponent.speed*(temp/opponent.health);
        }
        else if(decision[Math.floor(Math.random()*2)]==="Finish him"){
            console.log("Caesar showed 👎 ")
            glads.splice(glads.indexOf(opponent), 1);
        }
    }
        if(elem.health<=0){
            console.log(elem.name+" is dying ")
            //caesar's decision
        
            if(decision[Math.floor(Math.random()*2)]==="Live"){
                console.log("Caesar showed 👍" )
                elem.health+=50;
            }
            else if(decision[Math.floor(Math.random()*2)]==="Finish him"){
                console.log("Caesar showed 👎 ")
                glads.splice(glads.indexOf(elem), 1);
            }
         elem.speed= elem.speed*(elem.health/temp2);   
        }

       opponent.health = temp;
       if(glads.length<=1){
            console.log("["+glads[0].name +"] won the battle with health x"+glads[0].health);
        }
    }, 6000-elem.speed*1000);
     
    });
    return glads;
};
(start(5));


