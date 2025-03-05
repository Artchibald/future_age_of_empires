import { ResourceSystem, ResourceType } from '../ResourceSystem';

export enum UnitType {
    VILLAGER = 'villager'
}

export enum UnitState {
    IDLE = 'idle',
    MOVING = 'moving',
    GATHERING = 'gathering'
}

export enum Direction {
    SOUTH = 0,
    SOUTH_EAST = 1,
    EAST = 2,
    NORTH_EAST = 3,
    NORTH = 4,
    NORTH_WEST = 5,
    WEST = 6,
    SOUTH_WEST = 7
}

export interface UnitStats {
    health: number;
    maxHealth: number;
    speed: number;
    attack: number;
    defense: number;
}

export abstract class Unit {
    protected scene: Phaser.Scene;
    protected x: number;
    protected y: number;
    protected type: UnitType;
    protected state: UnitState;
    protected stats: UnitStats;
    protected sprite!: Phaser.GameObjects.Sprite;
    protected resourceSystem: ResourceSystem;
    protected direction: Direction;
    protected targetX: number;
    protected targetY: number;
    protected isMoving: boolean;
    protected id: string;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        type: UnitType,
        resourceSystem: ResourceSystem,
        id: string
    ) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.type = type;
        this.state = UnitState.IDLE;
        this.resourceSystem = resourceSystem;
        this.stats = this.getBaseStats();
        this.direction = Direction.SOUTH;
        this.targetX = x;
        this.targetY = y;
        this.isMoving = false;
        this.id = id;
        
        this.createSprite();
    }

    protected abstract getBaseStats(): UnitStats;

    protected createSprite(): void {
        // Create sprite with the appropriate sprite sheet
        this.sprite = this.scene.add.sprite(this.x, this.y, 'villager_sprites', this.direction);
        this.sprite.setScale(1.0);
    }

    public moveTo(x: number, y: number): void {
        this.targetX = x;
        this.targetY = y;
        this.isMoving = true;
        this.state = UnitState.MOVING;
        this.updateDirection();
    }

    private updateDirection(): void {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const angle = Math.atan2(dy, dx);
        
        // Convert angle to direction (0-7)
        let direction = Math.round(angle / (Math.PI / 4));
        if (direction < 0) direction += 8;
        
        this.direction = direction;
        this.sprite.setFrame(direction);
    }

    public update(): void {
        if (this.isMoving) {
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 1) {
                this.x = this.targetX;
                this.y = this.targetY;
                this.isMoving = false;
                this.state = UnitState.IDLE;
            } else {
                const speed = this.stats.speed;
                const moveX = (dx / distance) * speed;
                const moveY = (dy / distance) * speed;
                this.x += moveX;
                this.y += moveY;
                this.sprite.setPosition(this.x, this.y);
            }
        }
    }

    public destroy(): void {
        this.sprite.destroy();
    }

    public getSprite(): Phaser.GameObjects.Sprite {
        return this.sprite;
    }

    public getId(): string {
        return this.id;
    }

    public getPosition(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }
} 