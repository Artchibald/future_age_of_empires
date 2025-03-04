import 'phaser';
import { ResourceSystem, ResourceType } from './systems/ResourceSystem';
import { ResourceUI } from './systems/ResourceUI';

export default class Demo extends Phaser.Scene {
    private resourceSystem!: ResourceSystem;
    private resourceUI!: ResourceUI;

    constructor() {
        super('demo');
    }

    preload() {
        // Load game assets here
        this.load.image('tiles', 'assets/tiles.png');
        this.load.image('units', 'assets/units.png');
        this.load.spritesheet('resource_icons', 'assets/resource_icons.png', { 
            frameWidth: 32, 
            frameHeight: 32 
        });
    }

    create() {
        // Initialize resource system
        this.resourceSystem = new ResourceSystem();
        
        // Create resource UI
        this.resourceUI = new ResourceUI(this, this.resourceSystem);
        
        // Add some test buttons to modify resources
        this.createTestButtons();
    }

    update() {
        // Update resource displays
        this.resourceUI.updateAllDisplays();
    }

    private createTestButtons(): void {
        const buttonStyle = {
            fontSize: '16px',
            backgroundColor: '#333',
            padding: { x: 10, y: 5 }
        };

        // Add Food button
        this.add.text(10, 100, 'Add Food', buttonStyle)
            .setInteractive()
            .on('pointerdown', () => {
                this.resourceSystem.addResource(ResourceType.FOOD, 50);
            });

        // Add Wood button
        this.add.text(120, 100, 'Add Wood', buttonStyle)
            .setInteractive()
            .on('pointerdown', () => {
                this.resourceSystem.addResource(ResourceType.WOOD, 50);
            });

        // Add Gold button
        this.add.text(230, 100, 'Add Gold', buttonStyle)
            .setInteractive()
            .on('pointerdown', () => {
                this.resourceSystem.addResource(ResourceType.GOLD, 25);
            });

        // Add Stone button
        this.add.text(340, 100, 'Add Stone', buttonStyle)
            .setInteractive()
            .on('pointerdown', () => {
                this.resourceSystem.addResource(ResourceType.STONE, 25);
            });
    }
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    scene: Demo,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config); 