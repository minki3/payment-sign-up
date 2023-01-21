import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";
const Payment = () => {
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

  const IMP = window.IMP;

  function iamport() {
    //가맹점 식별코드
    IMP.init("imp07381648");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "merchant_" + new Date().getTime(),
        name: "상품1", //결제창에서 보여질 이름
        amount: 100, //실제 결제되는 가격
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
          alert(`결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
        }
      }
      // function (rsp) {
      //   console.log(rsp);

      // if (rsp.success) {
      //   // axios로 HTTP 요청
      //   axios(`/payment/find/${rsp.imp_uid}`, {
      //     method: "GET",
      //     headers: { "Content-Type": "application/json;charset=utf-8" },
      //   }).then((data) => {
      //     // 서버 결제 API 성공시 로직
      // alert(`결제 완료`);
      // console.log(data);
      // console.log(rsp.imp_uid);
      // console.log(localStorage.token);
      //   });
      // } else {
      //   alert(`결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
      // }
      // if (rsp.success) {
      // var msg = "결제가 완료되었습니다.";
      // msg += "고유ID : " + rsp.imp_uid;
      // msg += "상점 거래ID : " + rsp.merchant_uid;
      // msg += "결제 금액 : " + rsp.paid_amount;
      // msg += "카드 승인번호 : " + rsp.apply_num;
      // } else {
      //   var msg = "결제에 실패하였습니다.";
      //   msg += "에러내용 : " + rsp.error_msg;
      // }
      // alert(msg);
      // }
    );
  }

  return (
    <Container>
      <Card>
        <div>사과</div>
        <BuyButton onClick={iamport}>구매하기</BuyButton>
      </Card>
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
