"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefuture_age_of_empires"]("main",{

/***/ "./src/systems/units/Unit.ts":
/*!***********************************!*\
  !*** ./src/systems/units/Unit.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Unit = exports.Direction = exports.UnitState = exports.UnitType = void 0;\nvar UnitType;\n(function (UnitType) {\n    UnitType[\"VILLAGER\"] = \"villager\";\n})(UnitType || (exports.UnitType = UnitType = {}));\nvar UnitState;\n(function (UnitState) {\n    UnitState[\"IDLE\"] = \"idle\";\n    UnitState[\"MOVING\"] = \"moving\";\n    UnitState[\"GATHERING\"] = \"gathering\";\n})(UnitState || (exports.UnitState = UnitState = {}));\nvar Direction;\n(function (Direction) {\n    Direction[Direction[\"SOUTH\"] = 0] = \"SOUTH\";\n    Direction[Direction[\"SOUTH_EAST\"] = 1] = \"SOUTH_EAST\";\n    Direction[Direction[\"EAST\"] = 2] = \"EAST\";\n    Direction[Direction[\"NORTH_EAST\"] = 3] = \"NORTH_EAST\";\n    Direction[Direction[\"NORTH\"] = 4] = \"NORTH\";\n    Direction[Direction[\"NORTH_WEST\"] = 5] = \"NORTH_WEST\";\n    Direction[Direction[\"WEST\"] = 6] = \"WEST\";\n    Direction[Direction[\"SOUTH_WEST\"] = 7] = \"SOUTH_WEST\";\n})(Direction || (exports.Direction = Direction = {}));\nvar Unit = /** @class */ (function () {\n    function Unit(scene, x, y, type, resourceSystem, id) {\n        this.scene = scene;\n        this.x = x;\n        this.y = y;\n        this.type = type;\n        this.state = UnitState.IDLE;\n        this.resourceSystem = resourceSystem;\n        this.stats = this.getBaseStats();\n        this.direction = Direction.SOUTH;\n        this.targetX = x;\n        this.targetY = y;\n        this.isMoving = false;\n        this.id = id;\n        this.createSprite();\n    }\n    Unit.prototype.createSprite = function () {\n        // Create sprite with the appropriate sprite sheet\n        this.sprite = this.scene.add.sprite(this.x, this.y, 'villager_sprites', this.direction);\n        this.sprite.setScale(1.0);\n    };\n    Unit.prototype.moveTo = function (x, y) {\n        this.targetX = x;\n        this.targetY = y;\n        this.isMoving = true;\n        this.state = UnitState.MOVING;\n        this.updateDirection();\n    };\n    Unit.prototype.updateDirection = function () {\n        var dx = this.targetX - this.x;\n        var dy = this.targetY - this.y;\n        var angle = Math.atan2(dy, dx);\n        // Convert angle to direction (0-7)\n        var direction = Math.round(angle / (Math.PI / 4));\n        if (direction < 0)\n            direction += 8;\n        this.direction = direction;\n        this.sprite.setFrame(direction);\n    };\n    Unit.prototype.update = function () {\n        if (this.isMoving) {\n            var dx = this.targetX - this.x;\n            var dy = this.targetY - this.y;\n            var distance = Math.sqrt(dx * dx + dy * dy);\n            if (distance < 1) {\n                this.x = this.targetX;\n                this.y = this.targetY;\n                this.isMoving = false;\n                this.state = UnitState.IDLE;\n            }\n            else {\n                var speed = this.stats.speed;\n                var moveX = (dx / distance) * speed;\n                var moveY = (dy / distance) * speed;\n                this.x += moveX;\n                this.y += moveY;\n                this.sprite.setPosition(this.x, this.y);\n            }\n        }\n    };\n    Unit.prototype.destroy = function () {\n        this.sprite.destroy();\n    };\n    Unit.prototype.getSprite = function () {\n        return this.sprite;\n    };\n    Unit.prototype.getId = function () {\n        return this.id;\n    };\n    Unit.prototype.getPosition = function () {\n        return { x: this.x, y: this.y };\n    };\n    return Unit;\n}());\nexports.Unit = Unit;\n\n\n//# sourceURL=webpack://future_age_of_empires/./src/systems/units/Unit.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("732aed22b9e3fb91144b")
/******/ })();
/******/ 
/******/ }
);