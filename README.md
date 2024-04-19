# esun-blog

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Esun-blog 前端

完成度較低大概只有 30%左右 前端實在是完全全新的領域，完全沒碰過，花的時間比想像中多太多了

## 1. 註冊功能

### - [x] 使用者可以透過註冊功能註冊帳號，以手機號碼進行註冊與登入。

> 註冊和登入功能已和後端串接，前端有驗證輸入格式

## 2. 登入驗證功能

### - [ ] 系統需實作身份驗證功能，以確保只有登入的使用者可以發文或留言。

> 後端透過產生 token 方式以實現驗證，但前端儲存 token 的部分還沒實作

## 3. 發文功能

> 進度只有列出所有發文，點擊文章可以會有反應，但也只是有反應

### - [ ] 新增發文。

### - [x] 列出所有發文。

### - [ ] 編輯或刪除發文。

## 4. 留言功能

> 前端未完成，有找到一個頁面但還沒開始寫

### - [ ] 使用者可以針對發文新增留言。

## 5. 系統架構要求

### - [x] 使用 Web Server+ Application Server+任一關聯式資料庫的三層式架構。

> 資料庫用的是 mysql

### - [x] 後端依照需求設計展示層、業務層、資料層以及共用層。

## 6. 技術要求：

### - [x] 使用 Vue.js 做為前端技術。

### - [x] 使用 Spring Boot 搭建相關應用程式。

### - [x] 使用 RESTful API 風格建立後端服務。

### - [x] 使用 Maven 或 Gradle 做為專案建立的工具。

### - [ ] 透過 Stored Procedure 存取資料庫。

> 用了 mybatis 做完後才注意到

### - [ ] 需同時異動多個資料表時，請實作 Transaction，避免資料錯亂。

> 沒遇到這情況就沒用了

### - [x] 資料庫的 DDL 和 DML 請存放在專案下的\DB 資料夾內提供

> DML 用了 mybatis BaseMapper 所以沒有

### - [ ] 需防止 SQL Injection 以及 XSS 攻擊。

> 時間上來不及
