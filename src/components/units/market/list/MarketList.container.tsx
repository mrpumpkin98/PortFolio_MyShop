import { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS,
  DELETE_BOARD,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
  FETCH_USER_LOGGED_IN,
} from "./MarketList.queries";
import MarketListUI from "./MarketList.presenter";
import _ from "lodash";

export default function StaticRoutingPage() {
  ///////////////////////////////////////////////////////////////
  // router
  //////////////////////////////////////////////////////////////

  const router = useRouter();

  ///////////////////////////////////////////////////////////////
  // useState
  //////////////////////////////////////////////////////////////

  const [keyword, setKeyword] = useState("");
  const [basketItems, setBasketItems] = useState([]);
  const [todayItems, setTodayItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  ///////////////////////////////////////////////////////////////
  // queries
  //////////////////////////////////////////////////////////////

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);
  const { data: dataUseditemsOfTheBest, refetch: refetchUseditemsOfTheBest } =
    useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);

  ///////////////////////////////////////////////////////////////
  //  게시물 삭제
  //////////////////////////////////////////////////////////////

  const onClickDelete = (event: React.ChangeEvent<HTMLInputElement>) => {
    deleteBoard({
      variables: { boardId: event.currentTarget.id },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  ///////////////////////////////////////////////////////////////
  //  게시물 이동
  //////////////////////////////////////////////////////////////

  const onClickSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`/Market/${event.currentTarget.id}`);
  };

  ///////////////////////////////////////////////////////////////
  //  게시물 등록 이동
  //////////////////////////////////////////////////////////////

  const onClickWrite = () => {
    router.push(`/Market/Write`);
  };

  ///////////////////////////////////////////////////////////////
  //  검색 컴포넌트 관련
  //////////////////////////////////////////////////////////////

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  ///////////////////////////////////////////////////////////////
  // 페이지 새로고침
  //////////////////////////////////////////////////////////////

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다.");
      void router.push("/Login");
    }
    refetchUseditemsOfTheBest({ page: 1 });
    refetch({ page: 1 });
  }, []);

  ///////////////////////////////////////////////////////////////
  // 무한 스크롤
  //////////////////////////////////////////////////////////////

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  ///////////////////////////////////////////////////////////////
  // 대체 이미지
  //////////////////////////////////////////////////////////////
  const onErrorImg = (e: any) => {
    e.target.src = "/images/none.png";
  };

  ///////////////////////////////////////////////////////////////
  // 장바구니
  //////////////////////////////////////////////////////////////
  const onClickBasket = (basket) => () => {
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");

    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 담으신 상품입니다!!!");
      return;
    } else {
      alert("장바구니에 상품이 담겼습니다.");
    }

    // 2. 내가 클릭한거 장바구니에 추가하기
    baskets.push(basket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickBasketModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  //주소 모달 확인 / 취소 입력

  const Ok = (): void => {
    setIsOpen(false);
  };

  const Cancel = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, [isOpen]);

  ///////////////////////////////////////////////////////////////
  // 오늘 본 상품
  //////////////////////////////////////////////////////////////
  const onClickToday =
    (today: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      // 1. 기존 장바구니 가져오기
      const todays = JSON.parse(localStorage.getItem("todays") ?? "[]");

      const temp = todays.filter((el) => el._id === today._id);
      if (todays.length > 3) {
        todays.pop();
      }

      // 2. 내가 클릭한거 장바구니에 추가하기
      const existingIndex = todays.findIndex((el) => el._id === today._id);
      if (existingIndex !== -1) {
        todays.splice(existingIndex, 1);
      }
      todays.unshift(today);

      localStorage.setItem("todays", JSON.stringify(todays));

      router.push(`/Market/${today._id}`);
    };

  useEffect(() => {
    const todays = JSON.parse(localStorage.getItem("todays") || "[]");
    setTodayItems(todays);
  }, []);

  return (
    <>
      <MarketListUI
        onClickDelete={onClickDelete}
        onClickSubmit={onClickSubmit}
        onClickWrite={onClickWrite}
        data={data}
        count={dataBoardsCount?.fetchBoardsCount}
        loginData={loginData}
        best={dataUseditemsOfTheBest}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        onLoadMore={onLoadMore}
        onErrorImg={onErrorImg}
        onClickBasket={onClickBasket}
        basketItems={basketItems}
        isOpen={isOpen}
        onClickBasketModal={onClickBasketModal}
        Ok={Ok}
        Cancel={Cancel}
        onClickToday={onClickToday}
        todayItems={todayItems}
      />
    </>
  );
}