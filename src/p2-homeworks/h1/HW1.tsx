import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import AlternativeMessageFriend from "./AlternativeMessageFriend";

const messageData = {
  avatar:
    " https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eTHoHEyBCjd-p5MA-pUIvItDoaKI7e-A5KsHZrC715mj_B3YtZPF2Cw26mpv2Xzijqk&usqp=CAU",
  name: "Some Name",
  message: "some text",
  time: "22:00",
};

const messageDataSecondPerson = {
  avatar:
    " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eTHoHEyBCjd-p5MA-pUIvItDoaKI7e-A5KsHZrC715mj_B3YtZPF2Cw26mpv2Xzijqk&usqp=CAU",
  name: "Lama Mila",
  message: "hello, how are you?",
  time: "22:00",
};

const messageDataFriend = {
  avatar:
    "https://i.pinimg.com/originals/14/63/d8/1463d8d75b82c06f8c602a86c3a7e8c3.jpg",
  name: "Lama Lima",
  message: "hi! I`m fine, and u?",
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
      <hr />
      <AlternativeMessage
        avatar={messageDataSecondPerson.avatar}
        name={messageDataSecondPerson.name}
        message={messageDataSecondPerson.message}
        time={messageDataSecondPerson.time}
      />
      <AlternativeMessageFriend
        avatar={messageDataFriend.avatar}
        name={messageDataFriend.name}
        message={messageDataFriend.message}
        time={messageDataFriend.time}
      />
      <hr />
    </div>
  );
}

export default HW1;
