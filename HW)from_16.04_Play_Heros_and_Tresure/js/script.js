

function handelKeyPress(event) {
    if(event.key === "a" || event.key === "A"){
        hero1.attack(hero2);
    } else if(event.key === "b" || event.key === "B"){
        hero2.attack(hero1);
    } else if(event.key === "s" || event.key === "S"){
        hero1.heal();
    } else if(event.key === "n" || event.key === "N"){
        hero2.heal();
    }
}
document.addEventListener("keydown", handelKeyPress) 

class Hero {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }

    attack(target){
        console.log(`${this.name} атакует ${target.name}!`);
        if (target.health > 10) {
            target.health -= 10;
            console.log(`${target.name} получает урон. Здоровье: ${target.health}%`);
        }
        else if  (target.health <=10) {
            console.log(`Игра окончена! ${this.name} победил! `);

            treasure.collect(this)
            
            document.removeEventListener("keydown", handelKeyPress) 
        }          
    }

    heal(){
        console.log(`${this.name} исцеляет себя!`);
        
        this.health += 5;
        
        console.log(`${this.name} исцелен. Здоровье: ${this.health}%`);
    }
}

class Treasure {
    constructor(value){
        this.value = value;
    }

    collect(winner){
        console.log(`${winner.name} пролучает сокровище стоимостью ${this.value}$`);
    }
}

const hero1 = new Hero(prompt('Введите имя героя 1'), Math.floor(Math.random()*51) + 50);
const hero2 = new Hero(prompt('Введите имя героя 2'), Math.floor(Math.random()*51) + 50);
const treasure = new Treasure(500);
console.log(hero1, hero2);
