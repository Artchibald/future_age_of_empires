export enum ResourceType {
    FOOD = 'food',
    WOOD = 'wood',
    GOLD = 'gold',
    STONE = 'stone'
}

export interface ResourceAmount {
    type: ResourceType;
    amount: number;
}

export class ResourceSystem {
    private resources: Map<ResourceType, number>;
    private resourceLimits: Map<ResourceType, number>;

    constructor() {
        this.resources = new Map();
        this.resourceLimits = new Map();
        
        // Initialize starting resources 
        this.initializeResources();
    }

    private initializeResources(): void {
        // Set initial resource amounts
        this.setResource(ResourceType.FOOD, 200);
        this.setResource(ResourceType.WOOD, 200);
        this.setResource(ResourceType.GOLD, 100);
        this.setResource(ResourceType.STONE, 100);

        // Set initial resource limits
        this.setResourceLimit(ResourceType.FOOD, 1000);
        this.setResourceLimit(ResourceType.WOOD, 1000);
        this.setResourceLimit(ResourceType.GOLD, 1000);
        this.setResourceLimit(ResourceType.STONE, 1000);
    }

    public getResource(type: ResourceType): number {
        return this.resources.get(type) || 0;
    }

    public getResourceLimit(type: ResourceType): number {
        return this.resourceLimits.get(type) || 0;
    }

    public setResource(type: ResourceType, amount: number): void {
        const limit = this.getResourceLimit(type);
        this.resources.set(type, Math.min(amount, limit));
    }

    public setResourceLimit(type: ResourceType, limit: number): void {
        this.resourceLimits.set(type, limit);
        // Adjust current amount if it exceeds the new limit
        const currentAmount = this.getResource(type);
        if (currentAmount > limit) {
            this.setResource(type, limit);
        }
    }

    public addResource(type: ResourceType, amount: number): void {
        const currentAmount = this.getResource(type);
        const limit = this.getResourceLimit(type);
        const newAmount = Math.min(currentAmount + amount, limit);
        this.setResource(type, newAmount);
    }

    public removeResource(type: ResourceType, amount: number): boolean {
        const currentAmount = this.getResource(type);
        if (currentAmount >= amount) {
            this.setResource(type, currentAmount - amount);
            return true;
        }
        return false;
    }

    public hasEnoughResources(costs: ResourceAmount[]): boolean {
        return costs.every(cost => this.getResource(cost.type) >= cost.amount);
    }

    public spendResources(costs: ResourceAmount[]): boolean {
        if (!this.hasEnoughResources(costs)) {
            return false;
        }

        costs.forEach(cost => {
            this.removeResource(cost.type, cost.amount);
        });

        return true;
    }

    public getResourcePercentage(type: ResourceType): number {
        const current = this.getResource(type);
        const limit = this.getResourceLimit(type);
        return (current / limit) * 100;
    }

    public getAllResources(): ResourceAmount[] {
        return Array.from(this.resources.entries()).map(([type, amount]) => ({
            type,
            amount
        }));
    }
} 