import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="An image showing Adnan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I`m Adnan</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or Vue.
      </p>
    </section>
  );
}
