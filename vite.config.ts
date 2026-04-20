import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { UserConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      open: true,
      headers: {
        'Cross-Origin-Opener-Policy': 'unsafe-none',
        'Cross-Origin-Embedder-Policy': 'unsafe-none',
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            store: ['zustand'],
          },
        },
      },
    },
    define: {
      __APP_VERSION__: JSON.stringify(env.npm_package_version),
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      globals: false,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'lcov', 'html'],
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          'src/test/**',
          'src/main.tsx',
          'src/vite-env.d.ts',
          'src/**/*.d.ts',
          'src/**/*.test.{ts,tsx}',
        ],
        thresholds: { lines: 80, functions: 80, branches: 70, statements: 80 },
      },
    } satisfies UserConfig['test'],
  };
});
