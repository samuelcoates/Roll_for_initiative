/**
 * Created by h205p3 on 12/9/16.
 */
function Room(){
    this.id= 0;
    this.items= [];
    this.enemies= [];
    this.exits= [];
    this.chests= 0;
    this.name= "";
}
//function Character() {
//this.id= 0;
//this.health= 0;
//this.mana= 0;
//this.items= [];
//this.class= [];
// this.nationality= [];
// this.name= "";
// this.level= 0;
// this.stats= [];
// this.skills= [];
//}
function Enemies () {
    this.id= 0;
    this.health= 0;
    this.mana= 0;
    this.items= [];
    this.class= [];
    this.nationality= [];
    this.name= "";
    this.level= 0;
    this.stats= [];
    this.skills= [];
    this.itemsDropped= [];
}
function NPCs () {
    this.id= 0;
    this.health= 0;
    this.mana= 0;
    this.items= [];
    this.class= [];
    this.race= [];
    this.name= "";
    this.level= 0;
    this.stats= [];
    this.skills= [];
    this.speech= "";
}
function Player (profession, race, name, deity) {
    this.id= 1;
    this.health= 20;
    this.mana= 10;
    this.items= [];
    this.profession= profession;
    this.race= document.getElementById("race").value;
    this.name= document.getElementById("name").value;
    this.level= 1;
    //this.strength= str;
    //this.dexterity= dex;
    //this.charisma= cha;
    //this.constitution= con;
    //this.wisdom= wis;
    //this.intelligence= int;
    this.deity= document.getElementById("deity").value;
}
function Items() {
    this.id= 0;
    this.name= "";
    this.type= "";
}
function Consumables() {
    this.inherentFrom(items);
    this.tempEffect= [];
    this.uses= 0;
}
function Equipment() {
    this.id= 0;
    this.type= "";
    this.rarity= 0;
}
function Armor() {
    this.inherentFrom(equipment);
    this.protection= 0;
    this.effect= [];
    this.effectName= "";
    this.effectDamage= 0;
    this.effectType= [];
}
function Weapons() {
    this.inherentFrom(equipment);
    this.damage= 0;
    this.effect= [];
    this.effectName= "";
    this.effectDamage= 0;
    this.effectType= [];
}
function Rolls() {
    this.probability= 0;
    this.rollFor= "";
    this.result= "";
}
function Skills() {
    this.str= 0;
    this.cha= 0;
    this.wis= 0;
    this.con= 0;
    this.dex= 0;
    this.int= 0;
}
