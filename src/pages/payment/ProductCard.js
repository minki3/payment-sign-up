import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ProductCard = ({ product }) => {
  const [button, setButton] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(null);

  const handleButton = () => {
    setButton(true);
  };

  const newPrice = (count) => {
    const discount = Math.round(product.price * (count / 100));
    const price = product.price - discount;
    setDiscountPrice(price);
  };
  console.log(discountPrice);

  return (
    <div>
      <Card key={product.id}>
        <img src={product.img} alt="사진" />
        <div>{product.product}</div>

        <label htmlFor={product.id}>10% 할인</label>
        <input
          id={product.id}
          type="radio"
          name={product.id}
          onClick={() => {
            handleButton();
            newPrice(10);
          }}
        ></input>
        <label htmlFor={product.id}>20% 할인</label>
        <input
          id={product.id}
          type="radio"
          name={product.id}
          onClick={() => {
            handleButton();
            newPrice(20);
          }}
        ></input>
        <label htmlFor={product.id}>30% 할인</label>
        <input
          id={product.id}
          type="radio"
          name={product.id}
          onClick={() => {
            handleButton();
            newPrice(30);
          }}
        ></input>
        <div>{button ? discountPrice : product.price}원</div>

        <BuyButton
          onClick={() => {
            const IMP = window.IMP;
            IMP.init("imp07381648"); //가맹점 식별코드
            IMP.request_pay(
              {
                pg: "html5_inicis",
                pay_method: "card",
                merchant_uid: "merchant_ * " + new Date().getTime(),
                name: product.product, //결제창에서 보여질 이름
                amount: discountPrice, //실제 결제되는 가격
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
                    formData.append("name", product.product);
                    formData.append("amount", product.price);
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
                  alert(`결제에 실패하였습니다. 실패 사유: ${rsp.error_msg}`);
                }
              }
            );
          }}
        >
          구매하기
        </BuyButton>
      </Card>
    </div>
  );
};

export default ProductCard;

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
