/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || (function () {\n    var ownKeys = function(o) {\n        ownKeys = Object.getOwnPropertyNames || function (o) {\n            var ar = [];\n            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;\n            return ar;\n        };\n        return ownKeys(o);\n    };\n    return function (mod) {\n        if (mod && mod.__esModule) return mod;\n        var result = {};\n        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== \"default\") __createBinding(result, mod, k[i]);\n        __setModuleDefault(result, mod);\n        return result;\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === \"function\" ? Iterator : Object).prototype);\n    return g.next = verb(0), g[\"throw\"] = verb(1), g[\"return\"] = verb(2), typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\nvar ResourceSystem_1 = __webpack_require__(/*! ./systems/ResourceSystem */ \"./src/systems/ResourceSystem.ts\");\nvar Unit_1 = __webpack_require__(/*! ./systems/units/Unit */ \"./src/systems/units/Unit.ts\");\nvar Demo = /** @class */ (function (_super) {\n    __extends(Demo, _super);\n    function Demo() {\n        var _this = _super.call(this, 'demo') || this;\n        _this.selectedUnit = null;\n        return _this;\n    }\n    Demo.prototype.preload = function () {\n        var _this = this;\n        // Add load error callback first\n        this.load.on('loaderror', function (file) {\n            console.error('Error loading asset:', file.key);\n            console.error('Failed URL:', file.url);\n            // Try to continue even if assets fail to load\n            _this.initializeSystems();\n        });\n        // Load essential assets first\n        try {\n            this.load.image('grass_tile', 'assets/grass_tile.png');\n            this.load.spritesheet('villager_sprites', 'assets/villager_sprites.png', {\n                frameWidth: 32,\n                frameHeight: 32\n            });\n            // Add load complete callback\n            this.load.on('complete', function () {\n                console.log('Essential assets loaded successfully');\n                _this.initializeSystems();\n            });\n            // Start loading\n            this.load.start();\n        }\n        catch (error) {\n            console.error('Error in preload:', error);\n            // Try to continue even if preload fails\n            this.initializeSystems();\n        }\n    };\n    Demo.prototype.initializeSystems = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a, ResourceSystem, ResourceUI, UnitManager, error_1;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _b.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, Promise.all([\n                                Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./systems/ResourceSystem */ \"./src/systems/ResourceSystem.ts\")); }).then(function (m) { return m.ResourceSystem; }),\n                                Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./systems/ResourceUI */ \"./src/systems/ResourceUI.ts\")); }).then(function (m) { return m.ResourceUI; }),\n                                Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./systems/units/UnitManager */ \"./src/systems/units/UnitManager.ts\")); }).then(function (m) { return m.UnitManager; })\n                            ])];\n                    case 1:\n                        _a = _b.sent(), ResourceSystem = _a[0], ResourceUI = _a[1], UnitManager = _a[2];\n                        // Initialize systems\n                        this.resourceSystem = new ResourceSystem();\n                        this.unitManager = new UnitManager(this, this.resourceSystem);\n                        this.resourceUI = new ResourceUI(this, this.resourceSystem);\n                        // Create UI elements\n                        this.createGrassBackground();\n                        this.createTestButtons();\n                        this.createUnitButton();\n                        // Add click handler for unit movement\n                        this.input.on('pointerdown', this.handleClick, this);\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_1 = _b.sent();\n                        console.error('Error initializing systems:', error_1);\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Demo.prototype.create = function () {\n        try {\n            // Create grass background\n            this.createGrassBackground();\n        }\n        catch (error) {\n            console.error('Error in create:', error);\n        }\n    };\n    Demo.prototype.createGrassBackground = function () {\n        try {\n            if (this.textures.exists('grass_tile')) {\n                this.grassTile = this.add.tileSprite(0, 0, this.cameras.main.width, this.cameras.main.height, 'grass_tile');\n                this.grassTile.setOrigin(0, 0);\n                this.grassTile.setDepth(-1);\n            }\n            else {\n                console.warn('Grass tile texture not found, creating placeholder');\n                // Create a placeholder rectangle if texture is missing\n                var graphics = this.add.graphics();\n                graphics.fillStyle(0x00ff00, 0.3);\n                graphics.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);\n                graphics.setDepth(-1);\n            }\n        }\n        catch (error) {\n            console.error('Error creating grass background:', error);\n        }\n    };\n    Demo.prototype.update = function (time) {\n        if (this.resourceUI) {\n            this.resourceUI.updateAllDisplays();\n        }\n        if (this.unitManager) {\n            this.unitManager.update(time);\n        }\n        // Scroll grass background\n        this.grassTile.tilePositionX += 0.1;\n        this.grassTile.tilePositionY += 0.1;\n    };\n    Demo.prototype.handleClick = function (pointer) {\n        if (this.selectedUnit && this.unitManager) {\n            var unit = this.unitManager.getUnit(this.selectedUnit);\n            if (unit) {\n                unit.moveTo(pointer.x, pointer.y);\n            }\n        }\n    };\n    Demo.prototype.createTestButtons = function () {\n        var _this = this;\n        var buttonStyle = {\n            fontSize: '16px',\n            backgroundColor: '#333',\n            padding: { x: 10, y: 5 }\n        };\n        // Add Food button\n        this.add.text(10, 100, 'Add Food', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            var _a;\n            (_a = _this.resourceSystem) === null || _a === void 0 ? void 0 : _a.addResource(ResourceSystem_1.ResourceType.FOOD, 50);\n        });\n        // Add Wood button\n        this.add.text(120, 100, 'Add Wood', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            var _a;\n            (_a = _this.resourceSystem) === null || _a === void 0 ? void 0 : _a.addResource(ResourceSystem_1.ResourceType.WOOD, 50);\n        });\n        // Add Gold button\n        this.add.text(230, 100, 'Add Gold', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            var _a;\n            (_a = _this.resourceSystem) === null || _a === void 0 ? void 0 : _a.addResource(ResourceSystem_1.ResourceType.GOLD, 25);\n        });\n        // Add Stone button\n        this.add.text(340, 100, 'Add Stone', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            var _a;\n            (_a = _this.resourceSystem) === null || _a === void 0 ? void 0 : _a.addResource(ResourceSystem_1.ResourceType.STONE, 25);\n        });\n    };\n    Demo.prototype.createUnitButton = function () {\n        var _this = this;\n        var buttonStyle = {\n            fontSize: '16px',\n            backgroundColor: '#333',\n            padding: { x: 10, y: 5 }\n        };\n        // Add Villager button\n        this.add.text(10, 150, 'Create Villager', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            if (!_this.unitManager)\n                return;\n            // Create villager at random position\n            var x = Phaser.Math.Between(100, 500);\n            var y = Phaser.Math.Between(100, 500);\n            var unit = _this.unitManager.createUnit(Unit_1.UnitType.VILLAGER, x, y);\n            // Make the villager clickable\n            unit.getSprite().setInteractive()\n                .on('pointerdown', function () {\n                _this.selectedUnit = unit.getId();\n                console.log('Selected unit:', _this.selectedUnit);\n            });\n        });\n    };\n    return Demo;\n}(Phaser.Scene));\nexports[\"default\"] = Demo;\nvar config = {\n    type: Phaser.AUTO,\n    width: 1280,\n    height: 720,\n    backgroundColor: '#000000',\n    scene: Demo,\n    physics: {\n        default: 'arcade',\n        arcade: {\n            gravity: { x: 0, y: 0 },\n            debug: false\n        }\n    }\n};\nvar game = new Phaser.Game(config);\n\n\n//# sourceURL=webpack://future_age_of_empires/./src/game.ts?");

/***/ }),

