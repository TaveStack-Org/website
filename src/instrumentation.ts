// This file runs before the Next.js server starts
// It polyfills localStorage for Node.js v25+ which has a broken localStorage implementation

// Check if we're in a server environment and localStorage exists but is broken
if (typeof globalThis !== 'undefined' && typeof window === 'undefined') {
    // Node.js v25+ has a localStorage that doesn't match the Web Storage API
    // We need to either fix it or remove it
    const storage = globalThis.localStorage;
    
    if (storage && typeof storage.getItem !== 'function') {
        // The localStorage exists but doesn't have the standard methods
        // Create a proper mock that matches the Web Storage API
        const memoryStorage: Record<string, string> = {};
        
        (globalThis as any).localStorage = {
            getItem: (key: string): string | null => {
                return memoryStorage[key] ?? null;
            },
            setItem: (key: string, value: string): void => {
                memoryStorage[key] = String(value);
            },
            removeItem: (key: string): void => {
                delete memoryStorage[key];
            },
            clear: (): void => {
                Object.keys(memoryStorage).forEach(key => delete memoryStorage[key]);
            },
            key: (index: number): string | null => {
                const keys = Object.keys(memoryStorage);
                return keys[index] ?? null;
            },
            get length(): number {
                return Object.keys(memoryStorage).length;
            }
        };
    }
}

export async function register() {
    // Instrumentation hook - this ensures the polyfill is loaded
}
