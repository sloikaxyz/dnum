import { fileURLToPath, URL } from "node:url";

export const packages = [
  {
    name: '@sloikaxyz/dnum',
    packageDir: '.',
  },
]

export const branchConfigs = {
  main: {
    prerelease: false,
  },
  develop: {
    prerelease: true,
  },
  "chore/build-jest-compatibility": {
    prerelease: true,
  },
}

export const rootDir = fileURLToPath(new URL('.', import.meta.url))