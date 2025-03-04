import { ResourceSystem, ResourceType } from './ResourceSystem';

export class ResourceUI {
    private scene: Phaser.Scene;
    private resourceSystem: ResourceSystem;
    private resourceTexts: Map<ResourceType, Phaser.GameObjects.Text>;
    private resourceIcons: Map<ResourceType, Phaser.GameObjects.Image>;

    constructor(scene: Phaser.Scene, resourceSystem: ResourceSystem) {
        this.scene = scene;
        this.resourceSystem = resourceSystem;
        this.resourceTexts = new Map();
        this.resourceIcons = new Map();
        
        this.createUI();
    }

    private createUI(): void {
        // Create resource display container
        const padding = 10;
        const iconSize = 32;
        const startX = 10;
        const startY = 10;

        // Create resource displays
        Object.values(ResourceType).forEach((type, index) => {
            const x = startX + (index * (iconSize + padding + 100));
            const y = startY;

            // Create icon using the sprite sheet frame
            const icon = this.scene.add.image(x, y, 'resource_icons', index);
            icon.setScale(0.5);
            this.resourceIcons.set(type, icon);

            // Create text display
            const text = this.scene.add.text(x + iconSize + 5, y, '', {
                fontSize: '20px',
                color: '#ffffff',
                backgroundColor: '#000000',
                padding: { x: 5, y: 2 }
            });
            this.resourceTexts.set(type, text);

            // Update initial values
            this.updateResourceDisplay(type);
        });
    }

    public updateResourceDisplay(type: ResourceType): void {
        const text = this.resourceTexts.get(type);
        if (text) {
            const amount = this.resourceSystem.getResource(type);
            const limit = this.resourceSystem.getResourceLimit(type);
            text.setText(`${type.toUpperCase()}: ${amount}/${limit}`);
        }
    }

    public updateAllDisplays(): void {
        Object.values(ResourceType).forEach(type => {
            this.updateResourceDisplay(type);
        });
    }

    public destroy(): void {
        this.resourceTexts.forEach(text => text.destroy());
        this.resourceIcons.forEach(icon => icon.destroy());
        this.resourceTexts.clear();
        this.resourceIcons.clear();
    }
} 