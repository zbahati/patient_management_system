import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="container remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px] ">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Patient"
            width={1000}
            height={1000}
            className="mb-5 h-8 w-fit"
          />
          <PatientForm />
          <div className="flex justify-between text-14-regular mt-4">
            <p className="justify-items-end text-dark-600 xl:text-left"> &copy;CarePulse copyright</p>
            <Link href="/?admin=true" className="text-green-500">Admin</Link>
          </div>
        </div>
      </section>
      <Image
      src="/assets/images/onboarding-img.png"
      width={1000}
      height={1000}
      alt="patient"
      className="side-img max-w-[50%]"
      />
    </div>
  );
}
