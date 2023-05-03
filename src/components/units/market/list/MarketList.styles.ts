import styled from "@emotion/styled";
import {
  LikeOutlined,
  DislikeOutlined,
  EnvironmentOutlined,
  PaperClipOutlined,
  HeartFilled,
  ShoppingFilled,
  ShoppingCartOutlined,
  MehFilled,
  UserOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";

export const ListMain = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 210px;
`;

export const Wrapper = styled.div``;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 70px;
  font-size: 36px;
  font-family: "Jalnan";
`;

////////////////////////////////////////////
// 중고 상품 베스트
////////////////////////////////////////////

export const BestPostsTie = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  font-family: "SCDream4";
  margin-bottom: 20px;
`;

export const WidthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const Shopping = styled(ShoppingFilled)`
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: #aaaaaa;
  }
`;

export const Shopping2 = styled(ShoppingCartOutlined)`
  color: #bdbdbd;
  color: ${(props) => props.Active && "gold"};
  font-size: 30px;
  cursor: pointer;
  margin-left: 10px;
`;

export const BestPosts = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const BestPostBody = styled.div`
  height: 307px;
  margin: 14px;
  background: #f5f5f5;
  overflow: hidden;
  border-radius: 20px;
  &:hover {
    background: rgb(250, 250, 252);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const BestPostImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const BestPostContent = styled.div`
  display: flex;
`;

export const BestPostTitle = styled.div`
  height: 50px;
  margin: 5px 10px 5px 15px;
  font-weight: 600;
  font-size: 19px;
`;

export const BestPostInfo = styled.div`
  width: 85%;
  padding-left: 15px;
`;

export const AvatarWriterTie = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;

export const Writer = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 2px;
`;

export const CreatedAt = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #828282;
  margin-bottom: 30px;
`;

export const LikeTie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Like = styled(HeartFilled)`
  font-size: 18px;
  color: gold;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const LikeNum = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

////////////////////////////////////////////
//  중고 상품 리스트
////////////////////////////////////////////

export const List = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 780px;
  margin-top: 50px;
`;

export const Table = styled.div`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px;
`;

export const Tr = styled.div`
  background: #f5f5f5;
  width: 100%;
  font-family: "SCDream4";
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin: 15px 0px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0.2, 0.2, 0.2, 0.2);
  }
`;

export const ListImg = styled.img`
  width: 160px;
  height: 160px;
  margin: 10px 7px;
  border-radius: 8px;
`;

export const ListName = styled.div`
  font-size: 24px;
`;

export const TieTable = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ListContents = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: #828282;
  margin: 5px 0px 0px 4px;
`;
export const ListTags = styled.div`
  height: 20px;
`;
export const ListPickedCount = styled.div`
  width: 18px;
  height: 24px;
  padding-top: 6px;
`;
export const ListPrice = styled.div`
  width: 150px;
  text-align: end;
  margin-right: 20px;
  font-weight: 500;
  font-size: 18px;
`;
export const ListSeller = styled.div`
  width: 100px;
  margin-top: 5px;
`;

export const TitleListSellerListPickedCount = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Heart = styled(HeartFilled)`
  font-size: 18px;
  color: gold;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 3px;
  :hover {
    color: #e5c100;
  }
`;

export const Smile = styled(SmileOutlined)`
  font-size: 25px;
  color: #bdbdbd;
  cursor: pointer;
  margin-right: 10px;
  :hover {
    color: #aaaaaa;
  }
`;

export const ButtonTie = styled.div`
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  margin-left: 1000px;
  margin-top: 30px;
  margin-bottom: 80px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  font-family: "SCDream4";

  cursor: pointer;
  :hover {
    background-color: gold;
    border-color: gold;
  }
`;

export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "gold" : "black")};
`;

////////////////////////////////////////////
// 비회원 장바구니
////////////////////////////////////////////

export const ShoppingBasket = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin: auto;
`;
export const BasketTitle = styled.div`
  margin: 20px 20px 0px 20px;
  font-weight: 700;
  font-size: 18px;
`;
export const BasketList = styled.div``;
export const BasketTable = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 6px;
  margin-bottom: 10px;
`;
export const BasketTr = styled.div`
  border: 1px solid #bdbdbd;
  width: 156px;
  height: 199px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3px;
  margin-bottom: 10px;
`;
export const BasketListImg = styled.img`
  width: 60px;
  height: 60px;
`;
export const BasketTieTable = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 120px;
`;
export const BasketListName = styled.div`
  font-size: 12px;
  cursor: pointer;
`;

export const BasketListContents = styled.div`
  font-size: 12px;
  color: #4f4f4f;
  cursor: pointer;
`;
export const BasketListPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const BasketListTags = styled.div``;

export const AddressModal = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodayTitle = styled.div`
  font-family: "SCDream4";
  text-align: center;
  font-size: 14px;
  margin: 20px 0px;
`;

export const TodayList = styled.div`
  border: 1px solid #bdbdbd;
  height: 100%;
  width: 184px;
  margin-top: 650px;
  margin-left: 20px;
  border-radius: 8px;
`;

export const TodayTable = styled.div`
  margin: 0px 10px;
`;

export const ReactPaginate = styled.div`
  margin: 0px 10px;
`;

export const PaginationContainer = styled.div`
  /* margin-top: 20px; */
`;

export const Pagination = styled(ReactPaginate)`
  /* margin-top: 20px; */
  display: none;
`;
