import React from "react";
import jQuery from "jquery";

const RoutinePay = () => {
  // IMP.request_pay(param, callback) 호출
  function iamport() {
    const IMP = window.IMP;
    IMP.init("imp07381648");

    IMP.request_pay(
      {
        pg: "html5_inicis.INIBillTst", // 실제 계약 후에는 실제 상점아이디로 변경
        pay_method: "card", // 'card'만 지원됩니다.
        merchant_uid: "merchant_" + new Date().getTime(), // 상점에서 관리하는 주문 번호
        name: "최초인증결제",
        amount: 100, // 결제창에 표시될 금액. 실제 승인이 이루어지지는 않습니다. (모바일에서는 가격이 표시되지 않음)
        customer_uid: "gilldong_1234", // 필수 입력.
        buyer_email: "iamport@siot.do",
        buyer_name: "아임포트",
        buyer_tel: "02-1234-1234",
        // m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}", // 예: https://www.my-service.com/payments/complete/mobile
      },
      function (rsp) {
        if (rsp.success) {
          console.log(rsp);
          alert("빌링키 발급 성공");
          jQuery.ajax({
            url: "http://localhost:3002/routinepay", // 예: https://www.myservice.com/billings/
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: {
              customer_uid: "gilldong_1234", // 카드(빌링키)와 1:1로 대응하는 값
            },
          });
        } else {
          alert("빌링키 발급 실패");
        }
      }
    );
  }
  return <button onClick={iamport}>정기결제</button>;
};

export default RoutinePay;
