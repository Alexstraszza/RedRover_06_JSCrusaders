// 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.

function Months(Jan, Feb, March, Apr, May, June, July, August, Sept, Oct, Nov, Dec) {
    if (July == true && August == true)
        console.log ("approved");
    
    else console.log("denied")
}

let month = "Dec"

if (month == "July" || month == "August") {
    console.log("approved") 
}
else {
    console.log("denied")
}