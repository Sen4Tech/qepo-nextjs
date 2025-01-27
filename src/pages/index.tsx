import { ThemeProvider, useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { icons, Moon, Sun } from "lucide-react"

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const { setTheme } = useTheme();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-y-8">
        <h1 className="text-3xl text-primary">Hello World</h1>
        <Button>Click Me</Button>
        <Button onClick={ () => setTheme("dark")} size="icon" ><Moon/></Button>
        <Button onClick={ () => setTheme("light")} size="icon" ><Sun/></Button>
      </main>
    </>
  );
}
