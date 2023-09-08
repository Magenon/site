import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://www.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-600w-1500154991.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>EKO Gestão</Title>
          <Subtitle>
            Cuidado com o meio ambiente é o objetivo central da nossa organização.
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
