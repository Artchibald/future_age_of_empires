import { Unit, UnitType } from './Unit';
import { Villager } from './Villager';
import { ResourceSystem } from '../ResourceSystem';

export { UnitType } from './Unit';

export class UnitManager {
    private units: Map<string, Unit>;
    private scene: Phaser.Scene;
    private resourceSystem: ResourceSystem;

    constructor(scene: Phaser.Scene, resourceSystem: ResourceSystem) {
        this.scene = scene;
        this.resourceSystem = resourceSystem;
        this.units = new Map();
    }

    public createUnit(type: UnitType, x: number, y: number): Unit {
        let unit: Unit;
        const id = this.generateUnitId();

        switch (type) {
            case UnitType.VILLAGER:
                unit = new Villager(this.scene, x, y, this.resourceSystem, id);
                break;
            default:
                throw new Error(`Unknown unit type: ${type}`);
        }

        this.units.set(id, unit);
        return unit;
    }

    public update(time: number): void {
        this.units.forEach(unit => {
            unit.update();
        });
    }

    public getUnit(id: string): Unit | undefined {
        return this.units.get(id);
    }

    public getAllUnits(): Unit[] {
        return Array.from(this.units.values());
    }

    public removeUnit(id: string): void {
        const unit = this.units.get(id);
        if (unit) {
            unit.destroy();
            this.units.delete(id);
        }
    }

    private generateUnitId(): string {
        return `unit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
} 