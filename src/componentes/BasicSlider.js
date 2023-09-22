import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "../componentes/Wrapper";
import Title from "../componentes/Title";
import Subtitle from '../componentes/Subtitle';

const bogliasco = "https://www.questionpro.com/blog/wp-content/uploads/2023/04/Thumb-blog-BR-and-PT-42-750x420.png";
const countyClare = "https://content.news.ifood.com.br/uploads/2023/01/capa_aigenerative.jpg";
const craterRock = "data:image/jpeg;base64,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";
const giauPass = "https://www.otempo.com.br/image/contentid/policy:1.2878955:1687996461/inteligencia-artificial-png.png?f=3x2&w=1224";

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
          <Title>Criação de sites</Title>
          <Subtitle>
          Seu site é o seu cartão de visitas online, por isso ele deve refletir a sua identidade e os seus valores. Nós somos especialistas em criar sites personalizados, exclusivos e que se destacam da concorrência..
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="RJ - Brasil"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label="New york - United States"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="Londres - Inglaterra"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        label="Quênia - Africa"
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
