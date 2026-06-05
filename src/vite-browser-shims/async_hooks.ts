// FILE: src/vite-browser-shims/async_hooks.ts
// PURPOSE: Provide a browser-compatible stub for Node's async_hooks API when bundling with Vite.
// CONNECTS TO: vite.config.ts via resolve.alias.

export class AsyncLocalStorage {
  constructor() {}

  run(store, fn) {
    return fn();
  }

  getStore() {
    return undefined;
  }
}
