# 기본 form & react-hook-form

## 시작하기

```bash
# 저장소 클론 후에
npm i
npm run dev
```

## 기본 form 구조

```tsx
<form onSubmit={handleSubmit}>
  <Label>아이디</Label>
  <Input
    // name 지정해줘서 name으로 찾을 수 있게 해주기
    name="id"
    type="text"
    placeholder="아이디를 입력해주세요."
    // Input tag 자체적으로 있는 validation도 사용해야함
    required
  />
  <div className="mt-10">
    <Button className="w-full">로그인</Button>
  </div>
</form>;

// 위와 같이 form 구조가 있을 때 아래처럼 handleSubmit 작성하면 된다.
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  // form의 기본 동작 막기
  e.preventDefault();
  const form = e.currentTarget;
  const id = form.elements.namedItem("id") as HTMLInputElement;

  if (id.value.length < 5) {
    // 아이디에 대한 유효성 검사
    alert("아이디는 5글자 이상이어야 합니다.");
    return;
  }

  // 올바른 값이면 서버로 보내거나 다른 작업 수행
  id.value = "";
  password.value = "";
  email.value = "";
  alert("회원가입이 완료되었습니다.");
};
```
