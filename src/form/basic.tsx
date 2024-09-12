import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Basic() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const id = form.elements.namedItem("id") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;

    if (id.value.length < 5) {
      // 아이디에 대한 유효성 검사
      alert("아이디는 5글자 이상이어야 합니다.");
      return;
    }

    if (password.value.length < 8) {
      // 비밀번호에 대한 유효성 검사
      alert("비밀번호는 8글자 이상이어야 합니다.");
      return;
    }

    if (!email.value.includes("@gmail.com")) {
      // 이메일에 대한 유효성 검사
      alert("gmail은 사용할 수 없습니다.");
      return;
    }

    id.value = "";
    password.value = "";
    email.value = "";
    alert("회원가입이 완료되었습니다.");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>기본 폼</CardTitle>
        <CardDescription>기본 기능으로 만들기</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={handleSubmit}>
          <Label>아이디</Label>
          <Input
            name="id"
            type="text"
            placeholder="아이디를 입력해주세요."
            required
          />
          <Label>비밀번호</Label>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            required
          />
          <Label>이메일</Label>
          <Input
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            required
          />
          <div className="mt-10">
            <Button className="w-full">로그인</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
