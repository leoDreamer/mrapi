# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0-alpha.0](https://github.com/mrapi-js/mrapi/compare/v1.1.1...v2.0.0-alpha.0) (2020-10-13)


### ⚠ BREAKING CHANGES

* Many changes are not compatible with the old version

### Features

* add config validation; refactor multi-tenant logic ([1ea3693](https://github.com/mrapi-js/mrapi/commit/1ea3693891ec3a84f1d1a3384fcce1f31d475d04))
* eat: add config validation; refactor multi-tenant logic ([810c807](https://github.com/mrapi-js/mrapi/commit/810c8076a7feaf08667fae43b4b9cbebf32643a7))


### Bug Fixes

* **dal:** prisma migrate & generate ([c01195c](https://github.com/mrapi-js/mrapi/commit/c01195ce1483cdf7012482fe61c7de8dded78def))
* fix management path error ([387b088](https://github.com/mrapi-js/mrapi/commit/387b088f94427bfacfaa8a7db11abbad0b5b90ea))


### Code Refactoring

* add @mrapi/db package ([32e164f](https://github.com/mrapi-js/mrapi/commit/32e164fab1ce0e376c5d889cbdf01472c6add3f8))

### [1.1.1](https://github.com/mrapi-js/mrapi/compare/v1.1.0...v1.1.1) (2020-10-01)


### Bug Fixes

* fix gConfig.transforms bug ([a2681fe](https://github.com/mrapi-js/mrapi/commit/a2681fe577de7f5b63df40149b89e17b06d6e67b))

## [1.1.0](https://github.com/mrapi-js/mrapi/compare/v1.0.3...v1.1.0) (2020-10-01)


### Features

* api sources add transforms ([ae84ccc](https://github.com/mrapi-js/mrapi/commit/ae84ccc37da379b82ab3c2b260be1aa65497640e))

### [1.0.3](https://github.com/mrapi-js/mrapi/compare/v1.0.2...v1.0.3) (2020-09-23)


### Bug Fixes

* add @types/glob and delete os ([32aa804](https://github.com/mrapi-js/mrapi/commit/32aa804f4532f0fd8601c079ace76e9e8c248c8d))
* fix Windows bug ([f28d954](https://github.com/mrapi-js/mrapi/commit/f28d95446ad38fa412b2423eca41bb6427f57208)), closes [#48](https://github.com/mrapi-js/mrapi/issues/48)
* **cli and common:** Fix the compatity with windows ([297f740](https://github.com/mrapi-js/mrapi/commit/297f7409fa010446866a70bd36e3f0b829d1c15d))

### [1.0.2](https://github.com/mrapi-js/mrapi/compare/v1.0.0-beta.6...v1.0.2) (2020-09-22)


### Features

* add graphql mesh openapi ([022a4d6](https://github.com/mrapi-js/mrapi/commit/022a4d6901630ea3cb47fdbd34bda74c85a10924))
* merge origin ([bc56a9b](https://github.com/mrapi-js/mrapi/commit/bc56a9b6e11e5b69b289e42f9c5205b42b91544b))


### Bug Fixes

* @mrapi/api lack dependencies after build ([ea7f350](https://github.com/mrapi-js/mrapi/commit/ea7f35078d56cd701f58a6c0493f742426e22cbb))
* fix rm -rf in windows ([d9bdf81](https://github.com/mrapi-js/mrapi/commit/d9bdf81583519e90b8a699fe7051fa196e4447ba))
* fix rm -rf Windows ([3503b4a](https://github.com/mrapi-js/mrapi/commit/3503b4a3e3838af2945d5bf161441a0520f93c4f))
* **cli generate:** Modify throw errors' condition during prisma schema generating. ([e1959b3](https://github.com/mrapi-js/mrapi/commit/e1959b365b13bc48be416fdb7e788b57e96f59ba))
* lock packages version ([93cc540](https://github.com/mrapi-js/mrapi/commit/93cc540948113412d2a1d6ad5e21b655a6091cff))

## [1.0.0](https://github.com/mrapi-js/mrapi/compare/v1.0.0-beta.6...v1.0.0) (2020-09-20)


### Features

* add graphql mesh openapi ([022a4d6](https://github.com/mrapi-js/mrapi/commit/022a4d6901630ea3cb47fdbd34bda74c85a10924))
* merge origin ([bc56a9b](https://github.com/mrapi-js/mrapi/commit/bc56a9b6e11e5b69b289e42f9c5205b42b91544b))


### Bug Fixes

* lock packages version ([93cc540](https://github.com/mrapi-js/mrapi/commit/93cc540948113412d2a1d6ad5e21b655a6091cff))

## [1.0.0-beta.6](https://github.com/mrapi-js/mrapi/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2020-09-18)


### Features

* nexus add graphql-scalars to scalarType "DateTime" and "JSON" ([0aef129](https://github.com/mrapi-js/mrapi/commit/0aef1292a66867409eef21d76e69d4c227cee373))
* nexus add Json ([bc91f83](https://github.com/mrapi-js/mrapi/commit/bc91f83d4a699c80582095e1694ff01b3e92ded9))
* support nexus generate Json field ([f0ce9f2](https://github.com/mrapi-js/mrapi/commit/f0ce9f258dae92d2e1f4bf04b46d6267639aed83))


### Bug Fixes

* **cli:** fix schema auto generate ([084720a](https://github.com/mrapi-js/mrapi/commit/084720a0e6e329047d57ad84dba0391a4346dc56))
* **cli:** prisma schema生成时根据原schema内容判断datasource provider的种类 ([32b42c1](https://github.com/mrapi-js/mrapi/commit/32b42c1ed58499d084b8d1271ab13493034bcf2a))
* **cli generate:** provider generate ([79d53ef](https://github.com/mrapi-js/mrapi/commit/79d53efae0b2b113c275fd39ada3483fc9f91e33)), closes [#40](https://github.com/mrapi-js/mrapi/issues/40)
* **cli generate:** take datasource provider from schema file ([c72c3b5](https://github.com/mrapi-js/mrapi/commit/c72c3b5a51a0e7b3cd96ec1bfcbd9089d4a61e4c))

## [1.0.0-beta.5](https://github.com/mrapi-js/mrapi/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2020-09-15)

## [1.0.0-beta.4](https://github.com/mrapi-js/mrapi/compare/v1.0.0...v1.0.0-beta.4) (2020-09-15)


### Features

* **update oas:** prisma 2.6.x update -> oas users.js GET  params.where ([c207373](https://github.com/mrapi-js/mrapi/commit/c2073733bf203baa564708d4008346ca0fbdf8f4))
* add "contributors" ([244b642](https://github.com/mrapi-js/mrapi/commit/244b6424d60448440077a57ffeaec8d69d5984d3))
* getConfig path -> process.env.MRAPICONFIG_PATH ([323f607](https://github.com/mrapi-js/mrapi/commit/323f607999fd4df5966e459b1ac48fd8080eb363))
* prisma transactionApi ([e38c458](https://github.com/mrapi-js/mrapi/commit/e38c4583f2620001c852d8af49fedb8a458b8492))
* update pkg version ([6993517](https://github.com/mrapi-js/mrapi/commit/6993517f3300839b95a914b10a09facd4ae1e30d))


### Bug Fixes

* cli params bug ([76439ab](https://github.com/mrapi-js/mrapi/commit/76439ab6b93dd3708503b78fd211bda9764e78d1))
* default wrong character ([d0cbf84](https://github.com/mrapi-js/mrapi/commit/d0cbf849e354fdc9a1bf688a4c057f697d642cbb))
* fix dal type.d.ts ([493371d](https://github.com/mrapi-js/mrapi/commit/493371db5e6f302f374b91f231703a0329599236))
* update generate ignore ([19e43ae](https://github.com/mrapi-js/mrapi/commit/19e43ae1b78f11c0bc81824371932749ce426f3d))

<a name="1.0.0-beta.2"></a>
# 1.0.0-beta.2 (2020-09-08)


### Bug Fixes

* default wrong character ([d0cbf84](https://github.com/mrapi-js/mrapi/commit/d0cbf84))


### Features

* getConfig path -> process.env.MRAPICONFIG_PATH ([323f607](https://github.com/mrapi-js/mrapi/commit/323f607))



<a name="1.0.0-beta.1"></a>
# 1.0.0-beta.1 (2020-09-07)



<a name="1.0.0-beta.0"></a>
# 1.0.0-beta.0 (2020-09-07)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/mrapi-js/mrapi/compare/v0.9.0...v1.0.0) (2020-09-07)



<a name="0.9.0"></a>
# [0.9.0](https://github.com/mrapi-js/mrapi/compare/v0.8.2...v0.9.0) (2020-09-07)


### Bug Fixes

* cli nexus generator bugs ([5e86f77](https://github.com/mrapi-js/mrapi/commit/5e86f77))
* dal hasSchema ([873601b](https://github.com/mrapi-js/mrapi/commit/873601b))
* dal restart server port and host... ([01bbd20](https://github.com/mrapi-js/mrapi/commit/01bbd20))
* dal server start bugs ([62fbe49](https://github.com/mrapi-js/mrapi/commit/62fbe49))
* update nexus generater to close bug. (no more fields) ([34a0c7d](https://github.com/mrapi-js/mrapi/commit/34a0c7d))


### Features

* [@mrapi](https://github.com/mrapi)/api combined with dal ([5353695](https://github.com/mrapi-js/mrapi/commit/5353695))
* [@mrapi](https://github.com/mrapi)/api combined with dal ([40478e8](https://github.com/mrapi-js/mrapi/commit/40478e8))
* [@mrapi](https://github.com/mrapi)/api custom openapi inject prisma ([bf9e498](https://github.com/mrapi-js/mrapi/commit/bf9e498))
* [@mrapi](https://github.com/mrapi)/api logger and proxy to dal ([a8de12e](https://github.com/mrapi-js/mrapi/commit/a8de12e))
* [@mrapi](https://github.com/mrapi)/api standalone graphql mesh ([5137a2a](https://github.com/mrapi-js/mrapi/commit/5137a2a))
* [@mrapi](https://github.com/mrapi)/api standalone openapi ([907dc46](https://github.com/mrapi-js/mrapi/commit/907dc46))
* add cli gen options -cnt ([c2da466](https://github.com/mrapi-js/mrapi/commit/c2da466))
* add cnt | update dal ([1934102](https://github.com/mrapi-js/mrapi/commit/1934102))
* add enableRepeatRoute config to dal ([c0a4a8b](https://github.com/mrapi-js/mrapi/commit/c0a4a8b))
* add generate cli ([5078323](https://github.com/mrapi-js/mrapi/commit/5078323))
* add getPrisma ([e5197fb](https://github.com/mrapi-js/mrapi/commit/e5197fb))
* add husky ([025e946](https://github.com/mrapi-js/mrapi/commit/025e946))
* add include select to nexus-generator ([1e71e27](https://github.com/mrapi-js/mrapi/commit/1e71e27))
* add openAPI - findMany ([b2a2b6c](https://github.com/mrapi-js/mrapi/commit/b2a2b6c))
* cli add only generate manage | add oas package to build openAPI ([8cc8a0a](https://github.com/mrapi-js/mrapi/commit/8cc8a0a))
* cli generate schema.prisma | remove PRISMA_CLIENT_OUTPUT ([d237763](https://github.com/mrapi-js/mrapi/commit/d237763))
* cli init | add cli generate ([5e710ad](https://github.com/mrapi-js/mrapi/commit/5e710ad))
* common.config add dal.pmtErrorThrow ([b5e6d46](https://github.com/mrapi-js/mrapi/commit/b5e6d46))
* dal add generate apiDoc ([14a5aca](https://github.com/mrapi-js/mrapi/commit/14a5aca))
* dal fix ([536b9d2](https://github.com/mrapi-js/mrapi/commit/536b9d2))
* dal openAPI update | add swagger doc ([8a3ba18](https://github.com/mrapi-js/mrapi/commit/8a3ba18))
* dal server 细节优化 ([eb5b530](https://github.com/mrapi-js/mrapi/commit/eb5b530))
* dal update ([770cd68](https://github.com/mrapi-js/mrapi/commit/770cd68))
* dal update openAPI ([ad0bff7](https://github.com/mrapi-js/mrapi/commit/ad0bff7))
* dal update server / pmt ([fa46126](https://github.com/mrapi-js/mrapi/commit/fa46126))
* dal 逻辑修复 ([8d3ef91](https://github.com/mrapi-js/mrapi/commit/8d3ef91))
* Default tenant | remove config require managementUrl ([36c20bf](https://github.com/mrapi-js/mrapi/commit/36c20bf))
* delete code ([0d6b635](https://github.com/mrapi-js/mrapi/commit/0d6b635))
* fix dal prismaManage bugs ([b456c5c](https://github.com/mrapi-js/mrapi/commit/b456c5c))
* fixbug dal-defaultTenant get undefined ([7ad2289](https://github.com/mrapi-js/mrapi/commit/7ad2289))
* init openAPI ([e707bf4](https://github.com/mrapi-js/mrapi/commit/e707bf4))
* merge origin/dev ([6c58f20](https://github.com/mrapi-js/mrapi/commit/6c58f20))
* mpt init ([a242ff8](https://github.com/mrapi-js/mrapi/commit/a242ff8))
* nexus-prisma demo init ([6eb3892](https://github.com/mrapi-js/mrapi/commit/6eb3892))
* nexus-prisma demo test ([e5be294](https://github.com/mrapi-js/mrapi/commit/e5be294))
* oas add "include" and "select" ([ddc6d56](https://github.com/mrapi-js/mrapi/commit/ddc6d56))
* oas getFieldType update ([90c8358](https://github.com/mrapi-js/mrapi/commit/90c8358))
* oas update ([dcf7f69](https://github.com/mrapi-js/mrapi/commit/dcf7f69))
* oas update ([97caba2](https://github.com/mrapi-js/mrapi/commit/97caba2))
* openapi generate test ([c5cf90a](https://github.com/mrapi-js/mrapi/commit/c5cf90a))
* paj crud ([9d601e1](https://github.com/mrapi-js/mrapi/commit/9d601e1))
* pmt update ([fea63bc](https://github.com/mrapi-js/mrapi/commit/fea63bc))
* pull origin dov-1 / 新增部署访问文档 ([3b613de](https://github.com/mrapi-js/mrapi/commit/3b613de))
* remove .env file | update pmt management env ([0e0c8a9](https://github.com/mrapi-js/mrapi/commit/0e0c8a9))
* replace graphql address ([c826640](https://github.com/mrapi-js/mrapi/commit/c826640))
* tsconfig update ([089fe1b](https://github.com/mrapi-js/mrapi/commit/089fe1b))
* tsconfig 调整 ([b7e3428](https://github.com/mrapi-js/mrapi/commit/b7e3428))
* update ([ba45920](https://github.com/mrapi-js/mrapi/commit/ba45920))
* update ([9d580ca](https://github.com/mrapi-js/mrapi/commit/9d580ca))
* update ([fe53192](https://github.com/mrapi-js/mrapi/commit/fe53192))
* update ([dae8254](https://github.com/mrapi-js/mrapi/commit/dae8254))
* update ([e1459be](https://github.com/mrapi-js/mrapi/commit/e1459be))
* update ([28bc102](https://github.com/mrapi-js/mrapi/commit/28bc102))
* update [@marpi](https://github.com/marpi)/api dependencies version ([166fe3c](https://github.com/mrapi-js/mrapi/commit/166fe3c))
* update annotation ([b7d4350](https://github.com/mrapi-js/mrapi/commit/b7d4350))
* update cli generate cnt ([0b5bebe](https://github.com/mrapi-js/mrapi/commit/0b5bebe))
* update cnt -> pal ([4d1f051](https://github.com/mrapi-js/mrapi/commit/4d1f051))
* update cnt -> pal ([6198a6b](https://github.com/mrapi-js/mrapi/commit/6198a6b))
* update cnt -> pal ([15aa885](https://github.com/mrapi-js/mrapi/commit/15aa885))
* update config ([328c1a6](https://github.com/mrapi-js/mrapi/commit/328c1a6))
* update dal options | add cli generate ([033d440](https://github.com/mrapi-js/mrapi/commit/033d440))
* update dal pmt | add types.ts | server remove pmt manage ([96f09dc](https://github.com/mrapi-js/mrapi/commit/96f09dc))
* update dal server | openAPI add findMany ([4e38884](https://github.com/mrapi-js/mrapi/commit/4e38884))
* update getPrisma fn | add getSchema fn ([71a84ed](https://github.com/mrapi-js/mrapi/commit/71a84ed))
* update nexus ([ea63aab](https://github.com/mrapi-js/mrapi/commit/ea63aab))
* update oas ([f34c2f6](https://github.com/mrapi-js/mrapi/commit/f34c2f6))
* update oas ([8457ba6](https://github.com/mrapi-js/mrapi/commit/8457ba6))
* update oas findMany ([fff2bf5](https://github.com/mrapi-js/mrapi/commit/fff2bf5))
* update oas generator | update dal oas ([d7b050d](https://github.com/mrapi-js/mrapi/commit/d7b050d))
* update packages version ([e7ecaba](https://github.com/mrapi-js/mrapi/commit/e7ecaba))
* update pkg version | update publish script ([f364500](https://github.com/mrapi-js/mrapi/commit/f364500))
* update version ([1545a26](https://github.com/mrapi-js/mrapi/commit/1545a26))
* update version: ts -> 4.x | cnt -> 1.2.6 ([0aa3263](https://github.com/mrapi-js/mrapi/commit/0aa3263))
* WIP ([19753f4](https://github.com/mrapi-js/mrapi/commit/19753f4))
* 依赖关系调整 ([701b25b](https://github.com/mrapi-js/mrapi/commit/701b25b))
* 依赖项更新 ([4e93fc2](https://github.com/mrapi-js/mrapi/commit/4e93fc2))
* 修复 lint 校验 ([d4685c5](https://github.com/mrapi-js/mrapi/commit/d4685c5))
* 修改example，添加config中文文档，增加部分[@mrapi](https://github.com/mrapi)/api配置 ([e84601a](https://github.com/mrapi-js/mrapi/commit/e84601a))
* 修改配置参数, outputsDir -> prismaClientDir ([2c5eac8](https://github.com/mrapi-js/mrapi/commit/2c5eac8))
* 冗余代码删除 ([959c8bd](https://github.com/mrapi-js/mrapi/commit/959c8bd))
* 新增 dal 服务管理逻辑 / 修复深拷贝问题 / 更新 dal-demo ([6c2b143](https://github.com/mrapi-js/mrapi/commit/6c2b143))
* 新增 dal-basic README.md ([93f62c1](https://github.com/mrapi-js/mrapi/commit/93f62c1))
* 解决 pmt 自定义目录生成 schema 问题 / 新增 nexus 自定义目录生成代码 ([82f161c](https://github.com/mrapi-js/mrapi/commit/82f161c))
* **fix-mr:** pull origin fix merge request ([3621f5c](https://github.com/mrapi-js/mrapi/commit/3621f5c))



<a name="0.8.2"></a>
## [0.8.2](https://github.com/mrapi-js/mrapi/compare/v0.8.1...v0.8.2) (2020-07-15)


### Bug Fixes

* **create-mrapi-app:** close Error: Cannot find module 'tslib' ([1312696](https://github.com/mrapi-js/mrapi/commit/1312696)), closes [#1](https://github.com/mrapi-js/mrapi/issues/1)



<a name="0.8.1"></a>
## [0.8.1](https://github.com/mrapi-js/mrapi/compare/v0.8.0...v0.8.1) (2020-07-09)


### Bug Fixes

* **create-mrapi-app:** dynamic update template deps version ([7fb7b6e](https://github.com/mrapi-js/mrapi/commit/7fb7b6e))



<a name="0.8.0"></a>
# [0.8.0](https://github.com/mrapi-js/mrapi/compare/v0.7.5...v0.8.0) (2020-07-09)


### Features

* support prisma v2.2.0 ([76e8d97](https://github.com/mrapi-js/mrapi/commit/76e8d97))



<a name="0.7.5"></a>
## [0.7.5](https://github.com/mrapi-js/mrapi/compare/v0.7.4...v0.7.5) (2020-07-05)



<a name="0.7.4"></a>
## [0.7.4](https://github.com/mrapi-js/mrapi/compare/v0.7.3...v0.7.4) (2020-07-05)



<a name="0.7.3"></a>
## [0.7.3](https://github.com/mrapi-js/mrapi/compare/v0.7.2...v0.7.3) (2020-07-05)



<a name="0.7.2"></a>
## [0.7.2](https://github.com/mrapi-js/mrapi/compare/v0.7.1...v0.7.2) (2020-07-05)



<a name="0.7.1"></a>
## [0.7.1](https://github.com/mrapi-js/mrapi/compare/v0.7.0...v0.7.1) (2020-07-05)



<a name="0.7.0"></a>
# 0.7.0 (2020-07-05)


### Bug Fixes

* **core:** 'id' lack error ([102acdb](https://github.com/mrapi-js/mrapi/commit/102acdb))
* add root package.json name ([fab28d3](https://github.com/mrapi-js/mrapi/commit/fab28d3))
* add root package.json version ([2cf5cf3](https://github.com/mrapi-js/mrapi/commit/2cf5cf3))
* multi-tenant bugs ([83e152c](https://github.com/mrapi-js/mrapi/commit/83e152c))
* set app packages private ([a78eca0](https://github.com/mrapi-js/mrapi/commit/a78eca0))
* **core:** [WIP] swagger docs ([59f536b](https://github.com/mrapi-js/mrapi/commit/59f536b))
* **core:** expose error details ([1edd99b](https://github.com/mrapi-js/mrapi/commit/1edd99b))
* **core:** Option destructuring error ([0f67973](https://github.com/mrapi-js/mrapi/commit/0f67973))
* **core:** prisma query arguments 'skip','first','last' must be a positive integer ([33f4e88](https://github.com/mrapi-js/mrapi/commit/33f4e88))
* **core:** query params validate for openapi ([fc7b64a](https://github.com/mrapi-js/mrapi/commit/fc7b64a))
* **core:** remove auth hook ([ce9a18c](https://github.com/mrapi-js/mrapi/commit/ce9a18c))
* **core:** support __typename in apollo-client ([097beb6](https://github.com/mrapi-js/mrapi/commit/097beb6))
* **core:** this.app.oas is not a function ([9e9e5e7](https://github.com/mrapi-js/mrapi/commit/9e9e5e7))
* **prisma:** command 'generate' hangs ([0ba9d31](https://github.com/mrapi-js/mrapi/commit/0ba9d31))
* **prisma:** ignore empty model ([8959058](https://github.com/mrapi-js/mrapi/commit/8959058))
* **template:** temporary disable graphql-jit, fix memory leak caused by 'very long string' ([f904a99](https://github.com/mrapi-js/mrapi/commit/f904a99))
* **template:** update deps ([f218161](https://github.com/mrapi-js/mrapi/commit/f218161))
* **template:** update mrapi version ([c036568](https://github.com/mrapi-js/mrapi/commit/c036568))
* --ignore => --ignore-changes ([63bbe62](https://github.com/mrapi-js/mrapi/commit/63bbe62))
* add [@types](https://github.com/types)/graphql-type-json ([2330d3d](https://github.com/mrapi-js/mrapi/commit/2330d3d))
* expose errors of graphql plugin ([c2f0be2](https://github.com/mrapi-js/mrapi/commit/c2f0be2))
* **template:** update deps ([839ffec](https://github.com/mrapi-js/mrapi/commit/839ffec))
* add missing resource ([e776026](https://github.com/mrapi-js/mrapi/commit/e776026))
* upgrade prisma version; add seed.ts; fix generate bug on windows ([826db6c](https://github.com/mrapi-js/mrapi/commit/826db6c))


### Features

* support multi-tenant ([c4e5ab5](https://github.com/mrapi-js/mrapi/commit/c4e5ab5))
* **core:** add 'noIntrospection' option for graphql; update deps ([c6d4577](https://github.com/mrapi-js/mrapi/commit/c6d4577))
* **core:** move prisma __internal config to core ([9fd996d](https://github.com/mrapi-js/mrapi/commit/9fd996d))
* **core:** multiTenant supports ([191e8b8](https://github.com/mrapi-js/mrapi/commit/191e8b8))
* **core:** rest:add pagination support ([04481e5](https://github.com/mrapi-js/mrapi/commit/04481e5))
* **core:** Separate plugin configuration ([0235c7f](https://github.com/mrapi-js/mrapi/commit/0235c7f))
* **core:** support custom RESTFul APIs ([ff8db3b](https://github.com/mrapi-js/mrapi/commit/ff8db3b))
* **core:** support full-config of type-graphql,fastify server ([b529c1c](https://github.com/mrapi-js/mrapi/commit/b529c1c))
* **core:** type-graphql globalMiddlewares performance optimization;noIntrospection optimization; ([d210b6e](https://github.com/mrapi-js/mrapi/commit/d210b6e))
* [WIP] generate router config ([d73687a](https://github.com/mrapi-js/mrapi/commit/d73687a))
* **core:** readd errorHandler for fastify-gql ([cea5c02](https://github.com/mrapi-js/mrapi/commit/cea5c02))
* **core:** support RESTFul APIs ([d714a63](https://github.com/mrapi-js/mrapi/commit/d714a63))
* **core:** support to configure which graphql APIs are exposed; add global uniform logger ([f881790](https://github.com/mrapi-js/mrapi/commit/f881790))
* **template:** update verison ([92d3412](https://github.com/mrapi-js/mrapi/commit/92d3412))
* add demo ([8d3cba3](https://github.com/mrapi-js/mrapi/commit/8d3cba3))
* node env supports; add dockerfile in tempalte ([2acbaf9](https://github.com/mrapi-js/mrapi/commit/2acbaf9))
* Programmatic configuration ([f61e5f3](https://github.com/mrapi-js/mrapi/commit/f61e5f3))
* update graphql to 15.0.0 ([ea69ed1](https://github.com/mrapi-js/mrapi/commit/ea69ed1))
* **create-mrapi-app:** add debug config for vscode ([611e672](https://github.com/mrapi-js/mrapi/commit/611e672))
* **template:** update deps ([905c28d](https://github.com/mrapi-js/mrapi/commit/905c28d))
