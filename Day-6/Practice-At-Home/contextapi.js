import React, { createContext, useContext } from 'react';
const ImageListContext = createContext([]);

const list = [
  {
    id: 1,
    name: 'pic1',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhG_cZjxXIlwfsjseD7-LMSMzWI7txguoSLjCbwM85&s',
  },
  {
    id: 2,
    name: 'pic2',
    imageUrl: 'https://www.example.com/image2.jpg',
  },
]

const ImageListProvider = ({ children }) => {
  return (
    <ImageListContext.Provider value={list}>
      {children}
    </ImageListContext.Provider>
  );
};
function Images() {
  const imageList = useContext(ImageListContext);

  return (
    <>
      <h1>The List of images</h1>
      <ul style={{ listStylePosition: "none" }}>
        {imageList.map((item) => (
          <li key={item.id} type="none">
            <h5>{item.id}</h5>
            <div style={{ width: 100, height: 100 }}>
              <img src={item.imageUrl} alt={item.id} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default function Hoc() {
  return (
    <ImageListProvider>
      <Images />
    </ImageListProvider>
  );
}