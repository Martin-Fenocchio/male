import Image from 'next/image'
import img from '../assets/povpounch.png'

function ComponentD() {
  return (
    <div>
        <h2>POV: sos male en un tranquilo ejercicio con martin</h2>
        <Image src={img} alt="povpounch" width={100} height={100} className="mt-10 mx-auto w-full"/>

        <div className="tenor-gif-embed" data-postid="27315085" data-share-method="host" data-aspect-ratio="1.78771" data-width="100%"><a href="https://tenor.com/view/willem-dafoe-looking-up-scared-among-us-gif-27315085">Willem Dafoe Looking Up GIF</a>from <a href="https://tenor.com/search/willem+dafoe-gifs">Willem Dafoe GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </div>
  )
}

export default ComponentD