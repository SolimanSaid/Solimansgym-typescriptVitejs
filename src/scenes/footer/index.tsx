import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo}
           />
          <p className="my-5">
          Du willst dich fit halten und gleichzeitig Muskeln aufbauen? Klettertraining ist die ideale Sportart für alle, die hoch hinaus wollen! Zum Bouldern und Klettern gehören auf jeden Fall Kraft- und Ausdauertraining. Check' hier, welche Muskeln du zu Hause & im Gym gezielt für deine nächste Kraxel-Route stärken solltest!

          
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Soliman said hassam 
          soliman.farag86@gmail.com</p>
          <p>01114491730 ohne vorwahl</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;