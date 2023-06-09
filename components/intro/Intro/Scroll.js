import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

const IntroScroll = () => {
  const scrollDown100vh = () => {
    const viewportHeight = window.innerHeight;
    const currentScrollPosition = window.pageYOffset;
    const targetScrollPosition = currentScrollPosition + viewportHeight;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"15px"}
    >
      <Heading
        fontWeight={"medium"}
        fontSize={"2xl"}
        letterSpacing={"0.1em"}
        color={"#FFFFFF"}
      >
        Scroll Down
      </Heading>
      <div className="imageContainer" onClick={scrollDown100vh}>
        <Image
          src="/images/scroll-arrow.png"
          alt="Scroll Arrow"
          width={133.5}
          height={50}
        />
      </div>
      <style jsx>{`
        .imageContainer {
          position: relative;
          display: inline-block;
          transition: filter 0.3s ease;
          cursor: pointer;
        }

        .imageContainer:hover {
          position: relative;
          filter: drop-shadow(0px 0px 10px #ffffff);
        }
      `}</style>
    </Flex>
  );
};

export default IntroScroll;
