**Github token**

export GH_TOKEN="token"

```
npm run release -> Kodların yayılmasında kullanılır
```
---

>By default, it writes **logs** to the following locations:

>on Linux: ~/.config/{app name}/logs/{process type}.log

>on macOS: ~/Library/Logs/{app name}/{process type}.log

>on Windows: %USERPROFILE%\AppData\Roaming\{app name}\logs\{process type}.log

---

**Burada belirtilen repo hangisi ise update için kullanılan repo olur ve relaselerde onu izler**

```
 "repository": {
    "type": "git",
    "url": "git+https://github.com/OO-E/pingo.git"
  }
```


