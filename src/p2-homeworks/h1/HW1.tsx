import React from "react";
import Message from "./Message";

const messageData = {
  avatar:
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eTHoHEyBCjd-p5MA-pUIvItDoaKI7e-A5KsHZrC715mj_B3YtZPF2Cw26mpv2Xzijqk&usqp=CAU",
  name: "Lama",
  message: "hello",
  time: "22:00",
};

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr />
    </div>
  );
}

export default HW1;
