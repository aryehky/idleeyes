"use client"; // Mark this component as a Client Component

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <div className="logo">IDLEEYES</div>
        <nav>
          <ul>
            <li><Link href="#"><a>artwork</a></Link></li>
            <li><Link href="#"><a>the epic chronicles</a></Link></li>
            <li><Link href="#"><a>about</a></Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="about">
          <div className="about-text">
            <h1>About</h1>
            <p>Kayenat is an artist based in Seattle, Washington. Her work blends printmaking into layered acyclic paintings that explore how we construct identity.</p>
            <button>Contact ➤</button>
          </div>
          <div className="about-image">
            <Image className="hero-image" src="/media/ky.jpeg" alt="Ky" width={500} height={500} />
          </div>
        </section>
      </main>
      <style jsx>{`
        .logo {
          font-size: 24px;
          font-weight: bold;
        }
        nav ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        nav ul li {
          margin-right: 20px;
        }
        .about {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 50px;
        }
        .about-text {
          max-width: 600px;
        }
        .about-image .hero-image {
          max-width: 100%;
          height: auto;
        }
        button {
          background-color: #000;
          color: #fff;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
