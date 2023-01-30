import React, { useState } from "react";

const ChatInput = ({ sendMassage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMassage({ sender: "user", massage: value });
    setValue("");
  };

  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative'>
      {loading ? (
        <img src='./loader.gif' alt='' className="w-8 m-auto" />
      ) : (
        <>
          <textarea
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
            }}
            rows={1}
            className='border-0 bg-transparent outline-none w-11/12'
            value={value}
            type='text'
            onChange={(e) => setValue(e.target.value)}
          />

          <img
            onClick={handleSubmit}
            src='./send.png'
            alt='send button'
            width={20}
            className='absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125'
          />
        </>
      )}
    </div>
  );
};

export default ChatInput;
