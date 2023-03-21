import { Fragment } from "react";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Fragment>
      <div className={styles.aboutSection}>
        <h1 style={{ fontWeight: "bolder" }}>About Us Page</h1>
        <p>
          A band party is a fun and exciting event that brings people together
          to enjoy live music and entertainment. Whether it's a small gathering
          in someone's backyard or a large festival in a public space, a band
          party is a great way to socialize and unwind while enjoying the
          talents of musicians and performers.
        </p>
        <p>
          If you're planning a band party, it's important to consider the
          logistics of the event, such as finding a suitable venue, booking the
          bands, and ensuring that there is enough space and facilities for
          attendees. With proper planning and organization, a band party can be
          a memorable and enjoyable experience for everyone involved.
        </p>
      </div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bolder",
          margin: "2rem",
        }}
      >
        Our Team
      </h2>
      <div className={styles.front}>
        <img
          src="https://github.com/parinit25/hello/blob/main/WhatsApp%20Image%202023-03-03%20at%209.13.26%20PM%20(1).jpeg?raw=true"
          alt="Rahul Rajak"
          className={styles.aboutPageImage}
          loading="lazy"
        />
        <div className={styles.container}>
          <h2>Parinit Singh</h2>
          <p className={styles.title}>Guitarist</p>
          <p>Performer Of The Year</p>
          <p>parinit.singh06@gmail.com</p>
          <p>
            <button className={styles.button1}>Contact</button>
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.front}>
              <img
                src="https://raw.githubusercontent.com/pankaj1098/Photos/a4ca32bcdd7dabb6f85e176d8ccaa8e4d3e338f5/IMG_20220619_180015.jpg?token=A3Q3H4HWXDEESCT35BQW3S3EBNMXI"
                alt="Rahul Rajak"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>Pankaj Yadav</h2>
                <p className={styles.title}>Lead Singer</p>
                <p>Top International Singer</p>
                <p>pankajyadav.ce@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
            <div className={styles.back}>
              <img
                src="https://media.istockphoto.com/id/1072414484/photo/singer-singing-silhouette.jpg?s=612x612&w=0&k=20&c=gYzUsiWygP5GfFZDC_R0ZSjeUTYhR5600EJVH-bHlVY="
                alt="John"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>Pankaj Yadav</h2>
                <p className={styles.title}>Lead Singer</p>
                <p>Top International Singer</p>
                <p>pankajyadav.ce@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.front}>
              <img
                src="https://github.com/parinit25/hello/blob/main/RkRaj.jpg?raw=true"
                alt="Mike"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>Rahul Rajak</h2>
                <p className={styles.title}>Drummer</p>
                <p>International Drummer.</p>
                <p>rahulrajak525@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
            <div className={styles.back}>
              <img
                src="https://www.drumcenternh.com/media/amasty/blog/uploads/2018/12/image1-2-1024x683.png"
                alt="Mike"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>Rahul Rajak</h2>
                <p className={styles.title}>Drummer</p>
                <p>International Drummer.</p>
                <p>rahulrajak525@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.front}>
              <img
                src="https://github.com/parinit25/hello/blob/main/WhatsApp%20Image%202023-03-03%20at%209.41.59%20PM.jpeg?raw=true"
                alt="John"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>C.K. Sisodia</h2>
                <p className={styles.title}>Dancer</p>
                <p>World Class Dancer.</p>
                <p>cksisodia3@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
            <div className={styles.back}>
              <img
                src="https://bollywooddancers.files.wordpress.com/2009/05/733_ganesh_article.jpg?w=584"
                alt="John"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>C.K. Sisodia</h2>
                <p className={styles.title}>Dancer</p>
                <p>World Class Dancer.</p>
                <p>cksisodia3@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutPage;
