import Image from "next/image";
import { Person } from "@/types/Person";
import { LinkedIn } from "developer-icons";
import { Button } from "../ui/button";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg border border-border bg-surface p-1">
        <div className="relative h-[340px] w-full overflow-hidden rounded-lg">
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="280px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between px-4">
        <div className="">
          <h3 className="text-xl font-semibold tracking-tight text-fg">
            {person.name}
          </h3>

          {person.role && (
            <p className="mt-1 text-sm text-muted-fg">{person.role}</p>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          {person.linkedin !== "#" && (
            <Button variant="secondary" className="h-9 w-9 p-0" href={person.linkedin}>
              <LinkedIn className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
              