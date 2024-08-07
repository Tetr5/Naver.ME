# Naver.ME
url을 naver.me 형식으로 단축하기도하고, 원본 url을 찾습니다.
<br>
# Example
https://naver.me/xwW4y4qd
<br>
## 단축하기
```js
await fetch(`https://shortnaverlink.vercel.app/shorten?url={단축하고 싶은 Url}`)
```

## 원본 가져오기
```js
await fetch(`navermeoriginalurl.vercel.app/{naver.me뒤 문자열`)
```
