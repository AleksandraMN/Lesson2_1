'use strict';

const elemDiv = document.querySelector('.ads');
elemDiv.remove();

const item = document.querySelectorAll('.item');
console.log('item', item);
item[3].after(item[0]);

const propsList = document.querySelectorAll('.props__list');
console.log('propsList', propsList);
const cloneElem = propsList[2].cloneNode(true);
console.log('cloneElem', cloneElem);
propsList[2].replaceWith(propsList[4]);
const elemCont = document.querySelector('.item_five .content');
elemCont.append(cloneElem);


const propsItemTwo = document.querySelectorAll('.props__item_two');
console.log('propsItemTwo', propsItemTwo);
propsItemTwo[7].after(propsItemTwo[8], propsItemTwo[9]);


const propsItemFour = document.querySelectorAll('.props__item_four');
console.log('propsItemFour', propsItemFour);
propsItemFour[3].after(propsItemFour[0]);
