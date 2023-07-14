💡 ReusedMarket은 중고 상품을 거래하는 플랫폼입니다.

## Installation

```bash
  yarn install
```

## 주요 기술 스택 및 선택 이유
- `typescript`, `react`, `react-hooks`, `emotion`, `graphQL`
  
|        기술        | 이유                                                                                                                                           |
| :------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
|      React      | 컴포넌트 기반 접근 방식을 통해 재사용할 수 있는 UI 요소를 구축할 수 있으며, 가상 DOM을 사용하여 효율적인 렌더링을 지원합니다. 이를 통해 웹 애플리케이션의 복잡성을 관리하고, 유지 보수를 용이하게 할 수 있기 때문에 선택하였습니다.|
|  NEXT.JS  | NEXT.JS는 리액트 기반의 프레임워크로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), 라우팅 등의 기능을 통해 더 좋은 성능으로 개발할 수 있으며, 프로젝트를 확장하거나 유지 보수하기 쉽게 만들어 주기 때문에 선택했습니다. | 
|  TypeScript  | 개발자가 의도한 변수나 함수 등의 목적을 더욱 명확하게 전달 가능하고 전달된 정보를 기반으로 코드 자동완성이나 잘못된 변수/함수 사용에 대한 에러 알림 같은 피드백을 받을 수 있게 되므로 순수 자바스크립트에 비해 생상성 향상할 수 있기 때문에 선택하였습니다. |  
|  GraphQL  | GraphQL은 클라이언트가 원하는 응답 값을 받을 수 있기 때문에 이로 인해 네트워크 트래픽과 데이터 전송량을 최적화할 수 있어 효율성을 높일 수 있기 때문에 선택했습니다.  | 

## 화면 구성

![스크린샷, 2023-07-10 12-42-08](https://github.com/mrpumpkin98/Reused_client/assets/114569429/756084a3-e6a8-493b-ad1f-99e1f8a2cc0b)


## SignUp/Login

| 영상                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Peek 2023-07-10 11-06](https://github.com/MadHeo/secondHandMarket/assets/114569429/e69ccc9f-bbe9-434e-b358-6e2d5b8cf53b)                      |

- 로그인은 react-hook-form 라이브러리를 사용하여 input 입력 시 발생하는 리렌더링을 줄였습니다.
- 전역상태관리 라이브러리 Recoil을 사용해 accessToken을 관리합니다.
- useAuth 함수에 accessToken을 확인하는 로직을 만들어 권한분기를 구현했습니다.

## Products List / Comment / Purchase

|        페이지          | 영상                                                                                                                                         |
| :------------------:  | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Products List<br/>&<br/>Comment | ![Peek 2023-07-10 11-31](https://github.com/MadHeo/secondHandMarket/assets/114569429/bb3ac8f5-7668-459b-a1a7-ad64db96b570) |
| Purchase | ![Peek 2023-07-10 12-46](https://github.com/MadHeo/secondHandMarket/assets/114569429/eb786a71-4a0d-40bb-afdf-d80326a2f2a7) | 

- 댓글 작성과 수정 시 apolloClient에서 제공하는 기능인 refetchQueries를 사용해서 즉각적으로 반영되도록 구현했습니다.
- 지도는 카카오 지도 API를 사용했습니다.

## Point Charge

| 영상                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Peek 2023-07-10 11-35](https://github.com/MadHeo/secondHandMarket/assets/114569429/449e3ab7-6bcb-4095-9e79-7ae218b00fb5) |

- 포인트 충전은 카카오페이 API를 활용해서 구현했습니다.
- 충전할 경우 충전금액만큼 value로 받아 createPoint API에 요청합니다.

## Shopping basket / Product viewed today

| 영상                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Peek 2023-07-10 11-42](https://github.com/MadHeo/secondHandMarket/assets/114569429/f9344e8e-64fc-465c-80c1-fd04171b21d9) |

- Local Storage에 데이터를 담고 불러오는 방식으로 기능을 구현했습니다.
- Recoil에 상태를 저장하고, 상품을 클릭할 때 해당 Recoil 상태를 업데이트하여 useEffect의 상태 값으로 사용하여 실시간으로 확인할 수 있도록 구현했습니다.


