class Player {
  constructor(name){
        this.name = name;
        this.hp = 10;
        this.strenght=1;
        this.agility=1;
        this.intelligence=1;
        this.positionX=0; /*Mouvements sur les cotés*/
        this.positionY=0; /*Mouvements ent hauteur */
        this.lastRoom='None'
        this.hpMax = 10;
        this.isAlive = true ;
  }
description() {
return "<b> Name : </b> "+this.name+"<br> <b> Hp : </b>"+this.hp+"/"+this.hpMax+"<br><b> Strenght : </b>"+this.strenght+"<br><b> Agility : </b>"+this.agility+"<br><b> Intelligence : </b>"+this.intelligence+"<br><b> X : </b>"+this.positionX+"<br><b> Y : </b>"+this.positionY+"<br><b> Last room : </b>"+this.lastRoom;
  }
fullStats(){
  return parseInt(this.strenght+this.hpMax+this.agility+this.intelligence);
}
upgrade(stuff){
    switch (stuff.type) {
      case 1:
          this.hp =  this.hp+stuff.value ;
          this.hpMax =  this.hpMax+stuff.value ;
        break;
        case 2:
        this.strenght = this.strenght+stuff.value ;
          break;
          case 3:
          this.agility =this.agility+stuff.value ;
            break;
            case 4:
            this.intelligence = this.intelligence+stuff.value ;
              break;
      default:
      console.log('hi ');
    }
  }
move(direction){
if(!inFight){
cleanText();
this.lastRoom=direction;
if(direction =='left'){
  this.positionX-=1;
  var text ='You opened the left door ! '
  show(text);
  newRoom();
  endTurn();
        }
if(direction =='right'){

  this.positionX+=1;
  var text ='You opened the right door !'
  show(text);
  newRoom();
      endTurn();
}
if(direction =='up'){

  this.positionY+=1;
  var text ='You opened the door facing you !'
    show(text);
    newRoom();
    endTurn();
}}
  }
}



var txt ="";
var inventoryTxt="<b>Inventory</b> <br>"
 var monster = new Monster(10);
 var inFight = false ;
function newRoom(){
  switch (random(4)) {
    case 1:
        inFight =true ;
        show('Their is a Monster in the room !!!');
        monster.randomize(player.fullStats());
        show('This is a '+monster.getSize()+' '+monster.getType());
        show('He have '+monster.hp+' hp and '+monster.strenght+' strenght');
        fight();
    break;
    case 2:
    oui = new Stuff();
    show( 'What a wonderful chest !! ');
    show("You found "+oui.description());
    inventoryUpdate(oui);
    player.upgrade(oui);
      break;
    case 3:
    show("The room looks empty");
    show("You took a short break");
    var heal = parseInt(player.hp/10+1)
    if(heal+player.hp > player.hpMax){
      player.hp=player.hpMax;
      show("You healed to max heath");

    }else{
      player.hp=player.hp+heal;
      show("You healed "+heal+" hp");
    }

      break;
    case 4:
    show("Oh, it's a trap")
    trap();
      break;
    default:
    show("kof kof this was not planned");
  }
}

function random(nbMax){
  return Math.floor((Math.random() * nbMax) + 1);
}

