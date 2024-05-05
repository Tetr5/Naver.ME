# Naver.ME
url을 naver.me 형식으로 단축해줍니다.
<br>
# Example
https://naver.me/GyNsVZWz
<br>
# Api
```https://shortnaverlink.vercel.app/shorten?url=단축하고 싶은 Url```
<br>
# Mode
본 사이트는 기기테마를 지원합니다.<br><br>
다크모드,라이트모드로 바꿔주는 css코드<br>
라이트모드를 기준으로 코드를 짠 경우, ```@media (prefers-color-scheme: light)``` 부분을 빼주면 됩니다.<br><br>
https://mybrowseraddon.com/dark-mode.html#features <br>위 확장프로그램의 코드를 참조하였습니다.
```css
  @media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    accent-color: var(--native-dark-accent-color);
}

html a:visited, 
  html a:visited > *:not(svg) {
    color: var(--native-dark-visited-link-color) !important;
  }
  
  a[ping]:link,
  a[ping]:link > *:not(svg),
  :link:not(cite) {
    color: var(--native-dark-link-color) !important;
  }
  
  html cite,
  html cite a:link,
  html cite a:visited {
    color: var(--native-dark-cite-color) !important;
  }
  
  img,
  image,
  figure:empty {
    opacity: var(--native-dark-opacity) !important;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: white;
    accent-color: var(--native-dark-accent-color);
}

html a:visited, 
  html a:visited > *:not(svg) {
    color: var(--native-dark-visited-link-color) !important;
  }
  
  a[ping]:link,
  a[ping]:link > *:not(svg),
  :link:not(cite) {
    color: var(--native-dark-link-color) !important;
  }
  
  html cite,
  html cite a:link,
  html cite a:visited {
    color: var(--native-dark-cite-color) !important;
  }
  
  img,
  image,
  figure:empty {
    opacity: var(--native-dark-opacity) !important;
  }
}
```
