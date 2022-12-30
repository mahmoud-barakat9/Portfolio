import logolight from "../public/logobalck.png";
import Image from "next/image";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";
export const Footer = () => {
  return (
    // <div className={darkMode ? "dark" : ""}>
    <div className="px-4 pt-16 mx-auto md:px-24 lg:px-8 border-t dark:bg-gray-900">
      <div className="grid gap-10 row-gap-6 mb-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="lg:inline-flex lg:items-center md:flex md:justify-center sm:flex sm:justify-center"
          >
            <Image
              src={logolight}
              alt="logo"
              height={150}
              className="mx-auto items-center dark:opacity-25"
            />
          </Link>
        </div>
        <div className="space-y-2 text-sm text-center lg:text-start">
          <p className="text-base font-bold tracking-wide text-gray-900 dark:text-gray-200">
            Contacts
          </p>
          <div className="flex justify-center lg:justify-start">
            <p className="mr-1 text-gray-800 dark:text-gray-300">Phone: </p>
            <a
              href="/"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 dark:text-white"
            >
              +963934449199
            </a>
          </div>
          <div className="flex justify-center lg:justify-start">
            <p className="mr-1 text-gray-800 dark:text-gray-300">Email: </p>
            <a
              href="y.karzoun00@hotmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 dark:text-white"
            >
              y.karzoun00@hotmail.com
            </a>
          </div>
          <div className="flex justify-center lg:justify-start">
            <p className="mr-1 text-gray-800 dark:text-gray-300">Address: </p>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 dark:text-white"
            >
              Aleppo, Syria
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900 flex justify-center lg:justify-start dark:text-gray-200">
            Social
          </span>
          <div className="flex items-center mt-4 space-x-3 justify-center lg:justify-start">
            <Link
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 dark:text-gray-300"
            >
              <AiOutlineWhatsApp size={30} />
            </Link>
            <Link
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 dark:text-gray-300"
            >
              <AiFillFacebook size={30} />
            </Link>
            <Link
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 dark:text-gray-300"
            >
              <AiFillInstagram size={30} />
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500 mb-2 text-center lg:text-start dark:text-gray-200">
            visit my pages on social media.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600 text-center pt-2 dark:text-gray-200">
          developed by mahmoud using Next js
        </p>
      </div>
    </div>
    // </div>
  );
};
export default Footer;
