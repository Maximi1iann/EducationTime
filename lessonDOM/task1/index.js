// 'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

// /**
//  * @param {object[]} tasksList
//  * @return {undefined}
//  */
const renderTasks = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
        const listItemsElem = document.createElement('li');
        listItemsElem.classList.add('list__item');
        if(done) {
            listItemsElem.classList.add('list__item_done')
        }

        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.checked = done;
        checkboxElem.classList.add('list__item-checkbox');
        listItemsElem.append(checkboxElem, text);

        return listItemsElem
    });

    listElem.append(...listItemsElems);
};

renderTasks(tasks);
