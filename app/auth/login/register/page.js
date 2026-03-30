import Image from "next/image";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <div className="bg-white p-6 rounded shadow">
        <Image
          src="/user.png"
          width={80}
          height={80}
          alt="profile"
          className="rounded-full"
        />

        <p className="mt-4">Name: Prem Kumar</p>
        <p>Email: prem@email.com</p>
      </div>
    </div>
  );
}