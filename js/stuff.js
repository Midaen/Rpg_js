class Stuff {
  constructor() {
      this.attribute=random(6); // 1 Bois , 2 Metal , 3 Or , 4 Quartz   , 5 Ruby  , 6 Magie
      this.type=random(4); // 1 Armure -> Vie | 2 Epee -> Force | 3 Bottes -> Agilité | 4 Artefact -> Inte
      this.value=this.attribute*random(10)
  }
description(){
  return this.getAttribute()+" "+this.getType()+" + "+this.value
}
getAttribute(){
  switch (this.attribute) {
    case 1:
      return "Wooden";
      break;
      case 2:
      return "Metal";
        break;
        case 3:
        return "Golden";
          break;
          case 4:
          return "Quartz";
            break;
            case 5:
            return "Ruby";
              break;
              case 6:
              return "Magical";
                break;
    default:return "broken";
  }
}
getType(){
  switch (this.type) {
    case 1:
        return "Armor";
      break;
      case 2:
          return "Sword";
        break;
        case 3:
            return "Boot";
          break;
          case 4:
              return "Artifact";
            break;
    default:

  }
}
}






function random(nbMax){
  return Math.floor((Math.random() * nbMax) + 1);
}
