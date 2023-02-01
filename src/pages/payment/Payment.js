import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "./ProductCard";
import Profile from "./Profile";

const Payment = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setnickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [product, setProduct] = useState([]);
  const [accessToken, setAccessToken] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];

  const REST_API_KEY = "9e4f845d58d89d194353e6cf169d9f73";
  const REDIRECT_URI = `http://localhost:3000/oauth/payment`;

  // const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  // const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);

          setAccessToken(data.access_token);

          const getProfile = async () => {
            try {
              let response = await axios.get(
                "https://kapi.kakao.com/v2/user/me",
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    "Content-type": "application/x-www-form-urlencoded",
                  },
                }
              );
              let data = response.data;
              console.log(data);
              console.log(data.id);
              console.log(data.properties.nickname);
              console.log(data.kakao_account.email);

              axios({
                url: `/kakao/log-in?email=${data.kakao_account.email}`,
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });
              // axios({
              //   url: `kakao/sign-in`,
              //   method: "POST",
              //   headers: { "Content-Type": "application/json" },
              //   data: {
              //     id: data.properties.nickname,
              //     email: data.kakao_account.email,
              //   },
              // });
            } catch (error) {
              console.error(error);
            }
          };
          getProfile();
        } else {
          console.log(data);
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  useEffect(() => {
    axios("/data/data.json").then((result) => setProduct(result.data));
  }, []);

  // useEffect(() => {
  //   axios(`/payment/token`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //   }).then((result) => {
  //     console.log(result.data.message);
  //     if (result.data.message) {
  //       localStorage.setItem("token", result.data.message);
  //     }
  //   });
  // }, []);

  // const IMP = window.IMP;

  // function iamport() {
  //   //가맹점 식별코드
  //   IMP.init("imp07381648");
  //   IMP.request_pay(
  //     {
  //       pg: "html5_inicis",
  //       pay_method: "card",
  //       merchant_uid: "merchant_" + new Date().getTime(),
  //       name: product.product, //결제창에서 보여질 이름
  //       amount: product.price, //실제 결제되는 가격
  //       buyer_email: "iamport@siot.do",
  //       buyer_name: "구매자이름",
  //       buyer_tel: "010-1234-5678",
  //       buyer_addr: "서울 강남구 도곡동",
  //       buyer_postcode: "123-456",
  //     },
  //     (rsp) => {
  //       console.log(rsp);
  //       if (rsp.success) {
  //         // axios로 HTTP 요청
  //         axios({
  //           url: `/payment/find?imp_uid=${rsp.imp_uid}`,
  //           method: "GET",
  //           headers: { "Content-Type": "application/json" },
  //         }).then((data) => {
  //           // 서버 결제 API 성공시 로직
  //           alert(`결제 완료`);
  //           console.log(data);
  //           console.log(rsp.imp_uid);
  //           console.log(localStorage.token);
  //         });
  //       } else {
  //         alert(`결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
  //       }
  //     }
  //   );
  // }

  return (
    <Container>
      {/* {product.map((item) => {
        const { id, product, price, img } = item;
        return (
          <Card key={id}>
            <img src={img} alt="사진" />
            <div>{product}</div>
            <div>{price}원</div>
            <label htmlFor="radio">10% 할인</label>
            <input
              type="radio"
              onClick={() => {
                const discount = Math.round(price * (10 / 100));
                const newPrice = price - discount;
              }}
            ></input>

            <BuyButton
              onClick={() => {
                const IMP = window.IMP;
                IMP.init("imp07381648"); //가맹점 식별코드
                IMP.request_pay(
                  {
                    pg: "html5_inicis",
                    pay_method: "card",
                    merchant_uid: "merchant_ * " + new Date().getTime(),
                    name: product, //결제창에서 보여질 이름
                    amount: price, //실제 결제되는 가격
                    buyer_email: "iamport@siot.do",
                    buyer_name: "구매자이름",
                    buyer_tel: "010-1234-5678",
                    buyer_addr: "서울 강남구 도곡동",
                    buyer_postcode: "123-456",
                  },
                  (rsp) => {
                    console.log(rsp);
                    if (rsp.success) {
                      // axios로 HTTP 요청
                      axios({
                        url: `/payment/find?imp_uid=${rsp.imp_uid}`,
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                      }).then((data) => {
                        // 서버 결제 API 성공시 로직
                        alert(`결제 완료 `);
                        const formData = new FormData();
                        formData.append("pg", "html5_inicis");
                        formData.append("pay_method", "card");
                        formData.append(
                          "merchant_uid",
                          `merchant${new Date().getTime()}`
                        );
                        formData.append("name", product);
                        formData.append("amount", price);
                        formData.append("buyer_email", "iamport@siot.do");
                        formData.append("buyer_name", "구매자이름");
                        formData.append("buyer_tel", "010-1234-5678");
                        formData.append("buyer_addr", "서울 강남구 도곡동");
                        formData.append("buyer_postcode", "123-4567");
                        formData.append("imp_uid", rsp.imp_uid);
                        for (let key of formData.entries()) {
                          console.log(key);
                        }
                        // axios
                        //   .post("/payment/import", {
                        //     pg: "html5_inicis",
                        //     pay_method: "card",
                        //     merchant_uid: "merchant_" + new Date().getTime(),
                        //     name: product, //결제창에서 보여질 이름
                        //     amount: price, //실제 결제되는 가격
                        //     buyer_email: "iamport@siot.do",
                        //     buyer_name: "구매자이름",
                        //     buyer_tel: "010-1234-5678",
                        //     buyer_addr: "서울 강남구 도곡동",
                        //     buyer_postcode: "123-456",
                        //     imp_uid: rsp.imp_uid,
                        //   })
                        axios({
                          method: "post",
                          url: "/payment/import",
                          data: formData,
                          headers: { "Content-Type": "multipart/form-data" },
                        })
                          .then((res) => {
                            console.log(res);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      });
                    } else {
                      alert(
                        `결제에 실패하였습니다. 실패 사유: ${rsp.error_msg}`
                      );
                    }
                  }
                );
              }}
            >
              구매하기
            </BuyButton>
          </Card>
        );
      })} */}
      {product.map((items) => {
        return <ProductCard key={items.id} product={items} />;
      })}
      {/* <Profile accessToken={accessToken} /> */}
    </Container>
  );
};

export default Payment;

const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding-top: 100px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  width: 200px;
  text-align: center;
  padding: 20px;
  margin: 20px;
`;

const BuyButton = styled.button``;
