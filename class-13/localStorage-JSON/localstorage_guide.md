# JavaScript localStorage 

## 🧠 1. Everything is Stored as Strings

localStorage only stores strings.

## 💾 2. Data Persists

Data remains after refresh, closing browser, or restarting computer.

## 🔑 3. Key-Value Pair System

Works like a simple dictionary of string keys and values.

## ⚠️ 4. Synchronous Behavior

localStorage is blocking and can slow down apps if overused.

## 🔒 5. Not Secure

Never store passwords or sensitive data.

## 📦 6. Storage Limit (\~5MB)

Only small amounts of data should be stored.

## 🧹 7. Manual Cleanup Required

Data does not expire automatically.

## 🔄 8. Handle Missing Data

Always check if data exists before using it.

## 🌐 9. Same-Origin Restriction

Data is tied to domain, protocol, and port.

## 🧪 10. Best Use Cases

-   User preferences
-   Small app data
-   To-do lists

------------------------------------------------------------------------

# 📦 JSON Rules for localStorage

## ✅ Always Use JSON for Objects/Arrays

-   Use JSON.stringify() when saving
-   Use JSON.parse() when retrieving

## ⚠️ Never Store Raw Objects

❌ localStorage.setItem("user", {name: "Jason"}) ✅
localStorage.setItem("user", JSON.stringify({name: "Jason"}))

## 🔄 Always Parse When Loading

const user = JSON.parse(localStorage.getItem("user"))

## 🛑 Handle Null Values

JSON.parse(null) will crash your app

## 💡 Safe Pattern

function load(key) { const data = localStorage.getItem(key) return data
? JSON.parse(data) : null }

------------------------------------------------------------------------

# 🎯 Simple Rule

localStorage is a permanent JavaScript object that only stores strings.
