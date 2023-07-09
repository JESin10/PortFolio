import tw from "tailwind-styled-components";

export default function Header() {
  return (
    <>
      <TitleTab>Header</TitleTab>
    </>
  );
}

const TitleTab = tw.div`
w-full h-TabH bg-Main font-bold text-white text-3xl
text-center `;
