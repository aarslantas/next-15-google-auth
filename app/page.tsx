import { socialLogout } from "@/actions";
import Image from "next/image";

export default async function Home() {
  const baseUrl = "http://localhost:3001";

  // API'den kullanıcı verilerini al
  const res = await fetch(`${baseUrl}/api/users`);
  const users = await res.json(); // JSON formatına dönüştür

  console.log("users123", users);

  return (
    <div>
      <h1>Anasayfa</h1>

      {/* Kullanıcı verilerini listele */}
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <p>Ad: {user.name}</p>
            <p>Email: {user.email}</p>
            <Image src={user.image} alt={user.name} width={80} height={80} />
          </li>
        ))}
      </ul>

      {/* Çıkış butonu */}
      <form action={socialLogout}>
        <button type="submit" name="logout">
          Logout
        </button>
      </form>
    </div>
  );
}
