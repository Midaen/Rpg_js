class Monster {
  constructor(playerStats) {
      this.type=random(5); // 1.rat 2.gobelin 3.zombie 4.werewolf 5.Alien
      this.size=random(3);//1.small 2.normal 3.Enormous
      switch (this.size) {
  case 1:
    this.hp = parseInt((playerStats*this.type)/8);
    this.strenght = parseInt((playerStats+this.type)/16);
    break;
    case 2:
      this.hp = parseInt((playerStats*this.type)/4);
      this.strenght = parseInt((playerStats+this.type)/8);
      break
      case 3:
        this.hp = parseInt((playerStats*this.type)/2);
        this.strenght = parseInt((playerStats+this.type)/4);
        break;
  default:

}
  }

getType(){
  switch(this.type) {
  case 1:
    return("rat")
    break;
    case 2:
    return("gobelin")
      break;
      case 3:
      return("zombie")

        break;
        case 4:
        return("werewolf")

          break;
          case 5:
          return("Alien")
            break;
  default:
    return('broken')
}
  }
getSize(){
switch (this.size) {
  case 1:
    return("small")
    break;
    case 2:
      return('normal')
      break;
      case 3:
        return('Enormous')
        break;
  default:

}

  }

randomize(playerStats){
playerStats =parseInt(playerStats);
        this.type=random(5); // 1.rat 2.gobelin 3.zombie 4.werewolf 5.Alien
        this.size=random(3);//1.small 2.normal 3.Enormous
    switch (this.size) {
    case 1:
      this.hp = parseInt((playerStats*this.type)/8)+1;
      this.strenght = parseInt((playerStats+this.type)/16)+1;
      break;
      case 2:
        this.hp = parseInt((playerStats*this.type)/4)+1;
        this.strenght = parseInt((playerStats+this.type)/8)+1;
        break
        case 3:
          this.hp = parseInt((playerStats*this.type)/2)+1;
          this.strenght = parseInt((playerStats+this.type)/4)+1;
          break;
    default:

    }
    }

  }



function random(nbMax){
  return Math.floor((Math.random() * nbMax) + 1);
}
