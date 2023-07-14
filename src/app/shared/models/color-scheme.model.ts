export class ColorScheme {
    id: number;
    cssFileProperty: string;
    name: string;
    description: string;
    isActive: boolean;

    constructor(id: number, cssFileProperty: string, name: string, description: string, isActive: boolean) {
        this.id = id;
        this.cssFileProperty = cssFileProperty;
        this.name = name;
        this.description = description;
        this.isActive = isActive;
    }
}