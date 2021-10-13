import LogIn from "./Login";
import Register from "./Register";
import Products from "./Products";

export { LogIn, Register, Products };

/**
 * 사실 이 작업은 App.js 에서 해도 무방한데, 그냥 조금 더 페이지를 명시적으로 깔끔하게 보여주기 위해 여기서 미리 해준겁니다.
 * 큰 차이는 없습니다.
 * App.js 에서 방금 내보내준 페이지 컴포넌트들을 불러와서 라우트 설정을 합니다
 */