function createPlayer() {
  var recievedName = document.forms["myForm"]["recievedName"].value;
  document.forms["myForm"].style.visibility ="Hidden";
  player = new Player(recievedName);
  var texte = player.description();
  document.getElementById('info').innerHTML = texte ;
  endTurn();
}
function endTurn(){
if(!inFight){
switch (player.lastRoom) {
  case 'left':
  var text = 'The room is now empty , where do you go ? <a href="#" onClick="player.move('+"'"+'left'+"'"+')"> left </a>  | <a href="#" onClick="player.move('+"'"+'up'+"'"+')"> up </a><br>'
  show(text);
  update();
    break;
    case 'right':
    var text = 'The room is now empty , where do you go ? <a href="#" onClick="player.move('+"'"+'up'+"'"+')"> up </a>  |  <a  href="#"onClick="player.move('+"'"+'right'+"'"+')"> right </a> <br>'
    show(text);
    update();
      break;
      case 'up':
      var text = 'The room is now empty , where do you go ? <a href="#" onClick="player.move('+"'"+'left'+"'"+')"> left </a>  | <a href="#" onClick="player.move('+"'"+'up'+"'"+')"> up </a>  |  <a  href="#"onClick="player.move('+"'"+'right'+"'"+')"> right </a> <br>'
      show(text);
      update();
        break;
  default:
   var text = 'The room is now empty , where do you go ? <a href="#" onClick="player.move('+"'"+'left'+"'"+')"> left </a>  | <a href="#" onClick="player.move('+"'"+'up'+"'"+')"> up </a>  |  <a  href="#"onClick="player.move('+"'"+'right'+"'"+')"> right </a> <br>'
    show(text);
    update();

}
}
}
function show(recievedText){
  txt = txt +"<br>"+recievedText;
  document.getElementById('main').innerHTML = txt ;
}
function update(){
  var desc = player.description();
  document.getElementById('info').innerHTML = desc ;
}
function cleanText(){
  txt ="";
}
function inventoryUpdate(stuff){
  inventoryTxt += "<br>"+stuff.description() ;
  document.getElementById('invent').innerHTML = inventoryTxt ;
}
function trap(){
switch (random(4)) {
  case 1:
    show("It's a bear trap !");
    var dmg = parseInt(player.hp/2);
    player.hp =parseInt(player.hp-dmg) ;
    show("You lost "+dmg+" hp");
    break;
    case 2:
    show("It's a mouse trap !");
    var dmg = parseInt(player.hp/5);
    player.hp =parseInt(player.hp-dmg) ;

    show("You lost "+dmg+" hp");
      break;
      case 3:
      show("It's a banana's peel !");
      show("You lost 1 hp");
      player.hp = player.hp-1 ;
        break;
        case 4:
        show("It's an arrow !");
        var dmg = parseInt(player.hp/3);
        player.hp =parseInt(player.hp-dmg) ;

        show("You lost "+dmg+" hp");
          break;
  default:
}
}
function fight(){

    if(player.isAlive==true){
    var fightTxt = 'What do you want to do ? <a href="#" onClick="attack()"> Attack </a>  | <a href="#" onClick="dodge()"> Dodge </a>  |  <a  href="#"onClick="run()"> Run </a> <br>'
    show(fightTxt);}else{
      return 0;
    }
}
function attack(){

    cleanText();
  var duelTxt ='You dealt '+player.strenght+' damages'
  monster.hp=monster.hp-player.strenght;
    show(duelTxt);
    if(lifeTestMonster()){
    show(monster.getSize()+' '+monster.getType()+' have '+monster.hp+' hp left ');
    var duelTxt ='You recieved '+monster.strenght+' damages'
    player.hp=player.hp-monster.strenght;
    show(duelTxt);
    lifeTestPlayer();
    update();
    fight();}
}
function dodge(){
    cleanText();
  if(player.agility>=10){
var dodge=random(parseInt(this.agility/10));
if(dodge == 1){
  show('Dodge failed , you recieved '+monster.strenght+' damages');
  player.hp = player.hp - monster.strenght;
  lifeTestPlayer();
}else{
  show('Dodge succed , you deal '+monster.strenght+' damages');
  monster.hp = monster.hp - monster.strenght;
  if(lifeTestMonster()){
  show(monster.getSize()+' '+monster.getType()+' have '+monster.hp+' hp left ');
  fight();
}
}
}else{
  show('Dodge failed , you recieved '+monster.strenght+' damages');
  player.hp = player.hp - monster.strenght;
  lifeTestPlayer();
  fight();

}
update();
    }
function run(){
  cleanText();
  var run = random(100);
  if(run+player.intelligence>50){
      inFight = false;
      show('You have an opportunity to run away , which door do you choose : <br>'+runOptions());
  }else{
    show('Escape failed');
    show('you recieved '+monster.strenght+' damages');
    player.hp = player.hp - monster.strenght;
    lifeTestPlayer();
    fight();
  }
  update();
}
function lifeTestPlayer(){
  if(player.hp <= 0){
    update();
    show('You died');
    player.isAlive = false;
    return 0;
  }
}
function lifeTestMonster(){
  if(monster.hp <= 0){
    inFight = false
    update();
    show('You defeated '+monster.getSize()+' '+monster.getType());
    endTurn();
    return false;
  }else{
    return true;
  }
}
function runOptions(){
  switch (player.lastRoom) {
  case 'left':
  return'<a href="#" onClick="player.move('+"'"+'left'+"'"+')"> left </a>  | <a href="#" onClick="player.move('+"'"+'up'+"'"+')"> up </a><br>'

    break;
    case 'right':
    return'<a href="#" onClick="player.move('+"'"+'up'+"'"+')"> up </a>  |  <a  href="#"onClick="player.move('+"'"+'right'+"'"+')"> right </a> <br>'

      break;
      case 'up':
      return' <a href="#" onClick="player.move('+"'"+'left'+"'"+')"> left </a>  | <a href="#" onClick="player.move('+"'"+'up'+"'"+')"> up </a>  |  <a  href="#"onClick="player.move('+"'"+'right'+"'"+')"> right </a> <br>'

        break;
  default:
   return '<a href="#" onClick="player.move('+"'"+'left'+"'"+')"> left </a>  | <a href="#" onClick="player.move('+"'"+'up'+"'"+')"> up </a>  |  <a  href="#"onClick="player.move('+"'"+'right'+"'"+')"> right </a> <br>'


}
}
