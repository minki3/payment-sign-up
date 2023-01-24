import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

const Payment = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios("/data/data.json").then((result) => setProduct(result.data));
  }, []);

  useEffect(() => {
    axios(`/payment/token`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) => {
      console.log(result.data.message);
      if (result.data.message) {
        localStorage.setItem("token", result.data.message);
      }
    });
  }, []);

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
      {product.map((item) => {
        const { id, product, price } = item;
        return (
          <Card key={id}>
            <div>{product}</div>
            <div>{price}</div>
            <BuyButton
              onClick={() => {
                //가맹점 식별코드
                const IMP = window.IMP;
                IMP.init("imp07381648");
                IMP.request_pay(
                  {
                    pg: "html5_inicis",
                    pay_method: "card",
                    merchant_uid: "merchant_" + new Date().getTime(),
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
                        alert(`결제 완료`);
                        console.log(data);
                        console.log(rsp.imp_uid);
                        console.log(localStorage.token);
                      });
                    } else {
                      alert(
                        `결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`
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
      })}
    </Container>
  );
};

export default Payment;

const Container = styled.div``;

const Card = styled.div`
  display: "flex";
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  width: 300px;
  text-align: center;
  padding: 20px;
`;
const BuyButton = styled.button``;
