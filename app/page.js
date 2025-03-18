import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex bg-white">
      <h1>Collect customer feedback to build beter product</h1>
      <div>
        Create a feedback board in minutes, prioritize features, and
        build product your customer will love.
      </div>
      <Link href="/dashboard">Dashboard</Link >
    </main> 
  );
}
