import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/prisma";

interface PageProps {
  searchParams?: Promise<{
    q?: string;
  }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const search = params?.q ?? "";

  const restaurants = await db.restaurant.findMany({
    where: search
      ? {
          name: {
            contains: search,
            mode: "insensitive",
          },
        }
      : undefined,
    orderBy: { name: "asc" },
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">
      <section className="max-w-7xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold">
            🍔 Bate e Volta Delivery
          </h1>
          <p className="text-muted-foreground text-lg">
            Escolha uma loja para começar seu pedido
          </p>
        </header>

        {/* Busca server-side */}
        <form method="GET" className="max-w-md mx-auto">
          <Input
            name="q"
            defaultValue={search}
            placeholder="Buscar loja pelo nome..."
            className="h-12 text-base"
          />
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              href={`/${restaurant.slug}`}
              className="group"
            >
              <Card className="overflow-hidden rounded-2xl hover:shadow-xl transition">
                <div className="relative h-40 w-full">
                  <Image
                    src="/mordidacerta.jpg"
                    alt={restaurant.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-5 space-y-2">
                  <h2 className="text-xl font-bold group-hover:text-orange-600 transition">
                    {restaurant.name}
                  </h2>

                  {restaurant.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {restaurant.description}
                    </p>
                  )}

                  <span className="inline-block pt-2 text-sm font-medium text-orange-600">
                    Ver cardápio →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}

          {restaurants.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">
              Nenhuma loja encontrada 😢
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
