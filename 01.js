function solve(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let heroArguments = input[i].split(" / ");

        let heroName = heroArguments[0];
        let heroLevel = Number(heroArguments[1]);
        
        let heroIthems = [];
        if (heroArguments.length > 2) {
            heroItems = heroArguments[2].split(", ");
        }

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };
        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));

}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)

solve(['Jake / 1000 / Gauss, HolidayGrenade'])