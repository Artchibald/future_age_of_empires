import { Unit, UnitStats, UnitState, UnitType } from './Unit';
import { ResourceSystem, ResourceType } from '../ResourceSystem';

export interface GatheringStats {
    type: ResourceType;
    rate: number;
    carryCapacity: number;
    currentCarry: number;
}

export class Villager extends Unit {
    private gatheringStats: GatheringStats | null = null;
    private lastGatherTime: number = 0;
    private readonly GATHER_INTERVAL: number = 1000; // 1 second

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        resourceSystem: ResourceSystem,
        id: string
    ) {
        super(scene, x, y, UnitType.VILLAGER, resourceSystem, id);
    }

    protected getBaseStats(): UnitStats { 
        return {
            health: 25,
            maxHealth: 25,
            speed: 2,
            attack: 1,
            defense: 0
        };
    }

    public startGathering(resourceType: ResourceType): void {
        this.gatheringStats = {
            type: resourceType,
            rate: this.getGatherRate(resourceType),
            carryCapacity: 10,
            currentCarry: 0
        };
        this.state = UnitState.GATHERING;
        this.lastGatherTime = this.scene.time.now;
    }

    public stopGathering(): void {
        this.gatheringStats = null;
        this.state = UnitState.IDLE;
    }

    public override update(): void {
        super.update();
        
        if (this.state === UnitState.GATHERING && this.gatheringStats) {
            this.gatherResources(this.scene.time.now);
        }
    }

    private gatherResources(time: number): void {
        if (time - this.lastGatherTime >= this.GATHER_INTERVAL) {
            const amount = this.gatherResource(this.gatheringStats!.type);
            this.gatheringStats!.currentCarry += amount;

            if (this.gatheringStats!.currentCarry >= this.gatheringStats!.carryCapacity) {
                this.depositResources();
            }

            this.lastGatherTime = time;
        }
    }

    private gatherResource(type: ResourceType): number {
        // Different gather rates for different resources
        switch (type) {
            case ResourceType.FOOD:
                return 0.5;
            case ResourceType.WOOD:
                return 0.5;
            case ResourceType.GOLD:
                return 0.3;
            case ResourceType.STONE:
                return 0.3;
            default:
                return 0;
        }
    }

    private depositResources(): void {
        if (this.gatheringStats) {
            this.resourceSystem.addResource(
                this.gatheringStats.type,
                this.gatheringStats.currentCarry
            );
            this.gatheringStats.currentCarry = 0;
        }
    }

    public getGatheringStats(): GatheringStats | null {
        return this.gatheringStats ? { ...this.gatheringStats } : null;
    }

    private getGatherRate(resourceType: ResourceType): number {
        // Base gather rates for different resources
        switch (resourceType) {
            case ResourceType.FOOD:
                return 0.5;
            case ResourceType.WOOD:
                return 0.5;
            case ResourceType.GOLD:
                return 0.3;
            case ResourceType.STONE:
                return 0.3;
            default:
                return 0;
        }
    }
} 