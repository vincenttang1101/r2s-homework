import React, { useCallback, useState } from "react";
import ComponentCon from "./ComponentCon";

const FormInput = () => {
  const [name, setName] = useState(null);
  const [text, setText] = useState("null");

  const handleShowName = (e) => {
    setName(e.target.value);
  };
  console.log("render");

  return (
    <>
      <label htmlFor="fullname">Tên</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        onChange={handleShowName}
      />
      <p>{name}</p>
      <label>Tuổi</label>
      <input type="number" />
      <label>Quốc gia</label>
      <select>
        <option>Việt Nam</option>
        <option>Mỹ</option>
        <option>Pháp</option>
        <option>Đức</option>
        <option>Anh</option>
        <option>Hàn Quốc</option>
        <option>Nhật Bản</option>
        <option>Canada</option>
      </select>
      <label>Đã có gia đình chưa?: </label>
      <input type="checkbox" />
      <label>Ngày sinh: </label>
      <input type="date" />
      <label>Giới tính</label>
      <input type="radio" />
      <label>Nam</label>
      <input type="radio" />
      <label>Nữ</label>
      <label>Ghi chú thêm</label>
      <textarea cols="30" rows="40" />
      <label>Ảnh chụp căn cước công dân: </label>
      <input type="file" />
      <input type="submit" value="Gửi" />
      <input type="reset" value="Đặt lại" />
      <ComponentCon text={text} />
    </>
  );
};

export default FormInput;
