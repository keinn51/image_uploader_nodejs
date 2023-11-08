## image uplodaer

node js로 간단한 image uploader를 구현합니다. multer라는 것을 사용합니다.
핵심 로직은 아래와 같습니다.

1. `/upload` 라는 end point로 이미지를 업로드합니다.
2. (파일 이름 + 현재 시간 + 확장자명) 으로 파일 이름이 저장됩니다.
3. `/public/0/board/` 하위에 모두 저장됩니다.
4. 이미지를 불러오고 싶다면 (서버 url + 해당 파일 위치 + 파일 이름) 을 입력하면 됩니다.

