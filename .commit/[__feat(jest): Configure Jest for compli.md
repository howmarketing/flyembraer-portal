[__feat(jest): Configure Jest for compliance with testing patterns__]

# Configure Jest for compliance with testing patterns

- [x] **--_Renamed:_**
  - [x] - __**`jest.config.js`**__ to **`_jest.config.js`**;
- [x] **--_Added_**:
  - [x] - **`_jest.config.js`**;
  - [x] **--_MarkDown_** Versioning explains: **`jest.config.ts`.md`**;
- [x] **--_Modified_**:
  - [x] - `package.json`;
  - [x] - `tsconfig.json`;
  - [x] - `yarn.lock`;


## Dependencies added

- [x] - `@types/jest`[@^29.5.2](%2Fen%2F@types/jest@^29.5.2%2Ftransfer%3Ftarget%3DTERMINAL)
- [x] - `identity-obj-prox`[@^3.0.0](%2Fen%2Fidentity-obj-proxy@^3.0.0%2Ftransfer%3Ftarget%3DTERMINAL)
- [x] - `jest`[@^29.5.0](%2Fen%2Fjest@^29.5.0%2Ftransfer%3Ftarget%3DTERMINAL)
- [x] - `react-test-renderer`[@^18.2.0](%2Fen%2Freact-test-renderer@^18.2.0%2Ftransfer%3Ftarget%3DTERMINAL)
- [x] - `ts-jest`[@^29.1.0](%2Fen%2Fts-jest@^29.1.0%2Ftransfer%3Ftarget%3DTERMINAL)

> This commit sets up the Jest configuration to comply with testing patterns. The previous jest.config.js file was renamed to _jest.config.js, and new Jest configuration files were added. Additionally, package.json, tsconfig.json, and yarn.lock were modified.

- Note: This commit also includes other changes related to the OpenAPI interfaces compliance, development typescript consensus, and OOP models.

### //TODO:
- [ ] **--_Add_**: `jest` pattern path **`__test__` to each component path;
- [ ] **--_Implement_**: usages for components on **`__test__`**;
- [ ] **--_Coverage_**: Ensure `jest` Coverage compliance with **`sonar-cube`** pipelines for components **Unit Tests**;


---

## Approver’s
@Yuri Almeida Rodrigues, @Omar Alexandro, @Alan Gabriel, @Ricardo Gomes, @Ronaldo Lopes

````md
git commit -m "feat(jest): Configure Jest for compliance with testing patterns

# Configure Jest for compliance with testing patterns

- [x] **--_Renamed:_**
  - [x] - __**`jest.config.js`**__ to **`_jest.config.js`**;
- [x] **--_Added_**:
  - [x] - **`_jest.config.js`**;
  - [x] **--_MarkDown_** Versioning explains: **`jest.config.ts`.md`**;
- [x] **--_Modified_**:
  - [x] - `package.json`;
  - [x] - `tsconfig.json`;
  - [x] - `yarn.lock`;

## Dependencies added

- [x] - `@types/jest`[@^29.5.2](%2Fen%2F@types/jest@^29.5.2%2Ftransfer%3Ftarget%3DTERMINAL)
- [x] - `identity-obj-prox`[@^3.0.0](%2Fen%2Fidentity-obj-proxy@^3.0.0%2Ftransfer%3Ftarget%3DTERMINAL)
- [x] - `jest`[@^29.5.0](%2Fen%2Fjest@^29.5.0%2Ftransfer%3Ftarget%3DTERMINAL)
- [x] - `react-test-renderer`[@^18.2.0](%2Fen%2Freact-test-renderer@^18.2.0%2Ftransfer%3Ftarget%3DTERMINAL)
- [x] - `ts-jest`[@^29.1.0](%2Fen%2Fts-jest@^29.1.0%2Ftransfer%3Ftarget%3DTERMINAL)

> This commit sets up the Jest configuration to comply with testing patterns. The previous jest.config.js file was renamed to _jest.config.js, and new Jest configuration files were added. Additionally, package.json, tsconfig.json, and yarn.lock were modified.

- Note: This commit also includes other changes related to the OpenAPI interfaces compliance, development typescript consensus, and OOP models.

TODO:
- [ ] **--_Add_**: `jest` pattern path **`__test__` to each component path;
- [ ] **--_Implement_**: usages for components on **`__test__`**;
- [ ] **--_Coverage_**: Ensure `jest` Coverage compliance with **`sonar-cube`** pipelines for components **Unit Tests**;
"

````