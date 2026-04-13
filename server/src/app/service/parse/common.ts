export function transformStringTo(prop: string[]): string {
    return JSON.stringify(prop);
}

export function transformStringFrom(prop: string): string[] {
    return JSON.parse(prop);
}

export function transformBooleanTo(prop: boolean): number {
    return +prop;
}

export function transformBooleanFrom(prop: number): boolean {
    return prop === 1;
}
