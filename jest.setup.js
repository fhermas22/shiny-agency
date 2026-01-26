// Polyfills for Fetch/Response/Request (node-fetch@2.6.7)
const fetch = require('node-fetch');
Object.assign(global, {
    fetch,
    Request: fetch.Request,
    Response: fetch.Response,
    Headers: fetch.Headers,
});

// Polyfill for TextEncoder (util)
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock localStorage to avoid "SecurityError" errors
const localStorageMock = (function() {
    let store = {};
    return {
        getItem(key) {
            return store[key] || null;
        },
        setItem(key, value) {
            store[key] = String(value);
        },
        removeItem(key) {
            delete store[key];
        },
        clear() {
            store = {};
        }
    };
})();

// Assign mock to global JSDOM environement 
Object.defineProperty(global, 'localStorage', { value: localStorageMock });
Object.defineProperty(global.window, 'localStorage', { value: localStorageMock });