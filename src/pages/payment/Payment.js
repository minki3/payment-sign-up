import React from "react";
import styled from "styled-components";

const Payment = () => {
  const IMP = window.IMP;
  IMP.init("imp07381648");

  const payment = () => {
    const data = {
      pg: "kcp.INIBillTst", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: "아임포트 결제 데이터 분석", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("success!");
    } else {
      alert(`결제 실패 ${error_msg}`);
    }
  };
  return (
    <Container>
      <Card>
        <div>사과</div>
        <BuyButton onClick={payment}>구매하기</BuyButton>
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
