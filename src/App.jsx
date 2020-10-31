import { useState, useRef } from 'react';
import './App.css';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function App() {
  const topRef = useRef(null);
  const midRef = useRef(null);
  const botRef = useRef(null);
  // const pdfURL = "https://www.example.com/test.pdf"

  function executeScroll(pos) {
    if (pos === 0) scrollToRef(topRef);
    else if (pos === 1) scrollToRef(midRef);
    else if (pos === 2) scrollToRef(botRef);
  }

  return (
    <div className="App">
      <div className="navbar noselect">
        <div className="navbar-content">
          <div className="title">เครื่องหมายการค้า</div>
          <div className="links">
            <button onClick={() => executeScroll(0)}>แนะนำ</button>
            <button onClick={() => executeScroll(1)}>เนื้อหา</button>
            <button onClick={() => executeScroll(2)}>ผู้จัดทำ</button>
          </div>
        </div>
      </div>
      <div className="top" ref={topRef} on>
        <div className="top-content noselect">
          <h1 style={{ fontSize: "36px" }}>พระราชบัญญัติ</h1>
          <h1 style={{ fontSize: "70px" }}>เครื่องหมายการค้า พ.ศ.2534</h1>
          <h1>กฎหมายทรัพย์สินทางปัญญาไทย</h1>
          <button onClick={() => executeScroll(1)}>อ่าน&nbsp;&nbsp;→</button>
        </div>
      </div>
      <div className="mid" ref={midRef}>
        <div className="mid-content">
          {/* <h1 style={{ fontSize: "36px" }}>อ่าน</h1> */}
          {/* <iframe className="book" src={"https://drive.google.com/viewerng/viewer?url=" + pdfURL + "&embedded=true"} width="400px" height="300px" /> */}
          <iframe className="book" title="book" src="https://drive.google.com/file/d/1_RVHBlmiYi4yj0XdZRswYdyhaG_RFQ6m/preview" />
        </div>
      </div>
      <div className="bottom" ref={botRef}>
        <div className="bottom-content">
          <h1 style={{ fontSize: "38px", marginBottom: "1rem" }}>คณะผู้จัดทำ</h1>
          <div className="name">
            <div className="left">
              <li>61010193 ชนัสพงศ์ พรหมสินธุ์</li>
              <li>61010362 ณัฐสิทธิ์ สารกาญจน์</li>
              <li>61010416 ธนกฤต เจริญบูลย์วิวัฒน์</li>
              <li>61010479 ธมน เนตรวิเชียร</li>
              <li>61010497 ธัญธร พรสวัสดิ์ชัย</li>
            </div>
            <div className="divider" />
            <div className="right">
              <li>61010541 นพณัฐ พันลุตัน</li>
              <li>61010750 พิพิธพงศ์ จิตภักดิ์ไทย</li>
              <li>61010910 ฤทธิกร เชาว์ชนพันธ์</li>
              <li>61011215 อรุณ ด่านศักดิ์ชัย</li>
              <li>61011387 ธนภัทร ด่านพัฒนชัยกุล</li>
            </div>
          </div>
          <h1 style={{ fontSize: "38px", margin: "1rem 0" }}>อาจารย์ที่ปรึกษา</h1>
          <p style={{ fontSize: "24px", textShadow: "0 0 15px rgba(0, 0, 0, 0.5)" }}>ดร.ใยแก้ว ศีลรักษ์</p>
          <p style={{ fontSize: "18px", textShadow: "0 0 15px rgba(0, 0, 0, 0.5)", marginTop: "2rem" }}>
            รายวิชา ทรัพย์สินทางปัญญาไทย (90402013) สำนักวิชาศึกษาทั่วไป สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหาร ลาดกระบัง
          </p>
        </div>
        <button title="กลับไปด้านบน" onClick={() => executeScroll(0)}>↑</button>
      </div>
    </div>
  );
}

export default App;
