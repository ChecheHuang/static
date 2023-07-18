module.exports = {
  types: [
    { value: "🚀 新增", name: "新增: 新的內容" },
    { value: "🐛 修復", name: "修復: 修復一個錯誤" },
    { value: "📝 文檔", name: "文檔: 變更的只有文檔" },
    { value: "🏠 格式", name: "格式: 空格, 分號等格式修復" },
    { value: "♻️ 重構", name: "重構: 代碼重構，注意和特性、修復區分開" },
    { value: "⚡️ 性能", name: "性能: 提升性能" },
    { value: "✅ 測試", name: "測試: 添加一個測試" },
    { value: "🔨 工具", name: "工具: 開發工具變動(構建、腳手架工具等)" },
    { value: "⏪ 回滾", name: "回滾: 代碼回退" },
  ],
  scopes: [],
  messages: {
    type: "選擇一種你的提交類型: \n",
    scope: "選擇一個 scope（可選）\n：",
    customScope: "請輸入修改範圍(可選): \n",
    subject: "短說明: \n",
    body: "長說明，使用"|" 換行(可選)：\n",
    breaking: "非兼容性說明(可選): \n",
    footer: "關聯關閉的 issue，例如：#31, #34(可選): \n",
    confirmCommit: "確定提交說明? \n",
  },
  skipEmptyScopes: true,
  skipQuestions: ["scopes", "breaking", "body", "footer"],
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
};
