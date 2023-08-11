# electron-vite-react

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/vite-react-electron?color=fa6470)
![GitHub issues](https://img.shields.io/github/issues/caoxiemeihao/vite-react-electron?color=d8b22d)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/vite-react-electron)
[![Required Node.JS >= 14.18.0 || >=16.0.0](https://img.shields.io/static/v1?label=node&message=14.18.0%20||%20%3E=16.0.0&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

[English](README.md) | 한국어

## 👀 개요

📦 즉시 사용 가능  
공식 [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)를 기반으로 프로젝트 구조가 친숙합니다.  
🌱 손쉬운 확장 및 커스터마이징 가능  
💪 renderer 프로세스에서 Node.js API 지원  
🔩 C/C++ 네이티브 애드온 지원  
🐞 디버거 구성 포함  
🖥 여러 창을 쉽게 구현  

## 🛫 설치하기

```sh
# clone the project
git clone https://github.com/electron-vite/electron-vite-react.git

# enter the project directory
cd electron-vite-react

# install dependency
npm install

# develop
npm run dev
```

## 🐞 디버그

![electron-vite-react-debug.gif](/electron-vite-react-debug.gif)

## 📂 폴더구조

익숙한 React 애플리케이션 구조, 상단에 `electron` 폴더만 있습니다 😉  
*이 폴더에 있는 파일은 React 애플리케이션에서 분리되어 `dist-electron`*에 빌드됩니다.  

```tree
├── electron                                 Electron-related code
│   ├── main                                 Main-process source code
│   └── preload                              Preload-scripts source code
│
├── release                                  Generated after production build, contains executables
│   └── {version}
│       ├── {os}-{os_arch}                   Contains unpacked application executable
│       └── {app_name}_{version}.{ext}       Installer for the application
│
├── public                                   Static assets
└── src                                      Renderer source code, your React application
```


## 🚨 주의사항

이 템플릿은 기본적으로 렌더러 프로세스에 Node.js API를 통합합니다. **일렉트론 보안 지침**을 따르고 싶다면 이 기능을 비활성화할 수 있습니다. 필요한 API는 직접 노출해야 합니다.  

시작하려면 아래 그림과 같이 옵션을 제거하세요. 이렇게 하면 [Vite 설정을 수정하고 이 기능을 비활성화](https://github.com/electron-vite/vite-plugin-electron-renderer#config-presets-opinionated)합니다.

```diff
# vite.config.ts

export default {
  plugins: [
    ...
-   // Use Node.js API in the Renderer-process
-   renderer({
-     nodeIntegration: true,
-   }),
    ...
  ],
}
```

## 🔧 추가 내용

1. electron-updater 👉 [see docs](src/components/update/README.md)
1. playwright

## ❔ FAQ

- [C/C++ addons, Node.js modules - Pre-Bundling](https://github.com/electron-vite/vite-plugin-electron-renderer#dependency-pre-bundling)
- [dependencies vs devDependencies](https://github.com/electron-vite/vite-plugin-electron-renderer#dependencies-vs-devdependencies)
