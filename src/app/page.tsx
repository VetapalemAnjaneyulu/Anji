import Image from "next/image";
import Employee from './employee/create/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Simple and Demo-Project</h1>
      <h1>=======================</h1>
      <h1>Next.js curd operations by using next.js,tRPC,Prisma,Tailwind.css,postgresql,sql and Form Validations</h1>
      <Employee />
      
    </main>
  );
}
