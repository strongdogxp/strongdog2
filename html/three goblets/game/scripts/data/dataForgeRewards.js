"use strict";

define([''], function () {
  //*******************************************************************************************************************
  // ** Rewards for Forge
  //*******************************************************************************************************************
  var rewards = [{
    icon: 0,
    type: 'item',
    params: [null, null, 1, 3],
    tooltip: 'Three uncommon items.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [1],
    tooltip: 'One stat point.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, null, 5],
    tooltip: 'Five random items.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, 0, null, 4],
    tooltip: 'Four random swords.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [1],
    tooltip: 'One stat point.'
  }, {
    icon: 0,
    type: 'passivePoint',
    params: [1],
    tooltip: 'One skill point.'
  }, {
    icon: 0,
    type: 'unlockSlot',
    params: [4],
    tooltip: 'Unlocks fifth equip\nslot (Ring).'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, null, 5],
    tooltip: 'Five random items.'
  }, {
    icon: 0,
    type: 'unlockSlot',
    params: [5],
    tooltip: 'Unlocks sixth equip\nslot (Ring).'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [1],
    tooltip: 'One stat point.'
  }, {
    icon: 0,
    type: 'unlockSlot',
    params: [6],
    tooltip: 'Unlocks seventh equip\nslot (Amulet).'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 2, 3],
    tooltip: 'Three rare items.'
  }, {
    icon: 0,
    type: 'itemBatch',
    params: [null, null, 1],
    tooltip: 'One random item of each type.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, 4, null, 6],
    tooltip: 'Six random rings.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [1],
    tooltip: 'One stat point.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 3, 1],
    tooltip: 'One Legendary item.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 2, 4],
    tooltip: 'Four rare items.'
  }, {
    icon: 0,
    type: 'itemBatch',
    params: [null, 2, 1],
    tooltip: 'One rare item of each type.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [1],
    tooltip: 'One stat point.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 3, 3],
    tooltip: 'Three Legendary items.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [3],
    tooltip: 'Three stat points.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [1],
    tooltip: 'One stat point.'
  }, //*****************************************************************************************************************
  // * New
  //*****************************************************************************************************************
  {
    icon: 0,
    type: 'item',
    params: [null, null, 3, 5],
    tooltip: 'Five Legendary items.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [2],
    tooltip: 'Two stat points.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, 2, null, 7],
    tooltip: 'Seven random body armors.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [1],
    tooltip: 'One stat point.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, null, 10],
    tooltip: 'Ten random items.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, 5, 4, 1],
    tooltip: 'One ancient amulet.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [2],
    tooltip: 'Two stat points.'
  }, {
    icon: 0,
    type: 'itemBatch',
    params: [null, null, 1],
    tooltip: 'One random item of each type.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, 3, null, 9],
    tooltip: 'Nine random gloves.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 4, 4],
    tooltip: 'Four ancient items.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [2],
    tooltip: 'Two stat points.'
  }, {
    icon: 0,
    type: 'itemBatch',
    params: [null, null, 2],
    tooltip: 'Two random items of each type.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [3],
    tooltip: 'Three stat points.'
  }, {
    icon: 0,
    type: 'passivePoint',
    params: [1],
    tooltip: 'One skill point.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 4, 8],
    tooltip: 'Eight ancient items.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, 5, 5, 3],
    tooltip: 'Three ultimate amulets.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [3],
    tooltip: 'Three stat points.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 5, 2],
    tooltip: 'Two ultimate items.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 5, 3],
    tooltip: 'Three ultimate items.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [4],
    tooltip: 'Four stat points.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, 0, 5, 3],
    tooltip: 'Three ultimate swords.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 5, 4],
    tooltip: 'Four ultimate items.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [3],
    tooltip: 'Three stat points.'
  }, {
    icon: 0,
    type: 'item',
    params: [null, null, 5, 5],
    tooltip: 'Five ultimate items.'
  }, {
    icon: 0,
    type: 'passivePoint',
    params: [1],
    tooltip: 'One skill point.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [5],
    tooltip: 'Five stat points.'
  }, {
    icon: 0,
    type: 'basicPoint',
    params: [1],
    tooltip: 'One stat point.'
  }];
  return rewards;
});