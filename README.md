# 世界百大攝影師 | Photography World 100

> 探索世界頂尖攝影大師的風格、技術與作品

[![Deploy Status](https://github.com/cooperfu/photography-world-100/actions/workflows/deploy.yml/badge.svg)](https://github.com/cooperfu/photography-world-100/actions/workflows/deploy.yml)

## 📸 專案簡介

Photography World 100 是一個精心策劃的攝影藝術資料庫，收錄了 20 位世界頂尖攝影師的詳細資料，包含他們的攝影風格、技術特色、代表作品等。同時提供攝影技法辭典，幫助攝影愛好者學習專業知識。

### ✨ 功能特色

- 🎨 **極簡設計** - 優雅的使用者介面，專注於內容呈現
- 🌏 **雙語支援** - 完整的繁體中文與英文內容
- 🔍 **即時搜尋** - 快速搜尋攝影師、風格或技法
- 📱 **響應式設計** - 完美適配手機、平板、桌面裝置
- 💾 **偏好記憶** - 自動儲存語言選擇
- ⚡ **快速載入** - 使用 Vite 建置，效能優異

## 🛠️ 技術棧

- **前端框架**: React 18
- **建置工具**: Vite 4
- **樣式方案**: Tailwind CSS 3
- **圖標庫**: Lucide React
- **部署平台**: GitHub Pages

## 📂 專案結構

```
photography-world-100/
├── public/
│   └── favicon.svg          # 網站圖標
├── src/
│   ├── data/
│   │   ├── photographers.js # 攝影師資料
│   │   └── techniques.js    # 技法資料
│   ├── app.jsx              # 主應用程式
│   ├── main.jsx             # React 入口
│   └── index.css            # 全域樣式
├── index.html               # HTML 入口
├── package.json             # 依賴配置
├── vite.config.js           # Vite 配置
└── tailwind.config.js       # Tailwind 配置
```

## 🚀 本地開發

### 環境需求

- Node.js 16+
- npm 或 yarn

### 安裝步驟

1. **Clone 專案**

   ```bash
   git clone https://github.com/cooperfu/photography-world-100.git
   cd photography-world-100
   ```

2. **安裝依賴**

   ```bash
   npm install
   ```

3. **啟動開發伺服器**

   ```bash
   npm run dev
   ```

4. **開啟瀏覽器**

   訪問 `http://localhost:5173`

### 建置生產版本

```bash
npm run build
npm run preview  # 預覽生產版本
```

## 📝 新增攝影師資料

詳細步驟請參考 [CONTRIBUTING.md](./CONTRIBUTING.md)

### 快速指南

1. 開啟 `src/data/photographers.js`
2. 複製現有攝影師物件作為範本
3. 填寫完整的中英文資料
4. 確認 ID 不重複
5. 儲存並測試

## 🌐 線上網址

<https://cooperfu.github.io/photography-world-100/>

## 📊 收錄內容

- **攝影師數量**: 20 位
- **攝影類別**: 8 種（風景、街頭、人像、時尚、觀念藝術等）
- **技法辭典**: 6 項核心攝影技術
- **支援語言**: 繁體中文、英文

## 🎯 未來規劃

- [ ] 擴充至 100 位攝影師
- [ ] 新增攝影師作品集展示
- [ ] 實作收藏功能
- [ ] 新增更多攝影技法
- [ ] 支援日文、韓文
- [ ] 整合 CMS 系統

## 📄 授權

本專案採用 MIT 授權條款

## 🙏 致謝

感謝所有偉大的攝影師為世界帶來的視覺藝術作品

---

**Made with ❤️ by Cooper Fu**
