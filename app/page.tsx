import Image from "next/image";
import styles from './page.module.scss';
import { RouteSection } from "@/components/sections/RouteSection";
import { BingoSection } from "@/components/sections/BingoSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Плотинка лесная отборная со вкусом подземного ручейка</h1>
            <p className={styles.hero__text}>Заводская плотина в Екатеринбурге была построена в 1723 году
              из уральской лиственницы, которая не гниет в воде, а со временем лишь каменеет
              и становится крепче. В создании плотинки принял деятельное участие
              российский военный инженер В. И. де Геннин.</p>
            <p className={styles.hero__text}>С этого места началось всё строительство города.
              Одновременно стали возводить крепость, защищающую будущий завод от набегов
              башкир, на чьих землях он и строился.</p>
          </div>
          <div className={styles.hero__image}>
            <Image
              src="images/main-image.webp"
              alt="Основная картинка"
              width={600}
              height={400}
              className={styles.hero__img}
              priority
            />
          </div>
        </div>
      </section>
      <section className={styles.whatsNext} id="whats-next">
        <div className={styles.whatsNext__container}>
          <h2 className={styles.whatsNext__title}>Что ждёт за плотинкой</h2>
          <div className={styles.whatsNext__imageWrapper}>
            <Image
              src="images/whats-next-image.webp"
              alt="Картинка что ждем за плотинкой?"
              width={600}
              height={400}
              className={styles.whatsNext__image}
              priority
            />
          </div>
          <p className={styles.whatsNext__description}>Межгалактические порты и бесконечные просторы вселенной</p>
        </div>
      </section>
      <RouteSection />
      <BingoSection />
      <FaqSection />
    </>
  );
}