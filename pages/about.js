// this is going to be our /about page
import styles from "../styles/About.module.css"

export default function About () {
  return (
    <div>
      <h1>About</h1>

      <p className={styles.coolColor}> I am now a software engineer, makingcool stuff with code</p>

      <p>{`don't use apostrophes unless they are in backticks`}</p>
      <h2>I am a different color</h2>
      {/* styled jsx is great for conditional rendering! */}
      <style jsx>{`
      h2 {
        color: red;
      }
        `}</style>

        {/* two ways of rendering images: stored locally and a url */}
        <img
            src='/next.svg'
            alt="logo of my next fav framework"
        />    

        {/* getting imagefrom outside source */}
        <img
        src="https://place-kitten.com/300/600"
        alt="a magnificent creature"
        />
    </div>
  )
}