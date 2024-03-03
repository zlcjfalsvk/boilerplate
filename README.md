# Boilerplate

### Spec
- Node
  - v20.10
- [NX [Monorepo]](https://nx.dev/)
  - v18
- [Nestjs](https://nestjs.com/)
  - v10
- [Rust [WASM]](https://www.rust-lang.org/)
  - v1.76

### Install
- Rust Install
  - [rustup](https://rustup.rs/) 을 이용한 rust 설치
    - cargo & rustc 를 설치할 수 있다
    - +) [rustfmt](https://github.com/rust-lang/rustfmt)(rust formatter), [clippy](https://github.com/rust-lang/rust-clippy)(linter)
- Run Command `npm install`

### Run

- Run Command `npm run wasm:build`
  - init wasm
- Run Command `npm run pg:mig:client`
  - init RDB Schema
- Run Command `npm run pg:gen:client`
  - init prisma client


### Wasm

- rust 의 struct 를 Wasm 으로 생성 이후 호출할 때 객체 자체를 호출하면 메모리 주소를 가르킨다
  - [Ref](https://stackoverflow.com/questions/69694292/how-to-use-exported-struct-in-js-file)
---


### Issue
- nestjs 에서 serverless 를 위해 node_module 까지 포함한 bundle 시 밑의 module 을 webpack 에서 ignore 해줘야 한다. <br />
  하지만 nx.dev 측에서 `new webpack.Ignreplugins` 적용이 되지 않아 다른 방안 대처
  ```
     const lazyImports = [
      '@nestjs/microservices/microservices-module',
      '@nestjs/websockets/socket-module',
    ];
  ```
  - nx.json 에서 generatePackageJson 옵션을 `trun-on` 후 zip 파일로 압축 후 lambda layer 에 포함 시켜야 할 듯
  - nx 가 아니라 nestjs 만 사용한다면 custom webpack 이 가능함