/***/ "./src/systems/ResourceSystem.ts":
/*!***************************************!*\
  !*** ./src/systems/ResourceSystem.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ResourceSystem = exports.ResourceType = void 0;\nvar ResourceType;\n(function (ResourceType) {\n    ResourceType[\"FOOD\"] = \"food\";\n    ResourceType[\"WOOD\"] = \"wood\";\n    ResourceType[\"GOLD\"] = \"gold\";\n    ResourceType[\"STONE\"] = \"stone\";\n})(ResourceType || (exports.ResourceType = ResourceType = {}));\nvar ResourceSystem = /** @class */ (function () {\n    function ResourceSystem() {\n        this.resources = new Map();\n        this.resourceLimits = new Map();\n        // Initialize starting resources \n        this.initializeResources();\n    }\n    ResourceSystem.prototype.initializeResources = function () {\n        // Set initial resource amounts\n        this.setResource(ResourceType.FOOD, 200);\n        this.setResource(ResourceType.WOOD, 200);\n        this.setResource(ResourceType.GOLD, 100);\n        this.setResource(ResourceType.STONE, 100);\n        // Set initial resource limits\n        this.setResourceLimit(ResourceType.FOOD, 1000);\n        this.setResourceLimit(ResourceType.WOOD, 1000);\n        this.setResourceLimit(ResourceType.GOLD, 1000);\n        this.setResourceLimit(ResourceType.STONE, 1000);\n    };\n    ResourceSystem.prototype.getResource = function (type) {\n        return this.resources.get(type) || 0;\n    };\n    ResourceSystem.prototype.getResourceLimit = function (type) {\n        return this.resourceLimits.get(type) || 0;\n    };\n    ResourceSystem.prototype.setResource = function (type, amount) {\n        var limit = this.getResourceLimit(type);\n        this.resources.set(type, Math.min(amount, limit));\n    };\n    ResourceSystem.prototype.setResourceLimit = function (type, limit) {\n        this.resourceLimits.set(type, limit);\n        // Adjust current amount if it exceeds the new limit\n        var currentAmount = this.getResource(type);\n        if (currentAmount > limit) {\n            this.setResource(type, limit);\n        }\n    };\n    ResourceSystem.prototype.addResource = function (type, amount) {\n        var currentAmount = this.getResource(type);\n        var limit = this.getResourceLimit(type);\n        var newAmount = Math.min(currentAmount + amount, limit);\n        this.setResource(type, newAmount);\n    };\n    ResourceSystem.prototype.removeResource = function (type, amount) {\n        var currentAmount = this.getResource(type);\n        if (currentAmount >= amount) {\n            this.setResource(type, currentAmount - amount);\n            return true;\n        }\n        return false;\n    };\n    ResourceSystem.prototype.hasEnoughResources = function (costs) {\n        var _this = this;\n        return costs.every(function (cost) { return _this.getResource(cost.type) >= cost.amount; });\n    };\n    ResourceSystem.prototype.spendResources = function (costs) {\n        var _this = this;\n        if (!this.hasEnoughResources(costs)) {\n            return false;\n        }\n        costs.forEach(function (cost) {\n            _this.removeResource(cost.type, cost.amount);\n        });\n        return true;\n    };\n    ResourceSystem.prototype.getResourcePercentage = function (type) {\n        var current = this.getResource(type);\n        var limit = this.getResourceLimit(type);\n        return (current / limit) * 100;\n    };\n    ResourceSystem.prototype.getAllResources = function () {\n        return Array.from(this.resources.entries()).map(function (_a) {\n            var type = _a[0], amount = _a[1];\n            return ({\n                type: type,\n                amount: amount\n            });\n        });\n    };\n    return ResourceSystem;\n}());\nexports.ResourceSystem = ResourceSystem;\n\n\n//# sourceURL=webpack://future_age_of_empires/./src/systems/ResourceSystem.ts?");

/***/ }),

/***/ "./src/systems/ResourceUI.ts":
/*!***********************************!*\
  !*** ./src/systems/ResourceUI.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ResourceUI = void 0;\nvar ResourceSystem_1 = __webpack_require__(/*! ./ResourceSystem */ \"./src/systems/ResourceSystem.ts\");\nvar ResourceUI = /** @class */ (function () {\n    function ResourceUI(scene, resourceSystem) {\n        this.scene = scene;\n        this.resourceSystem = resourceSystem;\n        this.resourceTexts = new Map();\n        this.resourceIcons = new Map();\n        this.createUI();\n    }\n    ResourceUI.prototype.createUI = function () {\n        var _this = this;\n        // Create resource display container\n        var padding = 10;\n        var iconSize = 32;\n        var startX = 10;\n        var startY = 10;\n        // Create resource displays\n        Object.values(ResourceSystem_1.ResourceType).forEach(function (type, index) {\n            var x = startX + (index * (iconSize + padding + 100));\n            var y = startY;\n            // Create icon using the sprite sheet frame\n            var icon = _this.scene.add.image(x, y, 'resource_icons', index);\n            icon.setScale(0.5);\n            _this.resourceIcons.set(type, icon);\n            // Create text display\n            var text = _this.scene.add.text(x + iconSize + 5, y, '', {\n                fontSize: '20px',\n                color: '#ffffff',\n                backgroundColor: '#000000',\n                padding: { x: 5, y: 2 }\n            });\n            _this.resourceTexts.set(type, text);\n            // Update initial values\n            _this.updateResourceDisplay(type);\n        });\n    };\n    ResourceUI.prototype.updateResourceDisplay = function (type) {\n        var text = this.resourceTexts.get(type);\n        if (text) {\n            var amount = this.resourceSystem.getResource(type);\n            var limit = this.resourceSystem.getResourceLimit(type);\n            text.setText(\"\".concat(type.toUpperCase(), \": \").concat(amount, \"/\").concat(limit));\n        }\n    };\n    ResourceUI.prototype.updateAllDisplays = function () {\n        var _this = this;\n        Object.values(ResourceSystem_1.ResourceType).forEach(function (type) {\n            _this.updateResourceDisplay(type);\n        });\n    };\n    ResourceUI.prototype.destroy = function () {\n        this.resourceTexts.forEach(function (text) { return text.destroy(); });\n        this.resourceIcons.forEach(function (icon) { return icon.destroy(); });\n        this.resourceTexts.clear();\n        this.resourceIcons.clear();\n    };\n    return ResourceUI;\n}());\nexports.ResourceUI = ResourceUI;\n\n\n//# sourceURL=webpack://future_age_of_empires/./src/systems/ResourceUI.ts?");

