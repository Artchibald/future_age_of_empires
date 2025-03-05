import 'phaser';
import { ResourceType } from './systems/ResourceSystem';
import { UnitType } from './systems/units/Unit';

export default class Demo extends Phaser.Scene {
    private resourceSystem: any;
    private resourceUI: any;
    private unitManager: any;
    private selectedUnit: string | null = null;
    private grassTile!: Phaser.GameObjects.TileSprite;

    constructor() {
        super('demo');
    }

    preload() {
        // Add load error callback first
        this.load.on('loaderror', (file: any) => {
            console.error('Error loading asset:', file.key);
            console.error('Failed URL:', file.url);
            // Try to continue even if assets fail to load
            this.initializeSystems();
        });

        // Load essential assets first
        try {
            this.load.image('grass_tile', 'assets/grass_tile.png');
            this.load.spritesheet('villager_sprites', 'assets/villager_sprites.png', {
                frameWidth: 32,
                frameHeight: 32
            });

            // Add load complete callback
            this.load.on('complete', () => {
                console.log('Essential assets loaded successfully');
                this.initializeSystems();
            });

            // Start loading
            this.load.start();
        } catch (error) {
            console.error('Error in preload:', error);
            // Try to continue even if preload fails
            this.initializeSystems();
        }
    }

    private async initializeSystems() {
        try {
            // Load systems dynamically
            const [ResourceSystem, ResourceUI, UnitManager] = await Promise.all([
                import('./systems/ResourceSystem').then(m => m.ResourceSystem),
                import('./systems/ResourceUI').then(m => m.ResourceUI),
                import('./systems/units/UnitManager').then(m => m.UnitManager)
            ]);

            // Initialize systems
            this.resourceSystem = new ResourceSystem();
            this.unitManager = new UnitManager(this, this.resourceSystem);
            this.resourceUI = new ResourceUI(this, this.resourceSystem);

            // Create UI elements
            this.createGrassBackground();
            this.createTestButtons();
            this.createUnitButton();

            // Add click handler for unit movement
            this.input.on('pointerdown', this.handleClick, this);
        } catch (error) {
            console.error('Error initializing systems:', error);
        }
    }

    create() {
        try {
            // Create grass background
            this.createGrassBackground();
        } catch (error) {
            console.error('Error in create:', error);
        }
    }

    private createGrassBackground() {
        try {
            if (this.textures.exists('grass_tile')) {
                this.grassTile = this.add.tileSprite(0, 0, this.cameras.main.width, this.cameras.main.height, 'grass_tile');
                this.grassTile.setOrigin(0, 0);
                this.grassTile.setDepth(-1);
            } else {
                console.warn('Grass tile texture not found, creating placeholder');
                // Create a placeholder rectangle if texture is missing
                const graphics = this.add.graphics();
                graphics.fillStyle(0x00ff00, 0.3);
                graphics.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
                graphics.setDepth(-1);
            }
        } catch (error) {
            console.error('Error creating grass background:', error);
        }
    }

    update(time: number) {
        if (this.resourceUI) {
            this.resourceUI.updateAllDisplays();
        }
        
        if (this.unitManager) {
            this.unitManager.update(time);
        }

        // Scroll grass background
        this.grassTile.tilePositionX += 0.1;
        this.grassTile.tilePositionY += 0.1;
    }

    private handleClick(pointer: Phaser.Input.Pointer): void {
        if (this.selectedUnit && this.unitManager) {
            const unit = this.unitManager.getUnit(this.selectedUnit);
            if (unit) {
                unit.moveTo(pointer.x, pointer.y);
            }
        }
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
                this.resourceSystem?.addResource(ResourceType.FOOD, 50);
            });

        // Add Wood button
        this.add.text(120, 100, 'Add Wood', buttonStyle)
            .setInteractive()
            .on('pointerdown', () => {
                this.resourceSystem?.addResource(ResourceType.WOOD, 50);
            });

        // Add Gold button
        this.add.text(230, 100, 'Add Gold', buttonStyle)
            .setInteractive()
            .on('pointerdown', () => {
                this.resourceSystem?.addResource(ResourceType.GOLD, 25);
            });

        // Add Stone button
        this.add.text(340, 100, 'Add Stone', buttonStyle)
            .setInteractive()
            .on('pointerdown', () => {
                this.resourceSystem?.addResource(ResourceType.STONE, 25);
            });
    }

    private createUnitButton(): void {
        const buttonStyle = {
            fontSize: '16px',
            backgroundColor: '#333',
            padding: { x: 10, y: 5 }
        };

        // Add Villager button
        this.add.text(10, 150, 'Create Villager', buttonStyle)
            .setInteractive()
            .on('pointerdown', () => {
                if (!this.unitManager) return;
                
                // Create villager at random position
                const x = Phaser.Math.Between(100, 500);
                const y = Phaser.Math.Between(100, 500);
                const unit = this.unitManager.createUnit(UnitType.VILLAGER, x, y);
                
                // Make the villager clickable
                unit.getSprite().setInteractive()
                    .on('pointerdown', () => {
                        this.selectedUnit = unit.getId();
                        console.log('Selected unit:', this.selectedUnit);
                    });
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