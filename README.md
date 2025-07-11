# Primo pretest merge type script project 
## Setup
```bash
git clone https://github.com/melisandregod/primo-pre-test-merge-project.git
cd primo-pre-test-merge-project
npm install
```

## Structure
```bash
merge-project/
├── src/
│   ├── merge.ts          # main function
│   └── index.ts
├── test/
│   └── merge.test.ts     # unit tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Build & Test
```bash
npm run build 
npm test
```
## Or
```bash
npx tsc
npx jest
```