/***/ }),

/***/ "./src/systems/units/Unit.ts":
/*!***********************************!*\
  !*** ./src/systems/units/Unit.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Unit = exports.Direction = exports.UnitState = exports.UnitType = void 0;\nvar UnitType;\n(function (UnitType) {\n    UnitType[\"VILLAGER\"] = \"villager\";\n})(UnitType || (exports.UnitType = UnitType = {}));\nvar UnitState;\n(function (UnitState) {\n    UnitState[\"IDLE\"] = \"idle\";\n    UnitState[\"MOVING\"] = \"moving\";\n    UnitState[\"GATHERING\"] = \"gathering\";\n})(UnitState || (exports.UnitState = UnitState = {}));\nvar Direction;\n(function (Direction) {\n    Direction[Direction[\"SOUTH\"] = 0] = \"SOUTH\";\n    Direction[Direction[\"SOUTH_EAST\"] = 1] = \"SOUTH_EAST\";\n    Direction[Direction[\"EAST\"] = 2] = \"EAST\";\n    Direction[Direction[\"NORTH_EAST\"] = 3] = \"NORTH_EAST\";\n    Direction[Direction[\"NORTH\"] = 4] = \"NORTH\";\n    Direction[Direction[\"NORTH_WEST\"] = 5] = \"NORTH_WEST\";\n    Direction[Direction[\"WEST\"] = 6] = \"WEST\";\n    Direction[Direction[\"SOUTH_WEST\"] = 7] = \"SOUTH_WEST\";\n})(Direction || (exports.Direction = Direction = {}));\nvar Unit = /** @class */ (function () {\n    function Unit(scene, x, y, type, resourceSystem, id) {\n        this.scene = scene;\n        this.x = x;\n        this.y = y;\n        this.type = type;\n        this.state = UnitState.IDLE;\n        this.resourceSystem = resourceSystem;\n        this.stats = this.getBaseStats();\n        this.direction = Direction.SOUTH;\n        this.targetX = x;\n        this.targetY = y;\n        this.isMoving = false;\n        this.id = id;\n        this.createSprite();\n    }\n    Unit.prototype.createSprite = function () {\n        // Create sprite with the appropriate sprite sheet\n        this.sprite = this.scene.add.sprite(this.x, this.y, 'villager_sprites', this.direction);\n        this.sprite.setScale(0.5);\n    };\n    Unit.prototype.moveTo = function (x, y) {\n        this.targetX = x;\n        this.targetY = y;\n        this.isMoving = true;\n        this.state = UnitState.MOVING;\n        this.updateDirection();\n    };\n    Unit.prototype.updateDirection = function () {\n        var dx = this.targetX - this.x;\n        var dy = this.targetY - this.y;\n        var angle = Math.atan2(dy, dx);\n        // Convert angle to direction (0-7)\n        var direction = Math.round(angle / (Math.PI / 4));\n        if (direction < 0)\n            direction += 8;\n        this.direction = direction;\n        this.sprite.setFrame(direction);\n    };\n    Unit.prototype.update = function () {\n        if (this.isMoving) {\n            var dx = this.targetX - this.x;\n            var dy = this.targetY - this.y;\n            var distance = Math.sqrt(dx * dx + dy * dy);\n            if (distance < 1) {\n                this.x = this.targetX;\n                this.y = this.targetY;\n                this.isMoving = false;\n                this.state = UnitState.IDLE;\n            }\n            else {\n                var speed = this.stats.speed;\n                var moveX = (dx / distance) * speed;\n                var moveY = (dy / distance) * speed;\n                this.x += moveX;\n                this.y += moveY;\n                this.sprite.setPosition(this.x, this.y);\n            }\n        }\n    };\n    Unit.prototype.destroy = function () {\n        this.sprite.destroy();\n    };\n    Unit.prototype.getSprite = function () {\n        return this.sprite;\n    };\n    Unit.prototype.getId = function () {\n        return this.id;\n    };\n    Unit.prototype.getPosition = function () {\n        return { x: this.x, y: this.y };\n    };\n    return Unit;\n}());\nexports.Unit = Unit;\n\n\n//# sourceURL=webpack://future_age_of_empires/./src/systems/units/Unit.ts?");

/***/ }),

/***/ "./src/systems/units/UnitManager.ts":
/*!******************************************!*\
  !*** ./src/systems/units/UnitManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UnitManager = exports.UnitType = void 0;\nvar Unit_1 = __webpack_require__(/*! ./Unit */ \"./src/systems/units/Unit.ts\");\nvar Villager_1 = __webpack_require__(/*! ./Villager */ \"./src/systems/units/Villager.ts\");\nvar Unit_2 = __webpack_require__(/*! ./Unit */ \"./src/systems/units/Unit.ts\");\nObject.defineProperty(exports, \"UnitType\", ({ enumerable: true, get: function () { return Unit_2.UnitType; } }));\nvar UnitManager = /** @class */ (function () {\n    function UnitManager(scene, resourceSystem) {\n        this.scene = scene;\n        this.resourceSystem = resourceSystem;\n        this.units = new Map();\n    }\n    UnitManager.prototype.createUnit = function (type, x, y) {\n        var unit;\n        var id = this.generateUnitId();\n        switch (type) {\n            case Unit_1.UnitType.VILLAGER:\n                unit = new Villager_1.Villager(this.scene, x, y, this.resourceSystem, id);\n                break;\n            default:\n                throw new Error(\"Unknown unit type: \".concat(type));\n        }\n        this.units.set(id, unit);\n        return unit;\n    };\n    UnitManager.prototype.update = function (time) {\n        this.units.forEach(function (unit) {\n            unit.update();\n        });\n    };\n    UnitManager.prototype.getUnit = function (id) {\n        return this.units.get(id);\n    };\n    UnitManager.prototype.getAllUnits = function () {\n        return Array.from(this.units.values());\n    };\n    UnitManager.prototype.removeUnit = function (id) {\n        var unit = this.units.get(id);\n        if (unit) {\n            unit.destroy();\n            this.units.delete(id);\n        }\n    };\n    UnitManager.prototype.generateUnitId = function () {\n        return \"unit_\".concat(Date.now(), \"_\").concat(Math.random().toString(36).substr(2, 9));\n    };\n    return UnitManager;\n}());\nexports.UnitManager = UnitManager;\n\n\n//# sourceURL=webpack://future_age_of_empires/./src/systems/units/UnitManager.ts?");

