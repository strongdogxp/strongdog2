"use strict";

define([''], function () {
  //*******************************************************************************************************************
  // ** Monster Summoning Data
  //*******************************************************************************************************************
  var active = [{}, {
    monsters: ['puppetball'],
    count: 1,
    upto: 2,
    timer: 150,
    mods: ['shielding']
  }, {
    monsters: ['scythe'],
    count: 1,
    upto: 2,
    timer: 120,
    mods: ['death'],
    modFrequency: 2
  }, {
    monsters: ['troglodyte', 'deider'],
    count: 1,
    upto: 2,
    timer: 90,
    mods: []
  }, {
    monsters: ['beholder', 'tarus'],
    count: 1,
    upto: 2,
    timer: 150,
    mods: ['poison'],
    modFrequency: 2
  }, {
    monsters: ['manticore', 'freet'],
    count: 1,
    upto: 2,
    timer: 120,
    mods: ['shielding'],
    modFrequency: 2
  }, {
    monsters: ['firebreath'],
    count: 1,
    upto: 2,
    timer: 10,
    mods: [],
    modFrequency: 2,
    orderMods: true
  }, {
    monsters: ['sinblob'],
    count: 1,
    upto: 1,
    timer: 30,
    mods: ['sinbreed']
  }, {
    monsters: ['beetle', 'antlike', 'centipede'],
    count: 1,
    upto: 4,
    timer: 60,
    mods: ['powerful', 'shielding', 'weakening', 'shielding'],
    modFrequency: 2,
    orderMods: true
  }, {
    monsters: ['meteor'],
    count: 2,
    upto: 2,
    timer: 10,
    mods: ['powerful', 'poison', 'weakening', 'death', 'slow', 'weakening', 'shielding'],
    orderMods: true
  }];
  var ondeath = [{}, {
    monsters: ['rubble', 'claysnail', 'clayrock'],
    count: 2,
    upto: 9,
    timer: 0,
    mods: []
  }, {
    monsters: ['rubble', 'claysnail', 'clayrock'],
    count: 3,
    upto: 9,
    timer: 0,
    mods: ['powerful'],
    modFrequency: 3
  }, {
    monsters: ['golem', 'spiked'],
    count: 2,
    upto: 9,
    timer: 0,
    mods: ['clayfallb']
  }, {
    monsters: ['rubble', 'claysnail', 'clayrock'],
    count: 5,
    upto: 9,
    timer: 0,
    mods: []
  }, {
    monsters: ['gem'],
    count: 3,
    upto: 9,
    timer: 0,
    mods: ['powerful', 'poison', 'weakening'],
    orderMods: true
  }, {
    monsters: ['eyeglite', 'inspider'],
    count: 1,
    upto: 9,
    timer: 0,
    mods: []
  }, {
    monsters: ['sinblob'],
    count: 2,
    upto: 9,
    timer: 0,
    mods: ['sinbreed']
  }, {
    monsters: ['hoodslime'],
    count: 2,
    upto: 9,
    timer: 0,
    mods: ['slimesplitb', 'powerful'],
    orderMods: true
  }, {
    monsters: ['hoodslime'],
    count: 2,
    upto: 9,
    timer: 0,
    mods: ['shielding', 'slimesplitc'],
    orderMods: true
  }, {
    monsters: ['hoodslime'],
    count: 2,
    upto: 9,
    timer: 0,
    mods: ['poison', 'weakening'],
    orderMods: true
  }, {
    monsters: ['monstrosity'],
    count: 1,
    upto: 9,
    timer: 0,
    mods: ['powerful']
  }, {
    monsters: ['slimex'],
    count: 3,
    upto: 9,
    timer: 0,
    mods: ['shielding', 'slimesplitxb', 'poison'],
    orderMods: true
  }, {
    monsters: ['slimex'],
    count: 2,
    upto: 9,
    timer: 0,
    mods: ['rejuvenation', 'slimesplitxc'],
    orderMods: true
  }, {
    monsters: ['slimex'],
    count: 2,
    upto: 9,
    timer: 0,
    mods: ['slimesplitxd', 'weakening'],
    orderMods: true
  }, {
    monsters: ['slimex'],
    count: 2,
    upto: 9,
    timer: 0,
    mods: ['slow', 'powerful'],
    orderMods: true
  }, {
    monsters: ['shvrda', 'shvrdb', 'shvrdc'],
    count: 5,
    upto: 9,
    timer: 0,
    mods: ['rearrange', 'poison', 'shielding', 'slow', 'powerful'],
    orderMods: true
  }, {
    monsters: ['imploder'],
    count: 1,
    upto: 9,
    timer: 0,
    mods: ['armageddon']
  }];
  var summons = {
    active: active,
    ondeath: ondeath
  };
  return summons;
});