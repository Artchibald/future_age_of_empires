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

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || (function () {\n    var ownKeys = function(o) {\n        ownKeys = Object.getOwnPropertyNames || function (o) {\n            var ar = [];\n            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;\n            return ar;\n        };\n        return ownKeys(o);\n    };\n    return function (mod) {\n        if (mod && mod.__esModule) return mod;\n        var result = {};\n        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== \"default\") __createBinding(result, mod, k[i]);\n        __setModuleDefault(result, mod);\n        return result;\n    };\n})();\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === \"function\" ? Iterator : Object).prototype);\n    return g.next = verb(0), g[\"throw\"] = verb(1), g[\"return\"] = verb(2), typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\nvar ResourceSystem_1 = __webpack_require__(/*! ./systems/ResourceSystem */ \"./src/systems/ResourceSystem.ts\");\nvar Unit_1 = __webpack_require__(/*! ./systems/units/Unit */ \"./src/systems/units/Unit.ts\");\nvar Demo = /** @class */ (function (_super) {\n    __extends(Demo, _super);\n    function Demo() {\n        var _this = _super.call(this, 'demo') || this;\n        _this.selectedUnit = null;\n        _this.grassTile = null;\n        return _this;\n    }\n    Demo.prototype.preload = function () {\n        var _this = this;\n        // Add load error callback first\n        this.load.on('loaderror', function (file) {\n            console.error('Error loading asset:', file.key);\n            console.error('Failed URL:', file.url);\n            // Try to continue even if assets fail to load\n            _this.initializeSystems();\n        });\n        // Load essential assets first\n        try {\n            // Determine the base URL based on the current environment\n            var isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';\n            var baseURL = isLocalhost ? '/' : '/projects/age_of_empires/';\n            // Use baseURL for all asset loading\n            this.load.setBaseURL(baseURL);\n            this.load.image('grass_tile', 'assets/grass_tile.png');\n            this.load.spritesheet('villager_sprites', 'assets/villager_sprites.png', {\n                frameWidth: 32,\n                frameHeight: 32\n            });\n            // Add load complete callback\n            this.load.on('complete', function () {\n                console.log('Essential assets loaded successfully');\n                _this.initializeSystems();\n            });\n            // Start loading\n            this.load.start();\n        }\n        catch (error) {\n            console.error('Error in preload:', error);\n            // Try to continue even if preload fails\n            this.initializeSystems();\n        }\n    };\n    Demo.prototype.initializeSystems = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a, ResourceSystem, ResourceUI, UnitManager, error_1;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _b.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, Promise.all([\n                                Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./systems/ResourceSystem */ \"./src/systems/ResourceSystem.ts\")); }).then(function (m) { return m.ResourceSystem; }),\n                                Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./systems/ResourceUI */ \"./src/systems/ResourceUI.ts\")); }).then(function (m) { return m.ResourceUI; }),\n                                Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./systems/units/UnitManager */ \"./src/systems/units/UnitManager.ts\")); }).then(function (m) { return m.UnitManager; })\n                            ])];\n                    case 1:\n                        _a = _b.sent(), ResourceSystem = _a[0], ResourceUI = _a[1], UnitManager = _a[2];\n                        // Initialize systems\n                        this.resourceSystem = new ResourceSystem();\n                        this.unitManager = new UnitManager(this, this.resourceSystem);\n                        this.resourceUI = new ResourceUI(this, this.resourceSystem);\n                        // Create UI elements\n                        this.createGrassBackground();\n                        this.createTestButtons();\n                        this.createUnitButton();\n                        // Add click handler for unit movement\n                        this.input.on('pointerdown', this.handleClick, this);\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_1 = _b.sent();\n                        console.error('Error initializing systems:', error_1);\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Demo.prototype.create = function () {\n        try {\n            // Create grass background\n            this.createGrassBackground();\n        }\n        catch (error) {\n            console.error('Error in create:', error);\n        }\n    };\n    Demo.prototype.createGrassBackground = function () {\n        try {\n            if (this.textures.exists('grass_tile')) {\n                this.grassTile = this.add.tileSprite(0, 0, this.cameras.main.width, this.cameras.main.height, 'grass_tile');\n                this.grassTile.setOrigin(0, 0);\n                this.grassTile.setDepth(-1);\n            }\n            else {\n                console.warn('Grass tile texture not found, creating placeholder');\n                // Create a placeholder rectangle if texture is missing\n                var graphics = this.add.graphics();\n                graphics.fillStyle(0x00ff00, 0.3);\n                graphics.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);\n                graphics.setDepth(-1);\n            }\n        }\n        catch (error) {\n            console.error('Error creating grass background:', error);\n        }\n    };\n    Demo.prototype.update = function (time) {\n        if (this.resourceUI) {\n            this.resourceUI.updateAllDisplays();\n        }\n        if (this.unitManager) {\n            this.unitManager.update(time);\n        }\n    };\n    Demo.prototype.handleClick = function (pointer) {\n        if (this.selectedUnit && this.unitManager) {\n            var unit = this.unitManager.getUnit(this.selectedUnit);\n            if (unit) {\n                unit.moveTo(pointer.x, pointer.y);\n            }\n        }\n    };\n    Demo.prototype.createTestButtons = function () {\n        var _this = this;\n        var buttonStyle = {\n            fontSize: '16px',\n            backgroundColor: '#333',\n            padding: { x: 10, y: 5 }\n        };\n        // Add Food button\n        this.add.text(10, 100, 'Add Food', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            var _a;\n            (_a = _this.resourceSystem) === null || _a === void 0 ? void 0 : _a.addResource(ResourceSystem_1.ResourceType.FOOD, 50);\n        });\n        // Add Wood button\n        this.add.text(120, 100, 'Add Wood', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            var _a;\n            (_a = _this.resourceSystem) === null || _a === void 0 ? void 0 : _a.addResource(ResourceSystem_1.ResourceType.WOOD, 50);\n        });\n        // Add Gold button\n        this.add.text(230, 100, 'Add Gold', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            var _a;\n            (_a = _this.resourceSystem) === null || _a === void 0 ? void 0 : _a.addResource(ResourceSystem_1.ResourceType.GOLD, 25);\n        });\n        // Add Stone button\n        this.add.text(340, 100, 'Add Stone', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            var _a;\n            (_a = _this.resourceSystem) === null || _a === void 0 ? void 0 : _a.addResource(ResourceSystem_1.ResourceType.STONE, 25);\n        });\n    };\n    Demo.prototype.createUnitButton = function () {\n        var _this = this;\n        var buttonStyle = {\n            fontSize: '16px',\n            backgroundColor: '#333',\n            padding: { x: 10, y: 5 }\n        };\n        // Add Villager button\n        this.add.text(10, 150, 'Create Villager', buttonStyle)\n            .setInteractive()\n            .on('pointerdown', function () {\n            if (!_this.unitManager)\n                return;\n            // Create villager at random position\n            var x = Phaser.Math.Between(100, 500);\n            var y = Phaser.Math.Between(100, 500);\n            var unit = _this.unitManager.createUnit(Unit_1.UnitType.VILLAGER, x, y);\n            // Make the villager clickable\n            unit.getSprite().setInteractive()\n                .on('pointerdown', function () {\n                _this.selectedUnit = unit.getId();\n                console.log('Selected unit:', _this.selectedUnit);\n            });\n        });\n    };\n    return Demo;\n}(Phaser.Scene));\nexports[\"default\"] = Demo;\nvar config = {\n    type: Phaser.AUTO,\n    width: 1280,\n    height: 720,\n    backgroundColor: '#000000',\n    scene: Demo,\n    physics: {\n        default: 'arcade',\n        arcade: {\n            gravity: { x: 0, y: 0 },\n            debug: false\n        }\n    }\n};\nvar game = new Phaser.Game(config);\n\n\n//# sourceURL=webpack://future_age_of_empires/./src/game.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf3169ba05bfefb8b1e5")
/******/ })();
/******/ 
/******/ }
);