/***/ }),

/***/ "./src/systems/units/Villager.ts":
/*!***************************************!*\
  !*** ./src/systems/units/Villager.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Villager = void 0;\nvar Unit_1 = __webpack_require__(/*! ./Unit */ \"./src/systems/units/Unit.ts\");\nvar ResourceSystem_1 = __webpack_require__(/*! ../ResourceSystem */ \"./src/systems/ResourceSystem.ts\");\nvar Villager = /** @class */ (function (_super) {\n    __extends(Villager, _super);\n    function Villager(scene, x, y, resourceSystem, id) {\n        var _this = _super.call(this, scene, x, y, Unit_1.UnitType.VILLAGER, resourceSystem, id) || this;\n        _this.gatheringStats = null;\n        _this.lastGatherTime = 0;\n        _this.GATHER_INTERVAL = 1000; // 1 second\n        return _this;\n    }\n    Villager.prototype.getBaseStats = function () {\n        return {\n            health: 25,\n            maxHealth: 25,\n            speed: 2,\n            attack: 1,\n            defense: 0\n        };\n    };\n    Villager.prototype.startGathering = function (resourceType) {\n        this.gatheringStats = {\n            type: resourceType,\n            rate: this.getGatherRate(resourceType),\n            carryCapacity: 10,\n            currentCarry: 0\n        };\n        this.state = Unit_1.UnitState.GATHERING;\n        this.lastGatherTime = this.scene.time.now;\n    };\n    Villager.prototype.stopGathering = function () {\n        this.gatheringStats = null;\n        this.state = Unit_1.UnitState.IDLE;\n    };\n    Villager.prototype.update = function () {\n        _super.prototype.update.call(this);\n        if (this.state === Unit_1.UnitState.GATHERING && this.gatheringStats) {\n            this.gatherResources(this.scene.time.now);\n        }\n    };\n    Villager.prototype.gatherResources = function (time) {\n        if (time - this.lastGatherTime >= this.GATHER_INTERVAL) {\n            var amount = this.gatherResource(this.gatheringStats.type);\n            this.gatheringStats.currentCarry += amount;\n            if (this.gatheringStats.currentCarry >= this.gatheringStats.carryCapacity) {\n                this.depositResources();\n            }\n            this.lastGatherTime = time;\n        }\n    };\n    Villager.prototype.gatherResource = function (type) {\n        // Different gather rates for different resources\n        switch (type) {\n            case ResourceSystem_1.ResourceType.FOOD:\n                return 0.5;\n            case ResourceSystem_1.ResourceType.WOOD:\n                return 0.5;\n            case ResourceSystem_1.ResourceType.GOLD:\n                return 0.3;\n            case ResourceSystem_1.ResourceType.STONE:\n                return 0.3;\n            default:\n                return 0;\n        }\n    };\n    Villager.prototype.depositResources = function () {\n        if (this.gatheringStats) {\n            this.resourceSystem.addResource(this.gatheringStats.type, this.gatheringStats.currentCarry);\n            this.gatheringStats.currentCarry = 0;\n        }\n    };\n    Villager.prototype.getGatheringStats = function () {\n        return this.gatheringStats ? __assign({}, this.gatheringStats) : null;\n    };\n    Villager.prototype.getGatherRate = function (resourceType) {\n        // Base gather rates for different resources\n        switch (resourceType) {\n            case ResourceSystem_1.ResourceType.FOOD:\n                return 0.5;\n            case ResourceSystem_1.ResourceType.WOOD:\n                return 0.5;\n            case ResourceSystem_1.ResourceType.GOLD:\n                return 0.3;\n            case ResourceSystem_1.ResourceType.STONE:\n                return 0.3;\n            default:\n                return 0;\n        }\n    };\n    return Villager;\n}(Unit_1.Unit));\nexports.Villager = Villager;\n\n\n//# sourceURL=webpack://future_age_of_empires/./src/systems/units/Villager.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b48490c7ae84e807bf7c")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "future_age_of_empires:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatefuture_age_of_empires"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfuture_age_of_empires"] = self["webpackChunkfuture_age_of_empires"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["defaultVendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_-864838","defaultVendors-node_modules_phaser_dist_phaser_js"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["defaultVendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_-864838","defaultVendors-node_modules_phaser_dist_phaser_js"], () => (__webpack_require__("./node_modules/webpack/hot/dev-server.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["defaultVendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_-864838","defaultVendors-node_modules_phaser_dist_phaser_js"], () => (__webpack_require__("./src/game.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;