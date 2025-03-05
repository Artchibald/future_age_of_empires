(()=>{"use strict";var t,e={108:(t,e)=>{var r;Object.defineProperty(e,"__esModule",{value:!0}),e.ResourceSystem=e.ResourceType=void 0,function(t){t.FOOD="food",t.WOOD="wood",t.GOLD="gold",t.STONE="stone"}(r||(e.ResourceType=r={}));var i=function(){function t(){this.resources=new Map,this.resourceLimits=new Map,this.initializeResources()}return t.prototype.initializeResources=function(){this.setResource(r.FOOD,200),this.setResource(r.WOOD,200),this.setResource(r.GOLD,100),this.setResource(r.STONE,100),this.setResourceLimit(r.FOOD,1e3),this.setResourceLimit(r.WOOD,1e3),this.setResourceLimit(r.GOLD,1e3),this.setResourceLimit(r.STONE,1e3)},t.prototype.getResource=function(t){return this.resources.get(t)||0},t.prototype.getResourceLimit=function(t){return this.resourceLimits.get(t)||0},t.prototype.setResource=function(t,e){var r=this.getResourceLimit(t);this.resources.set(t,Math.min(e,r))},t.prototype.setResourceLimit=function(t,e){this.resourceLimits.set(t,e),this.getResource(t)>e&&this.setResource(t,e)},t.prototype.addResource=function(t,e){var r=this.getResource(t),i=this.getResourceLimit(t),s=Math.min(r+e,i);this.setResource(t,s)},t.prototype.removeResource=function(t,e){var r=this.getResource(t);return r>=e&&(this.setResource(t,r-e),!0)},t.prototype.hasEnoughResources=function(t){var e=this;return t.every((function(t){return e.getResource(t.type)>=t.amount}))},t.prototype.spendResources=function(t){var e=this;return!!this.hasEnoughResources(t)&&(t.forEach((function(t){e.removeResource(t.type,t.amount)})),!0)},t.prototype.getResourcePercentage=function(t){return this.getResource(t)/this.getResourceLimit(t)*100},t.prototype.getAllResources=function(){return Array.from(this.resources.entries()).map((function(t){return{type:t[0],amount:t[1]}}))},t}();e.ResourceSystem=i},375:function(t,e,r){var i,s=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var s in e=arguments[r])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Villager=void 0;var o=r(559),a=r(108),c=function(t){function e(e,r,i,s,n){var a=t.call(this,e,r,i,o.UnitType.VILLAGER,s,n)||this;return a.gatheringStats=null,a.lastGatherTime=0,a.GATHER_INTERVAL=1e3,a}return s(e,t),e.prototype.getBaseStats=function(){return{health:25,maxHealth:25,speed:2,attack:1,defense:0}},e.prototype.startGathering=function(t){this.gatheringStats={type:t,rate:this.getGatherRate(t),carryCapacity:10,currentCarry:0},this.state=o.UnitState.GATHERING,this.lastGatherTime=this.scene.time.now},e.prototype.stopGathering=function(){this.gatheringStats=null,this.state=o.UnitState.IDLE},e.prototype.update=function(){t.prototype.update.call(this),this.state===o.UnitState.GATHERING&&this.gatheringStats&&this.gatherResources(this.scene.time.now)},e.prototype.gatherResources=function(t){if(t-this.lastGatherTime>=this.GATHER_INTERVAL){var e=this.gatherResource(this.gatheringStats.type);this.gatheringStats.currentCarry+=e,this.gatheringStats.currentCarry>=this.gatheringStats.carryCapacity&&this.depositResources(),this.lastGatherTime=t}},e.prototype.gatherResource=function(t){switch(t){case a.ResourceType.FOOD:case a.ResourceType.WOOD:return.5;case a.ResourceType.GOLD:case a.ResourceType.STONE:return.3;default:return 0}},e.prototype.depositResources=function(){this.gatheringStats&&(this.resourceSystem.addResource(this.gatheringStats.type,this.gatheringStats.currentCarry),this.gatheringStats.currentCarry=0)},e.prototype.getGatheringStats=function(){return this.gatheringStats?n({},this.gatheringStats):null},e.prototype.getGatherRate=function(t){switch(t){case a.ResourceType.FOOD:case a.ResourceType.WOOD:return.5;case a.ResourceType.GOLD:case a.ResourceType.STONE:return.3;default:return 0}},e}(o.Unit);e.Villager=c},468:function(t,e,r){var i,s,n=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__createBinding||(Object.create?function(t,e,r,i){void 0===i&&(i=r);var s=Object.getOwnPropertyDescriptor(e,r);s&&!("get"in s?!e.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,s)}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),c=this&&this.__importStar||(s=function(t){return s=Object.getOwnPropertyNames||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[e.length]=r);return e},s(t)},function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r=s(t),i=0;i<r.length;i++)"default"!==r[i]&&o(e,t,r[i]);return a(e,t),e}),u=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(s,n){function o(t){try{c(i.next(t))}catch(t){n(t)}}function a(t){try{c(i.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}c((i=i.apply(t,e||[])).next())}))},h=this&&this.__generator||function(t,e){var r,i,s,n={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(n=0)),n;)try{if(r=1,i&&(s=2&a[0]?i.return:a[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,a[1])).done)return s;switch(i=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,i=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(!((s=(s=n.trys).length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){n=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){n.label=a[1];break}if(6===a[0]&&n.label<s[1]){n.label=s[1],s=a;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(a);break}s[2]&&n.ops.pop(),n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t],i=0}finally{r=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(e,"__esModule",{value:!0}),r(440);var p=r(108),l=r(559),f=function(t){function e(){var e=t.call(this,"demo")||this;return e.selectedUnit=null,e.grassTile=null,e}return n(e,t),e.prototype.preload=function(){var t=this;this.load.on("loaderror",(function(e){console.error("Error loading asset:",e.key),console.error("Failed URL:",e.url),t.initializeSystems()}));try{var e="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"/":"/projects/age_of_empires/";this.load.setBaseURL(e),this.load.image("grass_tile","assets/grass_tile.png"),this.load.spritesheet("villager_sprites","assets/villager_sprites.png",{frameWidth:32,frameHeight:32}),this.load.on("complete",(function(){console.log("Essential assets loaded successfully"),t.initializeSystems()})),this.load.start()}catch(t){console.error("Error in preload:",t),this.initializeSystems()}},e.prototype.initializeSystems=function(){return u(this,void 0,void 0,(function(){var t,e,i,s,n;return h(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,Promise.all([Promise.resolve().then((function(){return c(r(108))})).then((function(t){return t.ResourceSystem})),Promise.resolve().then((function(){return c(r(703))})).then((function(t){return t.ResourceUI})),Promise.resolve().then((function(){return c(r(940))})).then((function(t){return t.UnitManager}))])];case 1:return t=o.sent(),e=t[0],i=t[1],s=t[2],this.resourceSystem=new e,this.unitManager=new s(this,this.resourceSystem),this.resourceUI=new i(this,this.resourceSystem),this.createGrassBackground(),this.createTestButtons(),this.createUnitButton(),this.input.on("pointerdown",this.handleClick,this),[3,3];case 2:return n=o.sent(),console.error("Error initializing systems:",n),[3,3];case 3:return[2]}}))}))},e.prototype.create=function(){try{this.createGrassBackground()}catch(t){console.error("Error in create:",t)}},e.prototype.createGrassBackground=function(){try{if(this.textures.exists("grass_tile"))this.grassTile=this.add.tileSprite(0,0,this.cameras.main.width,this.cameras.main.height,"grass_tile"),this.grassTile.setOrigin(0,0),this.grassTile.setDepth(-1);else{console.warn("Grass tile texture not found, creating placeholder");var t=this.add.graphics();t.fillStyle(65280,.3),t.fillRect(0,0,this.cameras.main.width,this.cameras.main.height),t.setDepth(-1)}}catch(t){console.error("Error creating grass background:",t)}},e.prototype.update=function(t){this.resourceUI&&this.resourceUI.updateAllDisplays(),this.unitManager&&this.unitManager.update(t)},e.prototype.handleClick=function(t){if(this.selectedUnit&&this.unitManager){var e=this.unitManager.getUnit(this.selectedUnit);e&&e.moveTo(t.x,t.y)}},e.prototype.createTestButtons=function(){var t=this,e={fontSize:"16px",backgroundColor:"#333",padding:{x:10,y:5}};this.add.text(10,100,"Add Food",e).setInteractive().on("pointerdown",(function(){var e;null===(e=t.resourceSystem)||void 0===e||e.addResource(p.ResourceType.FOOD,50)})),this.add.text(120,100,"Add Wood",e).setInteractive().on("pointerdown",(function(){var e;null===(e=t.resourceSystem)||void 0===e||e.addResource(p.ResourceType.WOOD,50)})),this.add.text(230,100,"Add Gold",e).setInteractive().on("pointerdown",(function(){var e;null===(e=t.resourceSystem)||void 0===e||e.addResource(p.ResourceType.GOLD,25)})),this.add.text(340,100,"Add Stone",e).setInteractive().on("pointerdown",(function(){var e;null===(e=t.resourceSystem)||void 0===e||e.addResource(p.ResourceType.STONE,25)}))},e.prototype.createUnitButton=function(){var t=this;this.add.text(10,150,"Create Villager",{fontSize:"16px",backgroundColor:"#333",padding:{x:10,y:5}}).setInteractive().on("pointerdown",(function(){if(t.unitManager){var e=Phaser.Math.Between(100,500),r=Phaser.Math.Between(100,500),i=t.unitManager.createUnit(l.UnitType.VILLAGER,e,r);i.getSprite().setInteractive().on("pointerdown",(function(){t.selectedUnit=i.getId(),console.log("Selected unit:",t.selectedUnit)}))}}))},e}(Phaser.Scene);e.default=f;var y={type:Phaser.AUTO,width:1280,height:720,backgroundColor:"#000000",scene:f,physics:{default:"arcade",arcade:{gravity:{x:0,y:0},debug:!1}}};new Phaser.Game(y)},559:(t,e)=>{var r,i,s;Object.defineProperty(e,"__esModule",{value:!0}),e.Unit=e.Direction=e.UnitState=e.UnitType=void 0,function(t){t.VILLAGER="villager"}(r||(e.UnitType=r={})),function(t){t.IDLE="idle",t.MOVING="moving",t.GATHERING="gathering"}(i||(e.UnitState=i={})),function(t){t[t.SOUTH=0]="SOUTH",t[t.SOUTH_EAST=1]="SOUTH_EAST",t[t.EAST=2]="EAST",t[t.NORTH_EAST=3]="NORTH_EAST",t[t.NORTH=4]="NORTH",t[t.NORTH_WEST=5]="NORTH_WEST",t[t.WEST=6]="WEST",t[t.SOUTH_WEST=7]="SOUTH_WEST"}(s||(e.Direction=s={}));var n=function(){function t(t,e,r,n,o,a){this.scene=t,this.x=e,this.y=r,this.type=n,this.state=i.IDLE,this.resourceSystem=o,this.stats=this.getBaseStats(),this.direction=s.SOUTH,this.targetX=e,this.targetY=r,this.isMoving=!1,this.id=a,this.createSprite()}return t.prototype.createSprite=function(){this.sprite=this.scene.add.sprite(this.x,this.y,"villager_sprites",this.direction),this.sprite.setScale(1)},t.prototype.moveTo=function(t,e){this.targetX=t,this.targetY=e,this.isMoving=!0,this.state=i.MOVING,this.updateDirection()},t.prototype.updateDirection=function(){var t=this.targetX-this.x,e=this.targetY-this.y,r=Math.atan2(e,t),i=Math.round(r/(Math.PI/4));i<0&&(i+=8),this.direction=i,this.sprite.setFrame(i)},t.prototype.update=function(){if(this.isMoving){var t=this.targetX-this.x,e=this.targetY-this.y,r=Math.sqrt(t*t+e*e);if(r<1)this.x=this.targetX,this.y=this.targetY,this.isMoving=!1,this.state=i.IDLE;else{var s=this.stats.speed,n=t/r*s,o=e/r*s;this.x+=n,this.y+=o,this.sprite.setPosition(this.x,this.y)}}},t.prototype.destroy=function(){this.sprite.destroy()},t.prototype.getSprite=function(){return this.sprite},t.prototype.getId=function(){return this.id},t.prototype.getPosition=function(){return{x:this.x,y:this.y}},t}();e.Unit=n},703:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ResourceUI=void 0;var i=r(108),s=function(){function t(t,e){this.scene=t,this.resourceSystem=e,this.resourceTexts=new Map,this.resourceIcons=new Map,this.createUI()}return t.prototype.createUI=function(){var t=this;Object.values(i.ResourceType).forEach((function(e,r){var i=10+142*r,s=t.scene.add.image(i,10,"resource_icons",r);s.setScale(.5),t.resourceIcons.set(e,s);var n=t.scene.add.text(i+32+5,10,"",{fontSize:"20px",color:"#ffffff",backgroundColor:"#000000",padding:{x:5,y:2}});t.resourceTexts.set(e,n),t.updateResourceDisplay(e)}))},t.prototype.updateResourceDisplay=function(t){var e=this.resourceTexts.get(t);if(e){var r=this.resourceSystem.getResource(t),i=this.resourceSystem.getResourceLimit(t);e.setText("".concat(t.toUpperCase(),": ").concat(r,"/").concat(i))}},t.prototype.updateAllDisplays=function(){var t=this;Object.values(i.ResourceType).forEach((function(e){t.updateResourceDisplay(e)}))},t.prototype.destroy=function(){this.resourceTexts.forEach((function(t){return t.destroy()})),this.resourceIcons.forEach((function(t){return t.destroy()})),this.resourceTexts.clear(),this.resourceIcons.clear()},t}();e.ResourceUI=s},940:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.UnitManager=e.UnitType=void 0;var i=r(559),s=r(375),n=r(559);Object.defineProperty(e,"UnitType",{enumerable:!0,get:function(){return n.UnitType}});var o=function(){function t(t,e){this.scene=t,this.resourceSystem=e,this.units=new Map}return t.prototype.createUnit=function(t,e,r){var n,o=this.generateUnitId();if(t!==i.UnitType.VILLAGER)throw new Error("Unknown unit type: ".concat(t));return n=new s.Villager(this.scene,e,r,this.resourceSystem,o),this.units.set(o,n),n},t.prototype.update=function(t){this.units.forEach((function(t){t.update()}))},t.prototype.getUnit=function(t){return this.units.get(t)},t.prototype.getAllUnits=function(){return Array.from(this.units.values())},t.prototype.removeUnit=function(t){var e=this.units.get(t);e&&(e.destroy(),this.units.delete(t))},t.prototype.generateUnitId=function(){return"unit_".concat(Date.now(),"_").concat(Math.random().toString(36).substr(2,9))},t}();e.UnitManager=o}},r={};function i(t){var s=r[t];if(void 0!==s)return s.exports;var n=r[t]={exports:{}};return e[t].call(n.exports,n,n.exports,i),n.exports}i.m=e,t=[],i.O=(e,r,s,n)=>{if(!r){var o=1/0;for(h=0;h<t.length;h++){for(var[r,s,n]=t[h],a=!0,c=0;c<r.length;c++)(!1&n||o>=n)&&Object.keys(i.O).every((t=>i.O[t](r[c])))?r.splice(c--,1):(a=!1,n<o&&(o=n));if(a){t.splice(h--,1);var u=s();void 0!==u&&(e=u)}}return e}n=n||0;for(var h=t.length;h>0&&t[h-1][2]>n;h--)t[h]=t[h-1];t[h]=[r,s,n]},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={792:0};i.O.j=e=>0===t[e];var e=(e,r)=>{var s,n,[o,a,c]=r,u=0;if(o.some((e=>0!==t[e]))){for(s in a)i.o(a,s)&&(i.m[s]=a[s]);if(c)var h=c(i)}for(e&&e(r);u<o.length;u++)n=o[u],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(h)},r=self.webpackChunkfuture_age_of_empires=self.webpackChunkfuture_age_of_empires||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var s=i.O(void 0,[440],(()=>i(468)));s=i.O(s)})();