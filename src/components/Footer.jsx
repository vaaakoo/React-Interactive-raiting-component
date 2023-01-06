// import StarIcon from "../images/icon-star.svg";

function Footer() {
  return (
    <div className="Footer">
      <footer className="footClass hidden sm:inline-block group fixed right-4 bottom-4 z-50 h-16 w-16 rounded-full  bg-contain shadow-x2">
        <div class="fixed right-24 bottom-6 z-50 w-52 rounded-lg bg-card-blue p-2 text-white opacity-95 shadow-xl transition-opacity duration-1000 group-hover:opacity-100 md:opacity-0">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io"
              class="font-bold text-yellow-200 transition-colors duration-2000  hover:text-cyan"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://www.frontendmentor.io/profile/vaaakoo"
              class="font-bold text-yellow-200 transition-colors duration-2000 hover:text-cyan"
            >
              ....@Vaaakoo....
            </a>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
