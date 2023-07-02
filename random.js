function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const me = getRandomInt(4)
  if(me == 0){
    console.log("Ведущий Саша");
  }
  if(me == 1){
    console.log("Ведущая Таня");
  }
  if(me == 2)
  {
    console.log("Ведущая Диана");
  }
  if(me == 3){
    console.log("Ведущий Кирилл")
  }
  
  module.exports.random = me