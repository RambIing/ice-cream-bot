const { SlotMachine, Symbol } = require('slot-machine');
const fs = require("fs");
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
module.exports.func = function (bot, msg) {
  let userData = points[msg.author.id];
  if (!points[msg.author.id]) points[msg.author.id] = {
      points: 0
    };
    fs.writeFile('./points.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
    });
  userData = points[msg.author.id];
  const cherry = new Symbol('cherry', {
      display: '🍒',
      points: 190,
      weight: 100
  });
  const wild = new Symbol('wild', {
    display: '❔',
    points: 160,
    weight: 40,
    wildcard: true
});
const money = new Symbol('money', {
    display: '💰',
    points: 110,
    weight: 30
});
const apple = new Symbol('apple', {
  display: '🍎',
  points: 120,
  weight: 80
});
const clover = new Symbol('clover', {
  display: '🍀',
  points: 135,
  weight: 20
});
const bell = new Symbol('bell', {
  display: '🔔',
  points: 140,
  weight: 30
});
const grapes = new Symbol('grapes', {
  display: '🍇',
  points: 150,
  weight: 75
});
if(userData.points < "100"){
  msg.channel.sendMessage("You dont have enough points to roll the slot! do $$payday to get 100 credits FREE!");
} else {
const machine = new SlotMachine(3, [cherry, money, wild, apple, clover, bell, grapes]);
const results = machine.play();
var total1 = userData.points + results.totalPoints;
var total2 = userData.points - 100
msg.channel.sendMessage(results.visualize(true));
msg.channel.sendMessage("Total Points won: " + results.totalPoints);
msg.channel.sendMessage("Total wins: " + results.winCount);
if(results.totalPoints === "0") {
  msg.channel.sendMessage("Your new total is: " + total2);
  userData.points = total2;
} else {
  msg.channel.sendMessage("Your new total is: " + total1);
  userData.points = total1;
}

fs.writeFile('./points.json', JSON.stringify(points), (err) => {
if (err) console.error(err)
});
};
}
