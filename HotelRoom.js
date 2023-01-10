function room(input) {
    let month = String(input.shift());
    let nights = Number(input.shift());
    let discountApr = 0;
    let discountStd = 0;
    let apartCost = 0;
    let studCost = 0;
 
    if (month === "May" || month === "October") {
        if (nights <= 7 && nights > 0) {
            apartCost = nights * 65
            studCost = nights * 50
            discountApr = apartCost
            discountStd = studCost
            console.log(`Apartment: ${discountApr.toFixed(2)} lv.`)
            console.log(`Studio: ${discountStd.toFixed(2)} lv.`)
       
    }
        else if (nights > 7 && nights <= 14) {
            apartCost = nights * 65
            studCost = nights * 50
            discountStd = studCost - ((studCost * 5) / 100)
            discountApr = apartCost
            console.log(`Apartment: ${discountApr.toFixed(2)} lv.`)
            console.log(`Studio: ${discountStd.toFixed(2)} lv.`)
        }
 
        else if (nights > 14) {
            apartCost = nights * 65
            studCost = nights * 50
            discountStd = studCost - ((studCost * 30) / 100)
            discountApr = apartCost - ((apartCost * 10) / 100)
            console.log(`Apartment: ${discountApr.toFixed(2)} lv.`)
            console.log(`Studio: ${discountStd.toFixed(2)} lv.`)
        }
 
    } else if (month === 'June' || month === 'September') {
        if (nights > 14) {
            studCost = nights * 75.20
            apartCost = nights * 68.70
            discountStd = studCost - ((studCost * 20) / 100)
            discountApr = apartCost - ((studCost * 10) / 100)
            console.log(`Apartment: ${discountApr.toFixed(2)} lv.`)
            console.log(`Studio: ${discountStd.toFixed(2)} lv.`)
        }
 
        else if (nights <= 14 && nights > 0) {
            studCost = nights * 75.20
            apartCost = nights * 68.70
            discountApr = apartCost
            discountStd = studCost
            console.log(`Apartment: ${discountApr.toFixed(2)} lv.`)
            console.log(`Studio: ${discountStd.toFixed(2)} lv.`)
        }
    } else if (month === 'July' || month === 'August') {
        if (nights > 14) {
            studCost = nights * 76
            apartCost = nights * 77
            discountStd = studCost
            discountApr = apartCost - ((studCost * 10) / 100)
            console.log(`Apartment: ${discountApr.toFixed(2)} lv.`)
            console.log(`Studio: ${discountStd.toFixed(2)} lv.`)
        }
 
        else if (nights <= 14 && nights > 0) {
            studCost = nights * 76
            apartCost = nights * 77
            discountApr = apartCost
            discountStd = studCost
            console.log(`Apartment: ${discountApr.toFixed(2)} lv.`)
            console.log(`Studio: ${discountStd.toFixed(2)} lv.`)
        }
    }
}