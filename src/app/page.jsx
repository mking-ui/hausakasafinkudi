import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function Welcome() {
  return (
    <>
    <Navbar/>
      <header className="parallax-header">
        <div className="container ">
          <div
            className="header-content"
            data-aos="zoom-out"
            data-aos-delay="400"
          >
            <Link href="/">
              <Image
                src="/imgs/logo1.png"
                alt=""
                width="200"
                height="150"
                className=" d-block mx-auto"
              />
            </Link>
          </div>
        </div>
      </header>
      <div className="container p-4">
        <div className="content card row  text-lg-center">
          <div
            className="col-12 left p-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="text-center fst-italic mb-0">A</h4>
            <h1 className="primary-color text-center">
            Budget Planning and Expense Tracking Application for 	Hausa-Speaking 	Community in Nigeria <hr className="mt-0 mb-0" />
            </h1>
            
            <div className="d-flex justify-content-center mt-4">
            
              <Link href="/dashboard" className="btn btn-get rounded-2 dashboard1 me-2">
                Get Started
              </Link>
              <Link
                href="/about"
                className="btn-login text-center animate__animated animate__fadeInUp text-dark p-2 "
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
